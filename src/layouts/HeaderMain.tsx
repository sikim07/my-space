import DarkModeController from "@/components/DarkModeController"

const HeaderMain = (): JSX.Element => {
	return (
		<header className="h-[64px] items-center flex justify-between border-b border-solid border-[#d3d3d3] px-[20px]">
			<button className="bg-transparent font-serif font-bold text-[24px] italic p-0">
				SIKIM88
			</button>
			<nav>
				{/** XXX: 이후 추가될 기능 */}
				{/* <button className="p-0 bg-transparent">Search</button> */}
			</nav>
			<DarkModeController />
		</header>
	)
}

export default HeaderMain
