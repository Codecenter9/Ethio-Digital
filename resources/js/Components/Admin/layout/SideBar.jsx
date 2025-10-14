import { Link, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    Users,
    Folder,
    FileText,
    Settings,
    Server,
    BarChart3,
    HelpCircle,
    ChevronFirst,
    ChevronLast,
    ChevronDown,
    Globe,
    Mail,
    MessageCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const mainLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/emails", label: "Emails", icon: Mail },
    { href: "/admin/comments", label: "Comments", icon: MessageCircle },
    { href: "/admin/reports", label: "Reports", icon: BarChart3 },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

const frontendLinks = [
    { href: "/admin/teams", label: "Teams", icon: Users },
    { href: "/admin/projects", label: "Projects", icon: Folder },
    { href: "/admin/news", label: "News", icon: FileText },
    { href: "/admin/services", label: "Services", icon: Server },
    { href: "/admin/support", label: "Support", icon: HelpCircle },
];

export default function Sidebar({
    isCollapsed,
    setIsCollapsed,
    isMobileOpen,
    setIsMobileOpen,
}) {
    const { url } = usePage();
    const [isFrontendOpen, setIsFrontendOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const currentPath = url.split("?")[0]; // Remove query params
        const isActiveFrontend = frontendLinks.some((link) =>
            currentPath.startsWith(link.href)
        );
        setIsFrontendOpen(isActiveFrontend);
    }, [url]);

    const { auth } = usePage().props;
    const user = auth?.user || {};

    // Check if user has access to frontend components
    const hasFrontendAccess = user?.email === "juharendrishu@gmail.com";

    const isActiveLink = (href) => {
        const currentPath = url.split("?")[0];
        return currentPath === href || currentPath.startsWith(href + "/");
    };

    return (
        <>
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 bg-gradient-to-b from-gray-900 to-gray-950 text-white transform transition-all duration-300 z-50 h-screen flex flex-col border-r border-gray-800 shadow-2xl
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 ${isCollapsed ? "w-20" : "w-64"}`}
            >
                {/* Header - Fixed */}
                <div className="flex-shrink-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                        <div
                            className={`flex items-center transition-all duration-300 ${
                                isCollapsed
                                    ? "justify-center w-full"
                                    : "justify-start"
                            }`}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                                <span className="font-bold text-lg text-white">
                                    M
                                </span>
                            </div>
                            {!isCollapsed && (
                                <h2 className="ml-3 text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Meskot
                                </h2>
                            )}
                        </div>

                        {/* Collapse/Expand button */}
                        <button
                            className="hidden md:flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 ml-2 border border-gray-700 shadow-sm cursor-pointer"
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            aria-label={
                                isCollapsed
                                    ? "Expand sidebar"
                                    : "Collapse sidebar"
                            }
                        >
                            {isCollapsed ? (
                                <ChevronLast
                                    size={18}
                                    className="text-gray-300"
                                />
                            ) : (
                                <ChevronFirst
                                    size={18}
                                    className="text-gray-300"
                                />
                            )}
                        </button>
                    </div>
                    <hr className="border-gray-700" />
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    <nav className="p-4">
                        <ul className="space-y-1">
                            {/* Main Links */}
                            {mainLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = isActiveLink(link.href);
                                return (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className={`relative flex items-center p-3 rounded-xl transition-all duration-200 group border z-50 ${
                                                isActive
                                                    ? "bg-indigo-600/30 border-indigo-500/50 text-white shadow-lg"
                                                    : "border-transparent hover:border-indigo-500/30 hover:bg-indigo-600/20"
                                            }`}
                                            onClick={() =>
                                                setIsMobileOpen(false)
                                            }
                                        >
                                            <Icon
                                                size={20}
                                                className={`flex-shrink-0 ${
                                                    isActive
                                                        ? "text-indigo-200"
                                                        : "text-indigo-300"
                                                }`}
                                            />
                                            {!isCollapsed && (
                                                <span
                                                    className={`ml-3 transition-opacity duration-300 z-50 ${
                                                        isActive
                                                            ? "text-white font-semibold"
                                                            : "text-gray-200 group-hover:text-white"
                                                    }`}
                                                >
                                                    {link.label}
                                                </span>
                                            )}
                                            {isCollapsed && isActive && (
                                                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-indigo-400 rounded-l z-50" />
                                            )}
                                            {isCollapsed && (
                                                <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-[100] border border-gray-700">
                                                    {link.label}
                                                    <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rotate-45 bg-gray-900"></div>
                                                </div>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}

                            {/* Frontend Components Toggle - Expanded State - Conditionally Rendered */}
                            {!isCollapsed && hasFrontendAccess && (
                                <li className="pt-2">
                                    <button
                                        onClick={() =>
                                            setIsFrontendOpen(!isFrontendOpen)
                                        }
                                        className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-indigo-600/20 transition-all duration-200 group border border-transparent hover:border-indigo-500/30 z-50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Globe
                                                size={20}
                                                className="text-indigo-300"
                                            />
                                            <span className="text-gray-200 group-hover:text-white font-medium z-50">
                                                Components
                                            </span>
                                        </div>
                                        <div
                                            className={`transform transition-transform duration-300 ${
                                                isFrontendOpen
                                                    ? "rotate-180"
                                                    : "rotate-0"
                                            }`}
                                        >
                                            <ChevronDown
                                                size={16}
                                                className="text-gray-400"
                                            />
                                        </div>
                                    </button>

                                    {/* Frontend Links Dropdown with Smooth Animation */}
                                    <div
                                        ref={dropdownRef}
                                        className={`ml-6 border-l-2 border-gray-700 pl-3 transition-all duration-300 ease-in-out overflow-hidden z-50 ${
                                            isFrontendOpen
                                                ? "max-h-96 opacity-100"
                                                : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <div className="py-1 space-y-1">
                                            {frontendLinks.map((link) => {
                                                const Icon = link.icon;
                                                const isActive = isActiveLink(
                                                    link.href
                                                );
                                                return (
                                                    <Link
                                                        key={link.label}
                                                        href={link.href}
                                                        className={`flex items-center p-2 rounded-xl transition-all duration-200 group border z-50 ${
                                                            isActive
                                                                ? "bg-indigo-600/30 border-indigo-500/50 text-white shadow-lg"
                                                                : "border-transparent hover:border-indigo-500/30 hover:bg-indigo-600/20"
                                                        }`}
                                                        onClick={() =>
                                                            setIsMobileOpen(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <Icon
                                                            size={18}
                                                            className={`flex-shrink-0 ${
                                                                isActive
                                                                    ? "text-indigo-200"
                                                                    : "text-indigo-300"
                                                            }`}
                                                        />
                                                        <span
                                                            className={`ml-3 transition-opacity duration-300 z-50 ${
                                                                isActive
                                                                    ? "text-white font-medium"
                                                                    : "text-gray-200 group-hover:text-white"
                                                            }`}
                                                        >
                                                            {link.label}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </li>
                            )}

                            {/* Frontend Components Toggle - Collapsed State - Conditionally Rendered */}
                            {isCollapsed && hasFrontendAccess && (
                                <li>
                                    <button
                                        className="relative flex items-center justify-center p-3 rounded-xl hover:bg-indigo-600/30 transition-all duration-200 group border border-transparent hover:border-indigo-500/30 w-full z-50"
                                        onClick={() =>
                                            setIsFrontendOpen(!isFrontendOpen)
                                        }
                                    >
                                        <Globe
                                            size={20}
                                            className="text-indigo-300"
                                        />
                                        <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-[100] border border-gray-700">
                                            Components
                                            <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rotate-45 bg-gray-900"></div>
                                        </div>
                                    </button>

                                    {/* Frontend Links - Collapsed Dropdown with Smooth Animation */}
                                    <div
                                        className={`ml-2 border-l-2 border-gray-700 pl-2 transition-all duration-300 ease-in-out overflow-hidden z-50 ${
                                            isFrontendOpen
                                                ? "max-h-96 opacity-100 mt-1"
                                                : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <div className="py-1 space-y-1">
                                            {frontendLinks.map((link) => {
                                                const Icon = link.icon;
                                                const isActive = isActiveLink(
                                                    link.href
                                                );
                                                return (
                                                    <Link
                                                        key={link.label}
                                                        href={link.href}
                                                        className={`relative flex items-center justify-center p-2 rounded-xl transition-all duration-200 group border z-50 ${
                                                            isActive
                                                                ? "bg-indigo-600/30 border-indigo-500/50 text-white shadow-lg"
                                                                : "border-transparent hover:border-indigo-500/30 hover:bg-indigo-600/20"
                                                        }`}
                                                        onClick={() =>
                                                            setIsMobileOpen(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <Icon
                                                            size={16}
                                                            className={`flex-shrink-0 ${
                                                                isActive
                                                                    ? "text-indigo-200"
                                                                    : "text-indigo-300"
                                                            }`}
                                                        />
                                                        {isActive && (
                                                            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-indigo-400 rounded-l z-50" />
                                                        )}
                                                        <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg z-[100] border border-gray-700">
                                                            {link.label}
                                                            <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rotate-45 bg-gray-900"></div>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>

                {/* User Section - Fixed */}
                <div className="flex-shrink-0 p-4 border-t border-gray-800">
                    <div
                        className={`flex items-center ${
                            isCollapsed ? "justify-center" : "justify-between"
                        } p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-200 cursor-pointer`}
                    >
                        {!isCollapsed && (
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                                    <span className="text-xs font-bold text-white">
                                        U
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">
                                        {user?.name || "User"}
                                    </p>
                                    <p className="text-xs text-gray-400 truncate">
                                        {user?.role || "Admin"}
                                    </p>
                                </div>
                            </div>
                        )}
                        {isCollapsed && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">
                                    U
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}
