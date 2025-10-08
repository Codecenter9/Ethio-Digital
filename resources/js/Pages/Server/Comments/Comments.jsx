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
    X,
} from "lucide-react";
import ViewComment from "./ViewComment";

const Comments = ({ comments = [] }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
    const [selectedComment, setSelectedComment] = useState(null);
    const [viewModal, setViewModal] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({});
    const statusButtonRefs = useRef({});
    const mobileButtonRefs = useRef({});

    // Calculate dropdown position based on available space
    const calculateDropdownPosition = (
        buttonRef,
        dropdownWidth = 192,
        dropdownHeight = 160
    ) => {
        if (!buttonRef.current) return "bottom-right";

        const rect = buttonRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        const spaceBelow = viewportHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceRight = viewportWidth - rect.left;
        const spaceLeft = rect.right;

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

        return `${verticalPosition}-${horizontalPosition}`;
    };

    const StatusBadge = ({ status, comment }) => {
        const statusColors = {
            pending:
                "bg-yellow-100 text-yellow-800 border border-yellow-200 hover:bg-yellow-200 cursor-pointer",
            approved:
                "bg-green-100 text-green-800 border border-green-200 hover:bg-green-200 cursor-pointer",
            rejected:
                "bg-red-100 text-red-800 border border-red-200 hover:bg-red-200 cursor-pointer",
            spam: "bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200 cursor-pointer",
        };

        const badgeClass =
            statusColors[status?.toLowerCase()] || statusColors.pending;

        return (
            <div className="relative">
                <button
                    ref={(el) => (statusButtonRefs.current[comment.id] = el)}
                    onClick={() => {
                        const position = calculateDropdownPosition({
                            current: statusButtonRefs.current[comment.id],
                        });
                        setDropdownPosition((prev) => ({
                            ...prev,
                            [comment.id]: position,
                        }));
                        setActiveDropdown(
                            activeDropdown === comment.id ? null : comment.id
                        );
                    }}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize transition-colors duration-200 ${badgeClass}`}
                >
                    {status || "pending"}
                    <ChevronDown className="w-3 h-3 ml-1" />
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
        const position = dropdownPosition[comment.id] || "bottom-right";

        const statusOptions = [
            {
                value: "approved",
                label: "Approve",
                color: "text-green-600",
                icon: "✓",
            },
            {
                value: "rejected",
                label: "Reject",
                color: "text-red-600",
                icon: "✗",
            },
            {
                value: "spam",
                label: "Mark as Spam",
                color: "text-gray-600",
                icon: "⚠",
            },
            {
                value: "pending",
                label: "Set to Pending",
                color: "text-yellow-600",
                icon: "⏳",
            },
        ];

        // Position classes based on calculated position
        const getPositionClasses = () => {
            const classes = {
                "top-left": "bottom-full left-0 mb-1 origin-bottom-left",
                "top-right": "bottom-full right-0 mb-1 origin-bottom-right",
                "bottom-left": "top-full left-0 mt-1 origin-top-left",
                "bottom-right": "top-full right-0 mt-1 origin-top-right",
            };
            return classes[position] || classes["bottom-right"];
        };

        return (
            isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setActiveDropdown(null)}
                    />

                    {/* Dropdown menu */}
                    <div
                        className={`absolute z-50 w-48 bg-white border border-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden ${getPositionClasses()}`}
                    >
                        <div className="py-1">
                            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase border-b border-gray-100">
                                Change Status
                            </div>
                            {statusOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() =>
                                        handleStatusChange(
                                            comment.id,
                                            option.value
                                        )
                                    }
                                    className={`flex items-center w-full px-3 py-2 text-sm ${option.color} hover:bg-gray-50 transition-colors duration-150`}
                                >
                                    <span className="w-4 mr-2 font-bold">
                                        {option.icon}
                                    </span>
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )
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

        // Calculate mobile menu position
        const getMobileMenuPosition = () => {
            if (!mobileButtonRefs.current[comment.id]) return "right-0";

            const rect =
                mobileButtonRefs.current[comment.id].getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            const spaceRight = viewportWidth - rect.right;
            const spaceLeft = rect.left;

            return spaceRight >= 192 || spaceRight >= spaceLeft
                ? "right-0"
                : "left-0";
        };

        return (
            <div className="relative md:hidden">
                <button
                    ref={(el) => (mobileButtonRefs.current[comment.id] = el)}
                    onClick={() =>
                        setMobileMenuOpen(isOpen ? null : comment.id)
                    }
                    className="p-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
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
                            className={`absolute z-50 w-48 mt-1 origin-top-right bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden ${getMobileMenuPosition()}`}
                        >
                            <div className="py-1">
                                <button
                                    onClick={() => handleView(comment)}
                                    className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors duration-150"
                                >
                                    <Eye className="w-4 h-4 mr-2" />
                                    View Comment
                                </button>
                                <button
                                    onClick={() => handleDelete(comment.id)}
                                    className="flex items-center w-full px-3 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors duration-150"
                                >
                                    <Trash className="w-4 h-4 mr-2" />
                                    Delete
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
        <div className="hidden md:flex items-center space-x-3">
            <button
                onClick={() => handleView(comment)}
                className="inline-flex items-center px-3 gap-2 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            >
                <Eye className="w-4 h-4" />
                View
            </button>
            <button
                onClick={() => handleDelete(comment.id)}
                className="inline-flex items-center px-3 gap-2 py-2 text-sm font-medium text-gray-300 bg-red-900/50 border border-red-700 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
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
                if (button && !button.contains(event.target)) {
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
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeDropdown, mobileMenuOpen]);

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

                        {/* Mobile Stats */}
                        <div className="grid grid-cols-2 gap-4 md:hidden mb-6">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
                                <div className="text-xl font-bold">
                                    {comments.length}
                                </div>
                                <div className="text-blue-100 text-xs">
                                    Total
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white shadow-lg">
                                <div className="text-xl font-bold">
                                    {
                                        comments.filter(
                                            (c) => c.status === "approved"
                                        ).length
                                    }
                                </div>
                                <div className="text-green-100 text-xs">
                                    Approved
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br overflow-x-auto scrollbar-hide from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 p-4 md:p-6">
                            {comments.length > 0 ? (
                                <div className=" ">
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
                                                    className="hover:bg-gray-900/50 transition-colors duration-150"
                                                >
                                                    {/* Commenter - Mobile & Desktop */}
                                                    <td className="py-4 pl-4 pr-3 md:pl-6 md:pr-3">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12">
                                                                <img
                                                                    className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-gray-700"
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
