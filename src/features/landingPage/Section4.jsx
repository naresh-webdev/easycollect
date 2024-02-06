import { Form, redirect } from "react-router-dom";
import Title from "./Title";
import Button from "../../ui/Button";
import Footer from "./Footer";

function Section4() {
  return (
    <section className="md:h-full lg:flex lg:h-dvh lg:flex-col lg:justify-between">
      <div>
        <Title>Get in Touch</Title>
        <div className="lg:flex lg:items-center lg:justify-center">
          <div
            className="md:justfiy-center lg:md-16 flex
         h-[96] max-w-full items-center justify-center sm:px-5  md:my-16 md:gap-8 md:px-10 lg:my-8 lg:items-center lg:gap-14 xl:my-24 xl:gap-16 xl:px-16 "
          >
            <p className="hidden basis-1/2 text-main_white md:inline-block md:p-5 md:text-xl lg:p-0 lg:text-2xl xl:self-start">
              Have a question, suggestion, or just want to say hello? Fill out
              the form , and we'll get back to you shortly. Your thoughts matter
              to us, and we're eager to assist in any way we can. Thank you for
              reaching out!
              <br />
              <br />
              We appreciate your feedback and look forward to connecting with
              you.
            </p>
            <Form
              method="POST"
              className="mb-10 w-fit self-center sm:px-4 md:mb-0 md:w-full md:basis-1/2 md:px-0"
            >
              <div className="flex w-full min-w-0 flex-col gap-3 sm:p-0 sm:px-6 md:gap-4 lg:gap-6 xl:gap-8 ">
                <div className="flex w-full gap-3 md:gap-4">
                  <input
                    className="w-1/2  bg-main_white_dim px-1 py-1.5 pl-3 text-base font-semibold tracking-wide  focus:bg-main_white focus:outline-0"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="w-1/2 bg-main_white_dim px-1 py-1.5 pl-3 text-base font-semibold tracking-wide  focus:bg-main_white focus:outline-0"
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  className="inline-block w-full bg-main_white_dim  px-1 py-1.5 pl-3 text-base font-semibold tracking-wide  focus:bg-main_white focus:outline-0"
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                />
                <textarea
                  className="mb-2 w-full grow  bg-main_white_dim px-1 py-1.5 pl-3 text-base font-semibold tracking-wide focus:bg-main_white focus:outline-0"
                  placeholder="Message"
                  name="message"
                  required
                  type="text"
                />
                <Button className="flex-grow-1 max-w-44 self-center">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export async function SendMailAction({ request }) {
  console.log("request is :", request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return redirect("/");
}

export default Section4;
