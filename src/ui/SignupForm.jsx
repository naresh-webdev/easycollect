function SignupForm() {
  return (
    <>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="form-input"
      />
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
    </>
  );
}

export default SignupForm;
