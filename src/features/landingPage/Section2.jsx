import illustration1 from "../../imgs/f1.svg";
import illustration2 from "../../imgs/f2.svg";
import illustration3 from "../../imgs/f3.svg";

import Title from "./Title";

function Section2() {
  return (
    <section className="mb-8 sm:mb-20 lg:h-full">
      <Title>Get Started in 3 Steps</Title>

      <div className="">
        {/*TODO Row - 1*/}
        <div className="mt-8 flex items-center justify-center px-8 sm:mt-24 sm:gap-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center sm:p-0 sm:px-6">
            <h4 className="text-xl text-main_pink sm:text-2xl sm:font-normal md:text-3xl md:font-thin lg:text-5xl lg:font-thin">
              1. Create a Room
            </h4>
            <p className="font-md md:text-md ml-5 mt-3 max-w-md text-sm text-main_white sm:ml-6  sm:mt-5 md:ml-7 md:leading-6 lg:ml-12 lg:text-xl lg:leading-7">
              Once Authenticated,Users can fill in a quick form to "Create a
              Room" (session), from there they can share unique link of session
              to invite other members to the room so that they can make payments
              and upon successful payments their name would be in the list of
              paid members.
            </p>
          </div>
          <div>
            <img
              className="hidden max-h-96 sm:inline-block"
              src={illustration1}
              alt="illustration img 1"
            />
          </div>
        </div>

        {/* Row - 2 */}
        <div className="mt-8 flex items-center justify-center px-8 sm:mt-24 sm:gap-2 md:gap-16 lg:gap-24">
          <div>
            <img
              className="hidden max-h-96 sm:inline-block"
              src={illustration2}
              alt="illustration img 2"
            />
          </div>
          <div className="flex flex-col justify-center sm:p-0 sm:px-6">
            <h4 className="text-xl text-main_pink sm:text-2xl sm:font-normal md:text-3xl md:font-thin lg:text-5xl lg:font-thin">
              2. Fund Collection
            </h4>
            <p className="font-md md:text-md ml-5 mt-3 max-w-md text-sm text-main_white sm:ml-6  sm:mt-5 md:ml-7 md:leading-6 lg:ml-12 lg:text-xl lg:leading-7">
              Based on the Input Information given at the time of Room Creation,
              A notice which contains the content of session and an option to
              Pay required Amount will be available, Members who join through
              link can review the details and pay the amount.
            </p>
          </div>
        </div>

        {/*TODO Row - 3*/}
        <div className="mt-8 flex items-center justify-center px-8 sm:mt-24 sm:gap-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center sm:p-0 sm:px-6">
            <h4 className="text-xl text-main_pink sm:text-2xl sm:font-normal md:text-3xl md:font-thin lg:text-5xl lg:font-thin">
              3. Fund Settlement
            </h4>
            <p className="font-md md:text-md ml-5 mt-3 max-w-md text-sm text-main_white sm:ml-6  sm:mt-5 md:ml-7 md:leading-6 lg:ml-12 lg:text-xl lg:leading-7">
              Once the Admin decides to stop collecting funds, he/she can close
              the room, thereby the collected fund will be transferred to Admin
              bank account
            </p>
          </div>
          <div>
            <img
              className="hidden max-h-96 sm:inline-block"
              src={illustration3}
              alt="illustration img 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
