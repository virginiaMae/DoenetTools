import express from "express";
import { queryOptionalLoggedIn } from "../middleware/queryMiddleware";
import {
  getActivityEditorData,
  getActivityViewerData,
  getSharedEditorData,
} from "../query/activity_edit_view";
import { contentIdSchema } from "../schemas/contentSchema";
import { getContentSource } from "../query/activity";

export const activityEditViewRouter = express.Router();

activityEditViewRouter.get(
  "/getActivityEditorData/:contentId",
  queryOptionalLoggedIn(getActivityEditorData, contentIdSchema),
);

activityEditViewRouter.get(
  "/getSharedEditorData/:contentId",
  queryOptionalLoggedIn(getSharedEditorData, contentIdSchema),
);

activityEditViewRouter.get(
  "/getActivityViewerData/:contentId",
  queryOptionalLoggedIn(getActivityViewerData, contentIdSchema),
);

activityEditViewRouter.get(
  "/getContentSource/:contentId",
  queryOptionalLoggedIn(getContentSource, contentIdSchema),
);
