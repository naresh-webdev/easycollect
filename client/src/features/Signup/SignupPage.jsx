import { Form, Link } from "react-router-dom";
import styles, { layout } from "../../constants/styles";
import { avatar1 } from "../../assets";
import Button from "../../components/Button";
function SignupPage() {
  return (
    <section className={`${styles.flexCenter} w-full bg-primary xs:h-full`}>
      <div className={`${styles.boxWidth} ${styles.flexCenter} my-4`}>
        <div
          className={`relative z-[5] my-4 w-[90%] max-w-[490px]  rounded-md bg-white py-8 ss:w-[60%] sm:w-[50%] lg:w-[40%]`}
        >
          <div className={`${styles.flexCenter}`}>
            <img src={avatar1} alt="logo" className=" h-[40px] w-[40px]" />
          </div>

          <div>
            <h1 className="mt-4 text-center font-poppins text-3xl text-[18px] font-semibold text-primary">
              Create Account
            </h1>
            <p className="text-center font-poppins text-[14px] text-primary">
              Already have an account?{" "}
              <Link
                to="/login"
                className="cursor-pointer text-primary underline"
              >
                Login
              </Link>
            </p>
          </div>

          <div className="mx-8 flex flex-col gap-3">
            <Form className="my-8">
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="userName"
                  className="font-poppins font-medium text-primary"
                >
                  Username
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none "
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="font-poppins font-medium text-primary"
                >
                  Email
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="font-poppins font-medium text-primary"
                >
                  Password
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className=" flex items-center gap-2">
                <input
                  className="h-[14px] w-[14px] cursor-pointer rounded-md border-[1px] border-[#D8DADC] align-middle outline-none outline-0"
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                />
                <label
                  htmlFor="agreeTerms"
                  className="font-poppins text-[14px]  text-primary"
                >
                  I agree to the terms and conditions
                </label>
              </div>
            </Form>

            <Button>Create Account</Button>

            <Button type="secondary">Sign up with Google</Button>
          </div>
        </div>

        {/* TODO: gradient */}

        {/* TODO: gradient */}
      </div>
      <div className="white__gradient fixed bottom-0 right-[70%] z-[0] h-[40%] w-[40%] rounded-full" />
      <div className="blue__gradient fixed -right-[25%] -top-[20%] z-[0] h-[60%] w-[60%] rounded-full" />
    </section>
  );
}

export default SignupPage;
