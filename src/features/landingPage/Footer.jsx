import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-gray-500 p-3">
      <p className="inline-block text-center">
        Copyrights reserved &copy;2024. Designed and Developed by{" "}
        <Link
          to="https://nareshdev.netlify.app/"
          className="text-main_neon"
          target="_blank"
        >
          Naresh M
        </Link>
      </p>
    </div>
  );
}

export default Footer;
