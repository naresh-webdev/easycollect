import bcryptjs from "bcryptjs";
import User from "./../models/user.model.js";
import { errorHandler } from "../utils/ErrorHandler.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler("Please fill in all fields", 400));
  }

  const hashedPassword = bcryptjs.hashSync(password, 12);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    const user = await newUser.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "14d",
    });
    const { password: pass, ...userInfo } = user._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000,
      })
      .json({ userInfo });
  } catch (error) {
    return next(errorHandler(`User Creation Failed ${error.message}`, 500));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler("Please fill in all fields", 400));
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler("User not found", 404));
    }
    const isMatch = bcryptjs.compareSync(password, user.password);
    if (!isMatch) {
      return next(errorHandler("Invalid credentials", 400));
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "14d",
    });

    const { password: pass, ...userInfo } = user._doc;

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000,
      })
      .json({ userInfo });
  } catch (error) {
    return next(errorHandler(`Login failed ${error.message}`, 500));
  }
};

export const googleLogin = async (req, res, next) => {
  const { name, email, photoURL } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "14d",
      });
      const { password: pass, ...userInfo } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
          maxAge: 14 * 24 * 60 * 60 * 1000,
        })
        .json({ userInfo });
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        photoURL: photoURL,
      });
      console.log("newUser", newUser);
      await newUser.save();
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "14",
      });
      const { password: pass, ...userInfo } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
          maxAge: 14 * 24 * 60 * 60 * 1000,
        })
        .json({ userInfo });
    }
  } catch (error) {
    next(errorHandler(`Google login failed ${error.message}`, 500));
  }
};
