import prisma from "../prisma/index.js";
import { getASingleUserService } from "./user.service.js";
// @description  Create a User's channel Service
const createChannelService = async (
  name,
  slug,
  image,
  description,
  userid,
  workspaceID
) => {
  // find the user that created the channel
  const userExist = await getASingleUserService(userid);
  if (!userExist) {
    res.status(401);
    throw new Error("You do not have a record with us");
  }
  // create the user channel
  const channel = await prisma.channel.create({
    data: {
      name,
      image,
      description,
      slug,
      workspace: workspaceID,
    },
  });

  // creating the channelUser
  await prisma.channelUser.create({
    data: { userid, role: "admin", channelid: channel.id },
  });
  return channel;
};

// @description  Get all User's channel Service
const getAllUserChannelService = async (userid) => {
  let channel = await prisma.channelUser.findMany({
    where: { userid },
    include: {
      channel: {
        select: { name: true, id: true, image: true },
      },
    },
  });
  return channel;
};

// @description  DELETE a User's channel Service
const deleteChannelService = async (channelUserId, channelid, userid) => {
  const isAdmin = await prisma.channelUser.findFirst({
    where: { channelid, userid, role: "admin" },
  });

  if (!isAdmin)
    throw new Error(
      "Forbidden: You are not authorized to delete this Channels."
    );
  await prisma.channelUser.delete({ where: { id: channelUserId } });
  const deletedChannel = await prisma.channel.delete({
    where: { id: channelid },
  });
  return deletedChannel;
};

// @description  Get all User's channel Service
const getASingleChannelService = async (name, slug) => {
  let channel = await prisma.channel.findUnique({
    where: { slug, name },
  });
  return channel;
};

// @description  Get all User's channel Service
const getChannelUserService = async (userid, channelid) => {
  let isAdmin = await prisma.channelUser.findUnique({
    where: { userid, channelid, role: "admin" },
  });
  return isAdmin;
};

// @description  Update a Single User's channel Service
const updateChannelService = async (userid, channelid, role, body) => {
  let updatedChannel = await prisma.channelUser.update({
    where: { userid, channelid, role, body },
  });
  return updatedChannel;
};

export {
  createChannelService,
  updateChannelService,
  getAllUserChannelService,
  deleteChannelService,
  getASingleChannelService,
  getChannelUserService,
};