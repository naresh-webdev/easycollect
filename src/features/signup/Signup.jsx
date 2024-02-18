import { Form, Link } from "react-router-dom";
import Button from "../../ui/Button";
import Title from "../landingPage/Title";
import Reviews from "./Reviews";

function Signup() {
  return (
    <main className="grid h-dvh place-items-center items-center font-['Montserrat']">
      {/* container */}
      <div className="flex h-3/4 w-3/4 rounded-sm bg-main_white_dim shadow-2xl">
        {/* col_1 */}
        <div className="flex basis-1/2 flex-col items-center justify-center gap-20 bg-bg_gradient_1">
          <header className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-semibold text-main_white">
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

        <div className="flex basis-1/2 flex-col items-center px-4 py-4">
          <h2 className="pt-8 text-center text-3xl font-extrabold">
            EasyCollect
          </h2>
          <h4 className="pt-4 text-center text-xs font-bold">
            Already have an account?
          </h4>
          <Link className="text-center text-sm font-semibold text-main_pink hover:text-bg_gradient_1">
            Login here
          </Link>

          <Form className="flex w-4/6 flex-col space-y-4 pt-8" method="POST">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className=" cursor-pointer border-b-2 border-gray-400 bg-transparent hover:border-gray-700 hover:outline-none focus:outline-none focus-visible:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" cursor-pointer border-b-2 border-gray-400 bg-transparent hover:border-gray-700 hover:outline-none focus:outline-none focus-visible:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className=" cursor-pointer border-b-2 border-gray-400 bg-transparent hover:border-gray-700 hover:outline-none focus:outline-none focus-visible:outline-none"
            />

            <Button type="secondary">SIGNUP</Button>
            <p className="relative text-center">
              <span className="before:absolute before:left-0 before:top-[12px] before:h-0.5 before:w-[44%] before:bg-gray-400 before:content-[''] after:absolute after:right-0 after:top-[12px] after:h-0.5 after:w-[44%] after:bg-gray-400 after:content-['']">
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
