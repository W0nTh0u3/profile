import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ResjVerzo | Portfolio",
	description: "ResjVerzo | Portfolio",
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
