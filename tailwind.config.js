/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // カスタムカラーがあれば追加
      },
      fontFamily: {
        // カスタムフォントがあれば追加
        sans: ["Noto Sans JP", "sans-serif"],
      },
      aspectRatio: {
        "w-16": 16,
        "h-9": 9,
      },
    },
  },
  plugins: [],
};
