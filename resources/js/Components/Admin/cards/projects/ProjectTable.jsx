import React from "react";
import { Link } from "@inertiajs/react";

const ProjectTable = ({
    projects,
    setActiveTab,
    setEditIndex,
    handleDelete,
}) => {
    return (
        <div className="overflow-x-auto">
            {projects && projects.length > 0 ? (
                <table className="min-w-full bg-gray-900 text-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                Category
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                URL
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr
                                key={project.id}
                                className={
                                    index % 2 === 0
                                        ? "bg-gray-900"
                                        : "bg-gray-800"
                                }
                            >
                                <td className="px-6 py-4 border-b border-gray-700">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-700">
                                    {project.project_name}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-700">
                                    {project.category}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-700">
                                    {project.project_url ? (
                                        <Link
                                            href={project.project_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 bg-blue-900/50 hover:bg-blue-800/50 rounded text-blue-300 hover:text-blue-200 text-sm border border-blue-800/50 transition-colors"
                                        >
                                            Visit
                                        </Link>
                                    ) : (
                                        <span className="italic text-gray-500 text-sm">
                                            N/A
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-700 flex space-x-2">
                                    <button
                                        onClick={() => {
                                            setEditIndex(project.id);
                                            setActiveTab("add");
                                        }}
                                        className="flex items-center px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-gray-200 hover:text-white text-sm border border-gray-700 transition-colors"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(project.id)}
                                        className="flex items-center px-3 py-1.5 bg-red-900/30 hover:bg-red-800/50 rounded text-red-200 hover:text-white text-sm border border-red-800/30 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center py-12 text-gray-400">
                    No projects available.
                </div>
            )}
        </div>
    );
};

export default ProjectTable;
