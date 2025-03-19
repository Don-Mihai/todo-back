// routes/userRoutes.js
import { sendEmail, register, auth } from "../controllers/userController.js";
import express from "express";
const router = express.Router();

// адресса
router.post("/send-email", sendEmail);
router.post("/register", register);
router.post("/auth", auth);

export default router;
