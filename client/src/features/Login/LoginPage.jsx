import { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import styles from "../../constants/styles";
import Button from "../../components/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../../redux/user/userSlice";

import { avatar1 } from "../../assets";

import { notifySuccess, notifyFailure } from "../../utils/notifications";
import { ToastContainer } from "react-toastify";
import OAuth from "../../components/OAuth";
import Spinner from "../../components/Spinner";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = currentUser !== null;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();

      console.log(data, "data from login page");
      if (data.success === false) {
        if (data.status === 400) {
          notifyFailure("Invalid credentials 😔");
        } else if (data.status === 404) {
          notifyFailure("User not found 😔");
        } else {
          notifyFailure("Login failed 😔");
        }
        dispatch(signInFailure(data.message));
        return;
      }
      if (res.ok) {
        notifySuccess("Login successful 🎉");
        setTimeout(() => {
          dispatch(signInSuccess(data));
          navigate("/dashboard");
        }, 2500);
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      notifyFailure("Login failed 😔");
      console.log(error, "error from login page line 69");
    } finally {
      setEmail("");
      setPassword("");
    }
  }

  return (
    <section className={`${styles.flexCenter} h-full w-full  bg-primary`}>
      <Spinner isOpen={loading} />
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
            <Form className="mb-1 mt-8" onSubmit={handleSubmit}>
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  value={email}
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
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  value={password}
                />
              </div>
              <Button type="submit" disabled={loading} styles={`w-full mt-5`}>
                Login
              </Button>
            </Form>

            <OAuth />
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
