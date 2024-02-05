function Button({ children, className }) {
  // console.log(className);
  return (
    <button
      className={`text-main_gray bg-main_neon rounded-sm px-2.5 py-1.5 md:px-3.5 md:py-2 font-semibold hover:bg-main_neon_light transition-all duration-300 ease-in shadow-sm cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
