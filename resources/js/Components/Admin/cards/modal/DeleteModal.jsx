import React from "react";
import { XCircle } from "lucide-react";

const DeleteModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Delete Item",
    message = "Are you sure you want to delete this item? This action cannot be undone.",
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-md mx-4">
                <div className="flex items-center mb-4">
                    <XCircle className="text-red-500 w-6 h-6 mr-2" />
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {title}
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {message}
                </p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="border-gray-600 py-1 px-3 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-700 py-1 px-3 rounded-lg text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
