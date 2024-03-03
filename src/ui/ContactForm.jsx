function ContactForm() {
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
        type="text"
        name="subject"
        placeholder="Subject"
        className="form-input"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="form-input"
        rows={"4"}
      />
    </>
  );
}

export default ContactForm;
