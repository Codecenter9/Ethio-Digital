import React from "react";
import { Link } from "@inertiajs/react";

const NewsTable = ({ blogs }) => {
    return (
        <div className="overflow-x-auto">
            {blogs && blogs.length > 0 ? (
                <table className="min-w-full bg-gray-900 text-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                Category
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                Author
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index) => (
                            <tr
                                key={blog.id}
                                className={
                                    index % 2 === 0
                                        ? "bg-gray-900"
                                        : "bg-gray-800"
                                }
                            >
                                <td className="px-6 py-4 border-b border-gray-700">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-700">
                                    {blog.title}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-700">
                                    {blog.category}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-700">
                                    {blog.author}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-700">
                                    <Link
                                        href={`/news/${blog.slug}`}
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center py-12 text-gray-400">
                    No blog posts available
                </div>
            )}
        </div>
    );
};

export default NewsTable;
