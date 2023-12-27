import { Post } from "@/types/post";
import { notFound } from "next/navigation";

export const revalidate = 420;

interface BlogPostPageProps {
	params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
		(res) => res.json()
	);

	const post = posts.find((post) => post.slug === params.slug);

	if (!post) {
		return notFound();
	}

	return (
		<>
			<h1 className="text-xl mb-2">{post.title}</h1>
			<p className="text-neutral-300">{post.content}</p>
		</>
	);
}
