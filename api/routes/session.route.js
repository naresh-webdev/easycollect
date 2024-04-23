import express from "express";
import {
  createSession,
  getSession,
  joinSession,
  joinSessionUsingId,
  updateUserPaymentInfo,
} from "../controllers/session.controller.js";
import { authenticateToken } from "../utils/Authorization.js";

const router = express.Router();

router.post("/createSession", authenticateToken, createSession);
router.post("/joinSession/:id", authenticateToken, joinSession);
router.get("/joinSessionUsingId/:id", authenticateToken, joinSessionUsingId);
router.post(
  "/updateUserPaymentInfo/:id",
  authenticateToken,
  updateUserPaymentInfo
);
router.get("/getSession", authenticateToken, getSession);

export default router;
