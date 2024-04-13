import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    default: null,
  },
  paymentStatus: {
    type: String,
    default: "unpaid",
  },
  paidDate: {
    type: Date,
    default: null,
  },
});

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
      type: [memberSchema],
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
