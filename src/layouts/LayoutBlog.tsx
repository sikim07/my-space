import HeaderMain from "./HeaderMain"

const LayoutBlog = ({ children }) => {
	return (
		<div className="mx-auto xm:w-full pb-[40px]">
			<HeaderMain />
			<main className="pt-[20px] flex gap-[10px] xm:flex-col">
				{children}
			</main>
		</div>
	)
}

export default LayoutBlog
