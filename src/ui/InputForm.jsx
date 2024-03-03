import { Form } from "react-router-dom";
import Button from "./Button";
import SignupForm from "./SignupForm";
import ContactForm from "./ContactForm";
import LoginForm from "./LoginForm";

function InputForm({ type }) {
  console.log("type is : ", type);
  return (
    <Form
      className="flex w-5/6 flex-col space-y-4 pt-12 sm:w-4/6 sm:space-y-4 sm:pt-8 md:w-3/4 md:space-y-3 lg:w-4/6 lg:space-y-4"
      method="POST"
    >
      {type === "signup" && <SignupForm />}
      {type === "login" && <LoginForm />}
      {type === "contact" && <ContactForm />}
      {type === "signup" || type === "login" ? (
        <>
          <Button type="secondary" className="capitalize">
            {type}
          </Button>
          <p className="relative text-center">
            <span className="text-main_white_dim before:absolute before:left-0 before:top-[12px] before:h-[1px] before:w-[44%] before:bg-gray-300 before:content-[''] after:absolute after:right-0 after:top-[12px] after:h-[1px] after:w-[44%] after:bg-gray-300 after:content-['']  md:text-main_gray md:before:bg-gray-400 md:after:bg-gray-400">
              or
            </span>
          </p>
          <Button type="secondary">Continue with Google</Button>
          <Button type="secondary">Continue with Facebook</Button>
        </>
      ) : (
        type === "contact" && (
          <Button type="secondary" className="w-full">
            Send Message
          </Button>
        )
      )}
    </Form>
  );
}

export default InputForm;
