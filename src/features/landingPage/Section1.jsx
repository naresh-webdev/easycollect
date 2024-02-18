import LandingImage from "../../imgs/landingPage1.png";
import Button from "../../ui/Button";

function Section1() {
  return (
    <section className="mw-full absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
      <div className=" flex flex-col-reverse text-center sm:px-4 sm:pb-5 md:flex-row md:items-center md:justify-around md:px-14  md:text-start ">
        <div className="sm:basis-1/2">
          <p className="my-2 mb-6 px-14 text-center text-2xl text-main_white sm:mt-0 sm:px-24 sm:text-2xl md:px-4 md:text-start md:text-3xl  md:leading-[42px] lg:mb-8 lg:mt-0 lg:text-4xl lg:leading-[46px] xl:my-4 xl:mb-14 2xl:my-8 2xl:mb-8 2xl:text-6xl 2xl:font-normal 2xl:leading-[64px]">
            Simplify Group Finances with{" "}
            <span className="text-main_neon">EasyCollect</span> - Your
            All-in-One Fund Collection Solution!
          </p>
          <Button
            className="text-md ml-4 mt-4 lg:text-2xl 2xl:ml-6"
            to={"/signup"}
          >
            Get Started
          </Button>
        </div>

        <div className="basis-2/5 sm:inline-block">
          {/*main image goes here !*/}
          <img
            src={LandingImage}
            alt="Landing page img"
            // className="h-[515px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
