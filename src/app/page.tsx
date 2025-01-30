import { Navbar } from "./components/navbar/nav";
import Image from 'next/image';
import { TypewriterEffect } from "./components/TypewriterEffect";

export default function Home() {
	return (
		<main className="flex flex-col">
			{/* First section with logo */}
			<section className="min-h-[100dvh] flex flex-col">
				<div className="h-16 bg-black">
					<Navbar direction="left" />
				</div>
				<div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-4">
					<Image
						src="/logo.png"
						alt="Logo"
						width={256}
						height={256}
						className="object-contain w-32 sm:w-40 md:w-48 lg:w-64 xl:w-72"
					/>
					<div className="text-white text-center md:text-left">
						<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">Hi, I&apos;m Ryan</h1>
						<p className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-4 md:mb-8">
							<TypewriterEffect 
								strings={[
									"A Developer",
									"A Gamer",
									"A Sneakerhead",					
								]} 
							/>
						</p>
					</div>
				</div>
				<div className="h-16 bg-black">
					<Navbar direction="right" />
				</div>
			</section>

			{/* Portfolio intro section */}
			{/* <section className="min-h-[100dvh] bg-black text-white flex flex-col items-center justify-center p-6">
				<h1 className="text-4xl sm:text-6xl font-bold mb-6">Hi, I&apos;m ResjVrz</h1>
				<p className="text-xl sm:text-2xl text-center max-w-2xl mb-8">
					<TypewriterEffect 
						strings={[
							"A Developer",
							"A Gamer",
							"A Sneakerhead",					
						]} 
					/>
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
					<div className="bg-white/10 p-6 rounded-lg">
						<h2 className="text-2xl font-bold mb-3">Skills</h2>
						<p className="text-gray-300">Web Development, UI/UX Design, Creative Coding</p>
					</div>
					<div className="bg-white/10 p-6 rounded-lg">
						<h2 className="text-2xl font-bold mb-3">Projects</h2>
						<p className="text-gray-300">Check out my latest works and experiments</p>
					</div>
				</div>
			</section> */}
		</main>
	);
}
