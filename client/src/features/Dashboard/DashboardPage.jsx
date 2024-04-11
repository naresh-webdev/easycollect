import { useEffect } from "react";
import styles, { layout } from "../../constants/styles";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSessionHandler } from "../../utils/servies";
import Button from "../../components/Button";

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

  const { currentUser } = useSelector((state) => state.user);

  // const sessionQuery = useQuery({
  //   queryKey: ["sessions"],
  //   queryFn: setTimeout(() => {
  //     const accessToken = localStorage.getItem("access_token");
  //     console.log(accessToken, "accessToken");
  //     getSessionHandler(accessToken);
  //   }, 3000),
  // });

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

  return (
    <section
      className={`${layout.section} ${styles.flexCenter} mx-4 overflow-hidden`}
    >
      {sessionQuery.data?.sessions.length === 0 ? (
        <div
          className={`${styles.flexCenter} ${styles.paddingY}  mx-8 flex-col items-center justify-center gap-6`}
        >
          <h1 className={`${styles.heading2} ${styles.flexCenter} text-center`}>
            Create your First Session 👇
          </h1>
          <Button onClick={() => navigate("/createsession")}>
            Create Session 🚀
          </Button>
        </div>
      ) : (
        <div className="mb-4 flex flex-col flex-wrap space-y-6 px-4 ss:grid  ss:gap-x-4 ss:gap-y-4 ss:space-y-0 min-[940px]:grid-cols-2 lg:gap-x-6 lg:gap-y-6 min-[1450px]:grid-cols-3">
          {sessionQuery.data?.sessions.map((session) => (
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
