import classNames from "classnames"
import { Link, useLocation } from "react-router-dom"

const CATEGORIES = [
	{
		id: 1,
		name: "Javascript",
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

const Category = ({
	selectedCategory,
}: {
	selectedCategory?: string
}): JSX.Element => {
	return (
		<section
			className={classNames(
				"w-[30%] flex flex-col xm:w-full xm:flex-row",
			)}
		>
			{CATEGORIES.map((i) => (
				<Link
					to={`/blog/${i.name.toLowerCase()}`}
					key={`blog_category_${i.id}`}
				>
					<button
						className={
							i.name.toLowerCase() === selectedCategory
								? "font-bold"
								: ""
						}
					>
						{i.name}
					</button>
				</Link>
			))}
		</section>
	)
}

export default Category
