import React, { useEffect, useState } from "react";

// --- BackToTop Component ---
// This component displays a button that appears after the user scrolls down the page.
// Clicking the button smoothly scrolls the page back to the top.
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Effect to handle scroll event
    useEffect(() => {
        // Function to check scroll position
        const toggleVisibility = () => {
            // Show button if user has scrolled down more than 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", toggleVisibility);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Function to scroll to the top of the page smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-500 ease-in-out
        bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl 
        hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-700 hover:shadow-2xl hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-purple-300
        ${
            isVisible
                ? "opacity-100 translate-y-0"
                : // The animation is changed here: it now translates from a negative Y position (up)
                  // to its final position (translate-y-0), creating the "drop from top" effect.
                  "opacity-0 -translate-y-10 pointer-events-none"
        }`}
            aria-label="Back to top"
        >
            {/* Replaced lucide-react icon with an inline SVG for portability */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
            </svg>
        </button>
    );
};
export default BackToTop;
