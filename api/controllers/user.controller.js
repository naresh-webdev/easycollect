import User from "../models/user.model.js";

export const addPhoneNumber = async (req, res, next) => {
  const { phoneNumber } = req.body;
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler("User not found", 404));
    }

    user.phoneNumber = phoneNumber;
    const updatedUser = await user.save();
    if (!updatedUser) {
      return next(errorHandler("Adding phone number failed", 500));
    }
    res
      .status(200)
      .json({ success: true, message: "Phone number added ✔", updatedUser });
  } catch (error) {
    return next(
      errorHandler(`Adding phone number failed ${error.message}`, 500)
    );
  }
};
