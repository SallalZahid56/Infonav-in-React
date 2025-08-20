import React from "react";
import { FaChartBar, FaUsers, FaTachometerAlt } from "react-icons/fa"; // using react-icons for demo

const Strategy = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
          The Strategists for Your{" "}
          <span className="text-brandOrange">Business Escalation!</span>
        </h2>
        <p className="font-sans text-gray-600 mt-4">
          From ideation to strategy execution, our expert digital marketers have
          aced it all. With dedicated resources for your business development and
          growth, we are all set to strategize and execute the concept for your
          business success!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Data Driven */}
        <div className="group border border-brandOrange rounded-2xl p-8 text-center shadow-sm transition bg-white hover:bg-brandOrange hover:border-white hover:shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-brandOrange text-white p-6 rounded-full transition group-hover:bg-white group-hover:text-brandOrange">
              <FaChartBar size={40} />
            </div>
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4 transition group-hover:text-white">
            Data Driven
          </h3>
          <p className="font-sans text-gray-600 text-sm leading-relaxed transition group-hover:text-white">
            At the time of strategy development, we utilize industry-specific
            data to direct our solutions in the right direction. It's not the
            opinion but the data that maps the blueprints of our local internet
            marketing services near you.
          </p>
        </div>

        {/* Customer Driven */}
        <div className="group border border-brandOrange rounded-2xl p-8 text-center shadow-sm transition bg-white hover:bg-brandOrange hover:border-white hover:shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-brandOrange text-white p-6 rounded-full transition group-hover:bg-white group-hover:text-brandOrange">
              <FaUsers size={40} />
            </div>
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4 transition group-hover:text-white">
            Customer Driven
          </h3>
          <p className="font-sans text-gray-600 text-sm leading-relaxed transition group-hover:text-white">
            To keep our efforts aligned with the client's requirements, we follow
            a customer-centric approach. The satisfaction of our clients is our
            foremost priority. We are the outsourced yet dedicated local internet
            marketing agency for your business.
          </p>
        </div>

        {/* Performance Driven */}
        <div className="group border border-brandOrange rounded-2xl p-8 text-center shadow-sm transition bg-white hover:bg-brandOrange hover:border-white hover:shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-brandOrange text-white p-6 rounded-full transition group-hover:bg-white group-hover:text-brandOrange">
              <FaTachometerAlt size={40} />
            </div>
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4 transition group-hover:text-white">
            Performance Driven
          </h3>
          <p className="font-sans text-gray-600 text-sm leading-relaxed transition group-hover:text-white">
            On the mission of providing you with tailored digital marketing
            solutions for your company, we analyze the outcomes with a keen eye
            for each detail. To achieve surging growth, we utilize highly
            specific data to provide feedback on our campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
