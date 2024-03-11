import styles from "../constants/styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
          <img src={discount} alt="discount" className="h-8 w-8" />
          <p className={`${styles.paragraph} ml-2 ss:ml-0`}>
            <span className="text-white">100% SAFE</span> AND
            <span className="text-white"> SECURE </span> PLATFORM
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="flex-1 font-poppins text-[46px] font-semibold leading-[75px] text-white xs:text-[52px] ss:text-[72px] ss:leading-[100px]">
            Effortless
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Group Fund</span>
          </h1>
          <Link to="/signup">
            <div className="mr-0 hidden ss:flex md:mr-4">
              <GetStarted />
            </div>
          </Link>
        </div>

        <h1 className="w-full font-poppins text-[46px]  font-semibold leading-[75px] text-white xs:text-[52px] ss:text-[68px] ss:leading-[100px]">
          Management.
        </h1>

        <p className={`${styles.paragraph} mt-5 max-w-[490px]`}>
          At EasyCollect, we prioritize convenience in selecting the best
          payment pooling solutions for you. Our thorough analysis includes
          factors like fees and rates.
        </p>
      </div>

      <div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <img
          src={robot}
          alt="billing"
          className="relative z-[5] h-[100%] w-[100%]"
        />
        <div className="pink__gradient absolute top-0 z-[0] h-[10%] w-[40%]"></div>
        <div className="white__gradient absolute bottom-40 z-[1] h-[10%] w-[80%] rounded-full"></div>
        <div className="blue__gradient absolute bottom-20 right-20 z-[0] h-[10%] w-[50%]"></div>{" "}
        */
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Link to="/signup">
          <GetStarted />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
