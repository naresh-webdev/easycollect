import { ToastContainer } from "react-toastify";
import styles, { layout } from "../../constants/styles";
import Spinner from "../../components/Spinner";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notifyFailure, notifySuccess } from "../../utils/notifications";

function JoinSessionUsingId() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { id: sessionId } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
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
          setError(true);
          setErrorMessage(data.message);
          return;
        }
        notifySuccess("Session Joined Successfully 🎉");
        // console.log("Session Joined Successfully using Id", data.message);
        setSuccess(true);
        setTimeout(() => {
          navigate(`/session/${sessionId}`);
        }, 4500);
      } catch (error) {
        console.error(error);
        setErrorMessage("Something Went Wrong");
        notifyFailure("Something Went Wrong 😟");
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    joinSession();
  }, [sessionId, navigate]);

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
      <div className={`${styles.boxWidth} ${styles.flexCenter} flex-col`}>
        <h3 className={`${styles.heading2} text-center`}>
          {success
            ? "Session Joined Successfully 🎉"
            : error
              ? "Failed to Join Session😢"
              : "Trying to join session..."}
        </h3>
        <p className={`${styles.paragraph} mt-4 text-center`}>
          {success
            ? "Redirecting to the session page..."
            : error
              ? errorMessage
              : "Please wait while we join you to the session"}
        </p>

        <div className={`${styles.flexCenter} mt-8`}>
          <Spinner isOpen={loading} color={`#00f6ff`} />
        </div>
      </div>
    </section>
  );
}

export default JoinSessionUsingId;
