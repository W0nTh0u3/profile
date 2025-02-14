import SpotlightCard from "../SpotlightCard";

export const AboutMe = () => {
    return (
        <section className="min-h-[100dvh] bg-black text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl sm:text-2xl text-center max-w-2xl mb-8">
                I&apos;m a passionate developer who loves creating beautiful and functional web experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
                <SpotlightCard className="bg-white/10 p-6 rounded-lg" spotlightColor="rgba(255, 255, 255, 0.2)">
                    <h2 className="text-2xl font-bold mb-3">Background</h2>
                    <p className="text-gray-300">
                        With a strong foundation in web development, I specialize in creating modern,
                        responsive applications using Angular and other cutting-edge technologies.
                    </p>
                </SpotlightCard>
                <SpotlightCard className="bg-white/10 p-6 rounded-lg" spotlightColor="rgba(255, 255, 255, 0.2)">
                    <h2 className="text-2xl font-bold mb-3">Interests</h2>
                    <p className="text-gray-300">
                        Beyond coding, I&apos;m an avid gamer and sneaker enthusiast. I believe in bringing
                        creativity and attention to detail from these passions into my development work.
                    </p>
                </SpotlightCard>
            </div>
        </section>
    );
};
