import { Calendar, User, Clock, MessageCircle } from "lucide-react";
import { Link, Head, usePage } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";
import blogs from "@/Components/data/blogs";
import Comments from "@/Components/Client/cards/comments";

const SingleBlogPage = ({ comments }) => {
    const { slug } = usePage().props;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-200">
                <h2 className="text-2xl font-bold">Blog not found</h2>
            </div>
        );
    }

    const filteredComments = comments.filter(
        (c) => String(c.blog_id) === String(blog.id)
    );

    const meta = {
        title: `${blog.title} | Meskot Digital Solutions`,
        description:
            blog.description ||
            "Read the latest insights and updates from Meskot Digital Solutions.",
        keywords:
            Array.isArray(blog.tags) && blog.tags.length > 0
                ? blog.tags.join(", ")
                : "blogs, news, meskot digital solutions",
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
            </Head>

            <main className="min-h-screen py-12 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <main className="md:w-2/3">
                            {/* Breadcrumb */}
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
                                    News
                                </Link>
                                <span className="mx-2">/</span>
                                <span className="text-purple-400">
                                    {blog.slug}
                                </span>
                            </nav>

                            {/* Blog Header */}
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
                                        <time dateTime={blog.date}>
                                            {new Date(
                                                blog.date
                                            ).toLocaleDateString("en-CA")}
                                        </time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>
                                            {blog.read_time || "5 min read"}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>
                                            {filteredComments.length || 0}{" "}
                                            comments
                                        </span>
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

                            {/* Blog Content */}
                            <article className="prose prose-lg prose-invert max-w-none my-12">
                                <p className="lead text-xl text-gray-300 mb-8">
                                    {blog.description}
                                </p>
                            </article>

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {blog.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300 hover:bg-purple-600 hover:text-white transition cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* comments */}
                            <Comments
                                blog_id={blog.id}
                                comments={filteredComments}
                            />
                        </main>

                        {/* Sidebar */}
                        <aside className="md:w-1/3 space-y-8">
                            {/* Author */}
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
                                                    src={b.image}
                                                    alt={b.title}
                                                    className="object-cover h-full group-hover:scale-105 transition-transform"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-sm line-clamp-2 group-hover:text-purple-400 transition-colors">
                                                    {b.title}
                                                </h4>
                                                <p className="text-xs text-gray-400">
                                                    {new Date(
                                                        b.date
                                                    ).toLocaleDateString(
                                                        "en-CA"
                                                    )}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
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

SingleBlogPage.layout = (page) => <ClientLayout children={page} />;

export default SingleBlogPage;
