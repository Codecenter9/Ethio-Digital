import React, { useState, useMemo, useCallback } from "react";
import {
    Search,
    MoreVertical,
    Trash2,
    Mail,
    User,
    EyeOff,
    Trash,
    ArrowLeft,
    Clock,
    Reply,
    Forward,
    Circle,
} from "lucide-react";
import DashboardLayout from "@/Layouts/DashboardLayout/Dashboard";
import SharedTitle from "@/Components/Admin/layout/SharedTitle";
import { Head, router } from "@inertiajs/react";
import DeleteModal from "@/Components/Admin/cards/modal/DeleteModal";
import EmailDetailView from "@/Components/Admin/cards/emails/EmailDetailView";

const Emails = ({ emails = [] }) => {
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [activeCategory, setActiveCategory] = useState("inbox");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [detailView, setDetailView] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const categoryCounts = useMemo(() => {
        const inboxCount = emails.filter(
            (email) => email.type === "inbox"
        ).length;
        const sentCount = emails.filter(
            (email) => email.type === "sent"
        ).length;
        const spamCount = emails.filter(
            (email) => email.status === "spam"
        ).length;
        const trashCount = emails.filter(
            (email) => email.status === "trash"
        ).length;

        return { inboxCount, sentCount, spamCount, trashCount };
    }, [emails]);

    const { inboxCount, sentCount, spamCount, trashCount } = categoryCounts;

    const categories = useMemo(
        () => [
            {
                id: "inbox",
                name: "Inbox",
                count: inboxCount,
                icon: Mail,
            },
            {
                id: "sent",
                name: "Sent",
                count: sentCount,
                icon: User,
            },
            {
                id: "spam",
                name: "Spam",
                count: spamCount,
                icon: EyeOff,
            },
            {
                id: "trash",
                name: "Trash",
                count: trashCount,
                icon: Trash,
            },
        ],
        [inboxCount, sentCount, spamCount, trashCount]
    );

    const formatDate = useCallback((dateString) => {
        if (!dateString) return "Unknown date";

        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) return "Invalid date";

            const now = new Date();
            const diffTime = Math.abs(now - date);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) return "Yesterday";
            if (diffDays < 7) return `${diffDays}d ago`;
            if (diffDays < 30) return `${Math.ceil(diffDays / 7)}w ago`;
            return date.toLocaleDateString();
        } catch (error) {
            console.error("Error formatting date:", error);
            return "Invalid date";
        }
    }, []);

    const toggleEmailSelection = useCallback((emailId) => {
        setSelectedEmails((prev) =>
            prev.includes(emailId)
                ? prev.filter((id) => id !== emailId)
                : [...prev, emailId]
        );
    }, []);

    const filteredEmails = useMemo(() => {
        return emails.filter((email) => {
            if (activeCategory === "inbox" && email.type !== "inbox")
                return false;
            if (activeCategory === "sent" && email.type !== "sent")
                return false;
            if (activeCategory === "spam" && email.status !== "spam")
                return false;
            if (activeCategory === "trash" && email.status !== "trash")
                return false;

            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase().trim();
                return (
                    email.subject?.toLowerCase().includes(query) ||
                    email.message?.toLowerCase().includes(query) ||
                    email.name?.toLowerCase().includes(query) ||
                    email.email?.toLowerCase().includes(query)
                );
            }

            return true;
        });
    }, [emails, activeCategory, searchQuery]);

    const toggleSelectAll = useCallback(() => {
        setSelectedEmails((prev) =>
            prev.length === filteredEmails.length
                ? []
                : filteredEmails.map((email) => email.id)
        );
    }, [filteredEmails]);

    const handleEmailStatus = useCallback((emailId) => {
        if (!emailId) return;

        router.post(
            `/admin/emails/${emailId}/update-status`,
            {},
            { preserveScroll: true }
        );
    }, []);

    const handleDeleteEmail = useCallback((emailId) => {
        if (!emailId) return;

        router.post(
            `/admin/delete-emails/${emailId}`,
            {},
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSelectedEmail(null);
                    setDetailView(false);
                    setSelectedEmails((prev) =>
                        prev.filter((id) => id !== emailId)
                    );
                },
            }
        );
    }, []);

    const confirmBulkDelete = useCallback(() => {
        if (selectedEmails.length === 0) return;
        setShowDeleteModal(true);
    }, [selectedEmails.length]);

    const handleBulkDelete = useCallback(() => {
        if (selectedEmails.length === 0) return;

        selectedEmails.forEach((id) => {
            router.post(
                `/admin/delete-emails/${id}`,
                {},
                { preserveScroll: true }
            );
        });
        setSelectedEmails([]);
        setDetailView(false);
        setSelectedEmail(null);
    }, [selectedEmails]);

    const toggleDetailView = useCallback(
        (email) => {
            if (!email) return;

            setSelectedEmail(email);
            setDetailView(true);

            if (email.status === "unseen") {
                handleEmailStatus(email.id);
            }
        },
        [handleEmailStatus]
    );

    const closeDetailView = useCallback(() => {
        setDetailView(false);
        setSelectedEmail(null);
    }, []);

    return (
        <>
            <Head>
                <title>Emails</title>
            </Head>
            <div className="min-h-max flex items-center justify-center py-8">
                <div className="w-full max-w-6xl space-y-6">
                    <SharedTitle title="Manage Emails" />

                    {emails.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 p-6">
                                    {/* Search */}
                                    <div className="relative mb-6">
                                        <Search
                                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            size={20}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Search emails..."
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Categories */}
                                    <nav className="space-y-2">
                                        {categories.map((category) => {
                                            const Icon = category.icon;
                                            const isActive =
                                                activeCategory === category.id;
                                            return (
                                                <button
                                                    key={category.id}
                                                    onClick={() => {
                                                        setActiveCategory(
                                                            category.id
                                                        );
                                                        setDetailView(false);
                                                        setSelectedEmail(null);
                                                    }}
                                                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                                                        isActive
                                                            ? "bg-blue-900/20 text-blue-400 border border-blue-800"
                                                            : "hover:bg-gray-700 text-gray-300"
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Icon size={18} />
                                                        <span className="font-medium">
                                                            {category.name}
                                                        </span>
                                                    </div>
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium min-w-8 text-center ${
                                                            isActive
                                                                ? "bg-blue-800 text-blue-300"
                                                                : "bg-gray-600 text-gray-400"
                                                        }`}
                                                    >
                                                        {category.count}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-3">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden h-max">
                                    {detailView && selectedEmail ? (
                                        <EmailDetailView
                                            email={selectedEmail}
                                            onClose={closeDetailView}
                                            setSelectedEmail={setSelectedEmail}
                                            setShowDeleteModal={
                                                setShowDeleteModal
                                            }
                                        />
                                    ) : (
                                        <>
                                            {/* Toolbar */}
                                            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                                                <div className="flex items-center gap-4">
                                                    <label className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={
                                                                filteredEmails.length >
                                                                    0 &&
                                                                selectedEmails.length ===
                                                                    filteredEmails.length
                                                            }
                                                            onChange={
                                                                toggleSelectAll
                                                            }
                                                            disabled={
                                                                filteredEmails.length ===
                                                                0
                                                            }
                                                            className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                                                        />
                                                    </label>
                                                    <div className="flex items-center gap-2">
                                                        {selectedEmails.length >
                                                            0 && (
                                                            <button
                                                                onClick={
                                                                    confirmBulkDelete
                                                                }
                                                                className="p-2 hover:bg-red-900 rounded-lg transition-colors text-red-400"
                                                                title="Delete selected"
                                                                aria-label="Delete selected emails"
                                                            >
                                                                <Trash2 className="w-5 h-5" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-sm text-gray-400">
                                                        {selectedEmails.length}{" "}
                                                        of{" "}
                                                        {filteredEmails.length}{" "}
                                                        selected
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Email List */}
                                            <div className="divide-y divide-gray-700 max-h-[480px] overflow-y-auto">
                                                {filteredEmails.length === 0 ? (
                                                    <div className="text-center py-12">
                                                        <Mail
                                                            className="mx-auto text-gray-400 mb-4"
                                                            size={48}
                                                        />
                                                        <h3 className="text-lg font-medium text-white mb-2">
                                                            No emails found
                                                        </h3>
                                                        <p className="text-gray-400">
                                                            {searchQuery
                                                                ? "Try adjusting your search terms"
                                                                : `No emails in ${
                                                                      categories.find(
                                                                          (
                                                                              cat
                                                                          ) =>
                                                                              cat.id ===
                                                                              activeCategory
                                                                      )?.name ||
                                                                      activeCategory
                                                                  }`}
                                                        </p>
                                                    </div>
                                                ) : (
                                                    filteredEmails.map(
                                                        (email) => (
                                                            <div
                                                                key={email.id}
                                                                className={`flex items-start gap-4 p-4 hover:bg-gray-700/50 transition-colors cursor-pointer group ${
                                                                    selectedEmails.includes(
                                                                        email.id
                                                                    )
                                                                        ? "bg-blue-900/10"
                                                                        : ""
                                                                } ${
                                                                    email.status ===
                                                                    "unseen"
                                                                        ? "bg-blue-900/10 border-l-4 border-l-blue-500"
                                                                        : ""
                                                                }`}
                                                                onClick={() =>
                                                                    toggleDetailView(
                                                                        email
                                                                    )
                                                                }
                                                            >
                                                                {/* Checkbox */}
                                                                <label
                                                                    className="flex items-start mt-1 flex-shrink-0"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.stopPropagation()
                                                                    }
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedEmails.includes(
                                                                            email.id
                                                                        )}
                                                                        onChange={() =>
                                                                            toggleEmailSelection(
                                                                                email.id
                                                                            )
                                                                        }
                                                                        className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                                                                    />
                                                                </label>

                                                                {/* Unseen Indicator */}
                                                                {email.status ===
                                                                    "unseen" && (
                                                                    <div className="flex items-center mt-1 flex-shrink-0">
                                                                        <Circle className="w-3 h-3 fill-blue-500 text-blue-500" />
                                                                    </div>
                                                                )}

                                                                {/* Email Content */}
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center gap-3 mb-1">
                                                                        <span
                                                                            className={`font-semibold text-sm truncate ${
                                                                                email.status ===
                                                                                "unseen"
                                                                                    ? "text-white font-bold"
                                                                                    : "text-gray-300"
                                                                            }`}
                                                                        >
                                                                            {email.type ===
                                                                            "sent"
                                                                                ? email.to_email ||
                                                                                  "Unknown Recipient"
                                                                                : email.from_name ||
                                                                                  email.name ||
                                                                                  "Unknown Sender"}
                                                                        </span>
                                                                        {email.status ===
                                                                            "unseen" && (
                                                                            <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-medium flex-shrink-0">
                                                                                New
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <div className="flex items-center gap-2">
                                                                        <span
                                                                            className={`truncate ${
                                                                                email.status ===
                                                                                "unseen"
                                                                                    ? "text-white font-bold text-base"
                                                                                    : "text-gray-400"
                                                                            }`}
                                                                        >
                                                                            {email.subject ||
                                                                                "No Subject"}
                                                                        </span>
                                                                    </div>
                                                                    <p
                                                                        className={`text-sm truncate mt-1 ${
                                                                            email.status ===
                                                                            "unseen"
                                                                                ? "text-gray-300 font-medium"
                                                                                : "text-gray-400"
                                                                        }`}
                                                                    >
                                                                        {email.message?.substring(
                                                                            0,
                                                                            100
                                                                        ) ||
                                                                            "No message content"}
                                                                        {email
                                                                            .message
                                                                            ?.length >
                                                                            100 &&
                                                                            "..."}
                                                                    </p>
                                                                </div>

                                                                {/* Date & Actions */}
                                                                <div className="flex items-center gap-3 flex-shrink-0">
                                                                    <span
                                                                        className={`text-sm whitespace-nowrap ${
                                                                            email.status ===
                                                                            "unseen"
                                                                                ? "text-gray-300 font-medium"
                                                                                : "text-gray-400"
                                                                        }`}
                                                                    >
                                                                        {formatDate(
                                                                            email.created_at
                                                                        )}
                                                                    </span>
                                                                    <button
                                                                        className="p-1 hover:bg-gray-600 rounded transition-colors text-gray-400 opacity-0 group-hover:opacity-100 flex-shrink-0"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.stopPropagation();
                                                                            // Show more actions
                                                                        }}
                                                                        aria-label="More options"
                                                                    >
                                                                        <MoreVertical
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )
                                                    )
                                                )}
                                            </div>

                                            {/* Footer */}
                                            {filteredEmails.length > 0 && (
                                                <div className="flex items-center justify-between p-4 border-t border-gray-700">
                                                    <span className="text-sm text-gray-400">
                                                        Showing{" "}
                                                        {filteredEmails.length}{" "}
                                                        of {emails.length}{" "}
                                                        emails
                                                    </span>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            className="px-3 py-1 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-sm text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                            disabled
                                                        >
                                                            Previous
                                                        </button>
                                                        <button
                                                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                                            disabled
                                                        >
                                                            Next
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <Mail
                                className="mx-auto text-gray-400 mb-4"
                                size={64}
                            />
                            <h3 className="text-xl font-medium text-white mb-2">
                                No emails yet
                            </h3>
                            <p className="text-gray-400">
                                Emails will appear here once you start receiving
                                them.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <DeleteModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={() => {
                    if (selectedEmail) {
                        handleDeleteEmail(selectedEmail);
                    } else {
                        handleBulkDelete();
                    }
                    setShowDeleteModal(false);
                }}
                title={
                    selectedEmail ? "Delete Email" : "Delete Selected Emails"
                }
                message={
                    selectedEmail
                        ? "Are you sure you want to delete this email? This action cannot be undone."
                        : `Are you sure you want to delete ${selectedEmails.length} selected emails? This action cannot be undone.`
                }
            />
        </>
    );
};

Emails.layout = (page) => <DashboardLayout children={page} />;

export default Emails;
