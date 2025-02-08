import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from './logo/Logo 804444 192.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>

        <footer className="bg-gray-300 p-4 shadow-md mt-auto">
        {/* Footer Container */}
        <div className="max-w-screen-xl mx-auto">
            {/* Footer Content */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Logo / Brand */}
            <div className="text-2xl font-bold">
                <Link to="/">
                <img src={logo} alt="" className="h-11 w-auto" />
                </Link>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
                <Link to="/" className="maintext hover:text-gray-700">Home</Link>
                <Link to="/projectlookup" className="maintext hover:text-gray-700">Project Lookup</Link>
                <Link className="maintext hover:text-gray-700">Contact</Link>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
                <a
                href="https://www.facebook.com/share/18iWi5o4Uf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-900 hover:text-red-950 transition-colors"
                >
                <FaFacebook className="w-6 h-6" />
                </a>
                <a
                href="https://x.com/AcousticMaddy?t=fWhlnZYVKIzfg03Kby2KDA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-900 hover:text-red-950 transition-colors"
                >
                <FaTwitter className="w-6 h-6" />
                </a>
                <a
                href="https://www.instagram.com/mdnpaudel?utm_source=qr&igsh=MXMxNno1NTE3eGNqaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-900 hover:text-red-950 transition-colors"
                >
                <FaInstagram className="w-6 h-6" />
                </a>
                <a
                href="https://www.linkedin.com/in/madan-paudel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-900 hover:text-red-950 transition-colors"
                >
                <FaLinkedin className="w-6 h-6" />
                </a>
            </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-4 text-center text-gray-700 border-t border-gray-400 pt-2">
            <p>&copy; {new Date().getFullYear()} Madan Kumar Paudel. All rights reserved.</p>
            </div>
        </div>
        </footer> 

    </>
  )
}

export default Footer
