import classNames from "classnames"
import { useEffect, useRef, useState } from "react"

const DarkModeController = (): JSX.Element => {
	const toggleRef = useRef<HTMLButtonElement>(null)
	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem("theme") === "dark",
	)

	// 버튼 클릭 시 다크모드 전환
	const handleToggleDarkMode = () => {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark")
			localStorage.setItem("theme", "light") // 라이트 모드로 저장
			setIsDarkMode(false)
		} else {
			document.documentElement.classList.add("dark")
			localStorage.setItem("theme", "dark") // 다크 모드로 저장
			setIsDarkMode(true)
		}
	}

	useEffect(() => {
		// 초기 다크모드 상태 설정 (localStorage에 저장된 값에 따라)
		if (localStorage.getItem("theme") === "dark") {
			document.documentElement.classList.add("dark")
			setIsDarkMode(true) // 상태 업데이트
		} else {
			document.documentElement.classList.remove("dark")
			setIsDarkMode(false) // 상태 업데이트
		}
	}, []) // 빈 배열 추가

	useEffect(() => {
		console.log("isDarkMode", isDarkMode)
	}, [isDarkMode])

	return (
		<button
			ref={toggleRef}
			className="relative px-[10px] box-border text-right h-[40px] w-[130px] text-white rounded-[100px] bg-muted-light dark:bg-muted-dark"
			onClick={handleToggleDarkMode}
		>
			<div
				className={classNames(
					"absolute top-[8px] right-[10px] text-main-light dark:text-muted-dark",
					isDarkMode ? "animate-fade-in" : "animate-fade-out",
				)}
			>
				Light Mode
			</div>
			<div
				className={classNames(
					"absolute top-[8px] left-[10px] text-right dark:text-main-dark",
					isDarkMode ? "animate-fade-out" : "animate-fade-in",
				)}
			>
				Dark Mode
			</div>

			<div
				className={classNames(
					"bg-highlight-light dark:bg-highlight-dark absolute top-[5px] left-[5px] rounded-[100px] w-[30px] h-[30px]",
					isDarkMode ? "animate-move-right" : "animate-move-left",
				)}
			></div>
		</button>
	)
}

export default DarkModeController
