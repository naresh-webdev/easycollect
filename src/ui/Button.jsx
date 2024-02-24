import { Link } from "react-router-dom";

function Button({ children, className, to = null, type = "primary" }) {
  const base = `cursor-pointer rounded-sm bg-main_neon px-2.5 py-1.5 font-semibold text-main_gray shadow-sm transition-all duration-300 ease-in hover:bg-main_neon_light md:px-3.5 md:py-2 ${className}`;

  const types = {
    primary: base,
    secondary: `cursor-pointer rounded-sm bg-main_neon_dark md:bg-bg_gradient_1 px-2.5 py-1.5 font-semibold text-bg_main_gray md:text-main_white shadow-sm transition-all duration-300 ease-in hover:bg-main_bg_gradient_1 md:px-3.5 md:py-2 ${className} md:text-sm md:font-bold md:shadow-md md:hover:bg-bg_gradient_2 hover:bg-main_neon_dark_shade md:hover:text-main_white_dim`,
  };
  if (to) {
    return (
      <Link to={to} className={types[type]}>
        {children}
      </Link>
    );
  }
  // console.log(className);
  return <button className={types[type]}>{children}</button>;
}

export default Button;
