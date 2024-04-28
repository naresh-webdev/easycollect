import express from "express";
import {
  createSession,
  getSession,
  joinSession,
  updateUserPaymentInfo,
  deleteSession,
} from "../controllers/session.controller.js";
import { authenticateToken } from "../utils/Authorization.js";

const router = express.Router();

router.post("/createsession", authenticateToken, createSession);
router.post("/joinsession/:id", authenticateToken, joinSession);
router.post(
  "/updateUserPaymentInfo/:id",
  authenticateToken,
  updateUserPaymentInfo
);
router.get("/getSession", authenticateToken, getSession);
router.delete("/deleteSession/:id", authenticateToken, deleteSession);

export default router;
