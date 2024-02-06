function Title({ children }) {
  return (
    <h3 className="mb-6 pt-6 text-center text-xl uppercase text-main_neon sm:pt-8 sm:text-2xl  md:mb-8 md:text-3xl md:font-semibold lg:text-4xl xl:mb-16 xl:pt-20">
      {children}
    </h3>
  );
}

export default Title;
