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
    throw new Error("You are not authorized to view this message");
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

  publishMessage({
    ...message,
    createdAt: Date.now(),
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
  res.status(200).json({ messages });
});

// GET All Message
//  Public
const DeleteMessage = asyncHandler(async (req, res) => {});

const UpdateMessage = asyncHandler(async (req, res) => {});

export {
  createMessage,
  DeleteMessage,
  getAllMessageofAConversation,
  UpdateMessage,
};
