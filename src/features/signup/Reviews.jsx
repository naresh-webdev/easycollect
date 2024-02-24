import Review from "./Review";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
const fakeReviews = [
  {
    user: "Alice",
    rating: 5.0,
    comment: "Excellent product, exceeded my expectations!",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    user: "Bob",
    rating: 5.0,
    comment: "Very satisfied with the quality. Would recommend!",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    user: "Charlie",
    rating: 5.0,
    comment: "Great service, fast delivery. Will buy again!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    user: "Diana",
    rating: 5.0,
    comment: "Nice product, but delivery was a bit slow.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    user: "Eva",
    rating: 5.0,
    comment: "Product was okay, expected better quality for the price.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

function Reviews() {
  const [reviewNumber, setReviewNumber] = useState(0);

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setReviewNumber((count) => {
  //       if (count === fakeReviews.length - 1) {
  //         return 0;
  //       } else {
  //         return count + 1;
  //       }
  //     });
  //   }, 5000);

  //   return () => {
  //     clearTimeout(interval);
  //   };
  // }, [reviewNumber]);

  return (
    <div className="flex w-2/3 max-w-72 flex-col text-main_white_dim ">
      <Review review={fakeReviews[reviewNumber]} />
    </div>
  );
}

export default Reviews;
