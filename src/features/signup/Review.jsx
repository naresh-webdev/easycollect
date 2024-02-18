import { ImQuotesRight } from "react-icons/im";
import { ImStarFull } from "react-icons/im";

function Review({ review }) {
  const { user: name, rating, comment: description, img } = review;
  const stars = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="flex items-center justify-around">
        <img src={img} alt="profile pic" className="h-16 w-16 rounded-full" />
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="flex items-center justify-start gap-2">
            <span className="font-bold">5.0</span>
            <span className="flex items-center gap-0.5">
              {stars.map((el) => (
                <ImStarFull color="#eab308" />
              ))}
            </span>
          </span>
        </div>
        <span>
          <ImQuotesRight size={"48px"} color="#9ca3af" />
        </span>
      </div>
      <p className="px-4 py-3 text-sm">{description}</p>
    </>
  );
}

export default Review;
