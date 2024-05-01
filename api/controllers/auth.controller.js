import bcryptjs from "bcryptjs";
import User from "./../models/user.model.js";
import { errorHandler } from "../utils/ErrorHandler.js";
import jwt from "jsonwebtoken";
import { generateUsername } from "unique-username-generator";
export const signup = async (req, res, next) => {
  const { username, displayname, email, password } = req.body;

  if (
    !username ||
    !displayname ||
    !email ||
    !password ||
    username === "" ||
    displayname === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler("Please fill in all fields", 400));
  }

  const hashedPassword = bcryptjs.hashSync(password, 12);

  const newUser = new User({
    username,
    displayName: displayname,
    email,
    password: hashedPassword,
  });

  try {
    const user = await newUser.save();

    // Generate access token with 1 hour expiry
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Generate refresh token with 30 days expiry
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "30d",
      }
    );

    // Send both tokens as cookies
    const { password: pass, ...userInfo } = user._doc;
    res
      .status(200)
      .cookie("access_token", accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
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

    // Generate access token with 1 hour expiry
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Generate refresh token with 30 days expiry
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "30d",
      }
    );

    const { password: pass, ...userInfo } = user._doc;

    res
      .status(200)
      .cookie("access_token", accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })
      .json({ userInfo });
  } catch (error) {
    return next(errorHandler(`Login failed ${error.message}`, 500));
  }
};

export const googleLogin = async (req, res, next) => {
  const { name, displayname, email, photoURL } = req.body;
  try {
    // Check if the user already exists in the database
    let user = await User.findOne({ email });

    if (user) {
      // If the user exists, generate an access token and a refresh token for them
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h", // Change expiry time if needed
        }
      );

      const refreshToken = jwt.sign(
        { userId: user._id },
        process.env.JWT_REFRESH_SECRET,
        {
          expiresIn: "30d", // Change expiry time if needed
        }
      );

      const { password: pass, ...userInfo } = user._doc;

      // Send both tokens in cookies
      res
        .status(200)
        .cookie("access_token", accessToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
        })
        .cookie("refresh_token", refreshToken, {
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        })
        .json({ userInfo });
    } else {
      // If the user doesn't exist, create a new user
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const username = generateUsername("", 4, 14, name);

      const newUser = new User({
        username,
        displayName: displayname,
        email,
        password: hashedPassword,
        photoURL,
      });

      // Save the new user to the database
      await newUser.save();

      // Generate an access token and a refresh token for the new user
      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h", // Change expiry time if needed
        }
      );

      const refreshToken = jwt.sign(
        { userId: newUser._id },
        process.env.JWT_REFRESH_SECRET,
        {
          expiresIn: "30d", // Change expiry time if needed
        }
      );

      const { password: pass, ...userInfo } = newUser._doc;

      // Send both tokens in cookies
      res
        .status(200)
        .cookie("access_token", accessToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
        })
        .cookie("refresh_token", refreshToken, {
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        })
        .json({ userInfo });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    next(errorHandler(`Google login failed ${error.message}`, 500));
  }
};
