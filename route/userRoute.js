import express from "express";
import { loginOrRegisterUser } from "../controller/userController.js";

const router = express.Router();

router.post("/login-register", loginOrRegisterUser);

export default router;