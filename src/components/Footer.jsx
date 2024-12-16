import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center w-full p-6 space-y-8 ">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-lg font-medium">
                <Link to="/" className="hover:text-[#B1C98D]">
                    Home
                </Link>
                <Link to="/about" className="hover:text-[#B1C98D]">
                    About
                </Link>
                <Link to="/contact" className="hover:text-[#B1C98D]">
                    Contact
                </Link>
            </nav>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <img
                        src="https://img.icons8.com/fluent/30/ffffff/facebook-new.png"
                        alt="Facebook"
                    />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <img
                        src="https://img.icons8.com/fluent/30/ffffff/linkedin.png"
                        alt="LinkedIn"
                    />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <img
                        src="https://img.icons8.com/fluent/30/ffffff/instagram-new.png"
                        alt="Instagram"
                    />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <img
                        src="https://img.icons8.com/fluent/30/ffffff/twitter.png"
                        alt="Twitter"
                    />
                </a>
            </div>

            {/* Copyright Section */}
            <div className="text-sm text-center">
                © {new Date().getFullYear()} Thandeka Portia P Mazibuko. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
