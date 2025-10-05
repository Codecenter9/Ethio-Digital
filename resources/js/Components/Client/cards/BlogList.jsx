import { useEffect, useState } from "react";
import {
    Heart,
    MessageCircle,
    Search,
    Calendar,
    User,
    ArrowRight,
    Filter,
} from "lucide-react";
import { Dropdown } from "@/Components/Client/Layout/DropDown";
import { Link } from "@inertiajs/react";
import blogs from "@/Components/data/blogs";

export default function BlogList() {
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Fake loading effect (to show skeletons briefly)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500); // half second
        return () => clearTimeout(timer);
    }, []);

    const categories = ["All", ...new Set(blogs.map((b) => b.category))];

    const filteredBlogs = blogs.filter(
        (b) =>
            (activeCategory === "All" || b.category === activeCategory) &&
            b.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleLoad = () => {
        if (visibleCount >= filteredBlogs.length) setVisibleCount(6);
        else setVisibleCount((prev) => prev + 6);
    };

    return (
        <section className="py-12" aria-label="Blog section">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
                {/* Main Content */}
                <div className="lg:col-span-3">
                    {/* Search + Filter for Mobile */}
                    <div className="flex flex-row gap-3 items-center md:hidden mb-6">
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                id="search-mobile"
                                type="text"
                                placeholder="Search blogs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
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

                    {/* Blogs Grid */}
                    {loading ? (
                        <div className="grid gap-6 md:grid-cols-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="animate-pulse bg-gray-800/50 rounded-2xl h-96"
                                />
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-6 md:grid-cols-2">
                                {filteredBlogs
                                    .slice(0, visibleCount)
                                    .map((blog) => (
                                        <article
                                            key={blog.id}
                                            className="group relative bg-gradient-to-b from-gray-800/30 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
                                        >
                                            {/* Image */}
                                            <div className="relative h-56 overflow-hidden">
                                                <img
                                                    src={blog.image}
                                                    loading="lazy"
                                                    alt={`${blog.title} cover`}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-purple-300">
                                                    {blog.category}
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70"></div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <header>
                                                    <Link
                                                        href={`/news/${blog.slug}`}
                                                        className="text-xl font-semibold text-white mb-3 block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                                                    >
                                                        {blog.title}
                                                    </Link>
                                                </header>

                                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                                    <div className="flex items-center gap-2">
                                                        <User className="w-7 h-7" />{" "}
                                                        <div className="flex flex-col">
                                                            <span className="text-base font-medium text-gray-200">
                                                                {blog.author}
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
                                                                blog.date
                                                            ).toISOString()}
                                                            className="text-xs text-gray-400 mt-1 block"
                                                        >
                                                            {new Date(
                                                                blog.date
                                                            ).toLocaleDateString(
                                                                "en-CA"
                                                            )}
                                                        </time>
                                                    </div>
                                                </div>

                                                <footer className="flex items-center justify-between">
                                                    {/* <div className="flex items-center gap-4 text-gray-400">
                                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                                            <Heart className="w-5 h-5 text-pink-500" />
                                                            <span>
                                                                {blog.likes}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-1">
                                                            <MessageCircle className="w-4 h-4" />
                                                            <span>
                                                                {blog.comments ||
                                                                    0}
                                                            </span>
                                                        </div>
                                                        <span>
                                                            {blog.readTime}
                                                        </span>
                                                    </div> */}

                                                    <Link
                                                        href={`/news/${blog.slug}`}
                                                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                                                    >
                                                        Read More
                                                        <ArrowRight className="w-4 h-4 ml-1" />
                                                    </Link>
                                                </footer>
                                            </div>
                                        </article>
                                    ))}
                            </div>

                            {/* Load More Button */}
                            {filteredBlogs.length > 6 && (
                                <div className="flex justify-center mt-10">
                                    <button
                                        onClick={toggleLoad}
                                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                                    >
                                        {visibleCount >= filteredBlogs.length
                                            ? "Show Less"
                                            : "Load More Articles"}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Sidebar (same as before) */}
                <aside className="lg:col-span-1 space-y-8" aria-label="Sidebar">
                    {/* Search */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay={50}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search blogs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <nav
                        data-aos="fade-up"
                        data-aos-delay={50}
                        className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/30"
                        aria-label="Categories"
                    >
                        <h2 className="text-lg font-semibold mb-4 text-white">
                            Categories
                        </h2>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveCategory(cat)}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition ${
                                            activeCategory === cat
                                                ? "bg-purple-600 text-white"
                                                : "text-gray-300 hover:bg-gray-700/50"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Recent Posts */}
                    <section
                        data-aos="fade-up"
                        data-aos-delay={50}
                        className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/30"
                    >
                        <h2 className="text-lg font-semibold mb-4 text-white">
                            Recent Posts
                        </h2>
                        <ul className="space-y-4">
                            {blogs.slice(0, 4).map((blog) => (
                                <li
                                    key={blog.id}
                                    className="flex items-start gap-3"
                                >
                                    <div className="flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={`${blog.title} thumbnail`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <Link
                                            href={`/news/${blog.slug}`}
                                            className="text-sm font-medium text-white hover:text-purple-400 transition line-clamp-2"
                                        >
                                            {blog.title}
                                        </Link>
                                        <time
                                            dateTime={new Date(
                                                blog.date
                                            ).toISOString()}
                                            className="text-xs text-gray-400 mt-1 block"
                                        >
                                            {new Date(
                                                blog.date
                                            ).toLocaleDateString("en-CA")}
                                        </time>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Tags */}
                    <section
                        data-aos="fade-up"
                        data-aos-delay={50}
                        className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/30"
                    >
                        <h2 className="text-lg font-semibold mb-4 text-white">
                            Popular Tags
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                ...new Set(
                                    blogs.flatMap((b) =>
                                        Array.isArray(b.tags)
                                            ? b.tags
                                            : JSON.parse(b.tags || "[]")
                                    )
                                ),
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 hover:bg-purple-600 hover:text-white transition cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>
                </aside>
            </div>
        </section>
    );
}
