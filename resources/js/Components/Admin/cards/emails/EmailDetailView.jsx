import {
    Trash2,
    EyeOff,
    ArrowLeft,
    Clock,
    Reply,
    Forward,
    Circle,
    Copy,
    CheckCheck,
} from "lucide-react";
import React, { useCallback, useState } from "react";
import EmailReply from "./EmailReply";

const EmailDetailView = ({
    email,
    onClose,
    setSelectedEmail,
    setShowDeleteModal,
}) => {
    if (!email) {
        return (
            <div className="h-full flex items-center justify-center">
                <p className="text-gray-400">No email selected</p>
            </div>
        );
    }

    const [copied, setCopied] = useState(false);
    const [viewreplyform, setViewReplyForm] = useState(false);

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

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

    const confirmDeleteEmail = useCallback((emailId) => {
        setSelectedEmail(emailId);
        setShowDeleteModal(true);
    }, []);

    const handleMoveToSpam = useCallback((emailId) => {
        if (!emailId) return;

        router.post(
            `/admin/emails/${emailId}/move-to-spam`,
            {},
            { preserveScroll: true }
        );
    }, []);

    return (
        <div>
            {viewreplyform ? (
                <EmailReply
                    viewreplyform={viewreplyform}
                    email={email}
                    setViewReplyForm={setViewReplyForm}
                />
            ) : (
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-700">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                                aria-label="Back to email list"
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-300" />
                            </button>
                            <div>
                                <h2 className="text-lg font-semibold text-white line-clamp-1">
                                    {email.subject || "No Subject"}
                                </h2>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <span>{formatDate(email.created_at)}</span>
                                    {email.status === "unseen" && (
                                        <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                                            New
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => handleMoveToSpam(email.id)}
                                className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-300"
                                title="Mark as spam"
                                aria-label="Mark as spam"
                            >
                                <EyeOff className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => confirmDeleteEmail(email.id)}
                                className="p-2 hover:bg-red-900 rounded-lg transition-colors text-red-400"
                                title="Delete email"
                                aria-label="Delete email"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Email Content */}
                    <div className="flex-1 py-6 overflow-y-auto px-6">
                        {/* Sender Info */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                    {(
                                        email.name?.charAt(0) ||
                                        email.from_name?.charAt(0) ||
                                        "U"
                                    ).toUpperCase()}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-semibold text-white truncate">
                                            {email.name ||
                                                email.from_name ||
                                                "Unknown Sender"}
                                        </h3>
                                        {email.status === "unseen" && (
                                            <Circle className="w-3 h-3 fill-blue-500 text-blue-500 animate-pulse flex-shrink-0" />
                                        )}
                                    </div>
                                    <p className="text-gray-400 truncate">
                                        {email.email ||
                                            email.from_email ||
                                            "No email address"}
                                    </p>
                                    {email.phone && (
                                        <p className="text-gray-400 flex justify-between text-sm py-1 px-3 border border-gray-700 rounded-md bg-gray-800/50 mt-1">
                                            <span> {email.phone}</span>
                                            <button
                                                onClick={() =>
                                                    handleCopy(email.phone)
                                                }
                                                className="text-gray-500 hover:text-blue-400 transition-colors ml-2"
                                                title="Copy phone number"
                                            >
                                                {copied ? (
                                                    <CheckCheck className="w-4 h-4 text-green-400" />
                                                ) : (
                                                    <Copy className="w-4 h-4" />
                                                )}
                                            </button>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="text-right text-sm text-gray-400 flex-shrink-0 ml-4">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {email.created_at
                                        ? new Date(
                                              email.created_at
                                          ).toLocaleString()
                                        : "Unknown date"}
                                </div>
                            </div>
                        </div>

                        {/* Email Body */}
                        <div className="prose prose-invert max-w-none">
                            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                                <p className="text-gray-300 whitespace-pre-wrap leading-relaxed break-words">
                                    {email.message || "No message content"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 p-4 border-t border-gray-700 bg-gray-900/50">
                        <button
                            onClick={() => setViewReplyForm(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Reply email"
                        >
                            <Reply className="w-4 h-4" />
                            Reply
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled
                            title="Forward feature coming soon"
                        >
                            <Forward className="w-4 h-4" />
                            Forward
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmailDetailView;
