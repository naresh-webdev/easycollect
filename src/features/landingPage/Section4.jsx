import { Form, redirect } from "react-router-dom";
import Title from "./Title";
import Button from "../../ui/Button";

function Section4() {
  return (
    <section className="h-dvh">
      <Title>Get in Touch</Title>
      <div className="flex items-start justify-center gap-24 ">
        <p className="max-w-xl text-2xl text-main_white">
          Have a question, suggestion, or just want to say hello? Fill out the
          form , and we'll get back to you shortly. Your thoughts matter to us,
          and we're eager to assist in any way we can. Thank you for reaching
          out!
          <br />
          <br />
          We appreciate your feedback and look forward to connecting with you.
        </p>
        <Form method="POST">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                className=" bg-main_white_dim text-md px-1 py-1.5 pl-3 font-semibold tracking-wide  focus:bg-main_white focus:outline-0"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className=" bg-main_white_dim text-md px-1 py-1.5 pl-3 font-semibold tracking-wide  focus:bg-main_white focus:outline-0"
                type="text"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className=" bg-main_white_dim text-md px-1 py-1.5 pl-3 font-semibold tracking-wide  focus:bg-main_white focus:outline-0"
              type="text"
              name="subject"
              required
              placeholder="Subject"
            />
            <textarea
              className=" bg-main_white_dim text-md px-1 py-1.5 pl-3 font-semibold tracking-wide  focus:bg-main_white focus:outline-0"
              placeholder="Message"
              name="message"
              required
              type="text"
            />
            <Button className="max-w-44 flex-grow-0 self-center">Submit</Button>
          </div>
        </Form>
      </div>
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
