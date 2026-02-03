import express from "express";
import { createMessage, viewMessagesByChatId } from "../controllers/messageController.js";
import { validateMessage } from "../middlewares/validator.middleware.js";

const router = express.Router();

router.post("/", validateMessage, createMessage);
router.get("/:chatId", viewMessagesByChatId);

export default router;  