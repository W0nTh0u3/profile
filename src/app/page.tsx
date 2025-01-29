import { Navbar } from "./components/navbar/nav";
import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<div className="h-24">
				<Navbar direction="left" />
			</div>
			<div className="flex-grow flex items-center justify-center">
				<img
					src="/logo.png"
					alt="Logo"
					className="w-64 h-64 object-contain"
				/>
			</div>
			<div className="h-24">
				<Navbar direction="right" />
			</div>
		</main>
	);
}
