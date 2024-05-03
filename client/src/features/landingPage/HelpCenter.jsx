import { ToastContainer } from "react-toastify";
import styles from "../../constants/styles";
import { Form } from "react-router-dom";
import Button from "../../components/Button";
import { useState, useRef } from "react";
import Spinner from "../../components/Spinner";
import { notifyFailure, notifySuccess } from "../../utils/notifications";
import emailjs from "@emailjs/browser";

function HelpCenter() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      console.log("response from sending contact form", res);
      setLoading(false);
      notifySuccess("Message sent successfully");
      form.current.reset();
    } catch (error) {
      console.log("error from sending contact form", error);
      notifyFailure("Failed to send message");
      setLoading(false);
    }
  };
  return (
    <section
      className={`${styles.flexCenter} main-full h-full w-full bg-primary`}
    >
      <Spinner isOpen={loading} />
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

          <div className={`${styles.flexCenter} flex-col`}>
            <h1 className=" text-center font-poppins text-3xl text-[18px] font-semibold text-primary">
              Contact Us
            </h1>
            <p className="max-w-[250px] text-center font-poppins text-[14px] text-primary">
              📞+91 9360565211,
              <br /> 📧 naresh2004.m@gmail.com
              <br /> 🏠 3A, Kalaignar Street, College Road, Tindivanam,
              TamilNadu
            </p>
          </div>

          <div className="mx-8 flex flex-col gap-3">
            <form ref={form} className="mb-1 mt-4" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="font-poppins font-medium text-primary"
                >
                  Your Name
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="font-poppins font-medium text-primary"
                >
                  Your Email
                </label>
                <input
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="font-poppins font-medium text-primary"
                >
                  Your Message
                </label>
                <textarea
                  className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  required
                  rows="4"
                />
              </div>

              <Button type="submit" disabled={loading} styles={`w-full mt-2`}>
                send message
              </Button>
            </form>
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

export default HelpCenter;
