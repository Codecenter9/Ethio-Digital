import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        // './storage/framework/views/*.php',
        // './resources/views/**/*.blade.php',
        // './resources/js/**/*.jsx',
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
             animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },

    plugins: [forms],
};
