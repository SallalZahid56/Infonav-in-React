import React from "react";
import aboutImg from "../assets/aboutus.png";
import MissionVision from "../components/MissionVision";
import ExpertiseSection from "../components/ExpertiseSection";
import TeamSection from "../components/TeamSection";

const AboutUs = () => {
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
    </>
  );
};

export default AboutUs;
