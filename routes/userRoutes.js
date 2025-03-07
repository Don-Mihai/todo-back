// routes/userRoutes.js
import {
  getUsers,
  getOldUsers,
  getUserById,
  sendEmail,
} from "../controllers/userController.js";
import express from "express";
const router = express.Router();

// адресса
router.post("/get-all", getUsers);
router.post("/get-old-users", getOldUsers);
router.post("/get-by-id", getUserById);
router.post("/send-email", sendEmail);

export default router;
