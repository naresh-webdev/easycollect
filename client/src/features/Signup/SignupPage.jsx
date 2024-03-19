import { Form, Link, useNavigate } from "react-router-dom";
import styles, { layout } from "../../constants/styles";
import { avatar1 } from "../../assets";
import Button from "../../components/Button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = () =>
  toast.success("Welcome! Signup successful.", {
    autoClose: 5000,
    theme: "light",
  });
const notifyFailure = () => {
  toast.error("Signup failed, Try again", {
    autoClose: 5000,
    theme: "light",
  });
};

function SignupPage() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = formData;
    if (!username || !email || !password) {
      setErrorMessage("Please fill out all fields");
      notifyFailure();
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message.split(" ").slice(0, 3).join(" "));
        notifyFailure();
        return;
      }
      if (res.ok) {
        notifySuccess();
        setTimeout(() => {
          navigate("/dashboard");
        }, 2500);
      }
    } catch (error) {
      setErrorMessage(error.message);
      notifyFailure();
      return;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={`${styles.flexCenter} w-full bg-primary xs:h-full`}>
      <ToastContainer
        limit={1}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={`text-bold top-5 z-[100] -translate-x-1/2 text-center text-xl `}
      />
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
            <Form className="my-8" onSubmit={handleSubmit}>
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
                  name="username"
                  id="username"
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
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
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
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
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className=" flex items-center gap-2">
                <input
                  className="h-[14px] w-[14px] cursor-pointer rounded-md border-[1px] border-[#D8DADC] align-middle outline-none outline-0"
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  required
                  defaultChecked
                />
                <label
                  htmlFor="agreeTerms"
                  className="font-poppins text-[14px]  text-primary"
                >
                  I agree to the terms and conditions
                </label>
              </div>

              <Button styles="mt-5 w-full" type="submit" disabled={loading}>
                Create Account
              </Button>
            </Form>

            <Button
              styles="-mt-7"
              type="secondary"
              onClick={notifySuccess}
              disabled={loading}
            >
              Sign up with Google
            </Button>
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
