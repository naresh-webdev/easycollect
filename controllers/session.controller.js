import Session from "../models/session.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/ErrorHandler.js";

export const createSession = async (req, res, next) => {
  const { sessionName, adminId, description, validity, fundAmount } = req.body;
  const admin = await User.findById(adminId);

  //performing validation
  if (!sessionName || !adminId || !validity || !fundAmount || !description) {
    return next(errorHandler("Please fill in all fields", 400));
  }
  if (!admin) {
    return next(errorHandler("Admin not found", 404));
  }

  const newSession = new Session({
    adminId,
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

    console.log(session, "session");
    res.status(201).json({ id: session._id });
  } catch (error) {
    return next(errorHandler(`Session Creation Failed ${error.message}`, 500));
  }
};
