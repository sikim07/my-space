/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
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
			animation: {
				"move-right": "moveRight 0.5s ease-in-out forwards",
				"move-left": "moveLeft 0.5s ease-in-out forwards",
				"fade-out": "fadeOut 0.3 ease-in-out forwards",
				"fade-in": "fadeIn 0.3 ease-in-out forwards",
			},
			keyframes: {
				moveRight: {
					"0%": { transform: "translateX(0px)" },
					"100%": { transform: "translateX(90px)" }, // 이동할 거리 (90px로 설정)
				},
				moveLeft: {
					"0%": { transform: "translateX(90px)" },
					"100%": { transform: "translateX(0px)" }, // 이동할 거리 (90px로 설정)
				},
				fadeOut: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			colors: {
				// 사용자 지정 색상 추가
				background: {
					dark: "#1B262C",
					light: "#F9F7F7",
				},
				main: {
					dark: "#0F4C75",
					light: "#3F72AF",
				},
				highlight: {
					dark: "#3282B8",
					light: "#112D4E",
				},
				muted: {
					dark: "#BBE1FA",
					light: "#DBE2EF",
				},
			},
		},
	},
	plugins: [],
}
