import Title from "./Title";
import arrow from "../../imgs/arrow.svg";

function Section3() {
  return (
    <section className="mb-6 sm:mb-10 lg:h-dvh">
      <Title>Watch a quick video</Title>
      <div className="flex items-center justify-center">
        <div className="relative px-4 sm:mt-8 lg:mt-20">
          <iframe
            className="h-full w-full sm:h-[265px] sm:w-[510px] md:h-[315px] md:w-[560px]"
            src="https://www.youtube.com/embed/KslUg0YAGmY?si=QdIXGmyldyPEe0pI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <img
            src={arrow}
            alt="arrow img"
            className="absolute z-10 hidden rotate-45 lg:left-[-20px] lg:top-[-50px] lg:inline-block   xl:left-[-50px] xl:top-[-50px]"
          />

          <p className="absolute hidden max-w-56 text-main_white lg:left-[-220px] lg:top-[-100px] lg:inline-block xl:left-[-260px] xl:top-[-120px]">
            Wondering how this service benefits you? Watch a quick video for
            applications and an overview of effective usage.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section3;
