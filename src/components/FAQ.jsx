import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does InfoNavigators provide?",
    answer:
      "We offer Digital Marketing, SEO, Lead Generation, Data Entry, Python Scraping, Internet Research, Influencer Research, and Web Development services tailored for business growth.",
  },
  {
    question: "How does SEO help my business?",
    answer:
      "SEO increases your website’s visibility on search engines, drives organic traffic, improves brand credibility, and boosts lead conversions over time.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes! We customize our strategies to meet the needs of startups, small businesses, and enterprises with affordable and scalable solutions.",
  },
  {
    question: "How many projects have you successfully delivered?",
    answer:
      "We have successfully delivered 200+ projects worldwide across multiple industries, helping clients achieve measurable results.",
  },
  {
    question: "Why should I choose InfoNavigators?",
    answer:
      "We combine affordability, proven experience, and trusted client relationships to deliver tailored solutions for your digital growth.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Frequently Asked <span className="text-brandOrange">Questions</span>
        </h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl md:max-w-3xl mx-auto space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm"
          >
            {/* Question */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-black pr-4">
                {faq.question}
              </h3>
              <span className="text-brandOrange text-lg sm:text-xl md:text-2xl flex-shrink-0">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-black font-sans leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
