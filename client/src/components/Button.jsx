import PropTypes from "prop-types";

const Button = ({ styles, children, type = "primary" }) => {
  const btnTypes = {
    primary: `bg-blue-gradient px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[10px]`,
    secondary: `bg-black-gradient px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none ${styles} rounded-[10px] text-white`,
  };
  return (
    <button type="button" className={btnTypes[type]}>
      {children}
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
};

export default Button;
