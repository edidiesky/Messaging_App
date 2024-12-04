import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
// @description  Create a User's WorkSpace
// @route  POST /workspace
// @access  Private
const createWorkSpace = asyncHandler(async (req, res) => {
  // get the body data
  const { name, slug, image, description } = req.body;
  const tokenUserID = req.user?.userId;
  if (!name || !slug) {
    res.status(400);
    throw new Error("Name and slug are required to create a workspace.");
  }
  // finding existing workspace
  const exisitingworkSpace = await prisma.workSpace.findUnique({
    data: { name, slug },
  });
  if (exisitingworkSpace) {
    res.status(400);
    throw new Error("A workspace with this slug already exists");
  }
  // create the user WorkSpace
  const workSpace = await prisma.workSpace.create({
    data: { name, slug, image, description },
  });
  // find the user that created the workspace
  const userExist = await prisma.user.findUnique({
    where: { id: tokenUserID },
  });
  if (!userExist) {
    res.status(401);
    throw new Error("You do not have a record with us");
  }
  // create the workspaceUser
  await prisma.workSpaceUser.create({
    data: { userid: tokenUserID, role: "admin", workspaceid: workSpace.id },
  });
  res.status(201).json(workSpace);
});

// @description  GET All User's WorkSpace
// @route  GET /workspace
// @access  Private
const getAllUserWorkSpace = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;

  let workSpaces = await prisma.workSpaceUser.findMany({
    where: { userid: tokenUserId },
    include: {
      workspace: {
        select: { name: true, id: true, image: true, slug: true },
      },
    },
  });
  res.status(200).json({ workSpaces });
});

// @description  DELETE a User's WorkSpace
// @route  DELETE /WorkSpace/:workspaceid
// @access  Private
const DeleteWorkSpace = asyncHandler(async (req, res) => {
  const userid = req.user?.userId;
  const { workspaceuserid: workspaceuserid, id: workspaceid } = req.params;
  if (!workspaceuserid || !workspaceid) {
    res.status(400);
    throw new Error("Workspace ID and WorkspaceUser ID are needed");
  }
  // checking if the user has a role of admin in the workspace
  const isUserAdmin = await prisma.workSpaceUser.findUnique({
    where: {
      id: workspaceuserid,
      workspaceid,
      userid,
      role: "admin",
    },
  });

  if (!isUserAdmin) {
    res.status(403); // forbidden since the user does not have a role of admin
    throw new Error("You are not authorized to delete this WorkSpaces.");
  }
  // deleting the workspace

  await prisma.workSpaceUser.delete({ where: { id: workspaceuserid } });
  const deletedWorkSpace = await prisma.workSpace.delete({
    where: { id: workspaceid },
  });
  if (!deletedWorkSpace) {
    res.status(403);
    throw new Error("WorkSpace was not found, unauthorized action");
  }
  res.status(200).json({ WorkSpace: "WorkSpace has been deleted succesfully" });
});

// @description  Update a Single User's WorkSpace
// @route  PUT /WorkSpace/:conversationid/:id
// @access  Private
const UpdateWorkSpace = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const { conversationid: conversationId, id: WorkSpaceId } = req.params;

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
      "You are not authorized to send WorkSpaces in this conversation."
    );
  }
  const newWorkSpace = await prisma.WorkSpace.update({
    where: {
      conversationId: conversationId,
      senderId: tokenUserId,
      id: WorkSpaceId,
    },
    data: {
      ...req.body,
    },
  });
  if (newWorkSpace.count === 0) {
    res.status(403);
    throw new Error("WorkSpace was not found, unauthorized action");
  }
  res.status(200).json({ WorkSpace: newWorkSpace });
});

export {
  createWorkSpace,
  DeleteWorkSpace,
  getAllUserWorkSpace,
  UpdateWorkSpace,
};
