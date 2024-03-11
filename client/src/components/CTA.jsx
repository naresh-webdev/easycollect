import { Link } from "react-router-dom";
import styles from "../constants/styles";
import Button from "./Button";

function CTA() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow flex-col rounded-[20px] sm:flex-row`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[490px]`}>
          EasyCollect, The smarter choice for seamless finance management.
        </p>
      </div>

      <div className={`${styles.flexCenter} ml-0 mt-10 sm:ml-10 sm:mt-0`}>
        <Link to={"/signup"}>
          <Button styles="mt-10">Get Started</Button>
        </Link>
      </div>
    </section>
  );
}

export default CTA;
