import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex-col items-start felx">
          <img src={footerLogo} width={150} height={46} alt="" />
          <p className="mt-6 text-base text-white sm:max-w-sm font-montserrat ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi
            earum sint repellat deleniti doloremque aliquam placeat impedit
            aspernatur. Quisquam!
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full ">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  srcset=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10 ">
          {footerLinks.map((section) => (
            <div key={section} className="">
              <h4 className="text-white ">{section.title}</h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-2 text-white cursor-pointer font-montserrat"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
