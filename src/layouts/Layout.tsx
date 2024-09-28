import HeaderMain from "./HeaderMain"

const Layout = ({ children }) => {
	return (
		<div className="mx-auto xm:w-full pb-[40px]">
			<HeaderMain />
			<main>{children}</main>
		</div>
	)
}

export default Layout
