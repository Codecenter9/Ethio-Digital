import { useState, useRef, useEffect } from "react";
import {
    Search,
    Bell,
    MessageSquare,
    Menu,
    ChevronDown,
    LogOut,
    User,
    Settings,
} from "lucide-react";
import { router, usePage, Link } from "@inertiajs/react";
import EditProfile from "../cards/profile/editProfile";

export default function Topbar({ onMenuClick }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const [memberPhoto, setMemberPhoto] = useState(
        "/images/teams/default-avatar.webp"
    );

    // Get auth user from Inertia props
    const { auth } = usePage().props;
    const user = auth?.user || {};

    useEffect(() => {
        let photo = "/images/teams/default-avatar.webp";

        if (user.email === "juhar@meskotdigitals.com") {
            photo = "/images/teams/juhar.webp";
        } else if (user.email === "ebisa@gmail.com") {
            photo = "/images/teams/image2.webp";
        } else if (user.email === "lidet@gmail.com") {
            photo = "/images/teams/lidet.webp";
        }

        setMemberPhoto(photo);
    }, [user]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    const handleDropdownItemClick = () => {
        setIsDropdownOpen(false);
    };

    const handleLogout = () => {
        router.post("/logout");
    };

    const handleModalOpen = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <>
            <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 px-4 py-3 flex justify-between items-center shadow-lg sticky top-0 z-40">
                {/* Left */}
                <div className="flex items-center">
                    <button
                        className="md:hidden mr-3 p-2 rounded-md text-gray-300 hover:bg-gray-700 transition-colors cursor-pointer"
                        onClick={onMenuClick}
                        aria-label="Toggle menu"
                    >
                        <Menu size={20} />
                    </button>
                    <h1 className="font-semibold text-lg text-white">
                        Dashboard
                    </h1>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="hidden md:flex items-center bg-gray-700/50 rounded-full px-3 py-2 transition-all duration-200 focus-within:bg-gray-700 focus-within:ring-2 focus-within:ring-indigo-500/30">
                        <Search size={18} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none ml-2 text-sm w-40 placeholder-gray-400 text-white"
                        />
                    </div>

                    {/* Notifications */}
                    <div className="flex items-center gap-2">
                        <button
                            className="p-2 rounded-full hover:bg-gray-700 relative transition-colors group"
                            aria-label="Notifications"
                        >
                            <Bell
                                size={20}
                                className="text-gray-300 group-hover:text-indigo-400"
                            />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        <button
                            className="p-2 rounded-full hover:bg-gray-700 relative transition-colors group"
                            aria-label="Messages"
                        >
                            <MessageSquare
                                size={20}
                                className="text-gray-300 group-hover:text-indigo-400"
                            />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                    </div>

                    {/* User Dropdown */}
                    <div className="flex items-center gap-2 pl-2 border-l border-gray-700">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium text-white">
                                {user.name || "User"}
                            </p>
                            <p className="text-xs text-gray-400">
                                {user.role || "Administrator"}
                            </p>
                        </div>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                ref={buttonRef}
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                                className="flex items-center gap-1 focus:outline-none  rounded-full p-1 transition-all"
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                            >
                                <img
                                    src={memberPhoto}
                                    loading="lazy"
                                    alt={user.name || "User avatar"}
                                    className="w-10 h-10 rounded-2xl border-2 border-transparent hover:border-indigo-500 transition-colors"
                                />
                                <ChevronDown
                                    size={16}
                                    className={`text-gray-400 transition-transform duration-200 ${
                                        isDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700 animate-in fade-in-80">
                                    <div className="px-4 py-2 border-b border-gray-700">
                                        <p className="text-sm text-gray-300">
                                            Signed in as
                                        </p>
                                        <p className="text-sm font-medium text-white truncate">
                                            {user.email || "No email"}
                                        </p>
                                    </div>

                                    <Link
                                        href="#"
                                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                                        onClick={handleModalOpen}
                                    >
                                        <User size={16} className="mr-3" />
                                        Profile
                                    </Link>

                                    <Link
                                        href="#"
                                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                                        onClick={handleDropdownItemClick}
                                    >
                                        <Settings size={16} className="mr-3" />
                                        Settings
                                    </Link>

                                    <div className="border-t border-gray-700 my-1"></div>

                                    <button
                                        onClick={() => {
                                            handleDropdownItemClick();
                                            handleLogout();
                                        }}
                                        className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors"
                                    >
                                        <LogOut size={16} className="mr-3" />
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <EditProfile
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={user}
            />
        </>
    );
}
