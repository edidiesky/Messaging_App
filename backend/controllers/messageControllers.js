import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
import { publishMessage } from "../services/messageServices.js";
// @description  Create a User's message
// @route  POST /message/:conversationid
// @access  Private
const createMessage = asyncHandler(async (req, res) => {
  // get the body message
  const conversationId = req.params.id;
  const { body, image, receiverId } = req.body;
  // console.log(conversationId)
  const senderid = req.user?.userId;
  const conversation = await prisma.conversations.findFirst({
    where: {
      id: conversationId,
      userIds: {
        hasSome: [senderid],
      },
    },
  });
  if (!conversation) {
    res.status(404);
    throw new Error(
      "You are not authorized to send messages in this conversation."
    );
  }
  // created the user message
  const message = await prisma.message.create({
    data: {
      body,
      conversationId,
      senderId: senderid,
      image,
      receiverId: receiverId,
    },
  });
  // updated the conversation
  await prisma.conversations.update({
    where: {
      id: conversationId,
    },
    data: {
      seenBy: [senderid],
      lastMessage: body,
      lastMessageAt: new Date(),
    },
  });
  await publishMessage({
    ...message,
    conversationId,
  });
  res.status(200).json(message);
});
  
// @description  GET All User's message
// @route  GET /message/:conversationid
// @access  Private
const getAllMessageofAConversation = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const conversationId = req.params.id;
  const conversation = await prisma.conversations.findUnique({
    where: {
      id: conversationId,
      userIds: {
        hasSome: [tokenUserId],
      },
    },
  });
  if (!conversation) {
    res.status(404);
    throw new Error("You are not authorized to view this message");
  }
  let messages = await prisma.message.findMany({
    where: {
      conversationId: conversationId,
    },
    include: {
      sender: {
        select: {
          name: true,
          id: true,
          image: true,
        },
      },
    },
  });
  res.status(200).json({ message: messages });
});

// @description  DELETE a Single User's message
// @route  DELETE /message/:conversationid/:id
// @access  Private
const DeleteMessage = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const { conversationid: conversationId, id: messageId } = req.params;
  // checking if the user is part of the conversation
  const conversation = await prisma.conversations.findUnique({
    where: {
      id: conversationId,
      userIds: {
        hasSome: [tokenUserId],
      },
    },
  });

  if (!conversation) {
    res.status(403); // forbidden since the user is not part of the chat conversation
    throw new Error(
      "You are not authorized to delete messages in this conversation."
    );
  }
  // deleting th emssage

  const deletedMessage = await prisma.message.delete({
    where: {
      conversationId: conversationId,
      senderId: tokenUserId,
      id: messageId,
    },
  });
  if (deletedMessage.count === 0) {
    res.status(403);
    throw new Error("Message was not found, unauthorized action");
  }
  res.status(200).json({ message: "Message has been  deleted succesfully" });
});
// @description  Update a Single User's message
// @route  PUT /message/:conversationid
// @access  Private
const UpdateMessage = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const { conversationid: conversationId, id: messageId } = req.params;

  const conversation = await prisma.conversations.findUnique({
    where: {
      id: conversationId,
      userIds: {
        hasSome: [tokenUserId],
      },
    },
  });
  if (!conversation) {
    res.status(403); // forbidden since the user is not part of the chat conversation
    throw new Error(
      "You are not authorized to send messages in this conversation."
    );
  }
  const newMessage = await prisma.message.update({
    where: {
      conversationId: conversationId,
      senderId: tokenUserId,
      id: messageId,
    },
    data: {
      ...req.body,
    },
  });
  if (newMessage.count === 0) {
    res.status(403);
    throw new Error("Message was not found, unauthorized action");
  }
  res.status(200).json({ message: newMessage });
});

export {
  createMessage,
  DeleteMessage,
  getAllMessageofAConversation,
  UpdateMessage,
};
