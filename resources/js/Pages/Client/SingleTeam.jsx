import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
    Github,
    Linkedin,
    Twitter,
    Globe,
    Mail,
    MapPin,
    Calendar,
    BookOpen,
    Award,
} from "lucide-react";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";

const SingleTeamMember = ({ teamMember }) => {
    const [activeTab, setActiveTab] = useState("about");

    // const safeSocials = {
    //     github: teamMember.socials?.github || "#",
    //     linkedin: teamMember.socials?.linkedin || "#",
    //     twitter: teamMember.socials?.twitter || "#",
    //     portfolio: teamMember.socials?.portfolio || "#",
    // };

    const email = teamMember.email || "example@email.com";
    const skills = teamMember.skills || [
        "React",
        "Laravel",
        "UI/UX",
        "Teamwork",
    ];

    return (
        <>
            <Head>
                <title>Our Team</title>
            </Head>
            <main className="min-h-screen py-12 md:py-24 bg-gray-950 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Profile Header */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shadow-xl border-4 border-purple-500/20">
                                <img
                                    src={
                                        teamMember.profile_photo
                                            ? teamMember.profile_url
                                            : "/images/teams.webp"
                                    }
                                    loading="lazy"
                                    alt={teamMember.name}
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                    onError={(e) =>
                                        (e.currentTarget.src =
                                            "/images/teams.webp")
                                    }
                                />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {teamMember.name}
                            </h1>
                            <p className="text-xl text-purple-400 mb-6">
                                {teamMember.profession || teamMember.position}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-400">
                                        {teamMember.projects || 8}+
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Projects
                                    </div>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-400">
                                        {teamMember.experience || 3}+
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Years Of Experience
                                    </div>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <div className="flex items-center text-sm text-gray-400">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {teamMember.address || "Ethiopia"}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-2">
                                        Location
                                    </div>
                                </div>
                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <div className="flex items-center text-sm text-gray-400">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {teamMember.joined || "2023"}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-2">
                                        Joined
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            {/* <div className="flex flex-wrap gap-3 mb-6">
                                {safeSocials.github !== "#" && (
                                    <Link
                                        href={safeSocials.github}
                                        className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        GitHub
                                    </Link>
                                )}
                                {safeSocials.linkedin !== "#" && (
                                    <Link
                                        href={safeSocials.linkedin}
                                        className="flex items-center px-4 py-2 bg-blue-800/30 hover:bg-blue-800/50 rounded-lg transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="w-5 h-5 mr-2" />
                                        LinkedIn
                                    </Link>
                                )}
                                {safeSocials.twitter !== "#" && (
                                    <Link
                                        href={safeSocials.twitter}
                                        className="flex items-center px-4 py-2 bg-sky-800/30 hover:bg-sky-800/50 rounded-lg transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Twitter className="w-5 h-5 mr-2" />
                                        Twitter
                                    </Link>
                                )}
                                {safeSocials.portfolio !== "#" && (
                                    <Link
                                        href={safeSocials.portfolio}
                                        className="flex items-center px-4 py-2 bg-purple-800/30 hover:bg-purple-800/50 rounded-lg transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Globe className="w-5 h-5 mr-2" />
                                        Portfolio
                                    </Link>
                                )}
                                <Link
                                    href={`mailto:${email}`}
                                    className="flex items-center px-4 py-2 bg-pink-800/30 hover:bg-pink-800/50 rounded-lg transition-colors"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Email
                                </Link>
                            </div> */}
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="border-b border-gray-800 mb-8">
                        <nav className="flex space-x-8">
                            <button
                                onClick={() => setActiveTab("about")}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === "about"
                                        ? "border-purple-500 text-purple-400"
                                        : "border-transparent text-gray-400 hover:text-gray-300"
                                }`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => setActiveTab("skills")}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === "skills"
                                        ? "border-purple-500 text-purple-400"
                                        : "border-transparent text-gray-400 hover:text-gray-300"
                                }`}
                            >
                                Skills
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {activeTab === "about" && (
                                <div className="bg-gray-900/50 rounded-2xl p-6">
                                    <h2 className="text-xl font-bold mb-4 flex items-center">
                                        <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                                        About {teamMember.name}
                                    </h2>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {teamMember.details ||
                                            teamMember.bio ||
                                            `${teamMember.name} is a talented professional at Ethio Digitals with a passion for technology and innovation. They contribute to our team's success through their dedication and expertise.`}
                                    </p>
                                </div>
                            )}

                            {activeTab === "skills" && (
                                <div className="bg-gray-900/50 rounded-2xl p-6">
                                    <h2 className="text-xl font-bold mb-6 flex items-center">
                                        <Award className="w-5 h-5 mr-2 text-purple-400" />
                                        Skills & Expertise
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-900/50 rounded-2xl p-6 sticky top-6">
                                <h3 className="text-lg font-bold mb-4 text-white">
                                    Additional Information
                                </h3>

                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                                        Email
                                    </h4>
                                    <p className="text-purple-400">
                                        {teamMember.email || ""}
                                    </p>
                                </div>

                                {teamMember.phone && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">
                                            Phone
                                        </h4>
                                        <p className="text-purple-400">
                                            {teamMember.phone}
                                        </p>
                                    </div>
                                )}

                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                                        Location
                                    </h4>
                                    <p className="text-white">
                                        {teamMember.address ||
                                            "Addis Ababa, Ethiopia"}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                                        Joined
                                    </h4>
                                    <p className="text-white">
                                        {teamMember.joined || "2025"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SingleTeamMember;

SingleTeamMember.layout = (page) => <ClientLayout children={page} />;
