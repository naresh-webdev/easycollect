import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./features/landingPage/LandingPage";
import AppLayout from "./components/AppLayout";
import SignupPage from "./features/Signup/SignupPage";
import LoginPage from "./features/Login/LoginPage";
import Dashboard from "./features/Dashboard/DashboardPage";
const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
