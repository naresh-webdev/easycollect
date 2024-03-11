import { Link } from "react-router-dom";
import { card } from "../assets";
import styles, { layout } from "../constants/styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find superior group <br className="hidden sm:block" /> fund
          efficiency.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[490px]`}>
          Experience the unparalleled efficiency of EasyCollect in managing
          group funds, ensuring streamlined operations and optimal financial
          outcomes.
        </p>

        <Link to={"/signup"}>
          <Button styles="mt-10">Get Started</Button>
        </Link>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="h-[100%] w-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
