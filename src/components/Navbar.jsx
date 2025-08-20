import React from "react";
import logo from "../assets/logo.png"; // ✅ adjust path if needed

const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="container mx-auto px-6 py-2 flex justify-between items-center">

                {/* Left: Logo */}
                <div>
                    <a href="#home">
                        <img
                            src={logo}
                            alt="InfoNav Logo"
                            className="h-14 w-auto" // slightly smaller logo
                        />
                    </a>
                </div>

                {/* Center: Nav Links */}
                <ul className="hidden md:flex space-x-6 font-heading text-base">
                    <li><a href="#home" className="text-black hover:text-brandOrange transition">Home</a></li>
                    <li><a href="#services" className="text-black hover:text-brandOrange transition">Services</a></li>
                    <li><a href="#about" className="text-black hover:text-brandOrange transition">About Us</a></li>
                    <li><a href="#portfolio" className="text-black hover:text-brandOrange transition">Portfolio</a></li>
                    <li><a href="#team" className="text-black hover:text-brandOrange transition">Our Team</a></li>
                    <li><a href="#contact" className="text-black hover:text-brandOrange transition">Contact Us</a></li>
                </ul>

                {/* Right: Book a Call */}
                <div>
                    <a
                        href="#contact"
                        className="bg-brandOrange text-white px-4 py-1.5 rounded-full shadow hover:bg-black hover:text-white transition"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
