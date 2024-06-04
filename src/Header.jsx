import React from 'react';
import { FaFacebookMessenger } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="logo">
                    <a href="/" className="text-2xl font-bold">MyTo-Dos</a>
                </div>
                    <NavLink to="/"className="hover:text-gray-400">Home </NavLink>
                <div className="search-bar hidden md:block">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="px-2 py-1 rounded"
                    />
                </div>
                <div className="cta-buttons space-x-2">
                    <NavLink to="/login" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Login</NavLink>
                </div>
                <div className="social-media flex space-x-2 ml-4">
                    <a href="#">< FaFacebookMessenger className="h-6" /></a>
                    <a href="#">< FaGithub  className="h-6" /></a>
                    <a href="#">< GrInstagram className="h-6" /></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
