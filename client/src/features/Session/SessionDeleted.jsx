import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

function SessionDeleted() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/dashboard");
  }, 2500);

  return (
    <div className="main-full-auth flex flex-col items-center justify-center space-y-4 pb-[20%]">
      <h1 className="flex flex-row items-center justify-center text-3xl font-semibold text-white ">
        Session Deleted{" "}
        <span className="pl-2">
          <FaTrashCan />
        </span>
      </h1>
      <p className="max-w-[590px] px-4 text-dimWhite">
        The session you were looking for has been deleted. you will be
        redirected to the dashboard shortly.
      </p>
      <Spinner isOpen={true} color={"#00f6ff"} />
    </div>
  );
}

export default SessionDeleted;
