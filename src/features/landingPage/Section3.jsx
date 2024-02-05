import Title from "./Title";
import arrow from "../../imgs/arrow.svg";

function Section3() {
  return (
    <section className="h-dvh">
      <Title>Watch a quick video</Title>
      <div className=" flex items-center justify-center">
        <div className="relative">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KslUg0YAGmY?si=QdIXGmyldyPEe0pI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <img
            src={arrow}
            alt="arrow img"
            className="absolute left-[-50px] top-[-50px] z-10 rotate-45"
          />

          <p className="absolute left-[-260px] top-[-120px] max-w-56 text-main_white">
            Wondering how this service benefits you? Watch a quick video for
            applications and an overview of effective usage.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section3;
