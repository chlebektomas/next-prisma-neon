import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Account() {
	const session = await getServerSession(authOptions);

	if (!session) return;

	return (
		<div className="text-center">
			<div className="mx-auto mb-6">
				<Image
					src={session.user?.image ?? "/avatar.svg"}
					alt="avatar"
					className="rounded-full mx-auto"
					width={128}
					height={128}
				/>
			</div>
			<h1 className="text-lg font-semibold">{session.user?.name}</h1>
			<h2 className=" text-neutral-500">{session.user?.email}</h2>
		</div>
	);
}
