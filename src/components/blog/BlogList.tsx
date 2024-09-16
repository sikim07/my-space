import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Blog } from "@/types/blog"

const BlogList = ({ children }: ReactNode): JSX.Element => {
	return (
		<section className="mx-auto w-[940px] xd:w-full xd:px-[40px] pt-[50px] flex flex-col gap-[20px]">
			{children}
		</section>
	)
}

const BlogItem = (item: Blog): JSX.Element => {
	return (
		<article className="flex justify-between pb-[20px] border-b border-solid border-[#d3d3d3]">
			<div className="max-w-[80%]">
				<Link to={`/blog/${item.id}`}>
					<h2 className="tracking-[-0.04em] text-[24px] font-bold line-clamp-3">
						{item.title}
					</h2>
					<p className="tracking-[-0.04em] text-[16px] text-[#d3d3d3] pt-[8px] line-clamp-1">
						{item.content}
					</p>
					<time
						className="leading-[58px] tracking-[-0.04em] text-[16px] text-[#d3d3d3]"
						dateTime={`${item.date}`}
					>
						{item.date}
					</time>
				</Link>
			</div>
			<div className="">
				{item.img && (
					<Link to={`/blog/${item.id}`}>
						<div>{item.img}</div>
						<div>{item.imgAlt ?? ""}</div>
					</Link>
				)}
			</div>
		</article>
	)
}

export { BlogList, BlogItem }
