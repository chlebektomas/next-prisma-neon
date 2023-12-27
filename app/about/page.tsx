import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Created by Tomas Chlebek",
};

export default function About() {
	return (
		<section className="pt-24 text-center">
			<h1 className="text-3xl md:text-5xl font-bold">About</h1>
			<div className="flex justify-center mt-5">
				<Link
					href="https://www.linkedin.com/in/tomaschlebek/"
					target="_blank"
					className="button-primary"
				>
					LinkedIn profile
				</Link>
			</div>
		</section>
	);
}
