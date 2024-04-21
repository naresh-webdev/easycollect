import Session from "../models/session.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/ErrorHandler.js";

export const createSession = async (req, res, next) => {
  const { sessionName, description, validity, fundAmount } = req.body;
  const admin = await User.findById(req.user.userId);
  //performing validation
  if (
    !sessionName ||
    !req.user.userId ||
    !validity ||
    !fundAmount ||
    !description
  ) {
    return next(errorHandler("Please fill in all fields", 400));
  }
  if (!admin) {
    return next(errorHandler("Admin not found", 404));
  }

  const newSession = new Session({
    adminId: req.user.userId,
    sessionName,
    description,
    validity,
    fundAmount,
    membersList: [
      {
        userId: req.user.userId,
        userName: admin.username,
      },
    ],
  });

  try {
    const session = await newSession.save();
    if (!session) {
      return next(errorHandler("Session Creation Failed", 500));
    }
    // add the session to user
    admin.sessions.push(session._id);
    const updatedUser = await admin.save();
    if (!updatedUser) {
      return next(errorHandler("Session Creation Failed", 500));
    }

    // console.log(session, "session");
    res.status(201).json({ id: session._id });
  } catch (error) {
    return next(errorHandler(`Session Creation Failed ${error.message}`, 500));
  }
};

export const getSession = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return next(errorHandler("User not found", 404));
    }
    const populatedUser = await user.populate("sessions");
    // console.log(populatedUser, "sessions");
    res.status(200).json({
      sessions: populatedUser.sessions,
    });
  } catch (error) {
    return next(errorHandler(`Session not found ${error.message}`, 404));
  }
};

export const joinSession = async (req, res, next) => {
  const { id: sessionId } = req.params;
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler("User not found", 404));
    }
    const session = await Session.findById(sessionId);
    if (!session) {
      return next(errorHandler("Session not found", 404));
    }

    if (session.adminId.toString() === userId) {
      return res.status(200).json({
        success: true,
        message: "You are already the admin of this session ✔",
      });
    }

    if (
      session.membersList.some((member) => member.userId.toString() === userId)
    ) {
      return res.status(200).json({
        success: true,
        message: "You are already a member of this session ✔",
      });
    }

    session.membersList.push({
      userId: userId,
      userName: user.username,
    });
    user.sessions.push(sessionId);

    const updatedSession = await session.save();
    const updatedUser = await user.save();
    if (!updatedSession || !updatedUser) {
      return next(errorHandler("Joining Session Failed", 500));
    }
    res.status(200).json({ success: true, message: "Session Joined ✔" });
  } catch (error) {
    return next(errorHandler(`Joining Session Failed ${error.message}`, 500));
  }
};

export const updateUserPaymentInfo = async (req, res, next) => {
  const { id: sessionId } = req.params;
  const userId = req.user.userId;
  const { paymentType, paymentStatus } = req.body;

  try {
    const session = await Session.findById(sessionId);
    if (!session) {
      return next(errorHandler("Session not found", 404));
    }

    const memberIndex = session.membersList.findIndex(
      (member) => member.userId.toString() === userId
    );
    if (memberIndex === -1) {
      return next(errorHandler("User not found in the session", 404));
    }

    session.membersList[memberIndex].paymentType = paymentType;
    session.membersList[memberIndex].paymentStatus = paymentStatus;
    session.membersList[memberIndex].paidDate = new Date().toISOString();

    const updatedSession = await session.save();
    if (!updatedSession) {
      return next(errorHandler("Updating Payment Info Failed", 500));
    }
    res.status(200).json({ success: true, message: "Payment Info Updated ✔" });
  } catch (error) {
    return next(
      errorHandler(`Updating Payment Info Failed ${error.message}`, 500)
    );
  }
};
