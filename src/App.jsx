import LandingPage from "./features/landingPage/LandingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ui/Error";
import { SendMailAction } from "./features/landingPage/Section4";
import Signup, { SigninAction } from "./features/signup/Signup";
import Login, { LoginAction } from "./features/login/Login";

const router = createBrowserRouter([
  {
    element: <LandingPage />,
    errorElement: <Error />,
    path: "/",
    action: SendMailAction,
  },
  {
    element: <Signup />,
    errorElement: <Error />,
    path: "/signup",
    action: SigninAction,
  },
  {
    element: <Login />,
    errorElement: <Error />,
    path: "/login",
    action: LoginAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
