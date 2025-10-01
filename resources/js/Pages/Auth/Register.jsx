import { Link, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        profile_photo: null,
        password: "",
    });

    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("profile_photo", file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    const removeImage = () => {
        setData("profile_photo", null);
        setPreview(null);
        const fileInput = document.getElementById("profile_photo");
        if (fileInput) fileInput.value = "";
    };

    const submit = (e) => {
        e.preventDefault();
        post("/storeuser");
    };

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const inputClass =
        "w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 " +
        "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200";

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4">
            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden bg-gray-950 border border-gray-800"
            >
                <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-indigo-400">
                            Create Account
                        </h2>
                    </div>

                    {/* Profile Photo - Centered */}
                    <div className="flex justify-center">
                        <div className="text-center">
                            <div className="relative inline-block">
                                {preview ? (
                                    <div className="relative group">
                                        <img
                                            className="h-20 w-20 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
                                            src={preview}
                                            alt="Preview"
                                        />
                                        <button
                                            type="button"
                                            onClick={removeImage}
                                            className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 text-xs"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ) : (
                                    <label
                                        htmlFor="profile_photo"
                                        className="cursor-pointer group"
                                    >
                                        <div className="h-20 w-20 rounded-full bg-gray-800 border-4 border-dashed border-gray-600 group-hover:border-indigo-500 flex flex-col items-center justify-center transition-all duration-200">
                                            <svg
                                                className="w-6 h-6 text-gray-400 group-hover:text-indigo-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                            <span className="text-xs text-gray-400 group-hover:text-indigo-400 mt-1">
                                                Add Photo
                                            </span>
                                        </div>
                                    </label>
                                )}
                                <input
                                    id="profile_photo"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                            {errors.profile_photo && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.profile_photo}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Enter your full name"
                                className={inputClass}
                                required
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="your@email.com"
                                className={inputClass}
                                required
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Password *
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="••••••••"
                                className={inputClass}
                                required
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-500 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                        {processing ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
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
                                <span>Creating Account...</span>
                            </>
                        ) : (
                            <span>Create Account</span>
                        )}
                    </button>

                    {/* Login Link */}
                    <div className="text-center text-sm text-gray-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            Sign in here
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
