import LandingImage from "../../imgs/landingPage1.png";
import Button from "../../ui/Button";

function Section1() {
  return (
    <div className="flex items-center justify-around gap-5 sm:mt-2 md:mt-0">
      <div className="sm:basis-2/5">
        <p className="mt-12 w-4/5 p-4 text-2xl text-main_white sm:mt-0 sm:w-full lg:mt-0 lg:max-w-lg lg:text-4xl lg:leading-[46px]">
          Simplify Group Finances with EasyCollect - Your All-in-One Fund
          Collection Solution!
        </p>
        <Button className="text-md ml-4 mt-4 lg:text-2xl">Get Started</Button>
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
  );
}

export default Section1;
