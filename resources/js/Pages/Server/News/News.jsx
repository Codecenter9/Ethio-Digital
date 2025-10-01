import { Head } from "@inertiajs/react";
import SharedTitle from "@/Components/Admin/layout/SharedTitle";
import DashboardLayout from "@/Layouts/DashboardLayout/Dashboard";
import AddBlogs from "@/Components/Admin/cards/news/addNews";
import NewsTable from "@/Components/Admin/cards/news/newsTable";
import { useState } from "react";
import { FileText, PlusCircle } from "lucide-react";

const News = ({ blogs }) => {
    const [activeTab, setActiveTab] = useState("list");

    const tabs = [
        { id: "list", label: "News List", icon: <FileText /> },
        { id: "add", label: "Add New new post", icon: <PlusCircle /> },
    ];
    return (
        <DashboardLayout>
            <Head>
                <title>Add News</title>
            </Head>
            <div className="min-h-max flex items-center justify-center py-8">
                <div className="w-full max-w-6xl space-y-6">
                    <SharedTitle title="News Management" />

                    <div className="bg-gray-900 rounded-lg border border-gray-700">
                        <div className="flex space-x-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                                        activeTab === tab.id
                                            ? "bg-gray-800/50 text-white"
                                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                                    }`}
                                >
                                    <span className="mr-2 text-lg">
                                        {tab.icon}
                                    </span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* tabs content */}

                    <div className=" rounded-lg border border-gray-700 p-6">
                        {activeTab === "list" && (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-white">
                                        Blog posts List ({blogs.length})
                                    </h2>
                                </div>
                                <NewsTable blogs={blogs} />
                            </div>
                        )}

                        {activeTab === "add" && (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-white">
                                        Add New blog post
                                    </h2>
                                </div>
                                <AddBlogs />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default News;
