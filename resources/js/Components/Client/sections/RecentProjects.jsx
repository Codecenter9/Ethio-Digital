import React, { useState, useMemo } from "react";
import SectionHeading from "../Layout/SectionHeading";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import ProjectCTA from "../cards/ProjectCTA";

const RecentProjects = ({ projects }) => {
    // Extract unique categories
    const categories = useMemo(() => {
        const unique = [...new Set(projects.map((p) => p.category))];
        return ["All", ...unique];
    }, [projects]);

    const [activeCategory, setActiveCategory] = useState("All");

    // Filter projects by active category
    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            className="relative overflow-hidden mx-auto "
            aria-labelledby="projects-heading"
        >
            <div className="pt-24 pb-12 px-6 md:px-12">
                <SectionHeading
                    subtitle="Our Portfolio"
                    title="Recent Projects"
                    description="Crafting digital experiences that inspire, engage, and deliver exceptional results for forward-thinking brands."
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Categories Tabs */}
                    <div className="flex justify-center mb-10">
                        <div className="flex items-center gap-6 border border-gray-700/40 rounded-2xl px-6 py-3 bg-gray-900/50 backdrop-blur-sm">
                            {categories.map((cat, idx) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`relative text-sm md:text-base font-medium transition-colors duration-300 ${
                                        activeCategory === cat
                                            ? "text-purple-400"
                                            : "text-gray-400 hover:text-gray-200"
                                    }`}
                                >
                                    {cat}
                                    {activeCategory === cat && (
                                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-purple-500 rounded-full"></span>
                                    )}
                                    {/* Divider */}
                                    {idx !== categories.length - 1 && (
                                        <span className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-px h-4 bg-gray-600/50"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={50 + index * 50}
                                    key={project.id}
                                    className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm hover:-translate-y-2"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={project.image_url}
                                            loading="lazy"
                                            alt={project.project_name}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

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
                                                        "A cutting-edge digital solution crafted with modern technologies and innovative design principles."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer */}
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

                                    {/* Hover Border Effect */}
                                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400 col-span-full">
                                No projects found for this category.
                            </p>
                        )}
                    </div>

                    {/* CTA */}
                    <ProjectCTA />
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
