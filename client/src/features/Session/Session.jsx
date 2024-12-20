import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getSessionHandler } from "../../utils/servies";
import styles, { layout } from "../../constants/styles";
import Button from "../../components/Button";
import StyledTable from "../../components/StyledTable";
import { queryClient } from "../../main";

import { logoIcon } from "../../assets";
import { FaShare, FaTrash } from "react-icons/fa";
import { notifyFailure, notifySuccess } from "../../utils/notifications";
import { ToastContainer } from "react-toastify";
import SessionNotFound from "./SessionNotFound";
import Spinner from "../../components/Spinner";
import { useState } from "react";
import SessionDeleted from "./SessionDeleted";

function Session() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["sessions"],
    queryFn: () => getSessionHandler(currentUser.userInfo._id),
  });
  const sessionDetails = data?.sessions?.find((session) => session._id === id);

  if (
    data != null &&
    sessionDetails == null &&
    !isLoading &&
    !isFetching &&
    !deleted
  ) {
    setTimeout(() => {
      navigate("/dashboard");
    }, 2500);
    return <SessionNotFound />;
  }

  if (deleted) {
    return <SessionDeleted />;
  }

  const sessionValidDate = new Date(
    new Date().getTime() + sessionDetails?.validity * 24 * 60 * 60 * 1000,
  );

  // Share session data
  //* Sample testing data
  const shareData = {
    title: "Copy Session ID 📝",
    text: `Join our session on EasyCollect and contribute towards our goal!\nHere's the session ID: ${id}`,
    url: `https://easycollect.onrender.com/session/joinSessionUsingId/${id}`,
  };

  const membersData = sessionDetails?.membersList;
  const currentMember = membersData?.find(
    (member) => member.userId === currentUser.userInfo._id,
  );

  const handleShare = async (e) => {
    e.preventDefault();
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log("error in sharing link : ", err);
    }
  };

  const handleDelete = async (e) => {
    //* Delete session
    //todo: Add confirmation dialog, add payout feature
    e.preventDefault();
    try {
      const res = await fetch(`/api/session/deleteSession/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      queryClient.invalidateQueries(["sessions"]);
      if (data.success) {
        setDeleted(true);
      } else {
        notifyFailure("ERROR: " + data.message);
        console.log("error deleting session ", data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async (e) => {
    try {
      const res = await fetch("/api/payment/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: sessionDetails?.fundAmount * 100,
          currency: "INR",
        }),
      });
      const order = await res.json();
      console.log(order, "data from payment");

      var options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: sessionDetails?.fundAmount,
        currency: "INR",
        name: "EasyCollect",
        description: sessionDetails?.description,
        image: logoIcon,
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          const body = {
            ...response,
          };
          setLoading(true);
          const validateRes = await fetch("/api/payment/order/vaidate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
          const validateData = await validateRes.json();
          console.log(validateData, "validateData");
          if (validateData.success) {
            const res = await fetch(
              `/api/session/updateUserPaymentInfo/${id}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  paymentType: validateData.paymentMode,
                  paymentStatus: validateData.status,
                }),
              },
            );
            const data = await res.json();
            setLoading(false);
            queryClient.invalidateQueries(["sessions"]);
          }
        },
        prefill: {
          name: currentUser.userInfo.username,
          email: currentUser.userInfo.email,
          contact: currentUser.userInfo.phoneNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();
      e.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      className={`${layout.section} ${styles.flexCenter} ${styles.paddingY}  mx-4  overflow-hidden`}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
        className={`${styles.boxWidth} ${styles.flexCenter} mt-2 rounded-sm`}
      />
      <Spinner isOpen={loading || isLoading || isFetching} color={"#00f6ff"} />
      <div className={`${styles.boxWidth} ${styles.flexCenter} flex-col`}>
        <h2 className={`${styles.heading2} my-1 text-center`}>
          {sessionDetails?.sessionName}
        </h2>
        <p
          className={`${styles.paragraph} mx-8 my-1 max-w-[560px] text-start text-2xl capitalize leading-[34px]`}
        >
          {sessionDetails?.description}. This session is valid till{" "}
          <span className="font-semibold text-dimWhite">
            {sessionValidDate.toLocaleDateString()}
          </span>
        </p>
        <div className="mt-6 flex flex-col  items-center justify-center">
          {currentMember?.paymentStatus === "unpaid" ? (
            <Button onClick={handlePayment}>
              Pay{" "}
              <span className="font-semibold">
                ₹{sessionDetails?.fundAmount}
              </span>{" "}
            </Button>
          ) : (
            <div className="rounded-sm bg-green-500 px-4 py-1.5 text-center text-xs font-[600] uppercase tracking-[1px] text-white">
              Payment Status: SUCCESS
            </div>
          )}

          <div className="flex gap-3">
            <button
              className="mt-8 flex cursor-pointer items-center  justify-center rounded-md bg-slate-500 px-4 py-2 text-white ease-in-out hover:bg-slate-600"
              onClick={handleShare}
            >
              <FaShare className="mr-2" />
              Share
            </button>
            <button
              className="mt-8 flex cursor-pointer items-center  justify-center rounded-md bg-red-500 px-4 py-2 text-white ease-in-out hover:bg-red-600"
              onClick={handleDelete}
            >
              <FaTrash className="mr-2" />
              Delete
            </button>
          </div>
        </div>
        <div className="mt-8">
          <StyledTable
            membersData={membersData}
            adminId={sessionDetails?.adminId}
          />
        </div>
      </div>
    </section>
  );
}

export default Session;
