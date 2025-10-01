import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "@inertiajs/react";
import { Search } from "lucide-react";

const ProjectTable = ({ projects, setActiveTab, setEditIndex }) => {
    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    // Define columns for the data table
    const columns = [
        {
            name: "#",
            selector: (row, index) => index + 1,
            sortable: true,
            width: "80px",
            center: true,
        },
        {
            name: "Name",
            selector: (row) => row.project_name,
            sortable: true,
            wrap: true,
            minWidth: "200px",
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true,
            minWidth: "150px",
        },
        {
            name: "URL",
            cell: (row) =>
                row.project_url ? (
                    <Link
                        href={row.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-blue-900/50 hover:bg-blue-800/50 rounded text-blue-300 hover:text-blue-200 text-sm border border-blue-800/50 transition-colors"
                    >
                        <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                        Visit
                    </Link>
                ) : (
                    <span className="italic text-gray-500 text-sm">N/A</span>
                ),
            sortable: false,
            width: "120px",
            center: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => {
                            setEditIndex(row.id);
                            setActiveTab("add");
                        }}
                        className="flex items-center px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-gray-200 hover:text-white text-sm border border-gray-700 transition-colors"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(row.id)}
                        className="flex items-center px-3 py-1.5 bg-red-900/30 hover:bg-red-800/50 rounded text-red-200 hover:text-white text-sm border border-red-800/30 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "220px",
        },
    ];

    // Filter projects based on search text
    const filteredItems = projects.filter(
        (item) =>
            (item.project_name &&
                item.project_name
                    .toLowerCase()
                    .includes(filterText.toLowerCase())) ||
            (item.category &&
                item.category.toLowerCase().includes(filterText.toLowerCase()))
    );

    // Search component
    const SubHeaderComponent = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText("");
            }
        };

        return (
            <div className="flex w-full flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by name or category..."
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                            className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                        />
                        <div className="absolute left-3 top-3 text-gray-400">
                            <Search className="w-5 h-5" />
                        </div>
                    </div>
                    {filterText && (
                        <button
                            onClick={handleClear}
                            className="px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded text-white text-sm border border-gray-600 transition-colors"
                        >
                            Clear
                        </button>
                    )}
                </div>
                <div className="bg-gray-900 px-4 py-2 rounded-lg border border-gray-700">
                    <span className="text-gray-300 font-medium">
                        {filteredItems.length}{" "}
                        {filteredItems.length === 1 ? "project" : "projects"}{" "}
                        found
                    </span>
                </div>
            </div>
        );
    }, [filterText, resetPaginationToggle]);

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: "#1F2937",
                color: "#f1f5f9",
                fontSize: "0.875rem",
                fontWeight: "600",
                textTransform: "uppercase",
                borderBottom: "1px solid #334155",
                minHeight: "60px",
            },
        },
        headCells: {
            style: {
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                backgroundColor: "#1F2937",
                color: "#f1f5f9",
                fontSize: "0.875rem",
                fontWeight: "600",
            },
        },
        cells: {
            style: {
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                color: "#cbd5e1",
                backgroundColor: "#1F2937",
                fontSize: "0.875rem",
                borderBottom: "1px solid #1e293b",
            },
        },
        rows: {
            style: {
                backgroundColor: "#1F2937",
                minHeight: "72px",
                "&:not(:last-of-type)": {
                    borderBottom: "1px solid #1e293b",
                },
                "&:hover": {
                    backgroundColor: "#1e293b",
                },
            },
            highlightOnHoverStyle: {
                backgroundColor: "#1e293b",
                borderBottomColor: "#334155",
                outline: "none",
            },
        },
        pagination: {
            style: {
                backgroundColor: "#0f172a",
                color: "#94a3b8",
                borderTop: "2px solid #1e293b",
                padding: "1.5rem",
                fontSize: "0.875rem",
            },
            pageButtonsStyle: {
                color: "#cbd5e1",
                fill: "#cbd5e1",
                backgroundColor: "transparent",
                border: "1px solid #334155",
                "&:disabled": {
                    color: "#475569",
                    fill: "#475569",
                    backgroundColor: "#1e293b",
                    borderColor: "#334155",
                },
                "&:hover:not(:disabled)": {
                    backgroundColor: "#1e293b",
                    borderColor: "#475569",
                },
            },
        },
        noData: {
            style: {
                backgroundColor: "#0f172a",
                color: "#94a3b8",
            },
        },
    };

    return (
        <div className="overflow-hidden">
            {projects && projects.length > 0 ? (
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    customStyles={customStyles}
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 25, 50, 100]}
                    paginationComponentOptions={{
                        rowsPerPageText: "Rows per page:",
                        rangeSeparatorText: "of",
                        noRowsPerPage: false,
                        selectAllRowsItem: false,
                    }}
                    highlightOnHover
                    pointerOnHover
                    subHeader
                    subHeaderComponent={SubHeaderComponent}
                    persistTableHead
                    responsive
                    noDataComponent={
                        <div className="py-12 text-center">
                            <div className="text-gray-400 mb-4">
                                <svg
                                    className="w-16 h-16 mx-auto opacity-50"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-300 mb-2">
                                No projects found
                            </h3>
                            <p className="text-gray-400">
                                No projects match your search criteria.
                            </p>
                        </div>
                    }
                    className="rounded-lg overflow-hidden border border-gray-700/50"
                />
            ) : (
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                        <svg
                            className="w-20 h-20 mx-auto opacity-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-300 mb-2">
                        No projects available
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Get started by creating your first project.
                    </p>
                    <Link
                        href="#"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
                    >
                        Create Your First Project
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProjectTable;
