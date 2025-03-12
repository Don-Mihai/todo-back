// routes/userRoutes.js
import {
  getUsers,
  getOldUsers,
  getUserById,
  sendEmail,
  createUser,
} from "../controllers/userController.js";
import express from "express";
const router = express.Router();

// адресса
router.post("/send-email", sendEmail);
router.post("/get-all", getUsers);
router.post("/get-old-users", getOldUsers);
router.post("/get-by-id", getUserById);
router.post("/create", createUser);

export default router;
