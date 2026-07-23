import type { Metadata } from "next";
import "@fontsource/press-start-2p/400.css";
import "./globals.css";
import "./components/portfolio/portfolio.scss";

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
	),
	title: "Ryan Verzo | Software Engineer",
	description: "Ryan Verzo is a full-stack software engineer building resilient digital products.",
	openGraph: {
		title: "Ryan Verzo | Software Engineer",
		description: "Ryan Verzo is a full-stack software engineer building resilient digital products.",
		type: "website",
		images: [
			{
				url: "/logo.png",
				width: 1401,
				height: 1529,
				alt: "Ryan Verzo logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ryan Verzo | Software Engineer",
		description: "Ryan Verzo is a full-stack software engineer building resilient digital products.",
		images: ["/logo.png"],
	},
	icons: {
		icon: [
			{ url: '/logo.png', type: 'image/png' },
			{ url: '/favicon.ico' },
		],
		apple: [
			{ url: '/logo.png' }
		]
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full" data-theme="tokyo-after-dark">
			<head>
			</head>
			<body className="h-full overflow-x-hidden">
				{children}
			</body>
		</html>
	);
}
