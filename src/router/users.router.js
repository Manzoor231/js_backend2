import { Router } from "express";
import {
  createUser,
  deleteUserById,
  editUserById,
  getAllUser,
  getUserById,
  
} from "../controllers/users.controller.js";
import {validateAllInput, validateUpdateInput} from "../middlewares/validateInput.js";

const router = Router();

router.get("/users", getAllUser);
router.post("/create", validateAllInput, createUser);
router.get("/users/:id", getUserById);
router.put("/users/:id",validateUpdateInput, editUserById);
router.delete('/users/:id', deleteUserById)
export default router;
