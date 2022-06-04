import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Nav = () => {
    const [navbar, setNavbar] = useState(false)
    const handleClick = () => setNavbar(!navbar)
  
    return (
   <div className='w-full h-[7rem] flex justify-between items-center px-4 bg-[#023147] text-[#7ccb57]'>
       <div>
           <img src={Logo} alt="JF logo" style={{width: '70px'}} />
       </div>
       <div className='hidden md:flex'>
           <ul className='flex'>
               <li>About</li>
               <li>Skills</li>
               <li>Work</li>
               <li>Contact Me</li>
           </ul>
       </div>
{/* end main nav */}

        {/* hamburger menu mobile */}
       <div onClick={handleClick} className='md:hidden z-10'> 
       {!navbar ? <FaBars /> : <FaTimes />}
       </div>
        {/* end hamburger menu */}


       {/* mobile */}
       <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#023147] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact Me</li>
       </ul>
       {/* end mobile nav */}

       {/* ICONS */}

       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
   
 

    
}

export default Nav