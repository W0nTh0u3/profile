import { useEffect, useRef } from "react";
import { Navbar } from "../navbar/nav";
import { TypewriterEffect } from "../TypewriterEffect";
import Image from "next/image";
import gsap from "gsap";
import styles from './introsection.module.scss';

export function IntroSection() {
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
        <section className={`min-h-[100dvh] flex flex-col ${styles['custom-bg-3']}`}>
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
    );
}
