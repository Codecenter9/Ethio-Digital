import React, { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/Layouts/DashboardLayout/Dashboard";
import { Head, router } from "@inertiajs/react";
import SharedTitle from "@/Components/Admin/layout/SharedTitle";
import {
    ChevronDown,
    Eye,
    Trash,
    MoreVertical,
    Calendar,
    CheckCircle,
    XCircle,
    AlertCircle,
    Clock,
} from "lucide-react";
import ViewComment from "./ViewComment";

const Comments = ({ comments = [] }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
    const [selectedComment, setSelectedComment] = useState(null);
    const [viewModal, setViewModal] = useState(false);
    const [dropdownPositions, setDropdownPositions] = useState({});
    const statusButtonRefs = useRef({});
    const mobileButtonRefs = useRef({});
    const dropdownRefs = useRef({});

    // Calculate dropdown position based on available space
    const calculateDropdownPosition = (buttonRef, dropdownId) => {
        if (!buttonRef?.current)
            return { top: 0, left: 0, position: "bottom-right" };

        const rect = buttonRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        const dropdownWidth = 192;
        const dropdownHeight = 160;

        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceRight = viewportWidth - rect.right;
        const spaceLeft = rect.left;

        // Determine vertical position
        const verticalPosition =
            spaceBelow >= dropdownHeight || spaceBelow >= spaceAbove
                ? "bottom"
                : "top";

        // Determine horizontal position
        const horizontalPosition =
            spaceRight >= dropdownWidth || spaceRight >= spaceLeft
                ? "left"
                : "right";

        let top, left;

        if (verticalPosition === "bottom") {
            top = rect.bottom + window.scrollY + 4;
        } else {
            top = rect.top + window.scrollY - dropdownHeight - 4;
        }

        if (horizontalPosition === "left") {
            left = rect.left + window.scrollX;
        } else {
            left = rect.right + window.scrollX - dropdownWidth;
        }

        // Ensure dropdown stays within viewport bounds
        left = Math.max(8, Math.min(left, viewportWidth - dropdownWidth - 8));
        top = Math.max(8, Math.min(top, viewportHeight - dropdownHeight - 8));

        return {
            top,
            left,
            position: `${verticalPosition}-${horizontalPosition}`,
        };
    };

    const StatusBadge = ({ status, comment }) => {
        const statusConfig = {
            pending: {
                class: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
                icon: Clock,
            },
            approved: {
                class: "bg-green-500/20 text-green-300 border-green-500/30",
                icon: CheckCircle,
            },
            rejected: {
                class: "bg-red-500/20 text-red-300 border-red-500/30",
                icon: XCircle,
            },
            spam: {
                class: "bg-gray-500/20 text-gray-300 border-gray-500/30",
                icon: AlertCircle,
            },
        };

        const config =
            statusConfig[status?.toLowerCase()] || statusConfig.pending;
        const IconComponent = config.icon;

        return (
            <div className="relative">
                <button
                    ref={(el) => {
                        statusButtonRefs.current[comment.id] = el;
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        const position = calculateDropdownPosition(
                            { current: statusButtonRefs.current[comment.id] },
                            comment.id
                        );
                        setDropdownPositions((prev) => ({
                            ...prev,
                            [comment.id]: position,
                        }));
                        setActiveDropdown(
                            activeDropdown === comment.id ? null : comment.id
                        );
                    }}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all duration-200 border ${config.class} hover:scale-105 hover:shadow-lg`}
                >
                    <IconComponent className="w-3 h-3 mr-1.5" />
                    {status || "pending"}
                    <ChevronDown
                        className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                            activeDropdown === comment.id ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </div>
        );
    };

    // Handle status change
    const handleStatusChange = (commentId, newStatus) => {
        router.post(
            `/admin/handle-comment-status/${commentId}`,
            {
                status: newStatus,
            },
            {
                preserveScroll: true,
                onSuccess: () => setActiveDropdown(null),
            }
        );
    };

    const handleDelete = (commentId) => {
        if (confirm("Are you sure you want to delete this comment?")) {
            router.delete(`/admin/delete-comment/${commentId}`, {
                preserveScroll: true,
                onSuccess: () => {
                    setMobileMenuOpen(null);
                },
            });
        }
    };

    // Status dropdown component
    const StatusDropdown = ({ comment }) => {
        const isOpen = activeDropdown === comment.id;
        const position = dropdownPositions[comment.id] || { top: 0, left: 0 };

        const statusOptions = [
            {
                value: "approved",
                label: "Approve",
                color: "text-green-400 hover:bg-green-500/10",
                icon: CheckCircle,
            },
            {
                value: "rejected",
                label: "Reject",
                color: "text-red-400 hover:bg-red-500/10",
                icon: XCircle,
            },
            {
                value: "spam",
                label: "Mark as Spam",
                color: "text-gray-400 hover:bg-gray-500/10",
                icon: AlertCircle,
            },
            {
                value: "pending",
                label: "Set to Pending",
                color: "text-yellow-400 hover:bg-yellow-500/10",
                icon: Clock,
            },
        ];

        if (!isOpen) return null;

        return (
            <>
                {/* Backdrop */}
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setActiveDropdown(null)}
                />

                {/* Dropdown menu */}
                <div
                    ref={(el) => {
                        dropdownRefs.current[comment.id] = el;
                    }}
                    className="fixed z-50 w-48 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl ring-1 ring-black ring-opacity-50 overflow-hidden backdrop-blur-sm"
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                    }}
                >
                    <div className="py-2">
                        <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-700">
                            Change Status
                        </div>
                        {statusOptions.map((option) => {
                            const IconComponent = option.icon;
                            return (
                                <button
                                    key={option.value}
                                    onClick={() =>
                                        handleStatusChange(
                                            comment.id,
                                            option.value
                                        )
                                    }
                                    className={`flex items-center w-full px-3 py-2.5 text-sm ${option.color} transition-all duration-150 hover:scale-105 hover:shadow-md`}
                                >
                                    <IconComponent className="w-4 h-4 mr-3" />
                                    {option.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    };

    // Handlers
    const handleView = (comment) => {
        setSelectedComment(comment);
        setViewModal(true);
        setMobileMenuOpen(null);
    };

    const closeViewModal = () => {
        setViewModal(false);
        setSelectedComment(null);
    };

    // Mobile Actions Menu
    const MobileActionsMenu = ({ comment }) => {
        const isOpen = mobileMenuOpen === comment.id;

        const calculateMobileMenuPosition = () => {
            if (!mobileButtonRefs.current[comment.id]) return { right: 0 };

            const rect =
                mobileButtonRefs.current[comment.id].getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            const spaceRight = viewportWidth - rect.right;
            const spaceLeft = rect.left;

            return spaceRight >= 192 || spaceRight >= spaceLeft
                ? { right: viewportWidth - rect.right, top: rect.bottom + 4 }
                : { left: rect.left, top: rect.bottom + 4 };
        };

        const position = calculateMobileMenuPosition();

        return (
            <div className="relative md:hidden">
                <button
                    ref={(el) => (mobileButtonRefs.current[comment.id] = el)}
                    onClick={(e) => {
                        e.stopPropagation();
                        setMobileMenuOpen(isOpen ? null : comment.id);
                    }}
                    className="p-2 text-gray-400 hover:text-white transition-all duration-200 hover:bg-gray-700 rounded-lg"
                >
                    <MoreVertical className="w-4 h-4" />
                </button>

                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setMobileMenuOpen(null)}
                        />
                        <div
                            className="fixed z-50 w-48 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm"
                            style={position}
                        >
                            <div className="py-2">
                                <button
                                    onClick={() => handleView(comment)}
                                    className="flex items-center w-full px-3 py-2.5 text-sm text-gray-300 hover:bg-blue-500/10 hover:text-blue-300 transition-all duration-150"
                                >
                                    <Eye className="w-4 h-4 mr-3" />
                                    View Comment
                                </button>
                                <button
                                    onClick={() => handleDelete(comment.id)}
                                    className="flex items-center w-full px-3 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-150"
                                >
                                    <Trash className="w-4 h-4 mr-3" />
                                    Delete Comment
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    };

    // Desktop Action Buttons
    const DesktopActionButtons = ({ comment }) => (
        <div className="hidden md:flex items-center space-x-2">
            <button
                onClick={() => handleView(comment)}
                className="inline-flex items-center px-3 gap-2 py-2 text-sm font-medium text-gray-300 bg-blue-500/20 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                <Eye className="w-4 h-4" />
                View
            </button>
            <button
                onClick={() => handleDelete(comment.id)}
                className="inline-flex items-center px-3 gap-2 py-2 text-sm font-medium text-red-300 bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
                <Trash className="w-4 h-4" />
                Delete
            </button>
        </div>
    );

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close status dropdowns
            if (activeDropdown) {
                const button = statusButtonRefs.current[activeDropdown];
                const dropdown = dropdownRefs.current[activeDropdown];
                if (
                    button &&
                    !button.contains(event.target) &&
                    dropdown &&
                    !dropdown.contains(event.target)
                ) {
                    setActiveDropdown(null);
                }
            }

            // Close mobile menus
            if (mobileMenuOpen) {
                const button = mobileButtonRefs.current[mobileMenuOpen];
                if (button && !button.contains(event.target)) {
                    setMobileMenuOpen(null);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", () => {
            setActiveDropdown(null);
            setMobileMenuOpen(null);
        });

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", () => {
                setActiveDropdown(null);
                setMobileMenuOpen(null);
            });
        };
    }, [activeDropdown, mobileMenuOpen]);

    // Update dropdown positions on scroll and resize
    useEffect(() => {
        const updateDropdownPositions = () => {
            if (activeDropdown) {
                const position = calculateDropdownPosition(
                    { current: statusButtonRefs.current[activeDropdown] },
                    activeDropdown
                );
                setDropdownPositions((prev) => ({
                    ...prev,
                    [activeDropdown]: position,
                }));
            }
        };

        window.addEventListener("resize", updateDropdownPositions);
        window.addEventListener("scroll", updateDropdownPositions);

        return () => {
            window.removeEventListener("resize", updateDropdownPositions);
            window.removeEventListener("scroll", updateDropdownPositions);
        };
    }, [activeDropdown]);

    return (
        <>
            <Head title="Comments Management" />

            {/* View Comment Modal */}
            {viewModal && selectedComment && (
                <ViewComment
                    comment={selectedComment}
                    onClose={closeViewModal}
                />
            )}

            <div className="px-4 sm:px-6 lg:px-8">
                <div className="min-h-max py-8">
                    <div className="w-full max-w-6xl space-y-6">
                        <SharedTitle title="Comments Management" />

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
                                <div className="text-2xl font-bold">
                                    {comments.length}
                                </div>
                                <div className="text-blue-100 text-sm">
                                    Total Comments
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white shadow-lg">
                                <div className="text-2xl font-bold">
                                    {
                                        comments.filter(
                                            (c) => c.status === "approved"
                                        ).length
                                    }
                                </div>
                                <div className="text-green-100 text-sm">
                                    Approved
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-4 text-white shadow-lg">
                                <div className="text-2xl font-bold">
                                    {
                                        comments.filter(
                                            (c) => c.status === "pending"
                                        ).length
                                    }
                                </div>
                                <div className="text-yellow-100 text-sm">
                                    Pending
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 text-white shadow-lg">
                                <div className="text-2xl font-bold">
                                    {
                                        comments.filter(
                                            (c) =>
                                                c.status === "rejected" ||
                                                c.status === "spam"
                                        ).length
                                    }
                                </div>
                                <div className="text-red-100 text-sm">
                                    Rejected/Spam
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br overflow-x-auto scrollbar-hide from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-700 p-4 md:p-6">
                            {comments.length > 0 ? (
                                <div className="relative">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead className="hidden md:table-header-group">
                                            <tr>
                                                <th className="py-4 pl-6 pr-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                                    Commenter
                                                </th>
                                                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                                    Comment
                                                </th>
                                                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                                    Date
                                                </th>
                                                <th className="py-4 pl-3 pr-6 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-700">
                                            {comments.map((comment) => (
                                                <tr
                                                    key={comment.id}
                                                    className="hover:bg-gray-900/50 transition-colors duration-150 group"
                                                >
                                                    {/* Commenter - Mobile & Desktop */}
                                                    <td className="py-4 pl-4 pr-3 md:pl-6 md:pr-3">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12">
                                                                <img
                                                                    className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-gray-600 group-hover:border-gray-500 transition-colors"
                                                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                                        comment.name ||
                                                                            "User"
                                                                    )}&background=0D8ABC&color=fff`}
                                                                    alt={
                                                                        comment.name ||
                                                                        "User"
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="ml-4 flex-1 min-w-0">
                                                                <div className="text-sm font-semibold text-white truncate">
                                                                    {comment.name ||
                                                                        "Unknown User"}
                                                                </div>
                                                                <div className="text-xs text-gray-400 truncate md:text-sm">
                                                                    {comment.email ||
                                                                        "No email"}
                                                                </div>
                                                                {/* Mobile only metadata */}
                                                                <div className="md:hidden flex items-center space-x-2 mt-1 text-xs text-gray-500">
                                                                    <div className="flex items-center">
                                                                        <Calendar className="w-3 h-3 mr-1" />
                                                                        {comment.createdAt
                                                                            ? new Date(
                                                                                  comment.createdAt
                                                                              ).toLocaleDateString()
                                                                            : "N/A"}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    {/* Comment - Desktop */}
                                                    <td className="hidden md:table-cell px-4 py-4">
                                                        <div className="text-sm text-gray-300 font-medium max-w-xs">
                                                            <div className="text-gray-400 line-clamp-2">
                                                                {comment.comment ||
                                                                    "No comment content"}
                                                            </div>
                                                        </div>
                                                    </td>

                                                    {/* Status - Mobile & Desktop */}
                                                    <td className="px-4 py-4 relative">
                                                        <div className="flex items-center justify-between">
                                                            <div className="relative">
                                                                <StatusBadge
                                                                    status={
                                                                        comment.status
                                                                    }
                                                                    comment={
                                                                        comment
                                                                    }
                                                                />
                                                                <StatusDropdown
                                                                    comment={
                                                                        comment
                                                                    }
                                                                />
                                                            </div>
                                                            {/* Mobile actions trigger */}
                                                            <div className="md:hidden">
                                                                <MobileActionsMenu
                                                                    comment={
                                                                        comment
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="hidden md:table-cell px-4 py-4 whitespace-nowrap text-sm text-gray-400">
                                                        {comment.createdAt
                                                            ? new Date(
                                                                  comment.createdAt
                                                              ).toLocaleDateString(
                                                                  "en-US",
                                                                  {
                                                                      year: "numeric",
                                                                      month: "short",
                                                                      day: "numeric",
                                                                  }
                                                              )
                                                            : "N/A"}
                                                    </td>

                                                    {/* Actions - Desktop */}
                                                    <td className="hidden md:table-cell py-4 pl-3 pr-6 text-right">
                                                        <DesktopActionButtons
                                                            comment={comment}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="text-gray-400 mb-4">
                                        <svg
                                            className="mx-auto h-16 w-16"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300 font-medium text-lg mb-2">
                                        No comments found
                                    </p>
                                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                                        There are no comments to display at the
                                        moment. Comments will appear here once
                                        users start engaging with your content.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Comments.layout = (page) => <DashboardLayout children={page} />;

export default Comments;
