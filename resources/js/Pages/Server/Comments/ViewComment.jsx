import React, { useMemo } from "react";
import { X, Calendar, User, Mail, MessageSquare, FileText } from "lucide-react";
import blogs from "@/Components/data/blogs";

const ViewComment = ({ comment, onClose }) => {
    if (!comment) return null;

    const relatedBlog = useMemo(() => {
        if (!blogs || !comment) return null;
        return blogs.find(
            (blog) =>
                blog.id === comment.blog_id ||
                blog.id === comment.blogId ||
                blog.id === Number(comment.blog_id)
        );
    }, [comment]);

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-700 max-w-2xl w-full max-h-[90vh] flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <div className="flex items-center space-x-3">
                            <MessageSquare className="w-6 h-6 text-indigo-400" />
                            <h2 className="text-xl font-semibold text-white">
                                Comment Details
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-6 overflow-y-auto scrollbar-hide">
                        {/* Commenter Info */}
                        <div className="flex items-start space-x-4">
                            <img
                                className="h-12 w-12 rounded-full border-2 border-gray-600"
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    comment.name || "User"
                                )}&background=0D8ABC&color=fff`}
                                alt={comment.name || "User"}
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                    <User className="w-4 h-4 text-gray-400" />
                                    <h3 className="text-lg font-semibold text-white truncate">
                                        {comment.name || "Unknown User"}
                                    </h3>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <p className="text-gray-400 text-sm truncate">
                                        {comment.email || "No email provided"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Blog Title */}
                        {relatedBlog && (
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Related Blog
                                </label>
                                <div className="flex items-center bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-gray-300">
                                    <FileText className="w-4 h-4 text-indigo-400 mr-2" />
                                    <span className="truncate">
                                        {relatedBlog.title}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Status
                            </label>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize bg-gray-800 text-gray-300 border border-gray-600">
                                {comment.status || "pending"}
                            </div>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Comment Date
                            </label>
                            <div className="flex items-center space-x-2 text-gray-300">
                                <Calendar className="w-4 h-4" />
                                <span>
                                    {comment.createdAt
                                        ? new Date(
                                              comment.createdAt
                                          ).toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "long",
                                              day: "numeric",
                                              hour: "2-digit",
                                              minute: "2-digit",
                                          })
                                        : "N/A"}
                                </span>
                            </div>
                        </div>

                        {/* Comment Content */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-3">
                                Comment
                            </label>
                            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                                    {comment.comment ||
                                        "No comment content available"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end space-x-3 p-6 border-t border-gray-700 bg-gray-900/50">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewComment;
