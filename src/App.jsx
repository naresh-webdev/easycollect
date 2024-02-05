import LandingPage from "./features/landingPage/LandingPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ui/Error";
import { SendMailAction } from "./features/landingPage/Section4";

const router = createBrowserRouter([
  {
    element: <LandingPage />,
    errorElement: <Error />,
    path: "/",
    action: SendMailAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
