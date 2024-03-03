import { Form, Link } from "react-router-dom";
import Reviews from "../features/signup/Reviews";
import Button from "./Button";
import InputForm from "./InputForm";

function FormTemplate({ type }) {
  console.log("type is : ", type);
  return (
    <main className="grid h-dvh place-items-center items-center font-['Montserrat']">
      {/* container */}
      <div className="flex h-[85%] w-[90%] rounded-sm shadow-2xl max-[350px]:rounded-[2%] min-[350px]:h-[80%] min-[350px]:w-[85%] sm:h-4/6 sm:w-4/6 md:h-[60%] md:w-[90%] lg:h-4/5 lg:w-5/6 xl:h-4/5 xl:w-3/4">
        {/* col_1 */}
        <div className="hidden basis-1/2 flex-col items-center justify-center bg-bg_gradient_1 md:flex md:gap-14 xl:gap-16 2xl:gap-28">
          <header className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-main_white md:text-3xl lg:text-3xl xl:text-4xl">
              {type === "signup" && "Join The Community"}
              {type === "login" && "Welcome Back 👋"}
              {type === "contact" && "Reach Out To Us"}
            </h2>
            <p className="pt-2 text-xs text-main_white_dim">
              Your simplified{" "}
              <span className="text-main_neon">payment pooling platform.</span>
            </p>
          </header>

          <Reviews />
        </div>
        {/* col_2 */}

        <div className="flex flex-1 flex-col items-center justify-center bg-bg_gradient_1  md:basis-1/2 md:bg-main_white_dim lg:py-4">
          <h2 className="text-center  text-3xl font-semibold tracking-wide text-main_neon min-[350px]:text-4xl md:text-3xl md:font-extrabold md:text-main_gray">
            EasyCollect
          </h2>
          <span
            className={`${type === "signup" || type === "login" ? "" : "hidden"} text-center`}
          >
            <h4 className="pt-2 text-center text-xs font-semibold text-main_white_dim md:font-bold md:text-main_gray">
              {type === "signup" && "Already have an account?"}
              {type === "login" && "Don't have an account?"}
            </h4>
            <Link
              className="text-center text-sm font-semibold text-main_pink hover:text-main_neon  sm:pt-1.5 md:hover:text-main_gray"
              to={type === "signup" ? "/login" : "/signup"}
            >
              {type === "signup" && "Sign in"}
              {type === "login" && "Sign up"}
            </Link>
          </span>

          {type === "contact" && (
            <h4 className="pt-2 text-center text-sm font-semibold  text-main_white_dim md:font-bold md:text-main_gray">
              Send us a Message
            </h4>
          )}

          <InputForm type={type} />
        </div>
      </div>
    </main>
  );
}

export default FormTemplate;
