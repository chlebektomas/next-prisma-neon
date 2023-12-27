import { SignInButton } from "@/components/SignInButton";
import Link from "next/link";
import NavigationLinkText from "./NavigationLinkText";

const links = [
	{
		name: "Posts",
		href: "/blog",
	},
	{
		name: "Users",
		href: "/users",
	},
	{
		name: "About",
		href: "/about",
	},
];

export default function Navigation() {
	return (
		<nav>
			<ul className="flex gap-x-12 items-center">
				{links.map((link, i) => (
					<li key={i}>
						<Link
							href={link.href}
							className="text-neutral-400 hover:text-white transition-all"
						>
							<NavigationLinkText title={link.name} href={link.href} />
						</Link>
					</li>
				))}
				<li>
					<SignInButton />
				</li>
			</ul>
		</nav>
	);
}
