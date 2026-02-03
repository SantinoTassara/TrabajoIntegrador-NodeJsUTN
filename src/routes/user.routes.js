import express from "express";
import { createUser, deleteUser, getAllUsers } from "../controllers/userController.js";
import { validateUser } from "../middlewares/validator.middleware.js";

const router = express.Router();


router.get("/", getAllUsers);
router.post("/", validateUser, createUser);
router.delete("/:id", deleteUser);


export default router;