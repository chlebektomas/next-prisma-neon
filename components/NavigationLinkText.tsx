"use client";

import { usePathname } from "next/navigation";

interface NavigationLinkTextProps {
	title: string;
	href: string;
}

export default function NavigationLinkText({
	title,
	href,
}: NavigationLinkTextProps) {
	const pathname = usePathname();

	return (
		<span className={pathname.includes(href) ? "text-white" : ""}>{title}</span>
	);
}
