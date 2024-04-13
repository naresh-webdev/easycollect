import { Form, useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import styles from "../../constants/styles";
import { useEffect, useState } from "react";
import { notifySuccess, notifyFailure } from "../../utils/notifications";
import { ToastContainer } from "react-toastify";

function JoinSession() {
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const navigate = useNavigate();

  const joinSession = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/session/joinsession/${sessionId}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data, "data from join session");
      if (!data.success) {
        notifyFailure(data.message);
        console.error(data.message);
        return;
      }
      notifySuccess("Session Joined Successfully 🎉");
      console.log("Session Joined Successfully", data.message);
      setTimeout(() => {
        navigate(`/session/${sessionId}`);
      }, 3000);
    } catch (error) {
      console.error(error);
      notifyFailure("Something Went Wrong 😟");
    } finally {
      setLoading(false);
    }
  };

  const handleSessionId = (e) => {
    setSessionId(e.target.value);
  };

  const handleJoinSession = (e) => {
    e.preventDefault();
    joinSession();
  };

  return (
    <section className={`${styles.flexCenter} h-full w-full bg-primary`}>
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

      <div
        className={`${styles.boxWidth} ${styles.flexCenter} overflow-hidden`}
      >
        <div
          className={`relative z-[5] h-full w-[90%]  max-w-[490px] overflow-hidden rounded-md  bg-white  px-2 py-6 ss:w-[60%] sm:w-[50%] lg:w-[40%]`}
        >
          {/* <div className={`${styles.flexCenter}`}>
            <img src={avatar1} alt="logo" className=" h-[40px] w-[40px]" />
          </div> */}

          <div className="">
            <h1 className=" text-center font-poppins text-3xl text-[18px] font-semibold text-primary">
              Connect & Contribute 🌟
            </h1>
            <p className="text-center font-poppins text-[14px] text-primary">
              Your journey to impact starts here.
            </p>
          </div>

          <div className="mx-8 flex flex-col gap-3">
            <Form className="mb-1 mt-8" onSubmit={handleJoinSession}>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="sessionName"
                  className="font-poppins font-medium text-primary"
                >
                  Session Id
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="text"
                  name="sessionId"
                  id="sessionId"
                  placeholder="Enter Session Id"
                  onChange={handleSessionId}
                  required
                  value={sessionId}
                />
              </div>

              <Button type="submit" disabled={loading} styles={`w-full mt-2`}>
                Join Session 🚀
              </Button>
            </Form>
          </div>
        </div>

        {/* TODO: gradient */}

        {/* TODO: gradient */}
      </div>
      <div className="white__gradient fixed bottom-0 right-[70%] z-[0] h-[40%] w-[40%] rounded-full" />
      <div className="blue__gradient fixed -right-[25%] -top-[20%] z-[0] h-[60%] w-[60%] rounded-full" />
    </section>
  );
}

export default JoinSession;
