import { card } from "../assets";
import styles, { layout } from "../constants/styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find superior group <br className="sm:block hidden" /> fund
          efficiency.
        </h2>
        <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
          Experience the unparalleled efficiency of EasyCollect in managing
          group funds, ensuring streamlined operations and optimal financial
          outcomes.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
