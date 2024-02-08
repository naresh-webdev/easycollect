import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

function LandingPage() {
  return (
    <div className="">
      <div className="relative h-dvh">
        <Header />
        <Section1 className="" />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default LandingPage;
