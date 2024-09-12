const Layout = ({ children }) => {
	return (
		<div className="mx-auto w-[944px] xd:w-full p-[20px_0px_40px] xd:p-[20px_24px_40px]">
			<header className="h-[64px] items-center flex justify-between">
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
