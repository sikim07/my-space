import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import router from "@/routes/Router"

const App = () => {
	return (
		<Suspense fallback={<div>loading...</div>}>
			<RouterProvider router={router} />
			<TestComponent />
		</Suspense>
	)
}

const TestComponent = () => {
	return (
		<div className="bg-muted-light dark:bg-muted-dark text-black dark:text-white p-4">
			<h1>Hello, World!</h1>
			<p>This text changes color based on the theme.</p>
		</div>
	)
}
export default App
