import { Form, Link } from "react-router-dom";
import Button from "../../ui/Button";
import Title from "../landingPage/Title";
import Reviews from "./Reviews";

function Signup() {
  return (
    <main className="grid h-dvh place-items-center items-center font-['Montserrat']">
      {/* container */}
      <div className="flex h-[85%] w-[90%] rounded-sm shadow-2xl max-[350px]:rounded-[2%] min-[350px]:h-[80%] min-[350px]:w-[85%] sm:h-4/6 sm:w-4/6 md:h-[60%] md:w-[90%] lg:h-4/5 lg:w-5/6 xl:h-4/5 xl:w-3/4">
        {/* col_1 */}
        <div className="hidden basis-1/2 flex-col items-center justify-center bg-bg_gradient_1 md:flex md:gap-8 xl:gap-20">
          <header className="flex flex-col items-center justify-center">
            <h2 className="font-semibold text-main_white md:text-3xl lg:text-3xl xl:text-4xl">
              Join The Community
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
          <h4 className="pt-2 text-center text-xs font-semibold text-main_white_dim md:font-bold md:text-main_gray">
            Already have an account?
          </h4>
          <Link className="text-center text-sm font-semibold text-main_pink hover:text-main_neon  sm:pt-1.5 md:hover:text-main_gray">
            Login here
          </Link>

          <Form
            className="flex w-5/6 flex-col space-y-4 pt-12 sm:w-4/6 sm:space-y-4 sm:pt-8 md:w-3/4 md:space-y-3 lg:w-4/6 lg:space-y-4"
            method="POST"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-input"
            />

            <Button type="secondary">Signup</Button>
            <p className="relative text-center">
              <span className="text-main_white_dim before:absolute before:left-0 before:top-[12px] before:h-[1px] before:w-[44%] before:bg-gray-300 before:content-[''] after:absolute after:right-0 after:top-[12px] after:h-[1px] after:w-[44%] after:bg-gray-300 after:content-['']  md:text-main_gray md:before:bg-gray-400 md:after:bg-gray-400">
                or
              </span>
            </p>
            <Button type="secondary">Continue with Google</Button>
            <Button type="secondary">Continue with Facebook</Button>
          </Form>
        </div>
      </div>
    </main>
  );
}

export async function SigninAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
}

export default Signup;
