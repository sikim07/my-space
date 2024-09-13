import Layout from "@/layouts/Layout"
import { Blog } from "@/types/blog"

const BlogList = (): JSX.Element => {
	const list: Blog[] = [
		{
			id: 1,
			title: "블로그 제목 1",
			description: "블로그 내용1",
			date: "2024-04-07",
			img: null,
			imgAlt: null,
		},
		{
			id: 2,
			title: "블로그 제목 2",
			description: "블로그 내용2",
			date: "2024-04-08",
			img: null,
			imgAlt: null,
		},
	]
	return (
		<Layout>
			<section>categories</section>
			<section>
				{list.map((i) => (
					<div>adsf</div>
				))}
			</section>
		</Layout>
	)
}

export default BlogList
