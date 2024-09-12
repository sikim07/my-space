import Layout from "@/layouts/Layout"
import { Link } from "react-router-dom"

const Index = (): JSX.Element => {
	return (
		<Layout>
			<div>
				Index
				<div>
					<Link to={`/blog`}>blog</Link>
				</div>
			</div>
		</Layout>
	)
}

export default Index
