import FormTemplate from "../../ui/FormTemplate";

function Login() {
  return <FormTemplate type="login" />;
}

export async function LoginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data, "Login Data");

  return null;
}

export default Login;
