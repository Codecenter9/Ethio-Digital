import React from "react";
import { Head } from "@inertiajs/react";
import BlogList from "@/Components/Client/cards/BlogList";
import { SharedHero } from "@/Components/Client/Layout/SharedHero";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";

export default function BlogPage() {
    const meta = {
        title: "Our Blogs | Meskot Digital Solutions",
        description:
            "Stay updated with the latest insights, news, and digital trends from Meskot Digital Solutions. Discover tips on technology, design, and innovation.",
        keywords:
            "Meskot Digital Solutions blog, tech blogs Ethiopia, digital marketing tips, software development insights, design trends, innovation updates",
        url: "https://meskotdigitals.com/news",
    };

    return (
        <>
            {" "}
            <Head>
                {/* Primary Meta Tags */}
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <link rel="canonical" href={meta.url} />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:url" content={meta.url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
            </Head>
            <main className="bg-gray-950 text-gray-100">
                <SharedHero
                    title="Our Blogs"
                    description="Stay informed with stories, trends, and insights from Meskot Digital Solutions."
                />

                <div className="mx-auto py-12 md:py-24 px-6 md:px-12">
                    <BlogList />
                </div>
            </main>
        </>
    );
}

BlogPage.layout = (page) => <ClientLayout children={page} />;
