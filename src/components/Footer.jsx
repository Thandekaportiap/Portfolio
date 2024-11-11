import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center   w-full">
            <nav className="flex justify-center flex-wrap gap-6  font-medium text-2xl">
                <Link to="/" className="hover:text-white" >Home</Link>
                <Link to="/about" className="hover:text-white" >About</Link>
                <Link to="/contact" className="hover:text-white" >Contact</Link>
            </nav>

            <div className="flex justify-center space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.linkedin.com/in/thandeka-portia-penelope-mazibuko/" alt="LinkedIn" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
                </a>
            </div>

         
        </footer>
    );
};

export default Footer;