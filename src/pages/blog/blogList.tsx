import Layout from "@/layouts/Layout"
import { Blog } from "@/types/blog"
import { BlogList, BlogItem } from "@/components/blog/BlogList"
import Category from "@/components/blog/Category"

const BlogListPage = (): JSX.Element => {
	const list: Blog[] = [
		{
			id: 1,
			title: "블로그 제목 1",
			content: "블로그 내용1",
			date: "2024-04-07",
			img: null,
			imgAlt: null,
		},
		{
			id: 2,
			title: "블로그 제목 2",
			content: "블로그 내용2",
			date: "2024-04-08",
			img: null,
			imgAlt: null,
		},
	]
	return (
		<Layout>
			<Category />
			<BlogList>
				{list.map((i) => (
					<BlogItem
						key={i.id}
						id={i.id}
						title={i.title}
						content={i.content}
						date={i.date}
						img={i.img}
						imgAlt={i.imgAlt}
					/>
				))}
			</BlogList>
		</Layout>
	)
}

export default BlogListPage
