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
      className={`w-full overflow-x-hidden overflow-y-hidden  bg-primary ${pathname === "/signup" || pathname === "/login" ? "h-screen" : ""}`}
    >
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <div
        className={`${styles.paddingX} ${styles.flexCenter} ${pathname === "/signup" || pathname === "/login" ? "h-[10%]" : ""}`}
      >
        <div className={`bg-primary ${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <main
        className={`${pathname === "/signup" || pathname === "/login" ? `h-[85%]` : ""} w-full overflow-hidden`}
      >
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
