import { useEffect, useRef } from "react";
import { Navbar } from "../navbar/nav";
import { TypewriterEffect } from "../TypewriterEffect";
import Image from "next/image";
import gsap from "gsap";
import Aurora from "../Aurora";
import RotatingText from "../FramerMotion";

export function IntroSection({ bgNumber }: { bgNumber: [string, string, string] }) {
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
        <section className={`min-h-[100dvh] flex flex-col`}>
            <div className="h-16 bg-black">
                <Navbar direction="left" />
            </div>
            <div className="relative flex min-h-[calc(100dvh-8rem)]">
                <div className={`flex-grow flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 bg-transparent z-[10]`}>
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
                        <div className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-4 md:mb-8">
                            {/* <TydivewriterEffect
                                strings={[
                                    "A Developer 💻",
                                    "A Gamer 🎮",
                                    "A Sneakerhead 👟",
                                ]}
                            /> */}
                            <RotatingText
                                texts={[
                                    "A Developer 💻",
                                    "A Gamer 🎮",
                                    "A Sneakerhead 👟",
                                ]}
                                mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                            />
                        </div>
                    </div>
                </div>
                <Aurora
                    className="absolute inset-0 z-[0]"
                    colorStops={[...bgNumber]}
                    speed={1}>
                </Aurora>
            </div>
            <div className="h-16 bg-black">
                <Navbar direction="right" />
            </div>
        </section>
    );
}
