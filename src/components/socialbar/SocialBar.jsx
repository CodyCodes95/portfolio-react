import React from "react";
import styledComponents from "styled-components";
import tw from "twin.macro";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from '../../assets/CodyPartingtonBrisbane.pdf'

const SocialIconsContainer = styledComponents.div`
    ${tw`
        hidden
        md:flex
        fixed
        flex-col
        top-[35%]
        left-0
    `}
`;

const SocialLinks = styledComponents.li`
    ${tw`
        w-[160px]
        h-[60px]
        flex
        justify-between
        items-center
        ml-[-100px]
        hover:ml-[-10px]
        duration-300
    `}

    & > a {
        ${tw`
        flex
        p-[0.9em]
        justify-between
        items-center
        w-full
        text-white
        `}
    }
`;

const SocialBar = () => {
  return (
    <SocialIconsContainer>
      <ul>
        <SocialLinks className="bg-blue-600">
          <a href="https://www.linkedin.com/in/cody-partington/">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </SocialLinks>
        <SocialLinks className={"bg-slate-800"}>
          <a href="https://github.com/CodyCodes95">
            Github <FaGithub size={30} />
          </a>
        </SocialLinks>
        <SocialLinks className="bg-[#ffd100]">
          <a href="mailto:codythatsme@gmail.com">
            Email <HiOutlineMail size={30} />
          </a>
        </SocialLinks>
        <SocialLinks className="bg-[#d90429]">
          <a href={Resume}>
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </SocialLinks>
      </ul>
    </SocialIconsContainer>
  );
};

export default SocialBar;
