import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { JourneySection } from '@/components/sections/Journey';
import { ExperienceSection } from '@/components/sections/Experience';
import { TechStackSection } from '@/components/sections/TechStack';
import { ProjectsSection } from '@/components/sections/Projects';
import { AchievementsSection } from '@/components/sections/Achievements';
import { ContactSection } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="content" className="relative min-h-screen">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <JourneySection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="tech">
          <TechStackSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="achievements">
          <AchievementsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
