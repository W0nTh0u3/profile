'use client';
import { Navbar } from "./components/navbar/nav";
import Image from 'next/image';
import { TypewriterEffect } from "./components/TypewriterEffect";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
	const logoRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		// Set initial states
		gsap.set(logoRef.current, {
			opacity: 0,
			y: 100
		});
		gsap.set(contentRef.current, {
			opacity: 0,
			y: 50
		});

		// Create animation timeline
		const tl = gsap.timeline();
		
		tl.to(logoRef.current, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: 'power4.out'
		})
		.to(contentRef.current, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: 'power3.out'
		}, '-=0.5');
	}, []);

	return (
		<main className="flex flex-col">
			{/* First section with logo */}
			<section className="min-h-[100dvh] flex flex-col">
				<div className="h-16 bg-black">
					<Navbar direction="left" />
				</div>
				<div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-4">
					<div ref={logoRef} style={{ opacity: 0 }}>
						<Image
							src="/logo.png"
							alt="Logo"
							width={256}
							height={256}
							className="object-contain w-32 sm:w-40 md:w-48 lg:w-64 xl:w-72"
						/>
					</div>
					<div ref={contentRef} style={{ opacity: 0 }} className="text-white text-center md:text-left">
						<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
							Hi, I&apos;m Ryan
						</h1>
						<p className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-4 md:mb-8">
							<TypewriterEffect 
								strings={[
									"A Developer 💻",
									"A Gamer 🎮",
									"A Sneakerhead 👟",					
								]} 
							/>
						</p>
					</div>
				</div>
				<div className="h-16 bg-black">
					<Navbar direction="right" />
				</div>
			</section>

			{/* About Me section */}
			<section className="min-h-[100dvh] bg-black text-white flex flex-col items-center justify-center p-6">
				<h1 className="text-4xl sm:text-6xl font-bold mb-6">About Me</h1>
				<p className="text-xl sm:text-2xl text-center max-w-2xl mb-8">
					I&apos;m a passionate developer who loves creating beautiful and functional web experiences.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
					<div className="bg-white/10 p-6 rounded-lg">
						<h2 className="text-2xl font-bold mb-3">Background</h2>
						<p className="text-gray-300">
							With a strong foundation in web development, I specialize in creating modern, 
							responsive applications using Angular and other cutting-edge technologies.
						</p>
					</div>
					<div className="bg-white/10 p-6 rounded-lg">
						<h2 className="text-2xl font-bold mb-3">Interests</h2>
						<p className="text-gray-300">
							Beyond coding, I&apos;m an avid gamer and sneaker enthusiast. I believe in bringing 
							creativity and attention to detail from these passions into my development work.
						</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-black text-white py-8 px-6">
				<div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
					<div className="text-center sm:text-left">
						<p className="text-sm">&copy; {new Date().getFullYear()} ResjVrz. All rights reserved.</p>
					</div>
					<div className="flex gap-6">
						<a href="https://github.com/w0nth0u3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
							GitHub
						</a>
						<a href="https://linkedin.com/in/resjverzo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
							LinkedIn
						</a>
						<a href="mailto:resjverzo@gmail.com" className="hover:text-gray-400 transition-colors">
							Email
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
}
