import React from "react";
import { FaMoneyBillWave, FaChartLine, FaUserCheck } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20 text-gray-900">
      {/* Heading + Intro */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Why <span className="text-brandOrange">Choose Us?</span>
        </h2>
        <p className="font-sans text-base text-gray-700">
          At <span className="font-semibold">InfoNavigators</span>, we are one of the 
          leading providers of <span className="font-semibold">Digital Marketing, SEO, 
          Lead Generation, Data Entry, Python Scraping, Internet Research, Influencer Research, 
          and Web Development Services.</span> Our mission is to deliver affordable, 
          result-driven, and customized solutions that help businesses grow faster.
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-center mb-12">
        <p className="font-sans text-lg">
          📲 <span className="font-semibold">WhatsApp:</span> +923090266690
        </p>
        <p className="font-sans text-lg">
          📧 <span className="font-semibold">Email:</span> contact@infonavigators.com
        </p>
      </div>

      {/* Subheading */}
      <div className="text-center mb-10">
        <h3 className="font-heading text-2xl font-bold text-gray-900">
           What Makes <span className="text-brandOrange">Us Different?</span> 
        </h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Affordable Pricing */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-6 text-brandOrange">
            <FaMoneyBillWave size={50} />
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
            Affordable Pricing for Every Budget
          </h3>
          <p className="font-sans text-gray-600">
            We believe in providing cost-effective solutions without 
            compromising quality.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-6 text-brandOrange">
            <FaChartLine size={50} />
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
            Proven Experience with 200+ Projects
          </h3>
          <p className="font-sans text-gray-600">
            Successfully delivered Digital Marketing, SEO, Lead Generation, 
            and Web Development projects worldwide.
          </p>
        </div>

        {/* Trusted Clients */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center mb-6 text-brandOrange">
            <FaUserCheck size={50} />
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
            Trusted by 500+ Satisfied Clients
          </h3>
          <p className="font-sans text-gray-600">
            Our focus on quality, transparency, and timely delivery has earned 
            us long-term client relationships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
