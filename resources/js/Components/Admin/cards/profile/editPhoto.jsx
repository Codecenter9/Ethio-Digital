import React, { useState, useRef } from "react";
import { useForm } from "@inertiajs/react";
import {
    Camera,
    User,
    Upload,
    CheckCircle,
    AlertCircle,
    X,
    Mail,
    Phone,
    Briefcase,
    Shield,
} from "lucide-react";

const EditProfilePhoto = ({ user }) => {
    const [imagePreview, setImagePreview] = useState(
        user?.profile_photo ? `/storage/${user.profile_photo}` : null
    );
    const fileInputRef = useRef(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        profile_photo: null,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => setImagePreview(e.target.result);
        reader.readAsDataURL(file);

        setData("profile_photo", file);
    };

    const submitImage = (e) => {
        e.preventDefault();

        if (!data.profile_photo) {
            alert("Please select an image first");
            return;
        }

        post(`/admin/profile/photo/update/${user.id}`, {
            forceFormData: true,
            onSuccess: () => {},
            onError: (errors) => console.error("Upload failed:", errors),
        });
    };

    const handleDeletePhoto = () => {
        if (
            window.confirm(
                "Are you sure you want to delete your profile photo?"
            )
        ) {
            post(`/admin/profile/photo/delete/${user.id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    setImagePreview(null);
                    reset("profile_photo");
                },
            });
        }
    };

    return (
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent flex-1">
            <div className="flex flex-col lg:flex-row items-center py-3 px-3 md:px-8 gap-8">
                {/* Profile Photo Upload Section */}
                <div className="flex-1 w-full max-w-md">
                    <form
                        onSubmit={submitImage}
                        className="p-6  rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                        {/* Section Header */}
                        
                        {/* Image Upload Area */}
                        <div className="flex flex-col items-center mb-2">
                            <div
                                className={`relative group w-64 h-48 rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-300 "border-gray-600 hover:border-blue-500"} ${
                                    imagePreview ? "border-solid" : ""
                                }`}
                            >
                                {imagePreview ? (
                                    <>
                                        <img
                                            src={imagePreview}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                                e.target.nextSibling.style.display =
                                                    "flex";
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                            <Camera
                                                size={32}
                                                className="text-white"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex flex-col items-center justify-center gap-3 p-4">
                                        <div className="p-4 bg-blue-100 dark:bg-blue-800 rounded-full">
                                            <Upload
                                                size={32}
                                                className="text-blue-600 dark:text-blue-400"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Click to upload
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                                                PNG, JPG, GIF up to 5MB
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    disabled={processing}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                                />
                            </div>

                            {/* Error Display */}
                            {errors.profile_photo && (
                                <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2">
                                    <AlertCircle
                                        size={16}
                                        className="text-red-500 flex-shrink-0"
                                    />
                                    <span className="text-sm text-red-700 dark:text-red-300">
                                        {errors.profile_photo}
                                    </span>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6">
                                <button
                                    type="submit"
                                    disabled={processing || !data.profile_photo}
                                    className="flex items-center gap-2 px-3 py-1 bg-purple-900/30 hover:bg-purple-950/30 disabled:bg-pink-400 text-white rounded-xl shadow-lg transition-all duration-200 font-medium disabled:cursor-not-allowed"
                                >
                                    {processing ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Uploading...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle size={18} />
                                            Upload Photo
                                        </>
                                    )}
                                </button>

                                {user?.profile_photo && (
                                    <button
                                        type="button"
                                        onClick={handleDeletePhoto}
                                        disabled={processing}
                                        className="flex items-center gap-2 px-3 py-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-xl shadow-lg transition-all duration-200 font-medium disabled:cursor-not-allowed"
                                    >
                                        <X size={18} />
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>

                {/* User Details Section - Simplified */}
                <div className="flex-1 w-full max-w-md">
                    <div className="p-6 bg-gray-800/30 rounded-2xl shadow-lg border border-gray-700">
                        {/* Section Header */}
                        <div className="flex items-center mb-8">
                            <div className="flex-grow border-t border-gray-700"></div>
                            <span className="flex-shrink mx-4 text-lg font-semibold text-gray-300 flex items-center gap-2">
                                <User size={20} />
                                Profile Details
                            </span>
                            <div className="flex-grow border-t border-gray-700"></div>
                        </div>

                        {/* Simple User Info List */}
                        <div className="space-y-4">
                            <DetailItem
                                icon={<User size={16} />}
                                label="Full Name"
                                value={user?.name}
                            />
                            <DetailItem
                                icon={<Briefcase size={16} />}
                                label="Position"
                                value={user?.position}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Simplified Detail Item Component
const DetailItem = ({ icon, label, value }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-700 rounded-lg">
                {icon}
            </div>
            <span className="text-sm font-medium text-gray-400">
                {label}
            </span>
        </div>
        <span className="text-sm font-semiboldtext-white">
            {value || "Not set"}
        </span>
    </div>
);

export default EditProfilePhoto;
