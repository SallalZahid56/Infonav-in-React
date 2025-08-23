import { useState } from "react";
import { FiUsers, FiShield, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import { FaSearch, FaDatabase, FaEnvelope, FaLinkedin, FaGlobe } from "react-icons/fa";
import aboutImage from "../assets/aboutleads.webp";
// import heroImage from "../assets/hero-bg.png";

export default function B2BLeadGeneration() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "What’s the difference between B2B and B2C leads?",
            answer:
                "B2B leads are business decision-makers, while B2C leads are individual consumers for personal use."
        },
        {
            question: "How can I ensure the leads are high quality?",
            answer:
                "We use strict data verification and only deliver qualified contacts matching your profile."
        },
        {
            question: "Do you handle both cold and warm leads?",
            answer: "Yes — we provide data for cold outreach and warm lead nurturing."
        },
        {
            question: "How soon will I see results?",
            answer:
                "Most clients see impact within 30–90 days, depending on industry & campaign type."
        }
    ];

    return (
        <div className="bg-white text-gray-900">
            {/* ✅ HERO */}
            <section className="relative overflow-hidden px-6 md:px-10 lg:px-20 py-16 bg-gradient-to-br from-orange-50 via-orange-100/40 to-white">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Premium{" "}
                            <span className="text-brandOrange">B2B Lead Generation</span>{" "}
                            Services That Drive Growth
                        </h1>
                        <p className="mt-4 text-lg text-gray-700">
                            We deliver category-specific, verified B2B leads so you can focus
                            on outreach, marketing, and closing sales without wasting time.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition"
                            >
                                Book a Free Consultation
                            </a>
                            <a
                                href="#services"
                                className="px-6 py-3 rounded-xl border border-gray-300 hover:border-black hover:text-black transition"
                            >
                                Explore Services
                            </a>
                        </div>
                        <div className="mt-6 flex gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <FiUsers /> 1,000+ Clients
                            </div>
                            <div className="flex items-center gap-2">
                                <FiShield /> 15+ Years
                            </div>
                            <div className="flex items-center gap-2">
                                <FiTrendingUp /> Millions of Leads
                            </div>
                        </div>
                    </div>

                    {/* RIGHT Visual */}
                    <div className="relative">
                        <div className="aspect-video rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6">
                            <div className="h-full w-full rounded-xl bg-gradient-to-br from-black via-gray-800 to-gray-900 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                                    {[
                                        { label: "Clients", value: "1K+" },
                                        { label: "Leads", value: "2M+" },
                                        { label: "ROI", value: "120%" },
                                        { label: "Industries", value: "50+" },
                                        { label: "Countries", value: "30+" },
                                        { label: "Tools", value: "10+" }
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="h-20 flex flex-col items-center justify-center text-white bg-white/10 rounded-lg border border-white/10 text-center"
                                        >
                                            <span className="text-lg font-bold">{item.value}</span>
                                            <span className="text-xs">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 ring-1 ring-black/5">
                            <div className="flex items-center gap-3">
                                <FiCheckCircle className="text-brandOrange text-xl" />
                                <div className="text-sm">
                                    <div className="font-semibold">Verified Leads</div>
                                    <div className="text-gray-600">Lower bounce, higher ROI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ ABOUT */}
            <section className="px-6 md:px-10 lg:px-20 py-16 bg-white">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            About Info Navigators Lead Generation
                        </h2>
                        <p className="text-gray-700 mb-4">
                            As a trusted B2B lead generation company, we’ve helped businesses
                            across industries achieve predictable growth by delivering
                            targeted leads that match their exact customer profile.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2">
                                ✅ Deep market research
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Advanced B2B platforms
                            </li>
                            <li className="flex items-center gap-2">
                                ✅ Proven outreach strategies
                            </li>
                        </ul>
                    </div>
                    <img
                        src={aboutImage}
                        alt="About us"
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* ✅ WHAT WE DO */}
            <section className="px-6 md:px-10 lg:px-20 py-16 bg-gray-50" id="services">
                <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaSearch className="text-brandOrange text-3xl" />,
                            title: "Lead Research",
                            desc: "Find category-specific prospects matching your ICP."
                        },
                        {
                            icon: <FaDatabase className="text-brandOrange text-3xl" />,
                            title: "Data Verification",
                            desc: "Every lead verified to minimize bounce rate."
                        },
                        {
                            icon: <FaEnvelope className="text-brandOrange text-3xl" />,
                            title: "Outreach Strategy",
                            desc: "Help your team engage with qualified opportunities."
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ FAQ */}
            <section className="px-6 md:px-10 lg:px-20 py-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-2xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-gray-300 rounded-xl p-4"
                        >
                            <button
                                className="flex justify-between items-center w-full text-left font-semibold"
                                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                            >
                                {faq.question}
                                <span>{openFAQ === i ? "-" : "+"}</span>
                            </button>
                            {openFAQ === i && (
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ FINAL CTA */}
            <section className="px-6 md:px-10 lg:px-20 py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-center rounded-t-3xl">
                <h2 className="text-4xl font-bold mb-4">
                    Ready to Scale with Verified Leads?
                </h2>
                <p className="text-lg mb-6">
                    Get your free consultation and start building a predictable sales
                    pipeline.
                </p>
                <a
                    href="#contact"
                    className="bg-white text-brandOrange font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
                >
                    Book Free Consultation
                </a>
            </section>
        </div>
    );
}
