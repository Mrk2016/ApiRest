import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  updateUser,
  removeUser,
} from "../controllers/auth.controller.js";
import verifyToken from "../middleware/verifyToken.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, removeUser);
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", verifyToken, profile);

export default router;
