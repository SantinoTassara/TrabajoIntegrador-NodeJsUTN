import express from "express";
import { createChat, viewChatsByUserId } from "../controllers/chatController.js";
import { validateChat } from "../middlewares/validator.middleware.js";

const router = express.Router();

router.post("/", validateChat, createChat);
router.get("/:userId", viewChatsByUserId);


export default router;
