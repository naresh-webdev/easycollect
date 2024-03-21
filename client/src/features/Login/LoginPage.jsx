import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import styles from "../../constants/styles";
import Button from "../../components/Button";

import { avatar1 } from "../../assets";

import { notifySuccess, notifyFailure } from "../../utils/notifications";
import { ToastContainer } from "react-toastify";

function LoginPage() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setErrorMessage("Please fill out all fields");
      notifyFailure("Please fill out all fields");
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage(data.message.split(" ").slice(0, 3).join(" "));
        console.log("error in login :", data);
        notifyFailure("Login failed 😔");
        return;
      }
      if (res.ok) {
        notifySuccess("Signup successful 🎉");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2500);
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
      notifyFailure("Signup failed 😔");
      return;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={`${styles.flexCenter} h-full w-full  bg-primary`}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
        className={`${styles.boxWidth} ${styles.flexCenter} mt-2 rounded-sm`}
      />
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
            <Form className="mb-2 mt-8" onSubmit={handleSubmit}>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" disabled={loading} styles={`w-full mt-5`}>
                Login
              </Button>
            </Form>

            <Button
              type="secondary"
              onClick={() => notifySuccess("login Success")}
            >
              Continue with Google
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

export default LoginPage;
