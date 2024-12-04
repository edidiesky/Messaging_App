import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authentication.js";
import {
  createWorkSpace,
  DeleteWorkSpace,
  getAllUserWorkSpace,
  UpdateWorkSpace,
} from "../controllers/workspaceControllers.js";

router
  .route("/")
  .post(authMiddleware, createWorkSpace)
  .get(authMiddleware, getAllUserWorkSpace);
router
  .route("/:id/:workspaceuserid")
  .delete(authMiddleware, DeleteWorkSpace)
  .put(authMiddleware, UpdateWorkSpace);

export default router;
