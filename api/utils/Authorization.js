import jwt from "jsonwebtoken";
import { errorHandler } from "./ErrorHandler.js";

export const authenticateToken = (req, res, next) => {
  const accessToken = req.cookies.access_token;
  const refreshToken = req.cookies.refresh_token;

  if (!accessToken && !refreshToken) {
    return res.redirect("/signup");
  }

  // Verify access token
  jwt.verify(accessToken, process.env.JWT_SECRET, (accessTokenErr, user) => {
    if (!accessTokenErr) {
      // Access token is valid, proceed with the request
      req.user = user;
      return next();
    }

    // Access token verification failed
    if (accessTokenErr.name !== "TokenExpiredError") {
      // Access token is invalid
      return res
        .status(403)
        .json({ success: false, message: "Invalid access token" });
      // return res.redirect("/signup");
    }

    // Access token has expired, try refreshing
    jwt.verify(
      refreshToken,
      process.env.JWT_SECRET,
      (refreshTokenErr, decoded) => {
        if (refreshTokenErr) {
          // Refresh token is invalid or expired, redirect to signup
          return res.redirect("/signup");
        }

        // Generate new access token
        const newAccessToken = jwt.sign(
          { userId: decoded.userId },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h", // Adjust the expiry as needed
          }
        );

        // Set the new access token in response cookies
        res.cookie("access_token", newAccessToken, { httpOnly: true });
        req.user = decoded;
        next();
      }
    );
  });
};
