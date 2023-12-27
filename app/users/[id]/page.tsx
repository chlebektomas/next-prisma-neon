import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface UserProfilePageProps {
	params: {
		id: string;
	};
}

export async function generateMetadata({
	params,
}: UserProfilePageProps): Promise<Metadata> {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	return { title: `User profile of ${user?.name}` };
}

export default async function UserProfilePage({
	params,
}: UserProfilePageProps) {
	const user = await prisma.user.findUnique({ where: { id: params.id } });

	if (!user) return notFound();

	const { name, image } = user;

	return (
		<div>
			<h1 className="text-xl">{name}</h1>
			<Image
				src={image ?? "avatar.svg"}
				alt={name ?? ""}
				width={100}
				height={100}
				className="rounded-full mb-2"
			/>
			<p>{user?.bio}</p>
		</div>
	);
}
