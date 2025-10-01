import React from "react";
import { usePage, Link } from "@inertiajs/react";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/Components/Client/ui/BreadCrumb";
import { ChevronRight } from "lucide-react";

function formatSegment(segment) {
    return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const SharedTitle = ({ title }) => {
    const { url } = usePage();
    const pathname = url;

    const segments = pathname
        .split("/")
        .filter(Boolean)
        .filter((s) => s !== "admin");

    return (
        <div className="flex flex-col py-4 md:py-6 md:flex-row-reverse gap-3 md:gap-4 mb-6 md:mb-8 md:justify-between md:items-center">
            {/* Breadcrumb */}
            <Breadcrumb>
                <BreadcrumbList className="text-sm md:text-base font-medium flex items-center flex-wrap text-white">
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href="/admin"
                            className="transition-colors hover:text-indigo-400"
                        >
                            Admin
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {segments.map((segment, idx) => {
                        const href =
                            "/admin/" + segments.slice(0, idx + 1).join("/");
                        const isLast = idx === segments.length - 1;

                        return (
                            <React.Fragment key={href}>
                                <BreadcrumbSeparator>
                                    <ChevronRight className="h-4 w-4 text-gray-300" />
                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage className="text-white font-semibold">
                                            {formatSegment(segment)}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink asChild>
                                            <Link
                                                href={href}
                                                className="transition-colors hover:text-indigo-400 capitalize"
                                            >
                                                {formatSegment(segment)}
                                            </Link>
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                {title}
            </h1>
        </div>
    );
};

export default SharedTitle;
