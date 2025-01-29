import { Navbar } from "./components/navbar/nav";
import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-[100dvh] flex-col">
			<div className="h-24">
				<Navbar direction="left" />
			</div>
			<div className="flex-grow flex items-center justify-center">
				<Image
					src="/logo.png"
					alt="Logo"
					width={256}
					height={256}
					className="object-contain"
				/>
			</div>
			<div className="h-24">
				<Navbar direction="right" />
			</div>
		</main>
	);
}
