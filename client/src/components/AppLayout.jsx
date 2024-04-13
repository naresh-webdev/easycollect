import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Loader from "./Loader";
import styles from "../constants/styles";
import { useSelector } from "react-redux";

function AppLayout() {
  const navigation = useNavigation();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const isAuthenticated = currentUser !== null;
  console.log(navigation.state, "navigation", pathname);
  const isLoading = navigation.state === "loading";

  const formPaths = [
    "/login",
    "/signup",
    "/createsession",
    "/joinsession",
    "/dashboard",
  ];

  let formPageClass = isAuthenticated
    ? "main-full-auth flex"
    : "main-full flex";
  if (pathname === "/") formPageClass = "";
  console.log(pathname, "pathname");

  return (
    <div
      className={`hide-scrollbar flex min-h-screen w-full flex-col  overflow-x-hidden  bg-primary`}
    >
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`bg-primary ${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <main
        className={`${formPaths.includes(pathname) ? formPageClass : ""} ${pathname === "/dashboard" ? "items-start" : "items-center"} hide-scrollbar  w-full flex-1  justify-center overflow-y-auto  overflow-x-hidden`}
      >
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
