import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authentication.js";
import {
  createWorkSpace,
  DeleteWorkSpace,
  getAllUserWorkSpace,
  UpdateWorkSpace,
} from "../controllers/workspaceControllers.js";
import checkRole from "../middleware/checkRole.js";

router
  .route("/")
  .post(authMiddleware, createWorkSpace)
  .get(authMiddleware, getAllUserWorkSpace);
router
  .route("/:id/:workspaceuserid")
  .delete(authMiddleware, DeleteWorkSpace)
  .put(authMiddleware, checkRole("admin"), UpdateWorkSpace);

export default router;
