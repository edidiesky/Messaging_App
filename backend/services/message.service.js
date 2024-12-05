import prisma from "../prisma/index.js";
// @description  Create a User's message Service
const createMessageService = async (body, image, userid, channelid) => {
  // create the user message
  return await prisma.message.create({
    data: { body, image, userid, channelid },
  });
};

// @description  Get all User's message Service
const getChannelMessageService = async (channelid) => {
  // fetched the messages that had no threads
  let message = await prisma.message.findMany({
    where: { channelid, parentid: null },
    include: {
      user: {
        select: { name: true, id: true, image: true },
      },
    },
  });
  return message;
};
// @description  DELETE a User's message Service
const getASingleMessageThreadService = async (channelid, id) => {
  // fetched the messages that had no threads
  let message = await prisma.message.findUnique({
    where: { channelid, id },
    include: {
      replies: {
        select: {
          body: true,
          id: true,
          image: true,
          user: {
            select: { name: true, image: true, id: true },
          },
        },
      },
    },
  });
  return message;
};

// @description  DELETE a User's message Service
const deleteMessageService = async (channelid, id, userid) => {
  const isOwner = await prisma.message.findFirst({
    where: { channelid, userid, id },
  });

  if (!isOwner)
    throw new Error("You are not authorized to delete this message.");
  const deletedChannel = await prisma.message.delete({
    where: { channelid, id, userid },
  });
  return deletedChannel;
};

// @description  Update a Single User's message Service
const updateMessageService = async (userid, channelid, id, body) => {
  const isOwner = await prisma.message.findFirst({
    where: { channelid, userid, id },
  });

  if (!isOwner)
    throw new Error("You are not authorized to update this message.");

  let updatedChannel = await prisma.message.update({
    where: { userid, channelid, id },
    data: {
      body,
    },
  });
  return updatedChannel;
};

export {
  createMessageService,
  updateMessageService,
  getChannelMessageService,
  deleteMessageService,
  getASingleMessageThreadService,
};
