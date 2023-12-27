import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
	return (
		<header className="mx-auto flex max-w-7xl items-center justify-between p-6">
			<Link href="/">LOGO</Link>
			<Navigation />
		</header>
	);
}
