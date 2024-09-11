import Index from "../pages";
import Blog from "../pages/blog";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
]);

export default router;
