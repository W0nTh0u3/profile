import type { Metadata } from "next";
import "./globals.css";
import "./components/portfolio/portfolio.scss";

export const metadata: Metadata = {
	title: "Ryan Verzo | Software Engineer",
	description: "Ryan Verzo is a full-stack software engineer building resilient digital products.",
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
		<html lang="en" className="h-full">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			</head>
			<body className="h-full overflow-x-hidden">
				{children}
			</body>
		</html>
	);
}
