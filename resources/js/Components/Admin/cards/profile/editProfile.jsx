import React, { useState, useEffect, useRef } from "react";
import { Head, useForm } from "@inertiajs/react";
import {
    X,
    Save,
    Shield,
    MapPin,
    Briefcase,
    FolderGit2,
    Eye,
    EyeOff,
    CheckCircle,
    AlertCircle,
    Send,
} from "lucide-react";
import EditProfilePhoto from "./editPhoto";

const EditProfile = ({ isOpen, onClose, user, errors: pageErrors, flash }) => {
    const [showPassword, setShowPassword] = useState(false);
    const modalRef = useRef(null);

    const { data, setData, put, processing, errors } = useForm({
        name: user?.name || "",
        phone: user?.phone || "",
        email: user?.email || "",
        password: "",
        address: user?.address || "",
        details: user?.details || "",
        experience: user?.experience || "",
        projects: user?.projects || "",
        telegram: user?.telegramlink || "",
    });

    // Handle outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscapeKey);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    // Reset form when user changes
    useEffect(() => {
        if (user && isOpen) {
            setData({
                name: user?.name || "",
                phone: user?.phone || "",
                email: user?.email || "",
                password: "",
                address: user?.address || "",
                details: user?.details || "",
                experience: user?.experience || "",
                projects: user?.projects || "",
                telegram: user?.telegramlink || "",
            });
        }
    }, [user, isOpen]);

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleTelegramChange = (e) => {
        let value = e.target.value;
        value = value.replace(/^(t\.me\/|@)/, "");
        setData("telegram", value);
    };

    const getTelegramDisplayValue = () => {
        if (!data.telegram) return "";
        return data.telegram.startsWith("t.me/") ||
            data.telegram.startsWith("@")
            ? data.telegram
            : `t.me/${data.telegram}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/profile/update/${user.id}`, {
            preserveScroll: true,
            onSuccess: () => {},
        });
    };

    const allErrors = { ...errors, ...pageErrors };

    return (
        <>
            <Head>
                <title>Personal detail</title>
            </Head>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/90 backdrop-blur-sm">
                <div
                    ref={modalRef}
                    className="bg-white dark:bg-gray-900/50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between py-3 px-6 border-b dark:border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                                Edit Profile
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Update your personal information
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            disabled={processing}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 disabled:opacity-50"
                        >
                            <X
                                size={20}
                                className="text-gray-500 dark:text-gray-400"
                            />
                        </button>
                    </div>
                    <div className="overflow-y-auto scrollbar-hide flex-1">
                        <EditProfilePhoto user={user} />
                        <form onSubmit={handleSubmit} className="p-6">
                            {/* Success Message from Backend */}
                            {flash?.success && (
                                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                                    <CheckCircle
                                        className="text-green-500 flex-shrink-0"
                                        size={20}
                                    />
                                    <p className="text-green-700 dark:text-green-300 text-sm">
                                        {flash.success}
                                    </p>
                                </div>
                            )}

                            {/* Error Message from Backend */}
                            {flash?.error && (
                                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
                                    <AlertCircle
                                        className="text-red-500 flex-shrink-0"
                                        size={20}
                                    />
                                    <p className="text-red-700 dark:text-red-300 text-sm">
                                        {flash.error}
                                    </p>
                                </div>
                            )}

                            <div className="w-full space-y-6">
                                <div className="relative flex items-center my-8">
                                    <div className="flex-grow border-t border-gray-700"></div>
                                    <span className="flex-shrink mx-4 text-sm font-medium text-gray-400">
                                        Personal Information
                                    </span>
                                    <div className="flex-grow border-t border-gray-700"></div>
                                </div>

                                <div className="flex flex-col md:flex-row w-full gap-5">
                                    {/* Name */}
                                    <div className="w-full">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            onChange={handleInputChange}
                                            disabled={processing}
                                            className={`w-full px-4 py-3 rounded-xl ${
                                                allErrors.name
                                                    ? "border border-red-300 dark:border-red-700"
                                                    : "border-none"
                                            } bg-gray-800/30 text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50`}
                                        />
                                        {allErrors.name && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} />
                                                {allErrors.name}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email - Readonly */}
                                    <div className="w-full">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            readOnly
                                            className="w-full px-4 py-3 rounded-xl border-none bg-gray-800/30 text-gray-400 cursor-not-allowed"
                                        />
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                            Email cannot be changed
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row w-full gap-5">
                                    {/* Password */}
                                    <div className="w-full">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            New Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                value={data.password}
                                                onChange={handleInputChange}
                                                disabled={processing}
                                                className={`w-full px-4 py-3 rounded-xl ${
                                                    allErrors.password
                                                        ? "border border-red-300 dark:border-red-700"
                                                        : "border-none"
                                                } bg-gray-800/30 text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent pr-12 disabled:opacity-50`}
                                                placeholder="Enter new password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                disabled={processing}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 disabled:opacity-50"
                                            >
                                                {showPassword ? (
                                                    <EyeOff size={20} />
                                                ) : (
                                                    <Eye size={20} />
                                                )}
                                            </button>
                                        </div>
                                        {allErrors.password && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} />
                                                {allErrors.password}
                                            </p>
                                        )}
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                            Leave blank to keep current password
                                        </p>
                                    </div>

                                    {/* Phone */}
                                    <div className="w-full">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={data.phone}
                                            onChange={handleInputChange}
                                            disabled={processing}
                                            className={`w-full px-4 py-3 rounded-xl ${
                                                allErrors.phone
                                                    ? "border border-red-300 dark:border-red-700"
                                                    : "border-none"
                                            } bg-gray-800/30 text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent disabled:opacity-50`}
                                            placeholder="Enter phone number"
                                        />
                                        {allErrors.phone && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} />
                                                {allErrors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Telegram Field */}
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                        <Send size={16} />
                                        Telegram Username
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-400">
                                                t.me/
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="telegram"
                                            value={data.telegram}
                                            onChange={handleTelegramChange}
                                            disabled={processing}
                                            className={`w-full px-4 py-3 rounded-xl pl-20 ${
                                                allErrors.telegram
                                                    ? "border border-red-300 dark:border-red-700"
                                                    : "border-none"
                                            } bg-gray-800/30 text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent disabled:opacity-50`}
                                            placeholder="username"
                                        />
                                    </div>
                                    {allErrors.telegram && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle size={12} />
                                            {allErrors.telegram}
                                        </p>
                                    )}
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        Enter only your Telegram username
                                        (without t.me/)
                                    </p>
                                </div>
                            </div>

                            {/* Beautiful Divider */}
                            <div className="relative flex items-center my-8">
                                <div className="flex-grow border-t border-gray-700"></div>
                                <span className="flex-shrink mx-4 text-sm font-medium text-gray-400">
                                    Professional
                                </span>
                                <div className="flex-grow border-t border-gray-700"></div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex flex-col md:flex-row gap-5">
                                    <div className="w-full">
                                        <label className=" text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                            <MapPin size={16} />
                                            Address
                                        </label>
                                        <textarea
                                            name="address"
                                            value={data.address}
                                            onChange={handleInputChange}
                                            disabled={processing}
                                            rows={4}
                                            className={`w-full px-4 py-3 rounded-xl ${
                                                allErrors.address
                                                    ? "border border-red-300 dark:border-red-700"
                                                    : "border-none"
                                            } bg-gray-800/30 text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent resize-none disabled:opacity-50`}
                                            placeholder="Enter your address"
                                        />
                                        {allErrors.address && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} />
                                                {allErrors.address}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <div>
                                            <label className=" text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                                <Briefcase size={16} />
                                                Experience (Years)
                                            </label>
                                            <input
                                                type="number"
                                                name="experience"
                                                value={data.experience}
                                                onChange={handleInputChange}
                                                disabled={processing}
                                                min="0"
                                                max="50"
                                                className={`w-full px-4 py-3 rounded-xl ${
                                                    allErrors.experience
                                                        ? "border border-red-300 dark:border-red-700"
                                                        : "border-none"
                                                } bg-gray-800/30 text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent disabled:opacity-50`}
                                                placeholder="0"
                                            />
                                            {allErrors.experience && (
                                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                    <AlertCircle size={12} />
                                                    {allErrors.experience}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="flex text-sm font-medium text-gray-300 mb-2 items-center gap-2">
                                                <FolderGit2 size={16} />
                                                Projects Completed
                                            </label>
                                            <input
                                                type="number"
                                                name="projects"
                                                value={data.projects}
                                                onChange={handleInputChange}
                                                disabled={processing}
                                                min="0"
                                                className={`w-full px-4 py-3 rounded-xl ${
                                                    allErrors.projects
                                                        ? "border border-red-300 dark:border-red-700"
                                                        : "border-none"
                                                } bg-gray-800/30 text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent disabled:opacity-50`}
                                                placeholder="0"
                                            />
                                            {allErrors.projects && (
                                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                    <AlertCircle size={12} />
                                                    {allErrors.projects}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        About Me
                                    </label>
                                    <textarea
                                        name="details"
                                        value={data.details}
                                        onChange={handleInputChange}
                                        disabled={processing}
                                        rows={3}
                                        className={`w-full px-4 py-3 rounded-xl ${
                                            allErrors.details
                                                ? "border border-red-300 dark:border-red-700"
                                                : "border-none"
                                        } bg-gray-800/30 text-white focus:ring-1 focus:ring-purple-500 focus:border-transparent resize-none disabled:opacity-50`}
                                        placeholder="Tell us about yourself..."
                                    />
                                    {allErrors.details && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle size={12} />
                                            {allErrors.details}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Beautiful Divider */}
                            <div className="relative flex items-center my-8">
                                <div className="flex-grow border-t border-gray-700"></div>
                                <span className="flex-shrink mx-4 text-sm font-medium text-gray-400">
                                    Admin Information
                                </span>
                                <div className="flex-grow border-t border-gray-700"></div>
                            </div>

                            {/* Admin Only Section */}
                            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/20 rounded-xl p-6 border border-gray-700">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <Shield
                                        size={20}
                                        className="text-blue-500"
                                    />
                                    Administrator Settings
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">
                                            Position
                                        </label>
                                        <div className="px-4 py-3 bg-gray-800 rounded-lg border-2 border-dashed border-gray-600">
                                            <span className="text-lg font-semibold text-white">
                                                {user?.position ||
                                                    "Not assigned"}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            Account Status
                                        </label>
                                        <div className="px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
                                            {user.status ? (
                                                <span
                                                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                                                        user.status === "active"
                                                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                                                            : user.status ===
                                                              "inactive"
                                                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
                                                            : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                                                    }`}
                                                >
                                                    {user.status}
                                                </span>
                                            ) : (
                                                <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                                                    Status not set
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Roles */}
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        Assigned Roles
                                    </label>
                                    <div className="flex flex-wrap gap-3">
                                        {user.role ? (
                                            <span className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg border-2 border-blue-200 dark:border-blue-800">
                                                {user.role}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-gray-500 dark:text-gray-400 italic px-4 py-2">
                                                No roles assigned by
                                                administrator
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center gap-2">
                                        <Shield size={14} />
                                        These settings are managed by system
                                        administrators
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-6 flex items-end justify-end">
                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        disabled={processing}
                                        className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-800/30 to-purple-900/30 text-white rounded-xl shadow-lg hover:from-purple-900/30 hover:to-purple-950/30 transform hover:scale-105 transition-all duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        <Save size={18} />
                                        {processing
                                            ? "Saving..."
                                            : "Save Changes"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
