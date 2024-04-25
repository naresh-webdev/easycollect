import styles from "../../constants/styles";

function SessionNotFound() {
  return (
    <section
      className={`${styles.flexCenter} h-full w-full bg-primary ${styles.paddingY}`}
    >
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} flex-col px-6 sm:px-16`}
      >
        <h2 className={`${styles.heading2} my-1 text-center`}>
          Session Not Found😢
        </h2>
        <p
          className={`${styles.paragraph} mx-8 my-4 max-w-[560px] text-start text-2xl capitalize leading-[34px]`}
        >
          The session you are looking for is not found. You will be redirected
          to the dashboard...
        </p>
      </div>
    </section>
  );
}

export default SessionNotFound;
