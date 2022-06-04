import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import Resume from '../assets/Resume 2.docx'

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);

  return (
    <div className="w-full h-[7rem] flex justify-between items-center px-4 bg-[#023147] text-[#7ccb57]">
      <div>
        <img src={Logo} alt="JF logo" style={{ width: "70px" }} />
      </div>
      <div className="hidden md:flex">
        <ul className="flex">
          
          <a href="#about"><li>About Me</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#work"><li>Work</li></a>
          <a href="#contact"><li>Contact Me</li></a>
          
        </ul>
      </div>
      {/* end main nav */}

      {/* hamburger menu mobile */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>
      {/* end hamburger menu */}

      {/* mobile */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#023147] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact Me</li>
      </ul>
      {/* end mobile nav */}

      {/* ICONS */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jace-feinstein-7b8a9022a/"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jacef790"
              target="blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:jace.feinstein0218@gmail.com"
              target="blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="../assets/Resume2.docx"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
