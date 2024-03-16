export const signUpHandler = async (username, email, password) => {
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    throw new Error("Please fill in all fields");
  }
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.message);
  }
  return data;
};
