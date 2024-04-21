import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getSessionHandler } from "../../utils/servies";
import styles, { layout } from "../../constants/styles";
import Button from "../../components/Button";
import StyledTable from "../../components/StyledTable";
import { queryClient } from "../../main";

import { logoIcon } from "../../assets";

function Session() {
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const { data } = useQuery({
    queryKey: ["sessions"],
    queryFn: () => getSessionHandler(currentUser.userInfo._id),
  });
  const sessionDetails = data?.sessions?.find((session) => session._id === id);
  const sessionValidDate = new Date(
    new Date().getTime() + sessionDetails?.validity * 24 * 60 * 60 * 1000,
  );

  const membersData = sessionDetails?.membersList;
  const currentMember = membersData?.find(
    (member) => member.userId === currentUser.userInfo._id,
  );
  console.log(membersData, "membersData");

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
        key: import.meta.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
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
            queryClient.invalidateQueries(["sessions"]);
          }
        },
        prefill: {
          name: currentUser.userInfo.username,
          email: currentUser.userInfo.email,
          contact: "9000090000",
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
        <div className="mt-6 flex  items-center justify-center">
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
        </div>
        <div className="mt-8">
          <StyledTable membersData={membersData} />
        </div>
      </div>
    </section>
  );
}

export default Session;
