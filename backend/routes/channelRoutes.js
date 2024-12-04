import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authentication.js";
import {
  createWorkSpace,
  DeleteWorkSpace,
  getAllUserWorkSpace,
  UpdateWorkSpace,
} from "../controllers/channelControllers.js";
import checkRole from "../middleware/checkRole.js";
import {
  createChannelSchema,
  updateChannelSchema,
} from "../validations/channel.validation.js";
import { validate } from "../middleware/validation.js";

router
  .route("/")
  .post(authMiddleware, validate(createChannelSchema), createWorkSpace)
  .get(authMiddleware, getAllUserWorkSpace);
router
  .route("/:id/:workspaceuserid")
  .delete(authMiddleware, checkRole("admin"), DeleteWorkSpace)
  .put(
    authMiddleware,
    checkRole("admin"),
    validate(updateChannelSchema),
    UpdateWorkSpace
  );

export default router;
