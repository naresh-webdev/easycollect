function LoginForm() {
  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form-input"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="form-input"
      />
    </>
  );
}

export default LoginForm;
