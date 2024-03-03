import FormTemplate from "../../ui/FormTemplate";

function Signup() {
  return <FormTemplate type="signup" />;
}

export async function SigninAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data, "formdata");

  return null;
}

export default Signup;
