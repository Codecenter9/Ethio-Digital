import React, { useState } from "react";
import {
    Search,
    Filter,
    RefreshCw,
    MoreVertical,
    Star,
    Archive,
    Trash2,
    Mail,
    Clock,
    User,
    Eye,
    EyeOff,
    ChevronDown,
    Calendar,
    Tag,
    Paperclip,
} from "lucide-react";
import DashboardLayout from "@/Layouts/DashboardLayout/Dashboard";
import SharedTitle from "@/Components/Admin/layout/SharedTitle";
import { Head } from "@inertiajs/react";

const Emails = ({ emails }) => {
    const [selectedEmails, setSelectedEmails] = useState([]);
    const [activeCategory, setActiveCategory] = useState("inbox");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { id: "inbox", name: "Inbox", count: emails?.length || 0, icon: Mail },
        { id: "starred", name: "Starred", count: 12, icon: Star },
        { id: "drafts", name: "Drafts", count: 4, icon: Clock },
        { id: "sent", name: "Sent", count: 45, icon: User },
        { id: "archived", name: "Archived", count: 23, icon: Archive },
        { id: "spam", name: "Spam", count: 8, icon: EyeOff },
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return "Yesterday";
        if (diffDays < 7) return `${diffDays}d ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)}w ago`;
        return date.toLocaleDateString();
    };

    const toggleEmailSelection = (emailId) => {
        setSelectedEmails((prev) =>
            prev.includes(emailId)
                ? prev.filter((id) => id !== emailId)
                : [...prev, emailId]
        );
    };

    const toggleSelectAll = () => {
        setSelectedEmails((prev) =>
            prev.length === emails?.length
                ? []
                : emails?.map((email) => email.id) || []
        );
    };

    const filteredEmails =
        emails?.filter(
            (email) =>
                email.subject
                    ?.toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                email.from_name
                    ?.toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                email.message?.toLowerCase().includes(searchQuery.toLowerCase())
        ) || [];

    return (
        <>
            <Head>
                <title>Emails</title>
            </Head>
            <div className="min-h-max flex items-center justify-center py-8">
                <div className="w-full max-w-6xl space-y-6">
                    <SharedTitle title="Manage Emails" />
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
                                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
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
                                                onClick={() =>
                                                    setActiveCategory(
                                                        category.id
                                                    )
                                                }
                                                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                                                    isActive
                                                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                                                        : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon size={18} />
                                                    <span className="font-medium">
                                                        {category.name}
                                                    </span>
                                                </div>
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        isActive
                                                            ? "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
                                                            : "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                                                    }`}
                                                >
                                                    {category.count}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </nav>

                                {/* Labels */}
                                <div className="mt-8">
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                                        Labels
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            "Work",
                                            "Personal",
                                            "Important",
                                            "Travel",
                                        ].map((label, index) => (
                                            <button
                                                key={label}
                                                className="flex items-center gap-3 w-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                            >
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{
                                                        backgroundColor: [
                                                            "#3B82F6",
                                                            "#10B981",
                                                            "#F59E0B",
                                                            "#8B5CF6",
                                                        ][index],
                                                    }}
                                                />
                                                <span className="text-sm">
                                                    {label}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden">
                                {/* Toolbar */}
                                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={
                                                    selectedEmails.length ===
                                                        emails?.length &&
                                                    emails.length > 0
                                                }
                                                onChange={toggleSelectAll}
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                                <Archive size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                                <Trash2 size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                                <EyeOff size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                                <Tag size={18} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {selectedEmails.length} of{" "}
                                            {emails?.length} selected
                                        </span>
                                        <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            <Filter size={16} />
                                            Filter
                                            <ChevronDown size={16} />
                                        </button>
                                    </div>
                                </div>

                                {/* Email List */}
                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {filteredEmails.length === 0 ? (
                                        <div className="text-center py-12">
                                            <Mail
                                                className="mx-auto text-gray-400 mb-4"
                                                size={48}
                                            />
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                                No emails found
                                            </h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                {searchQuery
                                                    ? "Try adjusting your search terms"
                                                    : "Your inbox is empty"}
                                            </p>
                                        </div>
                                    ) : (
                                        filteredEmails.map((email) => (
                                            <div
                                                key={email.id}
                                                className={`flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer ${
                                                    selectedEmails.includes(
                                                        email.id
                                                    )
                                                        ? "bg-blue-50 dark:bg-blue-900/10"
                                                        : ""
                                                } ${
                                                    !email.read
                                                        ? "bg-blue-25 dark:bg-blue-900/5"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    toggleEmailSelection(
                                                        email.id
                                                    )
                                                }
                                            >
                                                {/* Checkbox */}
                                                <label className="flex items-start mt-1">
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
                                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    />
                                                </label>

                                                {/* Star */}
                                                <button
                                                    className="p-1 hover:text-yellow-500 transition-colors mt-1"
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                >
                                                    <Star
                                                        size={16}
                                                        className={
                                                            email.important
                                                                ? "text-yellow-500 fill-yellow-500"
                                                                : "text-gray-400"
                                                        }
                                                    />
                                                </button>

                                                {/* Sender */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <span
                                                            className={`font-semibold text-sm truncate ${
                                                                !email.read
                                                                    ? "text-gray-900 dark:text-white"
                                                                    : "text-gray-700 dark:text-gray-300"
                                                            }`}
                                                        >
                                                            {email.from_name}
                                                        </span>
                                                        {email.attachments && (
                                                            <Paperclip
                                                                size={14}
                                                                className="text-gray-400 flex-shrink-0"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span
                                                            className={`font-medium truncate ${
                                                                !email.read
                                                                    ? "text-gray-900 dark:text-white"
                                                                    : "text-gray-600 dark:text-gray-400"
                                                            }`}
                                                        >
                                                            {email.subject}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">
                                                        {email.message?.substring(
                                                            0,
                                                            100
                                                        )}
                                                        ...
                                                    </p>
                                                    <div className="flex items-center gap-3 mt-2">
                                                        {email.labels?.map(
                                                            (label, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                                                                >
                                                                    {label}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Date & Actions */}
                                                <div className="flex items-center gap-3 flex-shrink-0">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                                        {formatDate(
                                                            email.created_at
                                                        )}
                                                    </span>
                                                    <button
                                                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        <MoreVertical
                                                            size={16}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        Showing {filteredEmails.length} of{" "}
                                        {emails?.length} emails
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm">
                                            Previous
                                        </button>
                                        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Emails;

Emails.layout = (page) => <DashboardLayout children={page} />;
