/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // important — allows manual dark mode via 'class'
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#FFD700',
                primary: "#9947eb",
                "background-light": "#f7f6f8",
                "background-dark": "#141118",
            },
            fontFamily: {
                display: ["Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
};
