import React from "react";
import Navbar from "@/Components/Client/Layout/Navbar";
import Footer from "@/Components/Client/Layout/Footer";
import BackToTop from "@/Components/Client/Layout/BackToTop";

export default function ClientLayout({ children }) {
    return (
        <div className="bg-gray-950 text-white min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto py-8">{children}</main>
            <BackToTop />
            <Footer />
        </div>
    );
}
