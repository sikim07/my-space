import { createBrowserRouter } from "react-router-dom"
import Index from "@/pages/index"
import BlogListPage from "@/pages/blog/[category]"
import BlogItem from "@/pages/blog/category/[id]"
import Error from "@/pages/Error"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
		errorElement: <Error />,
	},
	{
		path: "/blog",
		element: <BlogListPage />,
		errorElement: <Error />,
	},
	{
		path: "/blog/:category",
		element: <BlogListPage />,
		errorElement: <Error />,
	},
	{
		path: "/blog/:category/:id",
		element: <BlogItem />,
		errorElement: <Error />,
	},
])

export default router
