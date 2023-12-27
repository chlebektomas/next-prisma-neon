import { Post } from "@/types/post";
import Link from "next/link";

export const revalidate = 420;

export default async function BlogPostsPage() {
	const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
		(res) => res.json()
	);

	if (posts.length === 0) return <p>No posts found.</p>;

	return (
		<div className="grid grid-cols-3 gap-4 my-10">
			{posts.map((post, i) => (
				<Link
					key={i}
					href={`/blog/${post.slug}`}
					className="text-neutral-400 hover:text-white"
				>
					{post.title}
				</Link>
			))}
		</div>
	);
}
