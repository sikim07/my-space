import Layout from "../layouts/Layout"

const Index = (): JSX.Element => {
	return (
		<Layout>
			<div className="bg-white">
				Index
				<div>
					<a href={`/blog`}>blog</a>
				</div>
			</div>
		</Layout>
	)
}

export default Index
