import express from "express"
import { login, logout, register } from "../controllers/auth.controller.js";

const router=express.Router();




router.route("/register").post( register)

router.route("/login").post(login)

router.post("/logout").post(logout)





export default router;