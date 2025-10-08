import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { MapPin, Calendar, BookOpen, Mail, Send } from "lucide-react";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";

const SingleTeamMember = ({ teamMember }) => {
    const [memberPhoto, setMemberPhoto] = useState(
        "/images/teams/default-avatar.webp"
    );

    const telegramLink = teamMember.telegramlink || "#";

    const email = teamMember.email || "example@email.com";

    useEffect(() => {
        let photo = "/images/teams/default-avatar.webp";

        if (teamMember.email === "juhar@meskotdigitals.com") {
            photo = "/images/teams/juhar.webp";
        } else if (teamMember.email === "ebisa@gmail.com") {
            photo = "/images/teams/image2.webp";
        } else if (teamMember.email === "lidet@gmail.com") {
            photo = "/images/teams/lidet.webp";
        }

        setMemberPhoto(photo);
    }, [teamMember]);

    // Check if a value exists and is not empty
    const hasValue = (value) => {
        return (
            value !== null && value !== undefined && value !== "" && value !== 0
        );
    };

    // Count available stats to determine grid layout
    const availableStats = [
        hasValue(teamMember.projects),
        hasValue(teamMember.experience),
        hasValue(teamMember.address),
        hasValue(teamMember.joined),
    ].filter(Boolean).length;

    const getStatsGridClass = () => {
        if (availableStats === 0) return "hidden";
        if (availableStats === 1) return "grid-cols-1";
        if (availableStats === 2) return "grid-cols-2";
        if (availableStats === 3) return "grid-cols-3";
        return "grid-cols-2 md:grid-cols-4";
    };

    return (
        <>
            <Head>
                <title>
                    {teamMember.name
                        ? `${teamMember.name} - Our Team`
                        : "Our Team"}
                </title>
            </Head>
            <main className="min-h-screen py-12 md:py-24 bg-gray-950 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Profile Header */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden shadow-xl border-4 border-purple-500/20">
                                <img
                                    src={memberPhoto}
                                    loading="lazy"
                                    alt={teamMember.name || "Team Member"}
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                    onError={(e) =>
                                        (e.currentTarget.src =
                                            "/images/teams/default-avatar.webp")
                                    }
                                />
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                {teamMember.name || "Team Member"}
                            </h1>
                            {(teamMember.profession || teamMember.position) && (
                                <p className="text-xl text-purple-400 mb-6">
                                    {teamMember.profession ||
                                        teamMember.position}
                                </p>
                            )}

                            {/* Stats - Only show if at least one stat exists */}
                            {availableStats > 0 && (
                                <div
                                    className={`grid ${getStatsGridClass()} gap-4 mb-6`}
                                >
                                    {hasValue(teamMember.projects) && (
                                        <div className="bg-gray-900/50 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-purple-400">
                                                {teamMember.projects}+
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                Projects
                                            </div>
                                        </div>
                                    )}
                                    {hasValue(teamMember.experience) && (
                                        <div className="bg-gray-900/50 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-purple-400">
                                                {teamMember.experience}+
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                Years Experience
                                            </div>
                                        </div>
                                    )}
                                    {hasValue(teamMember.address) && (
                                        <div className="bg-gray-900/50 p-4 rounded-lg">
                                            <div className="flex items-center text-sm text-gray-400">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {teamMember.address}
                                            </div>
                                            <div className="text-sm text-gray-400 mt-2">
                                                Location
                                            </div>
                                        </div>
                                    )}
                                    {hasValue(teamMember.joined) && (
                                        <div className="bg-gray-900/50 p-4 rounded-lg">
                                            <div className="flex items-center text-sm text-gray-400">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {teamMember.joined}
                                            </div>
                                            <div className="text-sm text-gray-400 mt-2">
                                                Joined
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Social Links - Only Telegram and Email */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {telegramLink !== "#" && (
                                    <a
                                        href={`https://t.me/${telegramLink}`}
                                        className="flex items-center px-4 py-2 bg-blue-500/30 hover:bg-blue-500/50 rounded-lg transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        Telegram
                                    </a>
                                )}
                                {hasValue(teamMember.email) && (
                                    <a
                                        href={`mailto:${email}`}
                                        target="_blank"
                                        className="flex items-center px-4 py-2 bg-pink-800/30 hover:bg-pink-800/50 rounded-lg transition-colors"
                                    >
                                        <Mail className="w-5 h-5 mr-2" />
                                        Email
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Main Content - About Section Only */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* About Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-gray-900/50 rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                                    About {teamMember.name || "Team Member"}
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    {teamMember.details ||
                                        teamMember.bio ||
                                        `${
                                            teamMember.name ||
                                            "This team member"
                                        } is a talented professional at Meskot Digital Solutions with a passion for technology and innovation. They contribute to our team's success through their dedication and expertise.`}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar - Only show if there's additional information */}
                        {(hasValue(teamMember.email) ||
                            hasValue(teamMember.phone) ||
                            hasValue(teamMember.address) ||
                            hasValue(teamMember.joined)) && (
                            <div className="lg:col-span-1">
                                <div className="bg-gray-900/50 rounded-2xl p-6 sticky top-6">
                                    <h3 className="text-lg font-bold mb-4 text-white">
                                        Additional Information
                                    </h3>

                                    {hasValue(teamMember.email) && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-medium text-gray-400 mb-1">
                                                Email
                                            </h4>
                                            <p className="text-purple-400 break-all">
                                                {teamMember.email}
                                            </p>
                                        </div>
                                    )}

                                    {hasValue(teamMember.phone) && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-medium text-gray-400 mb-1">
                                                Phone
                                            </h4>
                                            <p className="text-purple-400">
                                                {teamMember.phone}
                                            </p>
                                        </div>
                                    )}

                                    {hasValue(teamMember.address) && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-medium text-gray-400 mb-1">
                                                Location
                                            </h4>
                                            <p className="text-white">
                                                {teamMember.address}
                                            </p>
                                        </div>
                                    )}

                                    {hasValue(teamMember.joined) && (
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-400 mb-1">
                                                Joined
                                            </h4>
                                            <p className="text-white">
                                                {teamMember.joined}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default SingleTeamMember;

SingleTeamMember.layout = (page) => <ClientLayout children={page} />;
