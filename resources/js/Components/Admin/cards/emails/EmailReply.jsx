import React, { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

const EmailReply = ({ viewreplyform, email, setViewReplyForm }) => {
    const [replyMessage, setReplyMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!replyMessage.trim()) return;

        setIsSending(true);

        try {
             router.post(
                `/admin/reply-email/${email.id}`,
                {
                    message: replyMessage,
                },
                {
                    onSuccess: () => {
                        setReplyMessage("");
                        setViewReplyForm(false);
                    },
                    onFinish: () => setIsSending(false),
                }
            );
        } catch (error) {
            console.error("Error sending reply:", error);
            setIsSending(false);
        }
    };

    return (
        <div className="h-full flex flex-col bg-gray-900 text-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setViewReplyForm(false)}
                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                        title="Back"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-300" />
                    </button>
                    <h2 className="text-lg font-semibold">
                        Reply to {email.email}
                    </h2>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col p-6 space-y-4"
            >
                <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Write your reply..."
                    className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSending || !replyMessage.trim()}
                        className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        <Send className="w-4 h-4" />
                        {isSending ? "Sending..." : "Send Reply"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmailReply;
