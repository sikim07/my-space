import { ReactNode } from "react"
import { Blog } from "@/types/blog"

const BlogList = ({ children }: ReactNode): JSX.Element => {
	return <section>{children}</section>
}

const BlogItem = (item: Blog): JSX.Element => {
	return (
		<article>
			<div>
				<h2>{item.title}</h2>
				<p>{item.content}</p>
				<p>{item.date}</p>
			</div>
			<div>
				{item.img && (
					<>
						<div>{item.img}</div>
						<div>{item.imgAlt ?? ""}</div>
					</>
				)}
			</div>
		</article>
	)
}

export { BlogList, BlogItem }
