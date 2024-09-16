const Layout = ({ children }) => {
	return (
		<div className="mx-auto xd:w-full pb-[40px]">
			<header className="h-[64px] items-center flex justify-between border-b border-solid border-[#d3d3d3]">
				<button className="bg-transparent font-serif font-bold text-[24px] italic p-0">
					SIKIM88
				</button>
				<nav>
					{/** XXX: 이후 추가될 기능 */}
					{/* <button className="p-0 bg-transparent">Search</button> */}
				</nav>
			</header>
			<main>{children}</main>
		</div>
	)
}

export default Layout
