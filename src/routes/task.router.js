import { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  allTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { createSchema, updateSchema } from "../schemas/task.schema.js";
import { validateSchema } from "../middleware/validateSchema.js";

const router = Router();

// Task Routes
router.get("/tasks", verifyToken, allTasks);
router.post("/tasks", verifyToken, validateSchema(createSchema), createTask);
router.get("/tasks/:id", verifyToken, getTask);
router.put("/tasks/:id", verifyToken, validateSchema(updateSchema), updateTask);
router.delete("/tasks/:id", verifyToken, deleteTask);

export default router;
