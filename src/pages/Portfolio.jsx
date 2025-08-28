import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Sample thumbnails (replace with your actual portfolio images)
import leadGenImg from "../assets/internet.jpg";
import dataEntryImg from "../assets/internet.jpg";
import researchImg from "../assets/internet.jpg";
import influencerImg from "../assets/internet.jpg";
import extractionImg from "../assets/internet.jpg";
import scrapingImg from "../assets/internet.jpg";
import seoImg from "../assets/internet.jpg";
import webDevImg from "../assets/internet.jpg";

const portfolioItems = [
  { title: "Lead Generation", image: leadGenImg, desc: "We provide targeted B2B leads and custom contact lists to power your sales pipeline." },
  { title: "Data Entry", image: dataEntryImg, desc: "Accurate and efficient data entry solutions, including CRM updates and data cleaning." },
  { title: "Internet Research", image: researchImg, desc: "Market analysis, competitor research, and insights tailored to your industry." },
  { title: "Influencer Research", image: influencerImg, desc: "Find the right YouTube, Instagram, and TikTok influencers for your campaigns." },
  { title: "Data Extraction", image: extractionImg, desc: "Custom scraping tools and structured datasets extracted from diverse sources." },
  { title: "Python Scraping", image: scrapingImg, desc: "Advanced scraping scripts for complex and large-scale data projects." },
  { title: "SEO", image: seoImg, desc: "Boost your brand visibility with on-page, off-page, and technical SEO." },
  { title: "Web Development", image: webDevImg, desc: "Scalable, modern, and responsive websites tailored to your business." },
];

const PortfolioShowcase = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-brandOrange">Portfolio</span> Highlights
        </h2>

        {/* Alternating layout */}
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center gap-10 mb-20 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <button className="flex items-center gap-2 bg-brandOrange text-white px-6 py-3 rounded-full hover:bg-black transition mx-auto lg:mx-0">
                View Sample <FaArrowRight />
              </button>
            </div>

            {/* Image */}
            <div className="flex-1">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
