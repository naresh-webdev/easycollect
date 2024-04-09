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
    "/",
  ];
  const formPageClass = isAuthenticated ? "main-full-auth" : "main-full";

  return (
    <div
      className={`${pathname !== "/" ? "h-screen" : ""} w-full overflow-x-hidden   bg-primary`}
    >
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`bg-primary ${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <main
        className={`${formPaths.includes(pathname) ? formPageClass : ""}  w-full overflow-y-auto  overflow-x-hidden`}
      >
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
