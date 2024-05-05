import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./features/landingPage/LandingPage";
import AppLayout from "./components/AppLayout";
import SignupPage from "./features/Signup/SignupPage";
import LoginPage from "./features/Login/LoginPage";
import Dashboard from "./features/Dashboard/DashboardPage";
import Profile from "./features/Dashboard/Profile";
import CreateSession from "./features/Session/CreateSession";
import Session from "./features/Session/Session";
import JoinSession from "./features/Session/JoinSession";
import JoinSessionUsingId from "./features/Session/JoinSessionUsingId";
import Payment from "./components/Payment";
import HelpCenter from "./features/landingPage/HelpCenter";
import TermsAndConditions from "./features/landingPage/TermsAndConditions";
import PrivacyPolicy from "./features/landingPage/PrivacyPolicy";
import RefundsCancellations from "./features/landingPage/RefundsCancellations";

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
          path: "/help",
          element: <HelpCenter />,
        },
        {
          path: "/termsandconditions",
          element: <TermsAndConditions />,
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/refundsandcancellations",
          element: <RefundsCancellations />,
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
        {
          path: "/userprofile",
          element: <Profile />,
        },
        {
          path: "/createsession",
          element: <CreateSession />,
        },
        {
          path: "/session/:id",
          element: <Session />,
        },
        {
          path: "/joinsession/",
          element: <JoinSession />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/session/joinSessionUsingId/:id",
          element: <JoinSessionUsingId />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
