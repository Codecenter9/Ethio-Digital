import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/react";
import { SharedHero } from "@/Components/Client/Layout/SharedHero";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";

const Teams = ({ teams }) => {
    const [team, setTeam] = useState(teams || []);

    useEffect(() => {
        const updatedTeams = (teams || []).map((member) => {
            let photo = null;

            if (member.email === "juhar@meskotdigitals.com") {
                photo = "/images/teams/juhar.webp";
            } else if (member.email === "ebisa@gmail.com") {
                photo = "/images/teams/image2.webp";
            } else if (member.email === "lidet@gmail.com") {
                photo = "/images/teams/lidet.webp";
            } else {
                photo = "/images/teams/default-avatar.webp";
            }

            return { ...member, photo };
        });

        setTeam(updatedTeams);
    }, [teams]);

    const meta = {
        title: "Our Team | Meskot Digital Solutions",
        description:
            "Meet the creative minds behind Meskot Digital Solutions. Our talented team of developers, designers, marketers, and content creators work together to deliver powerful digital solutions for businesses.",
        keywords:
            "Meskot Digital Solutions team, software developers Ethiopia, digital marketing experts, creative designers, social media managers, content creators, tech company Ethiopia",
        url: "https://meskotdigital.com/teams",
        image: "https://meskotdigital.com/teams-og.jpg",
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Meskot Digital Solutions"
                />
                <meta property="og:url" content={meta.url} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>

            <main className="bg-gray-950 min-h-screen">
                <SharedHero
                    title="Our Team"
                    description="Meet the passionate and talented people driving innovation at Meskot Digital Solutions."
                />

                <div className="max-w-7xl mx-auto py-12 md:py-24 px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-12">
                        {team.map((member, idx) => (
                            <div
                                key={member.id}
                                data-aos="fade-up"
                                data-aos-delay={100 + idx * 50}
                                className="flex flex-col items-center text-start"
                            >
                                <div className="relative group w-full h-[350px] overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={member.photo}
                                        loading="lazy"
                                        alt={member.name}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/70 via-transparent to-blue-500/70 opacity-0 group-hover:opacity-90 backdrop-blur-md transition-all duration-700"></div>

                                    <div className="absolute inset-0 p-8 flex flex-col items-start gap-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                                        <p className="text-gray-800 text-base">
                                            {member.limited_details ||
                                                "No detail provided"}
                                        </p>
                                        <Link
                                            href={`/team/${member.slug}`}
                                            className="text-indigo-600 font-medium hover:underline text-sm"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Link
                                        href={`/team/${member.slug}`}
                                        className="text-lg font-semibold text-white relative group"
                                    >
                                        {member.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                    <p className="text-sm text-gray-400 mt-1">
                                        {member.profession}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Teams;

Teams.layout = (page) => <ClientLayout children={page} />;
