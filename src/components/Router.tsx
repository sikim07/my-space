import { createBrowserRouter } from "react-router-dom"
import Index from "@/pages/index"
import Blog from "@/pages/blog/blog"
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
		path: "/blog",
		element: <Blog />,
		errorElement: <Error />,
	},
])

export default router
