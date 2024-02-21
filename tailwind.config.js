module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-sans)',
                serif: 'var(--font-serif)',
            },
            fontSize: {
                base: 'var(--text-base)',
                lg: 'var(--text-lg)',
                xl: 'var(--text-xl)',
            },
            screens: {
                md: 'var(--breakpoint-md)',
                lg: 'var(--breakpoint-lg)',
                xl: 'var(--breakpoint-xl)',
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                news: 'var(--color-news)',
            },
        },
    },
    variants: {
        extend: {
        },
    },
    plugins: [
    ],
};
