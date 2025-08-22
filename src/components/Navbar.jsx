import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from "../assets/logoo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div>
          <a href="/">
            <img
              src={logo}
              alt="InfoNav Logo"
              className="h-14 w-auto"
            />
          </a>
        </div>

        {/* Center: Nav Links (Desktop → lg and up) */}
        <ul className="hidden lg:flex space-x-6 font-heading text-base">
          <li><a href="/" className="text-black hover:text-brandOrange transition">Home</a></li>
          <li><a href="/servicesPage" className="text-black hover:text-brandOrange transition">Services</a></li>
          <li><a href="/about" className="text-black hover:text-brandOrange transition">About Us</a></li>
          <li><a href="#portfolio" className="text-black hover:text-brandOrange transition">Portfolio</a></li>
          <li><a href="#team" className="text-black hover:text-brandOrange transition">Our Team</a></li>
          <li><a href="#contact" className="text-black hover:text-brandOrange transition">Contact Us</a></li>
        </ul>

        {/* Right: Book a Call (Desktop only → lg and up) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-brandOrange text-white px-6 py-3 rounded-full shadow hover:bg-black hover:text-white transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile/Tablet Menu Button (below lg) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-5 font-heading text-lg">
            <li><a href="#home" className="text-black hover:text-brandOrange transition">Home</a></li>
            <li><a href="#services" className="text-black hover:text-brandOrange transition">Services</a></li>
            <li><a href="#about" className="text-black hover:text-brandOrange transition">About Us</a></li>
            <li><a href="#portfolio" className="text-black hover:text-brandOrange transition">Portfolio</a></li>
            <li><a href="#team" className="text-black hover:text-brandOrange transition">Our Team</a></li>
            <li><a href="#contact" className="text-black hover:text-brandOrange transition">Contact Us</a></li>
            
            {/* Book a Call for Mobile/Tablet */}
            <li>
              <a
                href="#contact"
                className="bg-brandOrange text-white px-4 py-2 rounded-full shadow hover:bg-black hover:text-white transition block text-center"
              >
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
