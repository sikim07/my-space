import { createBrowserRouter } from "react-router-dom"
import Index from "@/pages/index"
import Blog from "@/pages/blog/blog"
import BlogItem from "@/pages/blog/[id]"
import Error from "@/pages/Error"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
		errorElement: <Error />,
	},
	{
		path: "/blog",
		element: <Blog />,
		errorElement: <Error />,
	},
	{
		path: "/blog/:id",
		element: <BlogItem />,
		errorElement: <Error />,
	},
])

export default router
