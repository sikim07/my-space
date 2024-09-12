/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xl: { min: "1680px" },
				lg: { min: "1024px", max: "1679px" },
				md: { min: "768px", max: "1023px" },
				sm: { min: "360px", max: "767px" },
				xs: { max: "359px" },
				xm: { max: "767px" },
				xd: { max: "1023px" },
				xg: { max: "1679px" },
				ml: { min: "1024px" },
			},
		},
	},
	plugins: [],
}
