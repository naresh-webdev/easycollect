import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.redirect("/signup");
  }
  console.log("token: from authroizaiton", token);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      // console.log("err from authorization", err);
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  });
};
