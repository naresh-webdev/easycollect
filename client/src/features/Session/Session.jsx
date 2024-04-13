import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getSessionHandler } from "../../utils/servies";
import styles, { layout } from "../../constants/styles";
import Button from "../../components/Button";
import StyledTable from "../../components/StyledTable";

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
  console.log(membersData, "membersData");

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
          <Button>
            Pay{" "}
            <span className="font-semibold">₹{sessionDetails?.fundAmount}</span>{" "}
          </Button>
        </div>
        <div className="mt-8">
          <StyledTable membersData={membersData} />
        </div>
      </div>
    </section>
  );
}

export default Session;
