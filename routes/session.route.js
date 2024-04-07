import express from "express";
import {
  createSession,
  getSession,
} from "../controllers/session.controller.js";

const router = express.Router();

router.post("/createSession", createSession);
router.get("/getSession/:id", getSession);

export default router;
