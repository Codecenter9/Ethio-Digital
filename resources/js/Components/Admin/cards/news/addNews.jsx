import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const AddBlogs = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        category: "",
        image: null,
        tags: [],
    });

    const [previewUrl, setPreviewUrl] = useState(null);
    const [tagInput, setTagInput] = useState("");
    const [success, setSuccess] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        setData("image", file);

        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !data.tags.includes(tagInput.trim())) {
            setData("tags", [...data.tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const handleRemoveTag = (tag) => {
        setData(
            "tags",
            data.tags.filter((t) => t !== tag)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/news/store", {
            onSuccess: () => {
                setSuccess(true);
                reset();
                setPreviewUrl(null);
                setTagInput("");
                setTimeout(() => setSuccess(false), 3000);
            },
        });
    };

    return (
        <>
            {success && (
                <div className="mx-auto max-w-2xl">
                    <div className="p-4 bg-green-900/30 border border-green-700 rounded-xl text-green-300 flex items-center justify-center text-center">
                        ✅ Blog added successfully!
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left side - Blog details */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700 space-y-4">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Blog Title *
                            </label>
                            <input
                                type="text"
                                placeholder="Enter blog title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                                required
                            />
                            {errors.title && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Category
                            </label>
                            <input
                                type="text"
                                placeholder="Enter category"
                                value={data.category}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                            />
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Tags
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Add a tag"
                                    value={tagInput}
                                    onChange={(e) =>
                                        setTagInput(e.target.value)
                                    }
                                    className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                                />
                                <button
                                    type="button"
                                    onClick={handleAddTag}
                                    className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex gap-2 flex-wrap mt-2">
                                {data.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-purple-700/30 text-purple-300 rounded-full flex items-center gap-1 text-sm"
                                    >
                                        {tag}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveTag(tag)}
                                            className="text-red-400 hover:text-red-600"
                                        >
                                            ✕
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image upload */}
                    <div className="flex flex-col gap-3 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <div>
                            {/* description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Description
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Enter a short summary"
                                    rows={3}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                                />
                                {errors.description && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.description}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Blog Image
                            </label>

                            {previewUrl ? (
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="relative">
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="w-32 h-32 object-cover rounded-lg border-2 border-purple-500 shadow-lg"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setData("image", null);
                                                setPreviewUrl(null);
                                            }}
                                            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center hover:bg-red-700 transition-colors"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Click the X to remove image
                                    </p>
                                </div>
                            ) : (
                                <label
                                    className="flex flex-col items-center justify-center w-full h-40 
                                        border-2 border-dashed border-gray-600 rounded-xl cursor-pointer 
                                        bg-gray-800/50 hover:bg-gray-800 transition-all hover:border-purple-400 group"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10 text-gray-500 mb-2 group-hover:text-purple-400 transition-colors"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <p className="text-sm text-gray-400 group-hover:text-purple-300 transition-colors text-center">
                                            Click to upload a blog image
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1 text-center">
                                            PNG, JPG, JPEG up to 5MB
                                        </p>
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                            {errors.image && (
                                <p className="text-red-400 text-sm mt-1 text-center">
                                    {errors.image}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all text-white font-semibold flex items-center justify-center disabled:opacity-50 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 cursor-pointer min-w-[200px]"
                    >
                        {processing ? "Adding Blog..." : "Add Blog"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddBlogs;
