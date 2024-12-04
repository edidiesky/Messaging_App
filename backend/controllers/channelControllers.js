import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
// import { publishChannel } from "../services/ChannelServices.js";
// @description  Create a User's Channel
// @route  POST /Channel/:conversationid
// @access  Private
const createChannel = asyncHandler(async (req, res) => {
  // get the body Channel
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
      "You are not authorized to send Channels in this conversation."
    );
  }
  // created the user Channel
  const Channel = await prisma.Channel.create({
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
      lastChannel: body,
      lastChannelAt: new Date(),
    },
  });
  await publishChannel({
    conversationId,
    ...Channel,
  });
  res.status(200).json(Channel);
});
  
// @description  GET All User's Channel
// @route  GET /Channel/:conversationid
// @access  Private
const getAllChannelofAConversation = asyncHandler(async (req, res) => {
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
    throw new Error("You are not authorized to view this Channel");
  }
  let Channels = await prisma.Channel.findMany({
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
  res.status(200).json({ Channel: Channels });
});

// @description  DELETE a Single User's Channel
// @route  DELETE /Channel/:conversationid/:id
// @access  Private
const DeleteChannel = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const { conversationid: conversationId, id: ChannelId } = req.params;
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
      "You are not authorized to delete Channels in this conversation."
    );
  }
  // deleting th emssage

  const deletedChannel = await prisma.Channel.delete({
    where: {
      conversationId: conversationId,
      senderId: tokenUserId,
      id: ChannelId,
    },
  });
  if (deletedChannel.count === 0) {
    res.status(403);
    throw new Error("Channel was not found, unauthorized action");
  }
  res.status(200).json({ Channel: "Channel has been  deleted succesfully" });
});
// @description  Update a Single User's Channel
// @route  PUT /Channel/:conversationid/:id
// @access  Private
const UpdateChannel = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const { conversationid: conversationId, id: ChannelId } = req.params;

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
      "You are not authorized to send Channels in this conversation."
    );
  }
  const newChannel = await prisma.Channel.update({
    where: {
      conversationId: conversationId,
      senderId: tokenUserId,
      id: ChannelId,
    },
    data: {
      ...req.body,
    },
  });
  if (newChannel.count === 0) {
    res.status(403);
    throw new Error("Channel was not found, unauthorized action");
  }
  res.status(200).json({ Channel: newChannel });
});

export {
  createChannel,
  DeleteChannel,
  getAllChannelofAConversation,
  UpdateChannel,
};
