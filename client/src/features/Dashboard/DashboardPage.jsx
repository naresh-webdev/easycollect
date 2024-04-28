import { useEffect, useState } from "react";
import styles, { layout } from "../../constants/styles";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSessionHandler } from "../../utils/servies";
import Button from "../../components/Button";
import FormDialog from "../../components/FormDialog";
import Spinner from "../../components/Spinner";
import { ToastContainer } from "react-toastify";
import { current } from "@reduxjs/toolkit";

function Box({ title, urlId }) {
  return (
    <Link to={`/session/${urlId}`}>
      <div className="bg-black-gradient flex h-[217px] w-[386px] cursor-pointer items-center justify-center overflow-hidden rounded-sm transition-all ease-in hover:scale-[1.05]">
        <span className="text-center font-poppins text-[18px] font-semibold leading-[19px] text-white">
          {title}
        </span>
      </div>
    </Link>
  );
}

function DashboardPage() {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  const sessionQuery = useQuery({
    queryKey: ["sessions"],
    queryFn: getSessionHandler,
  });

  const isNotAuthenticated = currentUser == null;

  useEffect(() => {
    if (isNotAuthenticated) {
      navigate("/signup");
    }
  }, [isNotAuthenticated, navigate]);

  useEffect(() => {
    if (currentUser?.userInfo?.phoneNumber === null) {
      setIsFormOpen(true);
    }
  }, [currentUser?.userInfo?.phoneNumber]);

  const handleCreateSession = () => {
    navigate("/createsession");
  };

  return (
    <section
      className={`${layout.section} ${styles.flexCenter} mx-4 overflow-hidden`}
    >
      <FormDialog
        isOpen={isFormOpen}
        message={`Hi there! 👋 Please share your phone number for smooth transactions. Your privacy is our priority! 🛡️ No spam, just updates! Thanks for trusting us! 🙌`}
        title={`Share Your Phone Number`}
        setLoading={setLoading}
        setIsFormOpen={setIsFormOpen}
        currentUser={currentUser}
      />
      <Spinner isOpen={loading} />
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
      {sessionQuery.data?.sessions?.length === 0 ? (
        <div
          className={`${styles.flexCenter} ${styles.paddingY}  mx-8 mb-4 flex-col items-center justify-center gap-6 md:mb-8`}
        >
          <h1 className={`${styles.heading2} ${styles.flexCenter} text-center`}>
            Create your First Session 👇
          </h1>
          <Button onClick={handleCreateSession}>Create Session 🚀</Button>
        </div>
      ) : (
        <div className="mb-4 flex flex-col flex-wrap space-y-6 px-4 ss:grid  ss:gap-x-4 ss:gap-y-4 ss:space-y-0 min-[940px]:grid-cols-2 lg:gap-x-6 lg:gap-y-6 min-[1450px]:grid-cols-3">
          {sessionQuery.data?.sessions?.map((session) => (
            <Box
              key={session._id}
              title={session.sessionName}
              urlId={session._id}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default DashboardPage;
