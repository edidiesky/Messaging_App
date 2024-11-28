import asyncHandler from "express-async-handler";
import prisma from "../prisma/index.js";
// POST
// Create prisma.
//  Public
const createConversation = asyncHandler(async (req, res) => {
  const { userId, isGroup, users, name, description, image } = req.body;
  // get the token id
  const tokenUserId = req.user?.userId;
  let conversation;
  // create a group conversation
  if (isGroup) {
    if (users?.length < 2) {
      throw new Error("Users in a group should be more than 2");
    }
    const userIds = [tokenUserId, ...users];
    conversation = await prisma.conversations.create({
      data: { isGroup: true, name, description, image, userIds },
    });
    res.status(200).json({ conversation });
  } else {
    conversation = await prisma.conversations.findFirst({
      where: { userIds: { hasEvery: [tokenUserId, userId] } },
    });
    if (!conversation) {
      conversation = await prisma.conversations.create({
        data: {
          userIds: [tokenUserId, userId],
        },
      });
    }

    res.status(200).json({ conversation });
  }
});

// GET Review of the user conversation
//  Public
// send the conversation Id only
const getSingleUserConversation = asyncHandler(async (req, res) => {
  const tokenUserId = req.user?.userId;
  const conversation = await prisma.conversations.findUnique({
    where: {
      id: req.params.id,
      userIDs: {
        hasSome: [tokenUserId],
      },
    },
    include: {
      messages: {
        include: {
          receiver: {
            select: {
              name: true,
              id: true,
              username: true,
              image: true,
            },
          },
          sender: {
            select: {
              name: true,
              id: true,
              username: true,
              image: true,
            },
          },
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  // update the read parameter
  await prisma.conversations.update({
    where: {
      id: req.params.id,
    },
    data: {
      seenBy: {
        push: [tokenUserId],
      },
    },
  });

  res.status(200).json({ conversation });
});

const getAllUserConversation = asyncHandler(async (req, res) => {
  // get the conversation id from the req params
  const tokenUserId = req.user?.userId;
  const conversation = await prisma.conversations.findMany({
    where: {
      userIds: {
        hasSome: [tokenUserId],
      },
    },
  });
  // loop to set the receiver in the conversation object
  for (let singleconversation of conversation) {
    // get the receiverid
    const receiverid = singleconversation.userIds.find(
      (id) => id != tokenUserId
    );
    // find the user (receiver)
    const receiver = await prisma.user.findUnique({
      where: {
        id: receiverid,
      },
      select: {
        id: true,
        name: true,
        image: true,
        username: true,
      },
    });
    singleconversation.receiver = receiver;
  }
  res.status(200).json({ conversation });
});

//  Public
const DeleteConversation = asyncHandler(async (req, res) => {
  // get the request body
  const tokenUserId = req.user?.userId;
  const conversationId = req.params?.id;
  // Validate the conversation ID
  if (!conversationId) {
    return res.status(400).json({ message: "Conversation ID is required" });
  }
  // check if the conversation exists and the user also exists
  let conversation = await prisma.conversations.findFirst({
    where: { id: conversationId, userIds: { hasSome: [tokenUserId] } },
  });
  if (!conversation) {
    throw new Error("Conversation not found or unauthorized access");
  }
  await prisma.conversations.delete({
    where: { id: conversationId },
  });
  res.status(200).json({ message: "Conversation had been deleted" });
});

export {
  getAllUserConversation,
  createConversation,
  getSingleUserConversation,
  DeleteConversation,
};
