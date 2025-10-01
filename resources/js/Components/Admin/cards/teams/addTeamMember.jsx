import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function AddMember() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        position: "",
        role: "",
    });

    const [success, setSuccess] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post("/admin/teams/store", {
            onSuccess: () => {
                setSuccess(true);
                reset();

                setTimeout(() => setSuccess(false), 3000);
            },
        });
    };

    return (
        <>
            {/* Success Message */}
            {success && (
                <div className="mx-auto max-w-md mb-6">
                    <div className="p-4 bg-green-900/30 border border-green-700 rounded-xl text-green-300 text-center font-medium">
                        ✅ Member added successfully!
                    </div>
                </div>
            )}

            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="space-y-6"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Side - Inputs */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
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
                                    placeholder="Enter full name"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
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
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    placeholder="your@email.com"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* position */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Position
                                </label>
                                <input
                                    type="text"
                                    value={data.position}
                                    onChange={(e) =>
                                        setData("position", e.target.value)
                                    }
                                    placeholder="Enter position"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                />
                                {errors.position && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.position}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Role
                                </label>
                                <select
                                    value={data.role}
                                    onChange={(e) =>
                                        setData("role", e.target.value)
                                    }
                                    className="w-full px-3 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                >
                                    <option value="">-- Select Role --</option>
                                    <option value="manager">Manager</option>
                                    <option value="admin">Admin</option>
                                    <option value="member">Member</option>
                                </select>
                                {errors.role && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.role}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-2 lg:col-span-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 
                            hover:from-purple-700 hover:to-indigo-700 transition-all text-white font-semibold 
                            flex items-center justify-center disabled:opacity-50 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 cursor-pointer min-w-[200px]"
                        >
                            {processing ? "Adding Member..." : "Add Member"}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
