import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import router from "./components/Router"

export default function App() {
	return (
		<Suspense fallback={<div>loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	)
}
