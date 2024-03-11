import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Loader from "./Loader";
import styles from "../constants/styles";

function AppLayout() {
  const navigation = useNavigation();
  const { pathname } = useLocation();
  console.log(navigation.state, "navigation", pathname);
  const isLoading = navigation.state === "loading";

  return (
    <div
      className={`${pathname !== "/" ? "h-screen" : ""} w-full overflow-x-hidden   bg-primary`}
    >
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`bg-primary ${styles.boxWidth}`}>
          <Navbar isAuthenticated={true} />
        </div>
      </div>
      <main
        className={`${pathname === "/login" || pathname === "/signup" ? "main-full" : ""} w-full overflow-y-auto overflow-x-hidden`}
      >
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
