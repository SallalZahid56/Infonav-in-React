import React from "react";
import servicesImg from "../assets/images.webp"; // ✅ replace with your actual image
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Tools from "../components/Tools";
import WhyChooseUs from "../components/WhyChooseUs";
import HowWeDeliver from "../components/HowWeDeliver";
import { Helmet } from "react-helmet";
import FinalCTA from "../components/FinalCTA";

const ServicesPage = () => {

     <Helmet>
        <title>Digital Marketing Services - Lead Generation, SEO, Web Scraping & More | InfoNav</title>
        <meta
          name="description"
          content="At InfoNav, we offer a wide range of digital marketing services, including lead generation, SEO, Python scraping, influencer research, and web development. Our client-focused approach ensures measurable results and sustainable business growth."
        />
        <meta
          name="keywords"
          content="digital marketing services, lead generation, Python scraping, SEO strategies, influencer research, internet research, data extraction, web development, data entry services, online marketing, B2B lead generation, business growth solutions"
        />
      </Helmet>
    return (
        <>
            {/* Main Services Intro Section */}
            <section className="w-full bg-white pt-32 pb-16 px-6 lg:px-20">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Our <span className="text-brandOrange">Services</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                    {/* Left - Text */}
                    <div>
                        <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed px-2 md:px-0">
                            At <span className="font-semibold">InfoNav</span>, we offer a wide
                            range of{" "}
                            <span className="text-brandOrange font-semibold">
                                digital services
                            </span>{" "}
                            designed to empower businesses globally. Our expertise includes{" "}
                            <span className="font-semibold">
                                Lead Generation, Data Mining, Web Scraping, Influencer
                                Research, and SEO Strategies
                            </span>
                            . With a client-focused approach, we deliver innovative solutions
                            that help brands thrive in a competitive marketplace.
                        </p>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center">
                        <img
                            src={servicesImg}
                            alt="Our Services"
                            className="rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            {/* Additional Sections */}
            <HowWeDeliver />
            <Services />
            <Tools />
            <WhyChooseUs />
            <Testimonials />
            <FinalCTA />
        </>
    );
};

export default ServicesPage;
