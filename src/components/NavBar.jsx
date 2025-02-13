import React, { useState } from 'react'; 
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [openNav, setOpenNav] = useState(true);

    const ToggleNavBar = () => {
        setOpenNav(!openNav);
    };

    return (
        <>
            {/* Main Navigation Bar */}
            <nav className='border shadow-[#B1C98D] z-50 shadow-md flex justify-between items-center h-20 mx-auto px-5 text-[#C087BF]'>
            <h1 className="text-[27px] font-bold">
  &lt;<span className="text-lime-500">T</span><span className="text-[#C087BF">P</span><span className="text-lime-500">P</span>/&gt;
</h1>
                
                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex space-x-6 text-xl font-semibold'>
                    <li>
                        <NavLink to="/" 
                            className={({ isActive }) => (isActive ? 'text-[#B1C98D] active:bg-teal-700' : 'hover:text-[#B1C98D]')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" 
                            className={({ isActive }) => (isActive ? 'text-[#B1C98D] active:bg-teal-700' : 'hover:text-[#B1C98D]')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/work"
                            className={({ isActive }) => (isActive ? 'text-[#B1C98D] active:bg-teal-700' : 'hover:text-[#B1C98D]')}
                        >
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                            className={({ isActive }) => (isActive ? 'text-[#B1C98D] active:bg-teal-700' : 'hover:text-[#B1C98D]')}
                        >
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
                
                
                
                {/* Hamburger Menu Icon for Mobile */}
                <div className='fixed md:hidden right-6' onClick={ToggleNavBar}>
                    {/* Toggle between open and close icons based on openNav state */}
                    {!openNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <div className={!openNav ? 'left-[0%] z-50 fixed top-0 w-[60%] bg-[black] h-full block pl-4 pt-4 ease-in-out duration-500 md:hidden' : "fixed left-[100%] ease-in-out duration-500"}>
                    {/* Logo in Mobile Menu */}
                    <h1 className="text-[27px] font-bold">
  &lt;<span className="text-lime-500">T</span>P<span className='text-lime-500'>P</span> /&gt; {/* Example styling for 'T' */}
</h1>  
                    
                    {/* Mobile Navigation Links */}
                    <ul className='block pt-8 space-y-4'>
                        <li className='border-b border-[#B1C98D]'>
                            <NavLink to="/" 
                                className={({ isActive }) => (isActive ? 'text-[#B1C98D]' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='border-b border-[#d9dbd7]'>
                            <NavLink to="/about" 
                                className={({ isActive }) => (isActive ? 'text-[#B1C98D]' : '')}
                            >
                                About Me
                            </NavLink>
                        </li>
                        <li className='border-b border-[#B1C98D]'>
                            <NavLink to="/work"
                                className={({ isActive }) => (isActive ? 'text-[#B1C98D]' : '')}
                            >
                                Work
                            </NavLink>
                        </li>
                        <li className='border-b border-[#B1C98D]'>
                            <NavLink to="/contact"
                                className={({ isActive }) => (isActive ? 'text-[#B1C98D]' : '')}
                            >
                                Contact Me
                            </NavLink>
                        </li>
                    </ul>
                    
                   
                </div>
            </nav>
        </>
    );
};

export default Navbar;