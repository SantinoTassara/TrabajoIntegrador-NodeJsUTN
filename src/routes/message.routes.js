import express from "express";
import { createMessage, viewMessagesByChatId } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", viewMessagesByChatId);

export default router;