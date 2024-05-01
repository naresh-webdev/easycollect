import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {
  signInSuccess,
  userLogout,
  signInFailure,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { notifySuccess, notifyFailure } from "../utils/notifications";

import Button from "./Button";
import { useState } from "react";
import Spinner from "./Spinner";

function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Google OAuth - function
  const handleGoogleClick = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          displayname: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          photoURL: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        notifySuccess("Signup successful 🎉");
        setTimeout(() => {
          dispatch(signInSuccess(data));
          navigate("/dashboard");
        }, 5000);
      }
    } catch (error) {
      notifyFailure("Signup failed 😔");
      console.error(error.message);
      dispatch(signInFailure(error.message));
      dispatch(userLogout());
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button type="secondary" onClick={handleGoogleClick} styles={`mt-2`}>
        Continue with Google
      </Button>
      {loading && <Spinner isOpen={loading} />}
    </>
  );
}

export default OAuth;
