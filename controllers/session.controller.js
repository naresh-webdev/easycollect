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
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const user = await Usre.findById(userId);
    if (!user) {
      return next(errorHandler("User not found", 404));
    }
    const session = await Session.findById(id);
    if (!session) {
      return next(errorHandler("Session not found", 404));
    }
    session.membersList.push(userId);
    user.sessions.push(id);

    const updatedSession = await session.save();
    const updatedUser = await user.save();
    if (!updatedSession || !updatedUser) {
      return next(errorHandler("Joining Session Failed", 500));
    }
    res.status(200).json({ success: true });
  } catch (error) {
    return next(errorHandler(`Joining Session Failed ${error.message}`, 500));
  }
};
