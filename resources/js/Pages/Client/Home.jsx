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
import blogs from "@/Components/data/blogs";
import projects from "@/Components/data/projects";

export default function Home() {
    const meta = {
        title: "Meskot Digital Solutions | Software Development, Marketing & Creative Services",
        description:
            "Meskot Digital Solutions is your trusted partner for digital growth. We specialize in software development, web & mobile apps, digital marketing, graphics design, social media management, and content creation to help businesses thrive online.",
        keywords:
            "Meskot Digital Solutions, software development, web development, mobile apps, digital marketing, SEO, social media management, content creation, graphics design, branding, Ethiopia tech company",
        url: "https://meskotdigitals.com",
    };

    return (
        <ClientLayout>
            <Head>
                {/* Page-specific Meta Tags */}
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <link rel="canonical" href={meta.url} />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:url" content={meta.url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
            </Head>

            <div className="relative bg-gray-950/9 text-white">
                <Hero />
                <Counters />
                <About />
                <Features />
                <ProductTimeline />
                {projects.length > 0 && <RecentProjects projects={projects} />}
                {/* <Testimonials /> */}
                {blogs.length > 0 && <Blogs blogs={blogs} />}
                <div className="py-16">
                    <ContactForm layout="home" />
                </div>
            </div>
        </ClientLayout>
    );
}
