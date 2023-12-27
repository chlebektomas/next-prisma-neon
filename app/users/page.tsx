import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Users() {
	const users = await prisma.user.findMany();

	if (users.length === 0) return <p>No users found.</p>;

	return (
		<div className="grid grid-cols-8 gap-4 my-10">
			{users.map((user, i) => (
				<Link
					key={i}
					href={`/users/${user.id}`}
					className="text-center text-neutral-400 hover:text-white transition-all"
				>
					<Image
						src={user.image ?? "/avatar.svg"}
						width={200}
						height={200}
						alt={user.name ?? "User avatar"}
						className="rounded-full mb-2"
					/>
					<span className="text-lg">{user.name}</span>
				</Link>
			))}
		</div>
	);
}
