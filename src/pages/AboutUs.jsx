import React from "react";
import aboutImg from "../assets/aboutus.png";
import MissionVision from "../components/MissionVision";
import ExpertiseSection from "../components/ExpertiseSection";
import TeamSection from "../components/TeamSection";
import { Helmet } from "react-helmet";
import FinalCTA from "../components/FinalCTA";

const AboutUs = () => {

   <Helmet>
        <title>About InfoNav - Leading Digital Marketing, Lead Generation & Data Solutions</title>
        <meta
          name="description"
          content="At InfoNav, we specialize in innovative digital marketing solutions including lead generation, internet research, Python scraping, and influencer research. Our mission is to drive business success with customized strategies that empower long-term growth and sustainability."
        />
        <meta
          name="keywords"
          content="digital marketing agency, lead generation services, Python scraping, influencer research, data mining, internet research, business growth, technology solutions, client success, digital strategies, trusted partnerships"
        />
      </Helmet>
  return (
    <>
      {/* About Section */}
      <section className="w-full bg-white pt-32 pb-16 px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-brandOrange">Us</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left - Text */}
          <div>
            <p className="font-sans text-gray-700 text-base md:text-lg leading-relaxed">
              At <span className="font-semibold">InfoNav</span>, we transcend
              conventional boundaries, positioning ourselves as pioneers in
              crafting strategic solutions tailored to propel your business to
              new heights. Our expertise spans a range of services, from
              mastering{" "}
              <span className="font-semibold">
                Lead Generation, Internet Research, Data Mining, Python
                Scraping, and Influencer Research
              </span>
              .
            </p>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About InfoNavigators"
              className="rounded-2xl shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ✅ MissionVision Section */}
      <ExpertiseSection />
      <MissionVision />
      <TeamSection />
      <FinalCTA />
    </>
  );
};

export default AboutUs;
