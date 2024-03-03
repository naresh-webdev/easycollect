import { Form, redirect } from "react-router-dom";
import Title from "./Title";
import Button from "../../ui/Button";
import Footer from "./Footer";
import FormTemplate from "../../ui/FormTemplate";

function Section4() {
  return (
    <section className="relative h-dvh  lg:flex lg:flex-col lg:justify-between">
      <FormTemplate type="contact" />
    </section>
  );
}

export async function SendMailAction({ request }) {
  console.log("request is :", request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  return null;
}

export default Section4;
