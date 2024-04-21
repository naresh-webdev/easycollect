import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
      default: "",
    },
    sessions: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Session",
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userScheme);

export default User;
