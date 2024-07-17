import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Movies 4 all",
	description: "Find your favorite movies, all in one place.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={dmSans.className}>
				<main className="max-w-7xl mx-auto bg-[#0f1117]">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}
