import React, { useEffect } from "react";
import styledComponents from "styled-components";
import tw from "twin.macro";
import Logo from "../../assets/logo.png";
import { SCREENS } from "../repsonsive/screens";
import { useMediaQuery } from "react-responsive";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavbarSide from "../socialbar/SocialBar";
import { Link } from "react-scroll";

const NavContainer = styledComponents.nav`
  ${tw`
        fixed
        w-full
        text-[#d6d6d6]
        background[#202020]
  `}
`;

const NavBarTopContainer = styledComponents.nav`
    ${tw`
        fixed
        w-full
        text-[#d6d6d6]
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
        px-4
        background[#202020]
        duration-300
    `}

    img {
        width: 75px;
    }
`;

const ListContainer = styledComponents.ul`
    ${tw`
        flex
        list-none
    `}
`;

const ListContainerMobile = styledComponents.ul`
    ${tw`
        background-color[#202020]
        text-left
        absolute
        flex
        flex-col
        top-0
        w-full
        h-screen
        justify-center
        pl-5
        right-[-100%]
    `}
`;

const ListItems = styledComponents.li`
${tw`
    list-none
    text-lg
    cursor-pointer
    mr-1
    md:mr-5
`}
`;

const ListItemsMobile = styledComponents.li`
    ${tw`
        
        text-4xl
        flex
        flex-col
        p-5
    `}
`;

const Hamburger = styledComponents.div`
    ${tw`
        md:hidden
        mr-1
        z-10
    `}
`;

const NavBarTop = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menu, setMenu] = useState(false);

  const clickHandler = () => {
    setMenu(!menu);
  };

    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShowNav(false);
        } else {
          // if scroll up show the navbar
          setShowNav(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", controlNavbar);

        // cleanup function
        return () => {
          window.removeEventListener("scroll", controlNavbar);
        };
      }
    }, [lastScrollY]);

  const mobile = useMediaQuery({ maxWidth: SCREENS.md });
  if (mobile) {
    return (
      <NavBarTopContainer className={!showNav && "translate-y-[-5em]"}>
        <div>
          <img src={Logo} alt="" />
        </div>
        <Hamburger onClick={clickHandler}>
          {menu ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </Hamburger>
        {menu && (
          <ListContainerMobile
            className={menu ? "-translate-x-[17em]" : "translate-x-[17em]"}
          >
            <ListItemsMobile>
              <Link
                onClick={clickHandler}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </ListItemsMobile>
            <ListItemsMobile>
              <Link
                onClick={clickHandler}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </ListItemsMobile>
            <ListItemsMobile>
              <Link
                onClick={clickHandler}
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </ListItemsMobile>
            <ListItemsMobile>
              <Link
                onClick={clickHandler}
                to="work"
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </ListItemsMobile>
            <ListItemsMobile>
              <Link
                onClick={clickHandler}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </ListItemsMobile>
          </ListContainerMobile>
        )}
      </NavBarTopContainer>
    );
  }

  return (
    <NavContainer>
      <NavBarTopContainer className={!showNav && "translate-y-[-5em]"}>
        <ListItems>
          <Link to="home" smooth={true} duration={500}>
            <img src={Logo} alt="" />
          </Link>
        </ListItems>
        <ListContainer>
          <ListItems>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </ListItems>
          <ListItems>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </ListItems>
          <ListItems>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </ListItems>
          <ListItems>
            <Link to="work" smooth={true} duration={500}>
              Portfolio
            </Link>
          </ListItems>
          <ListItems>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </ListItems>
        </ListContainer>
      </NavBarTopContainer>
      <NavbarSide />
    </NavContainer>
  );
};

export default NavBarTop;
