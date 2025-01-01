import { Router } from "express";
import * as userController from "./controller/user.js";
import auth from '../../middleware/auth.middleware.js'
const router = Router();

router.get("/", userController.users);
router.get("/profile", auth ,userController.profile);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

export default router;
