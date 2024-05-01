import { Form, Link, useNavigate } from "react-router-dom";
import styles from "../../constants/styles";
import { avatar1 } from "../../assets";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyFailure } from "../../utils/notifications";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import {
  signInStart as signupStart,
  signInFailure as signupFailure,
  signInSuccess as signupSuccess,
} from "../../redux/user/userSlice";
import OAuth from "../../components/OAuth";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [displayname, setDisplayname] = useState("");
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
    if (!username || !email || !password || !displayname) {
      dispatch(signupFailure("Please fill out all fields"));
      notifyFailure("Please fill out all fields");
      return;
    }
    try {
      dispatch(signupStart());

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username,
          displayname,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        if (data.message.includes("duplicate key error")) {
          notifyFailure("Username or email already exists 😔");
          dispatch(signupFailure(data.message));
          return;
        }
        notifyFailure("Signup failed 😔");
        dispatch(signupFailure(data.message));
        return;
      }
      if (res.ok) {
        notifySuccess("Signup successful 🎉");

        setTimeout(() => {
          dispatch(signupSuccess(data));
          navigate("/dashboard");
        }, 2500);
      }
    } catch (error) {
      console.log(error, "error from signup page from line 83");
      dispatch(signupFailure(error.message));
      notifyFailure("Signup failed 😔");
      return;
    } finally {
      setUsername(() => "");
      setEmail(() => "");
      setPassword(() => "");
      setDisplayname(() => "");
    }
  }

  return (
    <section className={`${styles.flexCenter} w-full bg-primary xs:h-full`}>
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
            <Form className="mb-1 mt-8" onSubmit={handleSubmit}>
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
                  value={username}
                  onChange={(e) =>
                    setUsername(() => e.target.value.toLowerCase())
                  }
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="displayName"
                  className="font-poppins font-medium text-primary"
                >
                  Displayname
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none "
                  type="text"
                  name="displayname"
                  id="displayname"
                  value={displayname}
                  onChange={(e) => setDisplayname(() => e.target.value)}
                  placeholder="Enter your Displayname"
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
                  value={email}
                  onChange={(e) => setEmail(() => e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(() => e.target.value)}
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

export default SignupPage;
