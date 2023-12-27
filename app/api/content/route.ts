const dummyPosts = [
	{
		title: "Introduction to JavaScript",
		slug: "intro-to-js",
		content:
			"JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
	},
	{
		title: "Understanding Python",
		slug: "understanding-python",
		content:
			"Python is an interpreted, high-level, general-purpose programming language. It's design philosophy emphasizes code readability.",
	},
	{
		title: "Mastering Java",
		slug: "mastering-java",
		content:
			"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
	},
	{
		title: "Getting Started with C++",
		slug: "getting-started-cpp",
		content:
			"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
	},
	{
		title: "Exploring Ruby",
		slug: "exploring-ruby",
		content:
			"Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan.",
	},
	{
		title: "Diving into Go",
		slug: "diving-into-go",
		content:
			"Go is a statically typed, compiled language in the tradition of C, with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
	},
	{
		title: "Learning Rust",
		slug: "learning-rust",
		content:
			"Rust is a multi-paradigm programming language designed for performance and safety, especially safe concurrency.",
	},
	{
		title: "Swift for Beginners",
		slug: "swift-for-beginners",
		content:
			"Swift is a powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS.",
	},
	{
		title: "Understanding TypeScript",
		slug: "understanding-typescript",
		content:
			"TypeScript is a strongly typed, object oriented, compiled language. It was designed by Anders Hejlsberg at Microsoft.",
	},
	{
		title: "Getting Started with Kotlin",
		slug: "getting-started-kotlin",
		content:
			"Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.",
	},
	{
		title: "Mastering PHP",
		slug: "mastering-php",
		content:
			"PHP is a popular general-purpose scripting language that is especially suited to web development.",
	},
	{
		title: "Exploring R",
		slug: "exploring-r",
		content:
			"R is a language and environment for statistical computing and graphics supported by the R Foundation for Statistical Computing.",
	},
	{
		title: "Introduction to Scala",
		slug: "intro-to-scala",
		content:
			"Scala is a strong static type of programming language and is influenced by Java. It is used for creating applications and utilities.",
	},
	{
		title: "Understanding Lua",
		slug: "understanding-lua",
		content:
			"Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.",
	},
	{
		title: "Getting Started with Perl",
		slug: "getting-started-perl",
		content:
			"Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.",
	},
];

import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json(dummyPosts);
}
