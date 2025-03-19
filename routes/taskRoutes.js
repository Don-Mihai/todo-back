import express from "express";
const router = express.Router();
import {
  createTask,
  editTask,
  getTaskById,
  deleteTask,
  getTasks,
} from "../controllers/taskController.js";

router.post("/create", createTask);
router.post("/edit", editTask);
router.post("/get", getTaskById);
router.post("/get-all", getTasks);
router.post("/delete", deleteTask);

export default router;
