"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { SignOutButton } from "./SignOutButton";

export function SignInButton() {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <></>;
	}

	if (status === "authenticated") {
		return (
			<div className="flex gap-3">
				<Link href="/account">
					<Image
						src={session.user?.image ?? "/avatar.svg"}
						className="rounded-full"
						alt="avatar"
						height={32}
						width={32}
					/>
				</Link>
				<SignOutButton />
			</div>
		);
	}

	return (
		<button type="button" className="button-primary" onClick={() => signIn()}>
			Sign in
		</button>
	);
}
