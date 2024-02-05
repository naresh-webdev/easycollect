import { useRouteError, useNavigate } from "react-router-dom";
import ErrorImg from "../imgs/error_img.jpeg";

function Error() {
  const { error, message } = useRouteError();
  console.log("error is : ", error);
  const navigate = useNavigate();

  function navigateHome() {
    console.log("hi");
    navigate("/");
  }
  return (
    <div className="flex h-dvh items-center justify-center text-main_white">
      <div className="text-center text-2xl">
        <span className="block p-5 text-center text-4xl">404 - ERROR 😢</span>
        <div className="py-5">
          <img src={ErrorImg} alt="error img" />
        </div>
        You are redirected into the Page for some unknown reason
        <h2 className="py-3 text-xl">
          Try either going to{" "}
          <span
            onClick={navigateHome}
            className="cursor-pointer text-main_neon"
          >
            home{" "}
          </span>{" "}
          or{" "}
          <span
            onClick={navigateHome}
            className="cursor-pointer text-main_neon"
          >
            support
          </span>{" "}
          page
        </h2>
      </div>
    </div>
  );
}

export default Error;
