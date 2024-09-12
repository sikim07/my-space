import { useParams } from "react-router-dom"

const Blog = (): JSX.Element => {
	const blogId = useParams<{ id: string }>()
	return <div>Blog</div>
}

export default Blog
