import LandingImage from "../../imgs/landingPage1.png";
import Button from "../../ui/Button";

function Section1() {
  return (
    <section className="md:py-5">
      <div className="py-10 text-center sm:flex sm:items-center sm:justify-around sm:px-4 sm:pb-5 sm:text-start md:px-14 ">
        <div className="sm:basis-1/2">
          <p className="mt-4 px-8 text-main_white sm:mt-0 sm:px-4 sm:text-2xl md:text-3xl  md:leading-[42px] lg:mt-0 lg:text-4xl lg:leading-[46px] 2xl:mb-5 2xl:text-6xl 2xl:font-normal 2xl:leading-[64px]">
            Simplify Group Finances with EasyCollect - Your All-in-One Fund
            Collection Solution!
          </p>
          <Button className="text-md ml-4 mt-4 lg:text-2xl 2xl:ml-6">
            Get Started
          </Button>
        </div>

        <div className="hidden basis-2/5 sm:inline-block">
          {/*main image goes here !*/}
          <img
            src={LandingImage}
            alt="Landing page image"
            // className="h-[515px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
