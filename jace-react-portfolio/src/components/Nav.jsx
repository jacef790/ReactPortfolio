import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'



const Nav = () => {
    const {nav, setNav} = useState(false)
    const handleClick = () => setNav(!nav)
  return (
   <div className='w-full h-[7rem] flex justify-between items-center px-4 bg-[#023147] text-white'>
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


       <div onClick={handleClick} className='md:hidden z-10'> 
        <FaBars />
       </div>

       {/* mobile */}
       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#023147] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact Me</li>
       </ul>
   </div>
  )
}

export default Nav