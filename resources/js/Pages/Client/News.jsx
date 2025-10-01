import React from "react";
import { Head } from "@inertiajs/react";
import BlogList from "@/Components/Client/cards/BlogList";
import { SharedHero } from "@/Components/Client/Layout/SharedHero";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";

export default function BlogPage({ blogs }) {
    const meta = {
        title: "Our Blogs | Meskot Digital Solutions",
        description:
            "Stay updated with the latest insights, news, and digital trends from Meskot Digital Solutions. Discover tips on technology, design, and innovation.",
        keywords:
            "Meskot Digital Solutions blog, tech blogs Ethiopia, digital marketing tips, software development insights, design trends, innovation updates",
        url: "https://meskotdigitalsolutions.com/blogs",
        image: "https://meskotdigitalsolutions.com/images/blog-cover.jpg",
    };

    return (
        <>
            {" "}
            {/* SEO Meta Tags */}
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Meskot Digital Solutions"
                />
                <meta property="og:url" content={meta.url} />
                <meta property="og:image" content={meta.image} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>
            <main className="bg-gray-950 text-gray-100">
                <SharedHero
                    title="Our Blogs"
                    description="Stay informed with stories, trends, and insights from Meskot Digital Solutions."
                />

                <div className="mx-auto py-12 md:py-24 px-6 md:px-12">
                    <BlogList blogs={blogs} />
                </div>
            </main>
        </>
    );
}

BlogPage.layout = (page) => <ClientLayout children={page} />;
