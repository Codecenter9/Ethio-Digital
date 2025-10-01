import React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Link } from "@inertiajs/react";

function Breadcrumb(props) {
    return <nav aria-label="breadcrumb" {...props} />;
}

function BreadcrumbList({ className = "", ...props }) {
    return (
        <ol
            className={`text-gray-500 flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5 ${className}`}
            {...props}
        />
    );
}

function BreadcrumbItem({ className = "", ...props }) {
    return (
        <li
            className={`inline-flex items-center gap-1.5 ${className}`}
            {...props}
        />
    );
}

function BreadcrumbLink({ className = "", href, children, ...props }) {
    return (
        <Link
            href={href}
            className={`hover:text-black transition-colors ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
}

function BreadcrumbPage({ className = "", ...props }) {
    return (
        <span
            role="link"
            aria-disabled="true"
            aria-current="page"
            className={`text-black font-normal ${className}`}
            {...props}
        />
    );
}

function BreadcrumbSeparator({ children, className = "", ...props }) {
    return (
        <li
            role="presentation"
            aria-hidden="true"
            className={`[&>svg]:w-3.5 [&>svg]:h-3.5 ${className}`}
            {...props}
        >
            {children ?? <ChevronRight />}
        </li>
    );
}

function BreadcrumbEllipsis({ className = "", ...props }) {
    return (
        <span
            role="presentation"
            aria-hidden="true"
            className={`flex w-9 h-9 items-center justify-center ${className}`}
            {...props}
        >
            <MoreHorizontal className="w-4 h-4" />
            <span className="sr-only">More</span>
        </span>
    );
}

export {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
};
