import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Import CTA component
import FinalCTA from "../components/FinalCTA";

// Sample thumbnails (replace with your actual portfolio images)
import leadGenImg from "../assets/lead-generation.png";
import dataEntryImg from "../assets/data-entry.png";
import researchImg from "../assets/influencer-research.png";
import influencerImg from "../assets/influencer-research.png";
import extractionImg from "../assets/data-extraction.png";
import scrapingImg from "../assets/python-scraping.png";
import seoImg from "../assets/Onpage.png";
import webDevImg from "../assets/web2.png";

const portfolioItems = [
  {
    title: "Lead Generation",
    image: leadGenImg,
    desc: "We provide targeted B2B leads and custom contact lists to power your sales pipeline.",
    link: "https://docs.google.com/spreadsheets/d/18DrAIpJO0TcyMJCZpIIdBDO1c2A_JeDqC4MRnEFQsXA/edit?gid=51388062#gid=51388062",
  },
  {
    title: "Data Entry",
    image: dataEntryImg,
    desc: "Accurate and efficient data entry solutions, including CRM updates and data cleaning.",
    link: "https://docs.google.com/spreadsheets/d/1AJ2b2OrGgMFnW4E365lRYpT4t0OC7YUeF04TJAoJ8eM/edit?gid=0#gid=0",
  },
  {
    title: "Internet Research",
    image: researchImg,
    desc: "Market analysis, competitor research, and insights tailored to your industry.",
    link: "https://docs.google.com/spreadsheets/d/xxxxxxx/edit?usp=sharing",
  },
  {
    title: "Influencer Research",
    image: influencerImg,
    desc: "Find the right YouTube, Instagram, and TikTok influencers for your campaigns.",
    link: "https://docs.google.com/spreadsheets/d/1EMbgz-BXHmtMXWaKd1hQ0qS9N_AJFwttFA25MxM63YQ/edit?gid=0#gid=0",
  },
  {
    title: "Data Extraction",
    image: extractionImg,
    desc: "Custom scraping tools and structured datasets extracted from diverse sources.",
    link: "https://docs.google.com/spreadsheets/d/1Nnl_6OQWmSZ1zYCTmNdsd9WWTvbO44du38zelV8mbVw/edit?gid=543811288#gid=543811288",
  },
  {
    title: "Python Scraping",
    image: scrapingImg,
    desc: "Advanced scraping scripts for complex and large-scale data projects.",
    link: "https://docs.google.com/spreadsheets/d/1ieVlECjF-zajQBCX3R2Sul4YqdNE484rS9MHFfUTQ-s/edit?gid=0#gid=0",
  },
  {
    title: "SEO",
    image: seoImg,
    desc: "Boost your brand visibility with on-page, off-page, and technical SEO.",
    link: "https://coding.infonavigators.com/",
  },
  {
    title: "Web Development",
    image: webDevImg,
    desc: "Scalable, modern, and responsive websites tailored to your business.",
    link: "https://taskubar.netlify.app/",
  },
];

const PortfolioShowcase = () => {
  return (
    <>
      <section id="portfolio" className="py-20 bg-gray-50 mt-8">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-brandOrange">Portfolio</span> Highlights
          </h2>

          {/* Alternating layout */}
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-10 mb-20 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brandOrange text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition mx-auto lg:mx-0"
                >
                  View Sample <FaArrowRight className="text-xs" />
                </a>
              </div>

              {/* Image */}
              <div className="flex-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <FinalCTA />
    </>
  );
};

export default PortfolioShowcase;
