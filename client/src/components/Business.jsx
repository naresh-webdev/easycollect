/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { features } from "../constants";
import styles, { layout } from "../constants/styles";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      index !== features.length - 1 ? "mb-5" : "mb-0"
    } feature-card`}
  >
    <div
      className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt={title} className="h-[50%] w-[50%] object-contain" />
    </div>
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="mb-1 font-poppins text-[18px] font-semibold leading-[23px] text-white">
        {title}
      </h4>
      <p className="mb-1 font-poppins text-[16px] font-normal leading-[24px] text-dimWhite">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Simplify Group Finances <br className="hidden sm:block" /> with
          EasyCollect.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[490px]`}>
          With EasyCollect, effortlessly manage group fund collection by sharing
          the session link. Participants can join and pay the required amount
          seamlessly. Easily view the list of paid members upon cohmpletion
        </p>

        <Link to={"/signup"}>
          <Button styles="mt-10">Get Started</Button>
        </Link>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
