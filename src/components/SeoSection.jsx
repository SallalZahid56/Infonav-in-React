import React from "react";
import img1 from "../assets/images.png";
import img2 from "../assets/aboutus.png";
import img3 from "../assets/bulb.png";

const SeoSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-brandOrange">SEO-Driven Approach</span>
        </h2>
        <p className="text-gray-700 mt-4 text-base md:text-lg font-sans max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold">InfoNav</span>, we understand that
          search visibility is the backbone of online success. Our SEO
          strategies combine data-driven insights, advanced keyword research,
          and technical optimization to enhance your website’s ranking on major
          search engines. From content optimization to link building, we ensure
          your brand gets discovered by the right audience at the right time.
        </p>
      </div>

      {/* 3 Image Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-square rounded-2xl shadow-lg overflow-hidden">
            <img
              src={img1}
              alt="Keyword Research"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            Keyword Research: Pinpointing high-impact keywords.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-square rounded-2xl shadow-lg overflow-hidden">
            <img
              src={img2}
              alt="On-Page Optimization"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            On-Page Optimization: Structuring content for visibility.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-full aspect-square rounded-2xl shadow-lg overflow-hidden">
            <img
              src={img3}
              alt="Link Building"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            Link Building: Creating authority through partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
