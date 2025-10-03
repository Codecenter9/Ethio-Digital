import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 py-16 relative overflow-hidden">
            {/* Decorative Gradient Circles */}
            <div className="absolute -top-16 -left-16 w-60 h-60 bg-purple-700/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                {/* Column 1: Logo & Description */}
                <div>
                    <Link
                        href="/"
                        className="group flex items-center gap-1 transition-all duration-500 hover:opacity-90"
                    >
                        <div className="relative p-2 rounded-full flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full z-10 flex items-center justify-center">
                                <img
                                    src="/logo/MDlogo2.png"
                                    className="w-12 h-12 md:w-14 md:h-14 object-cover drop-shadow-lg filter brightness-110"
                                    alt="Meskot Digital"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col py-1 mt-0.5 tracking-wider leading-tight">
                            <span className="text-xl md:text-2xl font-semibold text-gray-400 uppercase">
                                Meskot
                            </span>
                            <span className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase border border-gray-700/50">
                                <span className="hidden md:flex">
                                    Digital Solution
                                </span>
                                <span className="flex md:hidden">
                                    Your window to the digital world
                                </span>
                            </span>
                        </div>
                    </Link>
                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                        Modern digital solutions for web, mobile, digital
                        marketing, and enterprise systems. Let’s build the
                        future together.
                    </p>
                </div>

                {/* Column 2: Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Useful Links
                    </h3>
                    <ul className="space-y-2">
                        {["Home", "About", "Projects", "News", "Contact"].map(
                            (link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={`/${link
                                            .toLowerCase()
                                            .replace(" ", "")}`}
                                        className="hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Services
                    </h3>
                    <ul className="space-y-2">
                        {[
                            "Software Development",
                            "Graphics Design",
                            "Digital Marketing",
                            "Social Media Management",
                        ].map((service, idx) => (
                            <li key={idx}>
                                <Link
                                    href="#"
                                    className="hover:text-blue-400 transition-colors duration-300"
                                >
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Contact Us
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Addis Ababa, Ethiopia <br />
                        Phone: +251982648798 <br />
                        Email: juharendrishu@gmail.com
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 transition-all hover:bg-blue-600 hover:scale-110"
                        >
                            <Facebook size={20} className="text-white" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 transition-all hover:bg-blue-400 hover:scale-110"
                        >
                            <Twitter size={20} className="text-white" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 transition-all hover:bg-blue-300 hover:scale-110"
                        >
                            <Linkedin size={20} className="text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 relative z-10">
                © {new Date().getFullYear()} Meskot Digitals. All rights
                reserved.
            </div>
        </footer>
    );
};

export default Footer;
