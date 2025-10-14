import SharedTitle from "@/Components/Admin/layout/SharedTitle";
import DashboardLayout from "@/Layouts/DashboardLayout/Dashboard";
import { Head, usePage } from "@inertiajs/react";
import React from "react";

const Dashboard = () => {
    // Access the props sent from the controller
    const { emails, comments } = usePage().props;

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <SharedTitle title="Dashboard" />

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Emails Card */}
                        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-gray-200">
                                    Unread Emails
                                </h2>
                                <span className="bg-blue-500/20 text-blue-300 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/30">
                                    {emails.length}
                                </span>
                            </div>

                            {emails.length > 0 ? (
                                <div className="space-y-3">
                                    {emails.slice(0, 5).map((email) => (
                                        <div
                                            key={email.id}
                                            className="border-l-4 border-blue-500 pl-4 py-2"
                                        >
                                            <p className="text-gray-200 font-medium text-sm">
                                                {email.subject}
                                            </p>
                                            <p className="text-gray-400 text-xs mt-1">
                                                From: {email.email}
                                            </p>
                                        </div>
                                    ))}
                                    {emails.length > 5 && (
                                        <p className="text-gray-400 text-sm mt-2">
                                            +{emails.length - 5} more emails
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <p className="text-gray-400 text-sm">
                                    No unread emails
                                </p>
                            )}
                        </div>

                        {/* Comments Card */}
                        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-gray-200">
                                    Pending Comments
                                </h2>
                                <span className="bg-orange-500/20 text-orange-300 text-sm font-medium px-3 py-1 rounded-full border border-orange-500/30">
                                    {comments.length}
                                </span>
                            </div>

                            {comments.length > 0 ? (
                                <div className="space-y-3">
                                    {comments.slice(0, 5).map((comment) => (
                                        <div
                                            key={comment.id}
                                            className="border-l-4 border-orange-500 pl-4 py-2"
                                        >
                                            <p className="text-gray-200 text-sm line-clamp-2">
                                                {comment.content}
                                            </p>
                                            <p className="text-gray-400 text-xs mt-1">
                                                By: {comment.name}
                                            </p>
                                        </div>
                                    ))}
                                    {comments.length > 5 && (
                                        <p className="text-gray-400 text-sm mt-2">
                                            +{comments.length - 5} more comments
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <p className="text-gray-400 text-sm">
                                    No pending comments
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 text-center">
                            <div className="text-2xl font-bold text-gray-200">
                                {emails.length}
                            </div>
                            <div className="text-gray-400 text-sm">
                                Total Emails
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 text-center">
                            <div className="text-2xl font-bold text-gray-200">
                                {comments.length}
                            </div>
                            <div className="text-gray-400 text-sm">
                                Total Comments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

Dashboard.layout = (page) => <DashboardLayout>{page}</DashboardLayout>;
