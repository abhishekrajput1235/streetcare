/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#e67e22', // Orange/Saffron tone for cow/dog welfare (warmth)
                secondary: '#2ecc71', // Green for nature/welfare
                dark: '#2c3e50',
                light: '#ecf0f1',
            }
        },
    },
    plugins: [],
}
