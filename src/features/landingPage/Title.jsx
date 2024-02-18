function Title({ children }) {
  return (
    <div className="pb-6 pt-[3vh] text-center text-xl font-semibold uppercase tracking-wide text-main_white min-[300px]:pt-[5vh] min-[400px]:pt-14 min-[400px]:pt-[7vh] sm:mb-8 sm:text-2xl   md:text-3xl md:font-semibold lg:pt-24 lg:text-4xl">
      <div className="inline-block rounded-sm bg-main_white px-4 py-2">
        <span className="style-normal title__content">{children}</span>
      </div>
    </div>
  );
}

export default Title;
