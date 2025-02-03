'use client';
import { IntroSection } from "./components/IntroSection/IntroSection";

export default function Home() {

	return (
		<main className="flex flex-col h-screen overflow-y-auto">
			{/* First section with logo */}
			<IntroSection />

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

			{/* Profile Details section */}
			<section className="min-h-[100dvh] bg-black text-white flex flex-col items-center justify-center p-6">
				<h1 className="text-4xl sm:text-6xl font-bold mb-8">Profile Details</h1>
				<div className="max-w-4xl w-full space-y-6">
					<div className="bg-white/10 p-8 rounded-lg">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h2 className="text-2xl font-bold mb-4">Contact Information</h2>
								<ul className="space-y-3 text-gray-300">
									<li>📧 Email: resjverzo@gmail.com</li>
									<li>📍 Location: Philippines</li>
									<li>📱 Mobile: +63 976 020 8693</li>
									<li>💼 Open to opportunities</li>
								</ul>
							</div>
							<div>
								<h2 className="text-2xl font-bold mb-4">Core Skills</h2>
								<ul className="space-y-3 text-gray-300">
									<li>• Angular Development</li>
									<li>• Frontend Architecture</li>
									<li>• Responsive Design</li>
									<li>• UI/UX Implementation</li>
								</ul>
							</div>
						</div>
						<div className="mt-8 text-center">
							<a 
								href="/Ryan Verzo - Resume S2.pdf" 
								target="_blank"
								className="inline-block bg-gradient-to-r from-[rgb(var(--gradient-start-3))] to-[rgb(var(--gradient-end-3))] 
									px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
							>
								View Resume
							</a>
						</div>
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
