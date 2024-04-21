import { useState } from "react";
import Button from "../../components/Button";
import styles from "../../constants/styles";
import { Form } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyFailure } from "../../utils/notifications";
import { useNavigate } from "react-router-dom";

function CreateSession() {
  const [formData, setFormData] = useState({
    sessionName: "",
    fundAmount: "",
    validity: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { sessionName, fundAmount, validity, description } = formData;

    if (!sessionName || !fundAmount || !validity || !description) {
      notifyFailure("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      const addedAmount = parseInt(fundAmount) + fundAmount * 0.05;
      console.log(addedAmount, "addedAmount");
      const res = await fetch("/api/session/createSession", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          sessionName,
          fundAmount: addedAmount,
          validity,
          description,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        notifyFailure("Session Creation Failed 😔");
        console.error(data.message, "error in session creation");
        return;
      }
      if (res.ok) {
        notifySuccess("Session Created 🎉");
        setTimeout(() => {
          navigate(`/session/${data.id}`);
        }, 2500);
        console.log(data, "data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFormData({
        sessionName: "",
        fundAmount: "",
        validity: "",
        description: "",
      });
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.flexCenter} h-full w-full bg-primary`}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
        className={`${styles.boxWidth} ${styles.flexCenter} mt-2 rounded-sm`}
      />

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
              Enter Your Session Details! 📝
            </h1>
            <p className="text-center font-poppins text-[14px] text-primary">
              🌟 Every great fundraiser starts with a simple form.
            </p>
          </div>

          <div className="mx-8 flex flex-col gap-3">
            <Form className="mb-1 mt-8" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="sessionName"
                  className="font-poppins font-medium text-primary"
                >
                  Session Name
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="text"
                  name="sessionName"
                  id="sessionName"
                  placeholder="Enter Session Name"
                  onChange={handleChange}
                  required
                  value={formData.sessionName}
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="fundAmount"
                  className="font-poppins font-medium text-primary"
                  title="Transaction Fee will be added on top of this amount"
                >
                  Fund Amount (In ₹){" "}
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="Number"
                  name="fundAmount"
                  id="fundAmount"
                  placeholder="Enter Fund Amount"
                  onChange={handleChange}
                  required
                  value={formData.fundAmount}
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="validity"
                  className="font-poppins font-medium text-primary"
                >
                  Valid For (In Days)
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="Number"
                  name="validity"
                  id="validity"
                  placeholder="Enter Validity in Days"
                  onChange={handleChange}
                  required
                  value={formData.validity}
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="description"
                  className="font-poppins font-medium text-primary"
                >
                  Description
                </label>
                <textarea
                  className="min-h-[100px] rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  name="description"
                  id="description"
                  placeholder="Fill the description here..."
                  onChange={handleChange}
                  required
                  value={formData.description}
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

export default CreateSession;
