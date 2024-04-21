import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const router = express.Router();

router.post("/order", async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: req.body.amount,
    currency: req.body.currency,
    receipt: "receipt#1",
    payment_capture: 0,
  };

  try {
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).json({ message: "Some error occurred" });
    }
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.post("/order/vaidate", async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest != razorpay_signature) {
    return res
      .status(400)
      .json({ success: false, message: "Transaction is not legit!" });
  }

  try {
    var razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const paymentRes = await razorpay.payments.fetch(razorpay_payment_id);
    console.log(paymentRes, "paymentRes");
    const paymentDetails = paymentRes;
    const { status, method: paymentMode } = paymentDetails;
    console.log("Payment Details", paymentDetails);

    //if payment is successful
    res.json({
      success: true,
      message: "Payment success",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      paymentMode,
      status,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
