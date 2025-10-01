import React, { useState } from "react";

const MemberTable = ({ members, handleDelete, handleEdit }) => {
    const [filterText, setFilterText] = useState("");

    // Filter members based on search
    const filteredMembers = members.filter(
        (member) =>
            member.name?.toLowerCase().includes(filterText.toLowerCase()) ||
            member.address?.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div className="overflow-x-auto">
            {/* Search input */}
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search by name or address..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    className="pl-3 pr-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <span className="text-gray-300">
                    {filteredMembers.length}{" "}
                    {filteredMembers.length === 1 ? "member" : "members"} found
                </span>
            </div>

            {/* Table */}
            {filteredMembers.length > 0 ? (
                <table className="min-w-full bg-gray-900 text-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">#</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">Phone</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">Position</th>
                            <th className="px-6 py-3 text-left text-sm font-medium uppercase border-b border-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMembers.map((member, index) => (
                            <tr
                                key={member.id}
                                className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                            >
                                <td className="px-6 py-4 border-b border-gray-700">{index + 1}</td>
                                <td className="px-6 py-4 border-b border-gray-700">{member.name}</td>
                                <td className="px-6 py-4 border-b border-gray-700">{member.email}</td>
                                <td className="px-6 py-4 border-b border-gray-700">{member.phone}</td>
                                <td className="px-6 py-4 border-b border-gray-700">{member.position}</td>
                                <td className="px-6 py-4 border-b border-gray-700 flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(member.id)}
                                        className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-gray-200 hover:text-white text-sm border border-gray-700 transition-colors"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(member.id)}
                                        className="px-3 py-1.5 bg-red-900/30 hover:bg-red-800/50 rounded text-red-200 hover:text-white text-sm border border-red-800/30 transition-colors"
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
                    No members available.
                </div>
            )}
        </div>
    );
};

export default MemberTable;
