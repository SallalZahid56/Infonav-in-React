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
              <div
                className="absolute top-full left-[-200px]  bg-[#282727] shadow-lg rounded-lg w-[900px] py-6 px-8 z-50"
              >
                <h4 className="text-white font-bold mb-4 text-lg">
                  Our Services
                </h4>

                {/* ✅ Grid for Two Rows */}
                <div className="grid grid-cols-4 gap-6 text-sm">
                  {/* Category 1 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link to="/services/lead-generation" className="text-brandOrange hover:text-brandOrange transition">
                        Lead Generation
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link to="/services/B2BLeadGeneration" className="text-white hover:text-brandOrange transition">B2B Leads</Link></li>
                      <li><Link to="/services/EmailListBuilding" className="text-white hover:text-brandOrange transition">Contact Email List Building</Link></li>
                      <li><Link to="/services/LinkedInList" className="text-white hover:text-brandOrange transition">LinkedIn List Building</Link></li>
                      <li><Link to="/services/EmailMarketing" className="text-white hover:text-brandOrange transition">Email Marketing</Link></li>
                    </ul>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link
                        to="/services/InternetResearch"
                        className="text-brandOrange hover:text-brandOrange transition"
                      >
                        Internet Research
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link to="/services/MarketResearch" className="text-white hover:text-brandOrange transition">Market Research</Link></li>
                      <li><Link to="/services/DataVerificationPage" className="text-white hover:text-brandOrange transition">Data Verification</Link></li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link
                        to="/services/InfluencerResearch"
                        className="text-brandOrange hover:text-brandOrange transition"
                      >
                        Influencer Research
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link to="/services/YouTubeInfluencerResearch" className="text-white hover:text-brandOrange transition">YouTube Influencers</Link></li>
                      <li><Link to="/services/InstagramInfluencerResearch" className="text-white hover:text-brandOrange transition">Instagram Influencers</Link></li>
                      <li><Link to="/services/TiktokInfluencerResearch" className="text-white hover:text-brandOrange transition">TikTok Influencers</Link></li>
                    </ul>
                  </div>

                  {/* Category 4 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link
                        to="/services/DataEntry"
                        className="text-brandOrange hover:text-brandOrange transition"
                      >
                        Data Entry
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link to="/services/CRMDataEntry" className="text-white hover:text-brandOrange transition">CRM Data Entry</Link></li>
                      <li><Link to="/services/DataCleaning" className="text-white hover:text-brandOrange transition">Data Cleaning</Link></li>
                    </ul>
                  </div>

                  {/* Category 5 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link
                        to="/services/DataExtraction"
                        className="text-brandOrange hover:text-brandOrange transition"
                      >
                        Data Extraction
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link to="/services/WebScrapingPage" className="text-white hover:text-brandOrange transition">Web Scraping</Link></li>
                      <li><Link to="/services/DataCleaningExtraction" className="text-white hover:text-brandOrange transition">Data Cleaning and Extraction</Link></li>
                    </ul>
                  </div>

                  {/* Category 6 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link
                        to="/services/PythonScraping"
                        className="text-brandOrange hover:text-brandOrange transition"
                      >
                        Python Scraping
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link to="/services/PythonWebScraping" className="text-white hover:text-brandOrange transition">Python Web Scraping</Link></li>
                      <li><Link to="/services/DataCleaningExport" className="text-white hover:text-brandOrange transition">Data Cleaning</Link></li>
                    </ul>
                  </div>

                  {/* Category 7 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link
                        to="/services/SEOPage"
                        className="text-brandOrange hover:text-brandOrange transition"
                      >
                        SEO
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link to="/services/ONPageSEO" className="text-white hover:text-brandOrange transition">On-Page SEO</Link></li>
                      <li><Link to="/services/OffPageSEO" className="text-white hover:text-brandOrange transition">Off-Page SEO</Link></li>
                      <li><Link to="/services/TechnicalSeo" className="text-white hover:text-brandOrange transition">Technical SEO</Link></li>
                      <li><Link to="/services/LocalSeoo" className="text-white hover:text-brandOrange transition">Local SEO</Link></li>
                    </ul>
                  </div>

                  {/* Category 8 */}
                  <div>
                    <h5 className="font-semibold mb-2">
                      <Link
                        to="/services/WebDevelopment"
                        className="text-brandOrange hover:text-brandOrange transition"
                      >
                        Web Development
                      </Link>
                    </h5>
                    <ul className="space-y-2 pl-2">
                      <li><Link to="/services/FrontEndDevelopment" className="text-white hover:text-brandOrange transition">Frontend Development</Link></li>
                      <li><Link to="/services/BackEndDevelopment" className="text-white hover:text-brandOrange transition">Backend Development</Link></li>
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
            <a href="/portfolio" className="text-black hover:text-brandOrange transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/contact-us" className="text-black hover:text-brandOrange transition">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right: Book a Call */}
        <div className="hidden lg:block">
          <a
            href="https://api.whatsapp.com/send?phone=923090266690&text=Hi!%20I%20am%20contacting%20you%20from%20your%20Website."
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

            {/* ✅ Mobile Services Dropdown */}
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex justify-between items-center w-full text-black hover:text-brandOrange transition"
              >
                Services
                <span>{dropdownOpen ? "▲" : "▼"}</span>
              </button>

              {dropdownOpen && (
                <div className="mt-3 pl-4 flex flex-col space-y-4">
                  <Link to="/services/lead-generation" className="text-black hover:text-brandOrange">
                    Lead Generation
                  </Link>
                  <Link to="/services/InternetResearch" className="text-black hover:text-brandOrange">
                    Internet Research
                  </Link>
                  <Link to="/services/InfluencerResearch" className="text-black hover:text-brandOrange">
                    Influencer Research
                  </Link>
                  <Link to="/services/DataEntry" className="text-black hover:text-brandOrange">
                    Data Entry
                  </Link>
                  <Link to="/services/DataExtraction" className="text-black hover:text-brandOrange">
                    Data Extraction
                  </Link>
                  <Link to="/services/PythonScraping" className="text-black hover:text-brandOrange">
                    Python Scraping
                  </Link>
                  <Link to="/services/SEOPage" className="text-black hover:text-brandOrange">
                    SEO
                  </Link>
                  <Link to="/services/WebDevelopment" className="text-black hover:text-brandOrange">
                    Web Development
                  </Link>
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
