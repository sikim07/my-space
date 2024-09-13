import { createBrowserRouter } from "react-router-dom"
import Index from "@/pages/index"
import BlogList from "@/pages/blog/blogList"
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
		element: <BlogList />,
		errorElement: <Error />,
	},
	{
		path: "/blog/:id",
		element: <BlogItem />,
		errorElement: <Error />,
	},
])

export default router
