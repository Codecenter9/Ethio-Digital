import "../css/app.css";
import "./bootstrap";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";
import Preloader from "./Layouts/Preloader";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        function Main() {
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                const timer = setTimeout(() => setLoading(false), 1200);
                return () => clearTimeout(timer);
            }, []);

            return <>{loading ? <Preloader /> : <App {...props} />}</>;
        }

        root.render(<Main />);
    },
    progress: {
        color: "#4B5563",
    },
});
