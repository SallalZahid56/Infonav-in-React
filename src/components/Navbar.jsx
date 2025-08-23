import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logoo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="InfoNav Logo" className="h-14 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-heading text-base items-center">
          <li>
            <Link to="/" className="text-black hover:text-brandOrange transition">
              Home
            </Link>
          </li>

          {/* ✅ Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="text-black hover:text-brandOrange transition cursor-pointer">
              Services
            </span>

            {dropdownOpen && (
              <div className="absolute top-full left-[-400px] bg-brandOrange shadow-lg rounded-lg w-[900px] py-6 px-8 z-50">
                <h4 className="text-white font-bold mb-4 text-lg">
                  Our Services
                </h4>

                {/* ✅ Grid for Two Rows */}
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Row 1 */}
                  <div>
                    <h5 className="font-semibold mb-2 text-black">Lead Generation</h5>
                    <ul className="space-y-2">
                      <li><Link to="/services/b2b-leads" className="text-white hover:text-black transition">B2B Leads</Link></li>
                      <li><Link to="/services/email-list" className="text-white hover:text-black transition">Email List Building</Link></li>
                      <li><Link to="/services/linkedin-leads" className="text-white hover:text-black transition">LinkedIn Leads</Link></li>
                      <li><Link to="/services/targeted-leads" className="text-white hover:text-black transition">Targeted Leads</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-black">Internet Research</h5>
                    <ul className="space-y-2">
                      <li><Link to="/services/market-research" className="text-white hover:text-black transition">Market Research</Link></li>
                      <li><Link to="/services/product-research" className="text-white hover:text-black transition">Product Research</Link></li>
                      <li><Link to="/services/contact-research" className="text-white hover:text-black transition">Contact Research</Link></li>
                      <li><Link to="/services/competitor-research" className="text-white hover:text-black transition">Competitor Research</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-black">Influencer Research</h5>
                    <ul className="space-y-2">
                      <li><Link to="/services/youtube-influencers" className="text-white hover:text-black transition">YouTube Influencers</Link></li>
                      <li><Link to="/services/instagram-influencers" className="text-white hover:text-black transition">Instagram Influencers</Link></li>
                      <li><Link to="/services/tiktok-influencers" className="text-white hover:text-black transition">TikTok Influencers</Link></li>
                      <li><Link to="/services/influencer-outreach" className="text-white hover:text-black transition">Influencer Outreach</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-black">Data Entry</h5>
                    <ul className="space-y-2">
                      <li><Link to="/services/data-cleaning" className="text-white hover:text-black transition">Data Cleaning</Link></li>
                      <li><Link to="/services/data-formatting" className="text-white hover:text-black transition">Data Formatting</Link></li>
                      <li><Link to="/services/excel-services" className="text-white hover:text-black transition">Excel Services</Link></li>
                      <li><Link to="/services/manual-entry" className="text-white hover:text-black transition">Manual Data Entry</Link></li>
                    </ul>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <h5 className="font-semibold mb-2 text-black">Data Extraction</h5>
                    <ul className="space-y-2">
                      <li><Link to="/services/web-scraping" className="text-white hover:text-black transition">Web Scraping</Link></li>
                      <li><Link to="/services/email-extraction" className="text-white hover:text-black transition">Email Extraction</Link></li>
                      <li><Link to="/services/phone-number-extraction" className="text-white hover:text-black transition">Phone Number Extraction</Link></li>
                      <li><Link to="/services/data-mining" className="text-white hover:text-black transition">Data Mining</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-black">Python Scraping</h5>
                    <ul className="space-y-2">
                      <li><Link to="/services/custom-scripts" className="text-white hover:text-black transition">Custom Scripts</Link></li>
                      <li><Link to="/services/automation" className="text-white hover:text-black transition">Automation Bots</Link></li>
                      <li><Link to="/services/data-parsing" className="text-white hover:text-black transition">Data Parsing</Link></li>
                      <li><Link to="/services/web-automation" className="text-white hover:text-black transition">Web Automation</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-black">SEO</h5>
                    <ul className="space-y-2">
                      <li><Link to="/services/on-page-seo" className="text-white hover:text-black transition">On-Page SEO</Link></li>
                      <li><Link to="/services/off-page-seo" className="text-white hover:text-black transition">Off-Page SEO</Link></li>
                      <li><Link to="/services/technical-seo" className="text-white hover:text-black transition">Technical SEO</Link></li>
                      <li><Link to="/services/local-seo" className="text-white hover:text-black transition">Local SEO</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-black">Web Development</h5>
                    <ul className="space-y-2">
                      <li><Link to="/services/frontend" className="text-white hover:text-black transition">Frontend Development</Link></li>
                      <li><Link to="/services/backend" className="text-white hover:text-black transition">Backend Development</Link></li>
                      <li><Link to="/services/fullstack" className="text-white hover:text-black transition">Full Stack Solutions</Link></li>
                      <li><Link to="/services/wordpress" className="text-white hover:text-black transition">WordPress Development</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link to="/about" className="text-black hover:text-brandOrange transition">
              About Us
            </Link>
          </li>
          <li>
            <a href="#portfolio" className="text-black hover:text-brandOrange transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#team" className="text-black hover:text-brandOrange transition">
              Our Team
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-brandOrange transition">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right: Book a Call */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-brandOrange text-white px-6 py-3 rounded-full shadow hover:bg-black hover:text-white transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-5 font-heading text-lg">
            <li>
              <Link to="/" className="text-black hover:text-brandOrange transition">
                Home
              </Link>
            </li>
            <li>
              <span className="text-black">Services (See Desktop)</span>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-brandOrange transition">
                About Us
              </Link>
            </li>
            <li>
              <a href="#portfolio" className="text-black hover:text-brandOrange transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#team" className="text-black hover:text-brandOrange transition">
                Our Team
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black hover:text-brandOrange transition">
                Contact Us
              </a>
            </li>
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
