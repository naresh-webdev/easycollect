import mongoose from "mongoose";

const sessionScheme = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sessionName: {
      type: String,
      required: true,
    },
    membersList: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    description: {
      type: String,
      default: "",
    },
    validity: {
      type: Number,
      required: true,
    },
    fundAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Session = mongoose.model("Session", sessionScheme);

export default Session;
