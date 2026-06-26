import React, { useState } from 'react'; 
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const ToggleNavBar = () => setOpenNav(!openNav);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Me" },
        { to: "/work", label: "Work" },
        { to: "/contact", label: "Contact Me" },
    ];

    const activeClass = 'text-[#B1C98D]';
    const inactiveClass = 'hover:text-[#B1C98D] transition-colors duration-200';

    return (
        <>
            {/* Main Navigation Bar */}
            <nav className='border shadow-[#B1C98D] shadow-md z-50 flex justify-between items-center h-20 mx-auto px-5 text-[#C087BF]'>
                
                {/* Logo */}
                <h1 className="text-[27px] font-bold">
                    &lt;<span className="text-lime-500">T</span>
                    <span className="text-[#C087BF]">P</span>
                    <span className="text-lime-500">P</span>/&gt;
                </h1>

                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex space-x-6 text-xl font-semibold'>
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon */}
                <div className='md:hidden cursor-pointer' onClick={ToggleNavBar}>
                    {openNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </nav>

            {/* Backdrop Overlay */}
            {openNav && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={ToggleNavBar}
                />
            )}

            {/* Mobile Drawer */}
            <div className={`fixed top-0 left-0 h-full w-[65%] max-w-xs bg-black z-50 pl-6 pt-6
                transition-transform duration-500 ease-in-out md:hidden
                ${openNav ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Logo in Drawer */}
                <h1 className="text-[27px] font-bold text-[#C087BF]">
                    &lt;<span className="text-lime-500">T</span>
                    <span className="text-[#C087BF]">P</span>
                    <span className="text-lime-500">P</span>/&gt;
                </h1>

                {/* Mobile Navigation Links */}
                <ul className='block pt-8 space-y-4'>
                    {navLinks.map(({ to, label }) => (
                        <li key={to} className='border-b border-[#B1C98D] pb-2'>
                            <NavLink
                                to={to}
                                onClick={ToggleNavBar}
                                className={({ isActive }) => isActive ? activeClass : inactiveClass}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;