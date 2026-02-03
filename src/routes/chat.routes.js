import express from "express";
import { createChat, viewChatsByUserId } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", viewChatsByUserId);


export default router;
