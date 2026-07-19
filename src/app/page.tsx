import { AboutSection } from './components/portfolio/AboutSection/AboutSection';
import { CapabilitiesSection } from './components/portfolio/CapabilitiesSection/CapabilitiesSection';
import { ContactSection } from './components/portfolio/ContactSection/ContactSection';
import { Cursor } from './components/portfolio/Cursor/Cursor';
import { ExperienceSection } from './components/portfolio/ExperienceSection/ExperienceSection';
import { Hero } from './components/portfolio/Hero/Hero';
import { ScrollProgress } from './components/portfolio/ScrollProgress/ScrollProgress';
import { ThemeController } from './components/portfolio/ThemeController';
import { ToolkitSection } from './components/portfolio/ToolkitSection/ToolkitSection';

export default function Home() {
    return (
        <main>
            <Cursor />
            <ThemeController />
            <ScrollProgress />
            <Hero />
            <AboutSection />
            <CapabilitiesSection />
            <ExperienceSection />
            <ToolkitSection />
            <ContactSection />
        </main>
    );
}
