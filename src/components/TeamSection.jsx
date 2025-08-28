import React from "react";
import team1 from "../assets/B-re.png"; // Replace with your images
import team2 from "../assets/A-re.png";
import team3 from "../assets/N-re.png";
import team4 from "../assets/J-re.png";
import team5 from "../assets/Aw-re.png";

const TeamSection = () => {
  const teamMembers = [
    { img: team1, name: "Bilal Haider", role: "CEO & Founder" },
    { img: team2, name: "Ahmad Attique", role: "Marketing Head" },
    { img: team3, name: "Muhammad Naeem", role: "Web & SEO Expert" },
    { img: team4, name: "Junaid Iqbal", role: "Data Extraction Expert" },
    { img: team5, name: "Awais Ali", role: "Lead Generation Expert" },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our <span className="text-brandOrange">Team</span>
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg font-sans">
          The talented minds behind our success.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="w-40 h-40 rounded-full bg-brandOrange overflow-hidden shadow-lg mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <h3 className="text-xl font-heading font-semibold text-gray-900">
              {member.name}
            </h3>
            {/* Role */}
            <p className="text-gray-600 font-sans text-base">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
