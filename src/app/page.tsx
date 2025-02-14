'use client';
import { useEffect, useState } from "react";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer/Footer";
import { IntroSection } from "./components/IntroSection/IntroSection";
import { ProfileDetails } from "./components/ProfileDetails/ProfileDetails";
import AnimatedContent from "./components/AnimatedContent";

export default function Home() {
	const [bgNumber, setNumber] = useState<number>(0);
	const min = 1;
	const max = 3;
	const generateNumber = () => {
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		setNumber(randomNum);
	};

	useEffect(() => {
		generateNumber();
	}, []);

	return (
		<main className="flex flex-col h-screen overflow-y-auto">
			{/* First section with logo */}
			<IntroSection bgNumber={`custom-bg-${bgNumber}`} />
			{/* About Me section */}
			<AnimatedContent
				distance={150}
				direction="vertical"
				reverse={false}
				config={{ tension: 50, friction: 25 }}
				initialOpacity={0.5}
				animateOpacity
				scale={1.0}
				threshold={0.1}
			>
				<AboutMe />
			</AnimatedContent>
			{/* Profile Details section */}
			<AnimatedContent
				distance={150}
				direction="vertical"
				reverse={false}
				config={{ tension: 50, friction: 25 }}
				initialOpacity={0.5}
				animateOpacity
				scale={1.0}
				threshold={0.1}
			>
				<ProfileDetails bgNumber={`custom-bg-${bgNumber}`} />
			</AnimatedContent>
			{/* Footer */}
			<Footer />
		</main>
	);
}
