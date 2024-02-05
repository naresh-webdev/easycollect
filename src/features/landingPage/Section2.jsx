import illustration1 from "../../imgs/f1.svg";
import illustration2 from "../../imgs/f2.svg";
import illustration3 from "../../imgs/f3.svg";

import Title from "./Title";

function Section2() {
  return (
    <section className="dvh h-full p-5 ">
      <Title>Get Started in 3 Steps</Title>

      {/*TODO Row - 1*/}
      <div className="mt-24 flex items-center justify-center gap-24 px-10">
        <div className="flex flex-col justify-center">
          <h4 className="text-5xl font-thin text-main_pink">
            1. Create a Room
          </h4>
          <p className="font-md ml-12 mt-5 max-w-md text-xl leading-7 text-main_white">
            Once Authenticated,Users can fill in a quick form to "Create a Room"
            (session), from there they can share unique link of session to
            invite other members to the room so that they can make payments and
            upon successful payments their name would be in the list of paid
            members.
          </p>
        </div>
        <div>
          <img
            className="max-h-96"
            src={illustration1}
            alt="illustration img 1"
          />
        </div>
      </div>

      {/* Row - 2 */}
      <div className="mt-24 flex items-center justify-center gap-24 px-10">
        <div>
          <img
            className="max-h-96"
            src={illustration2}
            alt="illustration img 2"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="text-5xl font-thin text-main_pink">
            2. Fund Collection
          </h4>
          <p className="font-md ml-12 mt-5 max-w-md text-xl leading-7 text-main_white">
            Based on the Input Information given at the time of Room Creation, A
            notice which contains the content of session and an option to Pay
            required Amount will be available, Members who join through link can
            review the details and pay the amount.
          </p>
        </div>
      </div>

      {/*TODO Row - 3*/}
      <div className="mt-24 flex items-center justify-center gap-24 px-10 pb-24">
        <div className="flex flex-col justify-center">
          <h4 className="text-5xl font-thin text-main_pink">
            3. Fund Settlement
          </h4>
          <p className="font-md ml-12 mt-5 max-w-md text-xl leading-7 text-main_white">
            Once the Admin decides to stop collecting funds, he/she can close
            the room, thereby the collected fund will be transferred to Admin
            bank account
          </p>
        </div>
        <div>
          <img
            className="max-h-96"
            src={illustration3}
            alt="illustration img 1"
          />
        </div>
      </div>
    </section>
  );
}

export default Section2;
