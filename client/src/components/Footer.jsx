import styles from "../constants/styles";
import { logoIcon } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row`}>
        <div className="mr-10 flex flex-1 flex-col justify-start">
          <div className="flex flex-row">
            <img
              src={logoIcon}
              alt="EasyCollect logo"
              className="w-[64px] object-contain"
            />
            <h2
              className={`w-full font-poppins text-[28px] font-semibold leading-[66.8px] text-white xs:text-[34px] xs:leading-[76.8px]`}
            >
              EasyCollect
            </h2>
          </div>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Introducing a fresh approach to effortless and secure payments
          </p>
        </div>

        <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
          {footerLinks.map((footerLink, index) => (
            <div
              key={index}
              className="my-4 flex min-w-[150px] flex-col ss:my-0"
            >
              <h4 className="font-poppins text-[18px] font-medium leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`cursor-pointer font-poppins text-[16px] font-normal leading-[24px] text-dimWhite hover:text-secondary ${
                      index !== footerLink.links.length - 1 ? "mb-4 " : "mb-0"
                    }`}
                  >
                    <Link to={link.link} className="">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col   items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-6 md:flex-row">
        <p className="text-center font-poppins text-[18px] font-normal leading-[27px] text-white">
          2024 EasyCollect. All Rights Reserved.
        </p>
        <div className="mt-6 flex flex-row md:mt-0">
          {socialMedia.map((social, index) => (
            <a href={social.link} target="_blank" rel="noreferrer">
              <img
                key={index}
                src={social.icon}
                alt={social.id}
                className={`h-[21px] w-[21px] cursor-pointer object-contain ${
                  index !== socialMedia.length - 1 ? "mr-6 " : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
