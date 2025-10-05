import React from "react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "@inertiajs/react";
import SectionHeading from "../Layout/SectionHeading";

const Blogs = ({ blogs }) => {
    return (
        <section
            className="py-12 md:py-16 px-6 md:px-12 relative"
            aria-labelledby="blogs-heading"
        >
            <SectionHeading
                subtitle="Blogs"
                title="Our Latest Blogs"
                description="Stay updated with insights, tips, and stories from Meskot Digitals to inspire your digital journey."
            />

            {/* Blog Grid - 2 columns */}
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
                {/* First Column - Featured Blog */}
                <div className="space-y-6">
                    {blogs[0] && (
                        <article
                            data-aos="fade-right"
                            data-aos-delay="100"
                            key={blogs[0].id}
                            className="group relative bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 h-full"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={blogs[0].image}
                                    loading="lazy"
                                    alt={blogs[0].title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-purple-300">
                                    {blogs[0].category}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <header className="mb-4">
                                    <Link
                                        href={`/news/${blogs[0].slug}`}
                                        className="text-xl font-semibold text-white mb-3 block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                                    >
                                        {blogs[0].title}
                                    </Link>
                                </header>

                                {/* Meta info */}
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-2">
                                        <User className="w-7 h-7" />{" "}
                                        <div className="flex flex-col">
                                            <span className="text-base font-medium text-gray-200">
                                                {blogs[0].author}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                Meskot Team
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <time
                                            dateTime={new Date(
                                                blogs[0].date
                                            ).toISOString()}
                                            className="text-xs text-gray-400 mt-1 block"
                                        >
                                            {new Date(
                                                blogs[0].date
                                            ).toLocaleDateString("en-CA")}
                                        </time>
                                    </div>
                                </div>

                                <footer className="flex items-center justify-between">
                                    <Link
                                        href={`/news/${blogs[0].slug}`}
                                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </footer>
                            </div>
                        </article>
                    )}
                </div>

                {/* Second Column - Two Stacked Blogs */}
                <div className="space-y-6">
                    {blogs.slice(1, 3).map((blog, index) => (
                        <article
                            data-aos="fade-left"
                            data-aos-delay={150 + index * 50}
                            key={blog.id}
                            className="group relative bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Image */}
                                <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={`${blog.title} cover image`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-purple-300">
                                        {blog.category}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent opacity-70 md:hidden"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:w-3/5">
                                    <header className="mb-4">
                                        <Link
                                            href={`/news/${blog.slug}`}
                                            className="text-lg font-semibold text-white mb-2 block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                                        >
                                            {blog.title}
                                        </Link>
                                    </header>

                                    {/* Meta info */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-2">
                                            <User className="w-5 h-5" />
                                            <span className="text-sm text-gray-300">
                                                {blog.author}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <time
                                                dateTime={new Date(
                                                    blog.date
                                                ).toISOString()}
                                                className="text-xs text-gray-400"
                                            >
                                                {new Date(
                                                    blog.date
                                                ).toLocaleDateString("en-CA")}
                                            </time>
                                        </div>
                                    </div>

                                    <footer className="flex items-center justify-between">
                                        <Link
                                            href={`/news/${blog.slug}`}
                                            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium text-sm"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </footer>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* View All Blogs Button */}
            <div className="mt-12 flex justify-center">
                <Link
                    href="/news"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-xl hover:shadow-purple-500/20"
                >
                    View All Blogs
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
};

export default Blogs;
