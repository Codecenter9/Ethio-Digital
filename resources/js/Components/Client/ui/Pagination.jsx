import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

function Pagination({ className = "", ...props }) {
    return (
        <nav
            role="navigation"
            aria-label="pagination"
            className={`mx-auto flex w-full justify-center ${className}`}
            {...props}
        />
    );
}

function PaginationContent({ className = "", ...props }) {
    return (
        <ul
            className={`flex flex-row items-center gap-1 ${className}`}
            {...props}
        />
    );
}

function PaginationItem({ className = "", ...props }) {
    return <li className={className} {...props} />;
}

function PaginationLink({ isActive, className = "", children, ...props }) {
    return (
        <a
            aria-current={isActive ? "page" : undefined}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors 
        ${
            isActive
                ? "bg-gray-800 text-white border border-gray-700"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
        } 
        ${className}`}
            {...props}
        >
            {children}
        </a>
    );
}

function PaginationPrevious({ className = "", ...props }) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            className={`flex items-center gap-1 ${className}`}
            {...props}
        >
            <ChevronLeft size={16} />
            <span className="hidden sm:block">Previous</span>
        </PaginationLink>
    );
}

function PaginationNext({ className = "", ...props }) {
    return (
        <PaginationLink
            aria-label="Go to next page"
            className={`flex items-center gap-1 ${className}`}
            {...props}
        >
            <span className="hidden sm:block">Next</span>
            <ChevronRight size={16} />
        </PaginationLink>
    );
}

function PaginationEllipsis({ className = "", ...props }) {
    return (
        <span
            aria-hidden
            className={`flex w-9 h-9 items-center justify-center ${className}`}
            {...props}
        >
            <MoreHorizontal size={16} />
            <span className="sr-only">More pages</span>
        </span>
    );
}

export {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
};
