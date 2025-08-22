import React from "react";
import img1 from "../assets/success.png";
import img2 from "../assets/computer.png";
import img3 from "../assets/stars.png";

const ExpertiseSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-brandOrange">Core Expertise</span>
        </h2>
        <p className="text-gray-700 mt-4 text-base md:text-lg font-sans max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold">InfoNav</span>, we combine
          innovation, strategy, and technology to deliver solutions that drive
          measurable business results. Our team focuses on understanding your
          unique needs and crafting services that build long-term success.
        </p>
      </div>

      {/* Images Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <img
            src={img1}
            alt="Client Success"
            className="w-full h-64 object-contain"
          />
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            Driving client success through tailored strategies.
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <img
            src={img2}
            alt="Technology Solutions"
            className="w-full h-64 object-contain"
          />
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            Leveraging technology for innovative solutions.
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <img
            src={img3}
            alt="Trusted Partnerships"
            className="w-full h-64 object-contain"
          />
          <p className="mt-4 text-gray-800 font-sans text-base font-medium text-center">
            Building trust through quality and transparency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
