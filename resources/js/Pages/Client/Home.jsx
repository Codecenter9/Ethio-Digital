import Counters from "@/Components/Client/cards/Counter";
import About from "@/Components/Client/sections/About";
import Blogs from "@/Components/Client/sections/Blogs";
import Features from "@/Components/Client/sections/Features";
import Hero from "@/Components/Client/sections/Hero";
import Testimonials from "@/Components/Client/sections/Testimonials";
import ProductTimeline from "@/Components/Client/sections/TimeLine";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import RecentProjects from "@/Components/Client/sections/RecentProjects";
import ContactForm from "@/Components/Client/cards/Form";

export default function Home({ blogs, projects }) {
    const meta = {
        title: "Meskot Digital Solutions | Software Development, Marketing & Creative Services",
        description:
            "Meskot Digital Solutions is your trusted partner for digital growth. We specialize in software development, web & mobile apps, digital marketing, graphics design, social media management, and content creation to help businesses thrive online.",
        keywords:
            "Meskot Digital Solutions, software development, web development, mobile apps, digital marketing, SEO, social media management, content creation, graphics design, branding, Ethiopia tech company",
        url: "https://meskotdigital.com",
        image: "https://meskotdigital.com/og-image.jpg",
    };

    return (
        <ClientLayout>
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

            <div className="relative bg-gray-950/9 text-white">
                <Hero />
                <Counters />
                <About />
                <Features />
                <ProductTimeline />
                {projects.length > 0 && <RecentProjects projects={projects} />}
                <Testimonials />
                {blogs.length > 0 && <Blogs blogs={blogs} />}
                <div className="py-16">
                    <ContactForm layout="home" />
                </div>
            </div>
        </ClientLayout>
    );
}
