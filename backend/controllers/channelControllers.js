import asyncHandler from "express-async-handler";
import {
  createChannelService,
  updateChannelService,
  getAllUserChannelService,
  deleteChannelService,
  getASingleChannelService,
  getChannelUserService,
} from "../services/channel.service.js";
import {
  BAD_REQUEST_STATUS_CODE,
  SUCCESSFULLY_CREATED_STATUS_CODE,
  UNAUTHORIZED_STATUS_CODE,
} from "../constants.js";

// @description  Create a workspace channel Contr
// @route  POST /channel
// @access  Private
const createChannelHandler = asyncHandler(async (req, res) => {
  // get the body data
  const { name, slug, image, description } = req.body;
  const tokenUserID = req.user?.userId;
  const workspaceID = req.params?.id;
  // finding existing channel
  const existingChannel = await getASingleChannelService(name, slug);
  if (existingChannel) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("A channel with this slug already exists");
  }
  // create the user channel
  const channel = await createChannelService(
    name,
    slug,
    image,
    description,
    tokenUserID,
    workspaceID
  );

  res.status(201).json(channel);
});

// @description  GET All User's channel
// @route  GET /channel
// @access  Private
const getAllUserChannelHandler = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;

  let workSpaces = await getAllUserChannelService(tokenUserId);
  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(workSpaces);
});

// @description  DELETE a User's channel
// @route  DELETE /channel/:workspaceid
// @access  Private
const DeleteChannelHandler = asyncHandler(async (req, res) => {
  const userid = req.user?.userId;
  const { workspaceuserid: workspaceuserid, id: workspaceid } = req.params;
  if (!workspaceuserid || !workspaceid) {
    res.status(BAD_REQUEST_STATUS_CODE);
    throw new Error("Workspace ID and WorkspaceUser ID are needed");
  }
  // checking if the user has a role of admin in the channel
  let deletedChannel = await deleteChannelService(
    workspaceuserid,
    workspaceid,
    userid
  );
  if (!deletedChannel) {
    res.status(UNAUTHORIZED_STATUS_CODE);
    throw new Error("channel was not found, unauthorized action");
  }
  res
    .status(SUCCESSFULLY_CREATED_STATUS_CODE)
    .json({ channel: "channel has been deleted succesfully" });
});

// @description  Update a Single User's channel
// @route  PUT /channel/:id
// @access  Private
const UpdateChannelHandler = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const workspaceid = req.params?.id;
  const isAdmin = await getChannelUserService(tokenUserId);
  if (!isAdmin) {
    res.status(UNAUTHORIZED_STATUS_CODE);
    throw new Error("Forbidden: Role is only for Admins");
  }
  const updatedChannel = await updateChannelService(
    tokenUserId,
    workspaceid,
    ...req.body
  );
  res.status(SUCCESSFULLY_CREATED_STATUS_CODE).json(updatedChannel);
});

export {
  createChannelHandler,
  DeleteChannelHandler,
  getAllUserChannelHandler,
  UpdateChannelHandler,
};
