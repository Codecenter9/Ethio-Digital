import {
    Calendar,
    User,
    Heart,
    Clock,
    Share2,
    MessageCircle,
} from "lucide-react";
import { Link, Head } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";

// Categories mock data
const categories = [
    { name: "Technology", count: 12 },
    { name: "Design", count: 8 },
    { name: "Business", count: 5 },
    { name: "Lifestyle", count: 7 },
    { name: "Travel", count: 3 },
];

// Mock comments data
// const comments = [
//     {
//         id: 1,
//         author: "Jane Smith",
//         date: "2 days ago",
//         content:
//             "This was a really insightful post. Thanks for sharing your expertise on this topic!",
//     },
//     {
//         id: 2,
//         author: "Alex Johnson",
//         date: "3 days ago",
//         content:
//             "I've been struggling with this exact issue. Your solution worked perfectly for me.",
//     },
// ];

const SingleBlogPage = ({ blog, blogs }) => {
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-200">
                <h2 className="text-2xl font-bold">Blog not found</h2>
            </div>
        );
    }

    const meta = {
        title: `${blog.title} | Meskot Digital Solutions`,
        description:
            blog.excerpt ||
            "Read the latest insights and updates from Meskot Digital Solutions.",
        keywords:
            Array.isArray(blog.tags) && blog.tags.length > 0
                ? blog.tags.join(", ")
                : "blogs, news, meskot digital solutions",
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
            </Head>

            <main className="min-h-screen py-12 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <main className="md:w-2/3">
                            <nav className="flex text-sm text-gray-400 mb-8 gap-1">
                                <Link
                                    href="/"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    Home
                                </Link>
                                <span className="mx-2">/</span>
                                <Link
                                    href="/news"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    news
                                </Link>
                                <span className="mx-2">/</span>
                                <span className="text-purple-400">
                                    {blog.slug}
                                </span>
                            </nav>

                            {/* Article Header */}
                            <header className="mb-8">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    {blog.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{blog.author}</span>
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
                                            ).toLocaleDateString("en-CA")}
                                        </time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
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
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>{blog.comments} comments</span>
                                    </div>
                                </div>
                            </header>

                            {/* Featured Image */}
                            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-10">
                                <img
                                    src={blog.image}
                                    loading="lazy"
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Article Content */}
                            <article className="prose prose-lg prose-invert max-w-none my-12">
                                <p className="lead text-xl text-gray-300 mb-8">
                                    {blog.description}
                                </p>
                            </article>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
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

                            {/* Footer Buttons */}
                            {/* <div className="flex flex-row items-center justify-between py-6 border-t border-b border-gray-800 mb-12 gap-4">
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                                    >
                                        <Heart className="w-5 h-5" />
                                        <span>{blog.likes} Likes</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                                    >
                                        <Share2 className="w-5 h-5" />
                                        <span>Share</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-400">
                                        {125} views
                                    </span>
                                </div>
                            </div> */}

                            {/* Comments Section */}
                            {/* <section className="my-12">
                                <h2 className="text-2xl font-bold mb-6">
                                    Comments ({comments.length})
                                </h2>

                                <div className="space-y-6 mb-8">
                                    {comments.map((comment) => (
                                        <div
                                            key={comment.id}
                                            className="flex gap-4 p-4 bg-gray-800/30 rounded-lg"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-medium">
                                                        {comment.author}
                                                    </span>
                                                    <span className="text-sm text-gray-400">
                                                        • {comment.date}
                                                    </span>
                                                </div>
                                                <p className="text-gray-300">
                                                    {comment.content}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-4">
                                    Leave a Comment
                                </h3>
                                <form className="space-y-4">
                                    <textarea
                                        placeholder="Your Comment"
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                        rows={4}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium"
                                    >
                                        Post Comment
                                    </button>
                                </form>
                            </section> */}
                        </main>

                        {/* Sidebar - Reduced width */}
                        <aside className="md:w-1/3 space-y-8">
                            {/* About Author */}
                            <div className="bg-gray-800/30 p-5 rounded-2xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-500">
                                            Author
                                        </h3>

                                        <h4 className="font-medium">
                                            {blog.author}
                                        </h4>
                                        <p className="text-sm text-gray-400">
                                            Meskot Digitals Member
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Categories */}
                            {/* <div className="bg-gray-800/30 p-5 rounded-2xl">
                                <h3 className="font-bold mb-4">Categories</h3>
                                <ul className="space-y-3">
                                    {categories.map((cat) => (
                                        <li
                                            key={cat.name}
                                            className="flex justify-between items-center"
                                        >
                                            <Link
                                                href="#"
                                                className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                                            >
                                                {cat.name}
                                            </Link>
                                            <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                                                {cat.count}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}

                            {/* Recent Posts */}
                            <div className="bg-gray-800/30 p-5 rounded-2xl">
                                <h3 className="font-bold mb-4">Recent Posts</h3>
                                <div className="space-y-4">
                                    {blogs.slice(0, 3).map((b) => (
                                        <Link
                                            key={b.id}
                                            href={`/news/${b.slug}`}
                                            className="flex gap-3 items-center group"
                                        >
                                            <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                                                <img
                                                    src={b.image_url}
                                                    alt={b.title}
                                                    className="object-cover h-full group-hover:scale-105 transition-transform"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm line-clamp-2 group-hover:text-purple-400 transition-colors">
                                                    {b.title}
                                                </h4>
                                                <p className="text-xs text-gray-400">
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
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="bg-gray-800/30 p-5 rounded-2xl">
                                <h3 className="font-bold mb-4">
                                    Subscribe to Newsletter
                                </h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    Stay updated with our latest news and
                                    articles.
                                </p>
                                <form className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium text-sm"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SingleBlogPage;

SingleBlogPage.layout = (page) => <ClientLayout children={page} />;
