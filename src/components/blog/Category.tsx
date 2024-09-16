import classNames from "classnames"
import { Link, useLocation } from "react-router-dom"

const CATEGORIES = [
	{
		id: 1,
		name: "Javscript",
	},
	{
		id: 2,
		name: "React",
	},
	{
		id: 3,
		name: "NextJS",
	},
	{
		id: 4,
		name: "Algorithm",
	},
	{
		id: 9,
		name: "Etc",
	},
]

const Category = (): JSX.Element => {
	const location = useLocation()

	const isPageOf = (category) => {
		return location.pathname
			.split("/")
			.some((e) => e === category.name.toLowerCase())
	}

	return (
		<section
			className={classNames(
				"mx-auto w-[940px] xd:w-full flex gap-[20px] border-b border-solid border-[#d3d3d3]",
			)}
		>
			{CATEGORIES.map((i) => (
				<Link
					to={`/blog/${i.name.toLowerCase()}`}
					key={`blog_category_${i.id}`}
					className={classNames(
						isPageOf(i) ? "border-b border-solid border-[2px]" : "",
					)}
				>
					<button className="bg-transparent">{i.name}</button>
				</Link>
			))}
		</section>
	)
}

export default Category
