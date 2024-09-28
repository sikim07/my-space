import Layout from "@/layouts/Layout"
import { Blog } from "@/types/blog"
import { BlogList, BlogItem } from "@/components/blog/BlogList"
import Category from "@/components/blog/Category"
import LayoutBlog from "@/layouts/LayoutBlog"
import { useParams } from "react-router-dom"

const BlogListPage = (): JSX.Element => {
	const category = useParams<{ category: string }>().category

	const list: Blog[] = [
		{
			id: 1,
			category: "Javascript",
			title: "블로그 제목 1",
			content: "블로그 내용1",
			date: "2024-04-07",
			img: null,
			imgAlt: null,
		},
		{
			id: 2,
			category: "React",
			title: "블로그 제목 2",
			content: "블로그 내용2",
			date: "2024-04-08",
			img: null,
			imgAlt: null,
		},
	]

	return (
		<LayoutBlog>
			<Category selectedCategory={category} />
			<BlogList>
				{list.map((i) => (
					<BlogItem
						key={i.id}
						id={i.id}
						category={i.category}
						title={i.title}
						content={i.content}
						date={i.date}
						img={i.img}
						imgAlt={i.imgAlt}
					/>
				))}
			</BlogList>
		</LayoutBlog>
	)
}

export default BlogListPage
