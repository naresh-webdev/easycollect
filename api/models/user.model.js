import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
      required: true,
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
    phoneNumber: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userScheme);

export default User;
