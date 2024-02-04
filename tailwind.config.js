module.exports = {
  // Enable JIT mode for faster builds and smaller file sizes in development
  mode: 'jit',
  content: [
      './src/pages/**/*.{js,ts,jsx,tsx}', // Path to your pages
      './src/components/**/*.{js,ts,jsx,tsx}', // Path to your components
  ],
  theme: {
    extend: {
      // Here you can extend the default Tailwind styles,
      // add new utilities, or override existing ones
    },
  },
  variants: {
    extend: {
      // Here you can add variants to existing utilities
    },
  },
  plugins: [
    // Here you can add any Tailwind plugins you might want to use
  ],
};
