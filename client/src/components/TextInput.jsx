function TextInput({ onChangeHandler }) {
  return (
    <input
      className="rounded-md border-[2px] border-[#D8DADC] p-2 focus:border-primary focus:outline-none"
      type="email"
      name="email"
      id="email"
      placeholder="Enter your email"
      onChange={onChangeHandler}
      required
    />
  );
}

export default TextInput;
