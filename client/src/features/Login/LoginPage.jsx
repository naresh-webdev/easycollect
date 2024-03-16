import { Form, Link } from "react-router-dom";
import styles from "../../constants/styles";
import { avatar1 } from "../../assets";
import Button from "../../components/Button";
function LoginPage() {
  return (
    <section className={`${styles.flexCenter} h-full w-full  bg-primary`}>
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} overflow-hidden`}
      >
        <div
          className={`relative z-[5] h-full w-[90%] max-w-[490px] rounded-md bg-white py-8 ss:w-[60%] sm:w-[50%] lg:w-[40%]`}
        >
          <div className={`${styles.flexCenter}`}>
            <img src={avatar1} alt="logo" className=" h-[40px] w-[40px]" />
          </div>

          <div>
            <h1 className="mt-4 text-center font-poppins text-3xl text-[18px] font-semibold text-primary">
              Hi, Welcome!👋
            </h1>
            <p className="text-center font-poppins text-[14px] text-primary">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="cursor-pointer text-primary underline"
              >
                Signup
              </Link>
            </p>
          </div>

          <div className="mx-8 flex flex-col gap-3">
            <Form className="my-8">
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
            </Form>

            <Button styles={"mt-[-16px]"}>Login</Button>

            <Button type="secondary">Continue with Google</Button>
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

export default LoginPage;