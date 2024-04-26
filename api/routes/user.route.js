import express from "express";
import { authenticateToken } from "../utils/Authorization.js";
import { addPhoneNumber } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/addPhoneNumber", authenticateToken, addPhoneNumber);

export default router;
