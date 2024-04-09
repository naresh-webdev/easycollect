import { Form, useParams } from "react-router-dom";
import Button from "../../components/Button";
import styles, { layout } from "../../constants/styles";
import { useState } from "react";

function JoinSession() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log(id, "id");

  const [sessionId, setSessionId] = useState("");

  const handleSessionId = (e) => {};

  const handleSubmit = async () => {};

  return (
    <section className={`${styles.flexCenter} h-full w-full bg-primary`}>
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} overflow-hidden`}
      >
        <div
          className={`relative z-[5] h-full w-[90%]  max-w-[490px] overflow-hidden rounded-md  bg-white  px-2 py-6 ss:w-[60%] sm:w-[50%] lg:w-[40%]`}
        >
          {/* <div className={`${styles.flexCenter}`}>
            <img src={avatar1} alt="logo" className=" h-[40px] w-[40px]" />
          </div> */}

          <div className="">
            <h1 className=" text-center font-poppins text-3xl text-[18px] font-semibold text-primary">
              Connect & Contribute 🌟
            </h1>
            <p className="text-center font-poppins text-[14px] text-primary">
              Your journey to impact starts here.
            </p>
          </div>

          <div className="mx-8 flex flex-col gap-3">
            <Form className="mb-1 mt-8" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="sessionName"
                  className="font-poppins font-medium text-primary"
                >
                  Session Id
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="text"
                  name="sessionId"
                  id="sessionId"
                  placeholder="Enter Session Id"
                  onChange={handleSessionId}
                  required
                  value={formData.sessionName}
                />
              </div>

              <Button type="submit" disabled={loading} styles={`w-full mt-2`}>
                Create Session 🚀
              </Button>
            </Form>
          </div>
        </div>

        {/* TODO: gradient */}

        {/* TODO: gradient */}
      </div>
      <div className="white__gradient fixed bottom-0 right-[70%] z-[0] h-[40%] w-[40%] rounded-full" />
      <div className="blue__gradient fixed -right-[25%] -top-[20%] z-[0] h-[60%] w-[60%] rounded-full" />
    </section>
  );
}

export default JoinSession;
