"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignOutButton() {
	const router = useRouter();

	const handleSignOut = () => {
		router.replace("/");
		signOut({ redirect: false });
	};

	return (
		<button
			className="text-neutral-400 hover:text-white"
			onClick={handleSignOut}
		>
			Sign out
		</button>
	);
}
