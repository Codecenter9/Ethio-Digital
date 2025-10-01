import React, { useState } from "react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Link, Head } from "@inertiajs/react";
import { Dropdown } from "@/Components/Client/Layout/DropDown";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";
import { SharedHero } from "@/Components/Client/Layout/SharedHero";

const Projects = ({ projects }) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        "All",
        ...Array.from(new Set(projects.map((p) => p.category))),
    ];

    const filteredProjects = projects.filter((p) => {
        const matchesCategory =
            activeCategory === "All" || p.category === activeCategory;
        const matchesSearch = p.project_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const meta = {
        title: "Our Projects | Meskot Digital Solutions",
        description:
            "Browse Meskot Digital Solutions’ portfolio showcasing projects in software development, web design, mobile apps, digital marketing, and creative solutions that drive results.",
        keywords:
            "Meskot Digital Solutions projects, portfolio, case studies, client work, web design projects, mobile app projects, software development Ethiopia, digital marketing projects",
        url: "https://meskotdigital.com/projects",
        image: "https://meskotdigital.com/images/projects-cover.jpg", // replace with real image
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Meskot Digital Solutions"
                />
                <meta property="og:url" content={meta.url} />
                <meta property="og:image" content={meta.image} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>

            <main className="bg-gray-900">
                <SharedHero
                    title="Projects"
                    description="Explore our portfolio of projects that showcase our expertise in design, development, and digital innovation."
                />

                <div className="py-12 md:py-24 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
                    <div className="max-w-7xl mx-auto">
                        {/* Header with search + category filter */}
                        <div className="flex flex-row justify-end items-center gap-3 mb-12">
                            <div className="relative w-full md:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                                />
                            </div>

                            <Dropdown
                                filterIcon={Filter}
                                title="Filter"
                                options={categories}
                                selected={activeCategory}
                                onSelect={(cat) => setActiveCategory(cat)}
                            />
                        </div>

                        {filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8 md:gap-3">
                                {filteredProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm hover:-translate-y-2"
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative h-80 overflow-hidden">
                                            <img
                                                src={`/storage/${project.project_photo}`}
                                                loading="lazy"
                                                alt={project.project_name}
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Static Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                                            {/* Top Badges */}
                                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                                <div className="px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md text-sm font-semibold text-purple-300 border border-purple-500/30">
                                                    {project.category}
                                                </div>
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                        {project.project_name}
                                                    </h3>
                                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                                                        {project.description ||
                                                            "A cutting-edge digital solution crafted with modern technologies and innovative design principles to deliver exceptional user experiences and business results."}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Footer - Always Visible */}
                                        <div className="relative p-6 bg-gradient-to-b from-gray-800/40 to-gray-900/60 border-t border-gray-700/30">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                                                        {project.project_name}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm">
                                                        Completed Project
                                                    </p>
                                                </div>
                                                <Link
                                                    href={project.project_url}
                                                    className="p-3 rounded-xl bg-gray-700/50 hover:bg-purple-600 transition-all duration-300 group/link border border-gray-600/50 hover:border-purple-500/50"
                                                >
                                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover/link:text-white transform group-hover/link:translate-x-1 transition-all duration-300" />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Enhanced Hover Border Effect */}
                                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <h3 className="text-xl font-medium text-gray-300 mb-2">
                                    No projects found
                                </h3>
                                <p className="text-gray-500 max-w-md mx-auto">
                                    Try adjusting your search or filter to find
                                    what you are looking for.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Projects;

Projects.layout = (page) => <ClientLayout children={page} />;
