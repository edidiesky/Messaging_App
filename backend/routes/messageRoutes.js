import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authentication.js";
import {
  createMessage,
  DeleteMessage,
  getAllMessageofAConversation,
  UpdateMessage,
} from "../controllers/messageControllers.js";

router
  .route("/:id")
  .post(authMiddleware, createMessage)
  .get(authMiddleware, getAllMessageofAConversation);
router
  .route("/:id/:conversationid")
  .delete(authMiddleware, DeleteMessage)
  .put(authMiddleware, UpdateMessage);

export default router;
