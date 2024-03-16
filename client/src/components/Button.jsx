import PropTypes from "prop-types";

const Button = ({
  disabled,
  styles,
  children,
  type = "primary",
  onClick = () => {},
}) => {
  const btnTypes = {
    primary: `bg-blue-gradient px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[10px]`,
    secondary: `bg-black-gradient px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[10px] text-white`,
    submit: `bg-blue-gradient px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[10px]`,
  };
  return (
    <button
      type={`button ${type === "submit" ? "submit" : ""}`}
      className={btnTypes[type]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
};

export default Button;
