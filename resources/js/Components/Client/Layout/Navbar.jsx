import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const { url } = usePage(); // gives current path

    const navLinks = [
        { name: "Home", path: "/" },
        {
            name: "Company",
            submenu: [
                { name: "About Us", path: "/about" },
                { name: "Teams", path: "/teams" },
                { name: "Careers", path: "/careers" },
            ],
        },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "News", path: "/news" },
        { name: "Contact", path: "/contact" },
    ];

    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [url]);

    const isActiveLink = (path) => url === path;
    const hasActiveSubmenu = (submenu) =>
        submenu?.some((item) => isActiveLink(item.path));

    return (
        <nav className="fixed top-0 left-0 w-full z-50 text-white bg-gray-900/20 backdrop-blur-xl ">
            <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-18 flex justify-between items-center h-16 md:h-20">
                {/* Enhanced Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-2 transition-all duration-500 hover:opacity-90"
                >
                    <div className="relative rounded-xl flex items-center justify-center overflow-hidden">
                        <div className="relative w-full h-full z-10 flex items-center justify-center">
                            <img
                                src="/logo/MDlogo2.png"
                                className="w-12 h-12 md:w-14 md:h-14 object-cover drop-shadow-lg filter brightness-110"
                                alt="Meskot Digital"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent transition-all duration-300 tracking-tight font-sans">
                            Meskot
                        </span>
                        <span className="text-[10px] md:text-xs font-semibold text-gray-400 bg-gray-800/60 rounded-full px-2 py-1 mt-0.5 tracking-wider uppercase border border-gray-700/50">
                            Trusted Digital Solution
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex text-base font-medium items-center space-x-8">
                    {navLinks.map((link, idx) =>
                        link.submenu ? (
                            <div key={idx} className="relative group">
                                <button
                                    className={`flex items-center gap-1 hover:text-purple-300 transition-all duration-300 py-2 px-1 font-medium group ${
                                        hasActiveSubmenu(link.submenu)
                                            ? "text-purple-300"
                                            : ""
                                    }`}
                                >
                                    {link.name}
                                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180 mt-0.5" />
                                </button>

                                {/* Dropdown */}
                                <div className="absolute left-0 pt-2 top-full w-48 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300">
                                    <div className="mt-2 bg-gray-900/55 backdrop-blur-xl rounded-md shadow-xl border-t-4 border-purple-500 overflow-hidden">
                                        {link.submenu.map((sub, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                href={sub.path}
                                                className={`block px-4 py-3 text-sm transition-all duration-300 border-b border-gray-800 last:border-b-0 ${
                                                    isActiveLink(sub.path)
                                                        ? "text-white bg-gray-800/50"
                                                        : "text-gray-200 hover:text-white hover:bg-gray-800/50"
                                                }`}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={idx}
                                href={link.path}
                                className={`hover:text-purple-300 transition-all duration-300 py-2 px-1 relative group ${
                                    isActiveLink(link.path)
                                        ? "text-purple-300"
                                        : ""
                                }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                                        isActiveLink(link.path)
                                            ? "w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                            </Link>
                        )
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 transition-all duration-300 cursor-pointer rounded-md hover:bg-gray-800/50 backdrop-blur-sm"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed right-0 top-16 h-max w-72 bg-gray-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden border-l border-white/10 ${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="space-y-1 px-4 py-6 overflow-y-auto h-full">
                    {navLinks.map((link, idx) =>
                        link.submenu ? (
                            <div key={idx} className="py-1">
                                <button
                                    onClick={() =>
                                        setOpenDropdown(
                                            openDropdown === link.name
                                                ? null
                                                : link.name
                                        )
                                    }
                                    className={`flex justify-between w-full py-3 px-3 text-base font-medium rounded-md hover:bg-gray-800/50 transition-all duration-300 backdrop-blur-sm ${
                                        hasActiveSubmenu(link.submenu)
                                            ? "text-purple-300 bg-gray-800/30"
                                            : ""
                                    }`}
                                >
                                    <span>{link.name}</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transform transition-transform duration-300 ${
                                            openDropdown === link.name
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>
                                {openDropdown === link.name && (
                                    <div className="ml-4 mt-1 space-y-1 transition-all duration-300 border-l-2 border-purple-500/30 pl-2">
                                        {link.submenu.map((sub, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                href={sub.path}
                                                className={`block px-4 py-2.5 text-sm rounded-md transition-all duration-300 ${
                                                    isActiveLink(sub.path)
                                                        ? "text-white bg-gray-800/30"
                                                        : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                                                }`}
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={idx}
                                href={link.path}
                                className={`block py-3 px-3 text-base rounded-md transition-all duration-300 backdrop-blur-sm ${
                                    isActiveLink(link.path)
                                        ? "text-purple-300 bg-gray-800/30"
                                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                                }`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
