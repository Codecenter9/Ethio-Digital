import React, { useState, useEffect } from "react";
import { User, Briefcase } from "lucide-react";

const EditProfilePhoto = ({ user }) => {
    const [memberPhoto, setMemberPhoto] = useState(
        "/images/teams/default-avatar.webp"
    );

    useEffect(() => {
        let photo = "/images/teams/default-avatar.webp";

        if (user?.email === "juhar@meskotdigitals.com") {
            photo = "/images/teams/juhar.webp";
        } else if (user?.email === "ebisa@gmail.com") {
            photo = "/images/teams/image2.webp";
        } else if (user?.email === "lidet@gmail.com") {
            photo = "/images/teams/lidet.webp";
        }

        setMemberPhoto(photo);
    }, [user]);

    return (
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent flex-1">
            <div className="flex flex-col lg:flex-row items-center py-3 px-3 md:px-8 gap-8">
                {/* Profile Photo Display Section */}
                <div className="flex-1 w-full max-w-md">
                    <div className="p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        {/* Image Display Area */}
                        <div className="flex flex-col items-center mb-2">
                            <div className="relative group w-64 h-48 rounded-2xl overflow-hidden border-2 border-gray-600">
                                <img
                                    src={memberPhoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src =
                                            "/images/teams/default-avatar.webp";
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 rounded-lg text-white text-sm">
                                            <User size={16} />
                                            Profile Photo
                                        </div>
                                        <p className="text-xs text-gray-300 mt-2">
                                            Display only
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Info Message */}
                            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
                                <p className="text-sm text-blue-700 dark:text-blue-300">
                                    Profile photo display only - Upload
                                    functionality disabled
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Details Section */}
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
                            <DetailItem
                                icon={<User size={16} />}
                                label="Email"
                                value={user?.email}
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
            <div className="p-2 bg-gray-700 rounded-lg">{icon}</div>
            <span className="text-sm font-medium text-gray-400">{label}</span>
        </div>
        <span className="text-sm font-semibold text-white">
            {value || "Not set"}
        </span>
    </div>
);

export default EditProfilePhoto;
