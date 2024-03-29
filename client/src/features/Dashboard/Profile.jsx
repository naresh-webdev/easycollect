import { avatar1 } from "../../assets";
import styles from "../../constants/styles";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const { userInfo } = currentUser;
  console.log(userInfo);
  return (
    <div className={`${styles.flexCenter}`}>
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.boxWidth}  mx-4 overflow-hidden text-center`}
      >
        <h1 className={`${styles.heading2} text-center`}>User Profile</h1>

        <div className={`${styles.flexCenter} mt-4 md:mt-8`}>
          <img
            src={`${userInfo.photoURL != null ? userInfo.photoURL : avatar1}`}
            alt="avatar"
            className=" h-32 w-32 rounded-full"
          />
        </div>

        <div className="mt-8 w-full md:mt-16">
          <h2
            className={`flex w-full items-center gap-4 font-poppins text-[28px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]`}
          >
            Basic Details{" "}
            <span className="cursor-pointer">
              <FaEdit className="h-[28px] w-[28px]" />
            </span>
          </h2>
          <div className="mr-4 mt-2 flex justify-between">
            <p className="font-poppins text-lg text-white">User Name : </p>
            <p className="font-poppins text-lg text-dimWhite">
              {userInfo.username}
            </p>
          </div>
          <div className="mr-4 mt-4 flex justify-between">
            <p className="font-poppins text-lg text-white">Email : </p>
            <p className="font-poppins text-lg text-dimWhite">
              {userInfo.email}
            </p>
          </div>
          <div className="mr-4 mt-4 flex justify-between">
            <p className="font-poppins text-lg text-white">Phone Number : </p>
            <p className="font-poppins text-lg text-dimWhite">
              {userInfo.phoneNumber ? userInfo.phoneNumber : "Not Available"}
            </p>
          </div>
        </div>

        <div>
          <h2
            className={`mt-8 flex w-full items-center gap-4 font-poppins text-[28px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]`}
          >
            Address Details{" "}
            <span className="cursor-pointer">
              <FaEdit className="h-[28px] w-[28px]" />
            </span>
          </h2>
          <div className="mr-4 mt-2 flex justify-between">
            <p className="font-poppins text-lg text-white">Address : </p>
            <p className="font-poppins text-lg text-dimWhite">
              {userInfo.address ? userInfo.address : "Not Available"}
            </p>
          </div>
          <div className="mr-4 mt-4 flex justify-between">
            <p className="font-poppins text-lg text-white">City : </p>
            <p className="font-poppins text-lg text-dimWhite">
              {userInfo.city ? userInfo.city : "Not Available"}
            </p>
          </div>
          <div className="mr-4 mt-4 flex justify-between">
            <p className="font-poppins text-lg text-white">State : </p>
            <p className="font-poppins text-lg text-dimWhite">
              {userInfo.state ? userInfo.state : "Not Available"}
            </p>
          </div>
          <div className="mr-4 mt-4 flex justify-between">
            <p className="font-poppins text-lg text-white">Country : </p>
            <p className="font-poppins text-lg text-dimWhite">
              {userInfo.country ? userInfo.country : "Not Available"}
            </p>
          </div>
          <div className="mr-4 mt-4 flex justify-between">
            <p className="font-poppins text-lg text-white">Pin Code : </p>
            <p className="font-poppins text-lg text-dimWhite">
              {userInfo.pincode ? userInfo.pincode : "Not Available"}
            </p>
          </div>
        </div>

        <div>
          <h2
            className={`mt-8 flex w-full items-center gap-4 font-poppins text-[28px] font-semibold leading-[66.8px] text-white xs:text-[48px] xs:leading-[76.8px]`}
          >
            Session Details
            <span className="cursor-pointer">
              <FaEdit className="h-[28px] w-[28px]" />
            </span>
          </h2>
          <div className="mr-4 mt-2 flex justify-between">
            {/* TODO: after creating a model be sure to add it here */}
            <p className="font-poppins text-lg text-dimWhite">Not Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;