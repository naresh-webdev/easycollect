import { useEffect } from "react";
import styles, { layout } from "../../constants/styles";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getSessionHandler } from "../../utils/servies";

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
  const sessionQuery = useQuery({
    queryKey: ["sessions"],
    queryFn: () => getSessionHandler(currentUser.userInfo._id),
  });

  const isNotAuthenticated = currentUser == null;

  useEffect(() => {
    if (isNotAuthenticated) {
      navigate("/signup");
    }
  }, [isNotAuthenticated, navigate]);

  return (
    <section
      className={`${layout.section} ${styles.flexCenter}  mx-4 overflow-hidden`}
    >
      {sessionQuery.data?.sessions.length === 0 ? (
        <h1 className="text-white">Create your First Room</h1>
      ) : (
        <div className="mb-6 flex flex-col flex-wrap space-y-6 px-4 ss:grid  ss:gap-x-4 ss:gap-y-4 ss:space-y-0 min-[940px]:grid-cols-2 lg:gap-x-6 lg:gap-y-6 min-[1450px]:grid-cols-3">
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
