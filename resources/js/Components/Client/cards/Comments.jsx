import React, { useRef, useEffect, useMemo } from "react";
import { useForm } from "@inertiajs/react";

const CommentItem = ({ comment }) => (
    <div className="border-l-4 border-blue-500 rounded-r-lg p-4 bg-gray-800/50 backdrop-blur-sm text-gray-100 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start justify-between mb-3">
            <p className="font-bold text-gray-200 text-base flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white text-sm">
                    {comment.name.charAt(0).toUpperCase()}
                </span>
                {comment.name}
            </p>
            <p className="text-xs text-gray-400 mt-1">
                {new Date(comment.created_at).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </p>
        </div>
        <p className="text-gray-100 leading-relaxed text-sm pl-11">
            {comment.comment}
        </p>
    </div>
);

const Comments = ({ blog_id, comments }) => {
    const commentsEndRef = useRef(null);
    const formRef = useRef(null);

    const { data, setData, post, processing, reset, errors } = useForm({
        blog_id: blog_id,
        name: "",
        comment: "",
    });

    // Memoized filtered comments for better performance
    const filteredComments = useMemo(() => {
        return comments
            .filter((c) => String(c.blog_id) === String(blog_id))
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }, [comments, blog_id]);

    useEffect(() => {
        commentsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [filteredComments.length]);

    const handleCommentChange = (e) => {
        const value = e.target.value;
        if (value.length <= 500) {
            setData("comment", value);
        }
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        if (value.length <= 50) {
            setData("name", value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!data.name.trim()) {
            alert("Please enter your name");
            return;
        }
        if (!data.comment.trim()) {
            alert("Please enter your comment");
            return;
        }
        if (data.comment.trim().length < 5) {
            alert("Comment must be at least 5 characters long");
            return;
        }

        post("/comments", {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                // Small delay to ensure DOM is updated
                setTimeout(() => {
                    commentsEndRef.current?.scrollIntoView({
                        behavior: "smooth",
                    });
                }, 100);
            },
            onError: (errors) => {
                console.error("Error submitting comment:", errors);
            },
        });
    };

    const isFormValid =
        data.name.trim() &&
        data.comment.trim() &&
        data.comment.trim().length >= 5;

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="text-start">
                <h1 className="text-3xl font-bold text-white mb-3">
                    Comments
                    {filteredComments.length > 0 && (
                        <span className="ml-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {filteredComments.length}
                        </span>
                    )}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>

            {/* Display Comments */}
            <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-3 custom-scrollbar">
                {filteredComments.length > 0 ? (
                    filteredComments.map((comment) => (
                        <CommentItem key={comment.id} comment={comment} />
                    ))
                ) : (
                    <div className="text-center py-12 border-2 border-dashed border-gray-600 rounded-xl bg-gray-800/30 backdrop-blur-sm">
                        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </div>
                        <p className="text-gray-300 text-lg font-medium mb-2">
                            No comments yet
                        </p>
                        <p className="text-gray-500 text-sm">
                            Start the conversation and share your thoughts!
                        </p>
                    </div>
                )}
                <div ref={commentsEndRef} />
            </div>

            {/* Comment Form */}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl"
            >
                <input type="hidden" name="blog_id" value={data.blog_id} />

                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <svg
                        className="w-5 h-5 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                    </svg>
                    Add Your Comment
                </h3>

                {/* Name Input */}
                <div className="flex flex-col gap-3 mb-6">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-300 flex items-center gap-2"
                    >
                        Your Name
                        <span className="text-red-400">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="What's your name?"
                        value={data.name}
                        onChange={handleNameChange}
                        className="border border-gray-600 bg-gray-900/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 transition-all duration-300"
                        required
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    <div className="flex justify-between items-center">
                        {errors.name ? (
                            <p
                                className="text-red-400 text-sm flex items-center gap-1"
                                role="alert"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {errors.name}
                            </p>
                        ) : (
                            <div></div>
                        )}
                        <span className="text-xs text-gray-400">
                            {data.name.length}/50
                        </span>
                    </div>
                </div>

                {/* Comment Textarea */}
                <div className="flex flex-col gap-3 mb-6">
                    <label
                        htmlFor="comment"
                        className="text-sm font-medium text-gray-300 flex items-center gap-2"
                    >
                        Your Comment
                        <span className="text-red-400">*</span>
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder="What are your thoughts?..."
                        value={data.comment}
                        onChange={handleCommentChange}
                        className="border border-gray-600 bg-gray-900/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[140px] placeholder-gray-500 resize-vertical transition-all duration-300"
                        required
                        aria-required="true"
                        aria-invalid={errors.comment ? "true" : "false"}
                    />
                    <div className="flex justify-between items-center">
                        {errors.comment ? (
                            <p
                                className="text-red-400 text-sm flex items-center gap-1"
                                role="alert"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {errors.comment}
                            </p>
                        ) : (
                            <div className="text-xs text-gray-400">
                                {data.comment.trim().length < 5
                                    ? `Minimum ${
                                          5 - data.comment.trim().length
                                      } more characters required`
                                    : "✓ Ready to post"}
                            </div>
                        )}
                        <span className="text-xs text-gray-400">
                            {data.comment.length}/500
                        </span>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing || !isFormValid}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                        processing || !isFormValid
                            ? "bg-gray-700 cursor-not-allowed text-gray-500"
                            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
                    }`}
                    aria-busy={processing}
                >
                    {processing ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Posting Comment...
                        </>
                    ) : (
                        <>
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                />
                            </svg>
                            Post Comment
                        </>
                    )}
                </button>

                {/* Form Help Text */}
                <p className="text-center text-gray-400 text-xs mt-4 flex items-center justify-center gap-1">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    Your comment will be visible after approval
                </p>
            </form>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #374151;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #4b5563;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b7280;
                }
            `}</style>
        </div>
    );
};

export default Comments;
