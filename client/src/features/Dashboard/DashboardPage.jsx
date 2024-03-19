import { useState } from "react";
import styles, { layout } from "../../constants/styles";

function Box({ title }) {
  return (
    <div className="bg-black-gradient flex h-[217px] w-[386px] cursor-pointer items-center justify-center rounded-sm transition-all ease-in hover:scale-[1.05]">
      <span className="text-center font-poppins text-[18px] font-semibold leading-[19px] text-white">
        {title}
      </span>
    </div>
  );
}

function DashboardPage() {
  const [newUser, setNewUser] = useState(false);

  return (
    <section className={`${layout.section} ${styles.flexCenter}`}>
      {newUser ? (
        <h1 className="text-white">Create your First Room</h1>
      ) : (
        <div className="my-6 flex flex-col flex-wrap space-y-6 px-4 ss:grid  ss:gap-x-4 ss:gap-y-4 ss:space-y-0 min-[940px]:grid-cols-2 lg:gap-x-6 lg:gap-y-6 min-[1450px]:grid-cols-3">
          <Box title="Birthday Party" />
          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />

          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />
          <Box title="Birthday Party" />
          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />

          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />
          <Box title="Birthday Party" />
          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />

          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />
          <Box title="Birthday Party" />
          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />

          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />
          <Box title="Birthday Party" />
          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />

          <Box title="Cultural Festival" />
          <Box title="Welfare Contribution" />
          <Box title="Sports Event" />
          <Box title="Farewell Party" />
        </div>
      )}
    </section>
  );
}

export default DashboardPage;
