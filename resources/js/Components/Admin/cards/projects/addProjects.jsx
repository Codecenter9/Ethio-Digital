import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";

const AddProjects = ({ editIndex, setEditIndex, setActiveTab, projects }) => {
    const editingProject =
        editIndex !== -1 ? projects.find((p) => p.id === editIndex) : null;

    const { data, setData, post, put, processing, errors, reset } = useForm({
        project_name: "",
        project_url: "",
        category: "",
        description: "",
        project_photo: null,
    });

    const [previewUrl, setPreviewUrl] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (editingProject) {
            setData({
                project_name: editingProject.project_name || "",
                project_url: editingProject.project_url || "",
                category: editingProject.category || "",
                description: editingProject.description || "",
                project_photo: null, // prevent editing image
            });

            // Display the existing image but prevent change
            if (editingProject.project_photo) {
                setPreviewUrl(`/storage/${editingProject.project_photo}`);
            } else {
                setPreviewUrl(null);
            }
        } else {
            reset();
            setPreviewUrl(null);
        }
    }, [editIndex, editingProject]);

    const handleImageChange = (e) => {
        // Only allow image upload if adding new project
        if (!editingProject) {
            const file = e.target.files?.[0];
            setData("project_photo", file);

            if (file) {
                const url = URL.createObjectURL(file);
                setPreviewUrl(url);
            } else {
                setPreviewUrl(null);
            }
        }
    };

    const handleRemoveImage = () => {
        if (!editingProject) {
            setData({
                ...data,
                project_photo: null,
            });
            setPreviewUrl(null);
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) fileInput.value = "";
        }
    };

    const handleInputChange = (field, value) => {
        setData({
            ...data,
            [field]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingProject) {
            put(`/admin/projects/update/${editingProject.id}`, {
                data: {
                    ...data,
                    _method: "PUT",
                },
                preserveScroll: true,
                onSuccess: () => {
                    setEditIndex(-1);
                    setActiveTab("list");
                },
                onError: (errors) => {
                    console.log("Update errors:", errors);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                },
            });
        } else {
            post("/admin/projects/store", {
                data: {
                    ...data,
                },
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    setSuccess(true);
                    reset();
                    setPreviewUrl(null);
                    setTimeout(() => setSuccess(false), 3000);
                },
                onError: (errors) => {
                    console.log("Create errors:", errors);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                },
            });
        }
    };

    return (
        <>
            {success && (
                <div className="mx-auto max-w-2xl mb-6">
                    <div className="p-4 bg-green-900/30 border border-green-700 rounded-xl text-green-300 flex items-center justify-center text-center">
                        ✅ Project {editingProject ? "updated" : "added"}{" "}
                        successfully! They will now appear in your list.
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-bold text-white">
                    {editingProject ? "Edit Project" : "Add New Project"}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left side - Form fields */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <div className="space-y-4">
                            {/* Project Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Project Title *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter project title"
                                    value={data.project_name || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "project_name",
                                            e.target.value
                                        )
                                    }
                                    className={`w-full p-3 rounded-lg bg-gray-800 border focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 ${
                                        errors.project_name
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    }`}
                                    required
                                />
                                {errors.project_name && (
                                    <p className="text-red-400 text-sm mt-1 flex items-center">
                                        {errors.project_name}
                                    </p>
                                )}
                            </div>

                            {/* Project URL */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Project URL
                                </label>
                                <input
                                    type="text"
                                    placeholder="https://example.com"
                                    value={data.project_url || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "project_url",
                                            e.target.value
                                        )
                                    }
                                    className={`w-full p-3 rounded-lg bg-gray-800 border focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 ${
                                        errors.project_url
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    }`}
                                />
                                {errors.project_url && (
                                    <p className="text-red-400 text-sm mt-1 flex items-center">
                                        {errors.project_url}
                                    </p>
                                )}
                            </div>

                            {/* Project Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Project Category
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter project category"
                                    value={data.category || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "category",
                                            e.target.value
                                        )
                                    }
                                    className={`w-full p-3 rounded-lg bg-gray-800 border focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 ${
                                        errors.category
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    }`}
                                />
                                {errors.category && (
                                    <p className="text-red-400 text-sm mt-1 flex items-center">
                                        {errors.category}
                                    </p>
                                )}
                            </div>

                            {/* Project Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Project Details
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter details about the project"
                                    value={data.description || ""}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "description",
                                            e.target.value
                                        )
                                    }
                                    className={`w-full p-3 rounded-lg bg-gray-800 border focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 ${
                                        errors.description
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    }`}
                                />
                                {errors.description && (
                                    <p className="text-red-400 text-sm mt-1 flex items-center">
                                        {errors.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image upload */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Project Image
                            </label>
                            {previewUrl ? (
                                <div className="flex flex-col items-center space-y-3">
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className="w-32 h-32 object-cover rounded-lg border-2 border-purple-500 shadow-lg"
                                    />
                                    {!editingProject && (
                                        <button
                                            type="button"
                                            onClick={handleRemoveImage}
                                            className="bg-red-600 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center hover:bg-red-700 transition-colors"
                                            title="Remove image"
                                        >
                                            ✕
                                        </button>
                                    )}
                                    {editingProject && (
                                        <p className="text-sm text-gray-400">
                                            Existing image cannot be changed
                                        </p>
                                    )}
                                </div>
                            ) : (
                                !editingProject && (
                                    <label
                                        className={`flex flex-col items-center justify-center w-full h-40 
                                        border-2 border-dashed rounded-xl cursor-pointer 
                                        bg-gray-800/50 hover:bg-gray-800 transition-all group ${
                                            errors.project_photo
                                                ? "border-red-500 hover:border-red-400"
                                                : "border-gray-600 hover:border-purple-400"
                                        }`}
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-10 w-10 mb-2 transition-colors ${
                                                    errors.project_photo
                                                        ? "text-red-500"
                                                        : "text-gray-500 group-hover:text-purple-400"
                                                }`}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <p className="text-sm transition-colors text-center text-gray-400 group-hover:text-purple-300">
                                                Click to upload a Project image
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
                                )
                            )}
                            {errors.project_photo && (
                                <p className="text-red-400 text-sm mt-1 text-center">
                                    {errors.project_photo}
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
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all text-white font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg min-w-[150px]"
                    >
                        {processing ? (
                            <div className="flex items-center">
                                <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                {editingProject ? "Updating..." : "Adding..."}
                            </div>
                        ) : editingProject ? (
                            "Update Project"
                        ) : (
                            "Add Project"
                        )}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddProjects;
