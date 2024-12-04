import prisma from "../prisma/index.js";
import { getASingleUserService } from "./user.services.js";
// @description  Create a User's WorkSpace Service
const createWorkSpaceService = async (
  name,
  slug,
  image,
  description,
  userid
) => {
  // find the user that created the workspace
  const userExist = await getASingleUserService(userid);
  if (!userExist) {
    res.status(401);
    throw new Error("You do not have a record with us");
  }
  // create the user WorkSpace
  const workSpace = await prisma.workSpace.create({
    data: { name, slug, image, description },
  });

  // creating the workspaceUser
  await prisma.workSpaceUser.create({
    data: { userid, role: "admin", workspaceid: workSpace.id },
  });
  return workSpace;
};

// @description  Get all User's WorkSpace Service
const getAllUserWorkSpaceService = async (userid) => {
  let workSpace = await prisma.workSpaceUser.findMany({
    where: { userid },
    include: {
      workspace: {
        select: { name: true, id: true, image: true, slug: true },
      },
    },
  });
  return workSpace;
};

// @description  DELETE a User's WorkSpace Service
const deleteWorkSpaceService = async (workspaceuserid, workspaceid, userid) => {
  const isAdmin = await prisma.workSpaceUser.findFirst({
    where: { workspaceid, userid, role: "admin" },
  });

  if (!isAdmin)
    throw new Error(
      "Forbidden: You are not authorized to delete this WorkSpaces."
    );
  await prisma.workSpaceUser.delete({ where: { id: workspaceuserid } });
  const deletedWorkSpace = await prisma.workSpace.delete({
    where: { id: workspaceid },
  });
  return deletedWorkSpace;
};

// @description  Get all User's WorkSpace Service
const getASingleWorkSpaceService = async (name, slug) => {
  let workSpace = await prisma.workSpace.findUnique({
    where: { name, slug },
  });
  return workSpace;
};

// @description  Get all User's WorkSpace Service
const getWorkSpaceUserService = async (userid, workspaceid) => {
  let isAdmin = await prisma.workSpaceUser.findUnique({
    where: { userid, workspaceid, role: "admin" },
  });
  return isAdmin;
};
// @description  Update a Single User's WorkSpace Service
const updateWorkSpaceService = async (userid, workspaceid, role) => {
  let updatedWorkspace = await prisma.workSpaceUser.update({
    where: { userid, workspaceid, role },
  });
  return updatedWorkspace;
};

export {
  createWorkSpaceService,
  updateWorkSpaceService,
  getAllUserWorkSpaceService,
  deleteWorkSpaceService,
  getASingleWorkSpaceService,
  getWorkSpaceUserService,
};
