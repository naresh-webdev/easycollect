function Title({ children }) {
  return (
    <h3 className="mb-6 pt-8 text-center text-xl uppercase tracking-wide text-main_neon min-[250px]:pt-14 min-[400px]:pt-14 sm:pt-28 sm:text-2xl   md:text-3xl md:font-semibold lg:pt-24 lg:text-4xl">
      {children}
    </h3>
  );
}

export default Title;
