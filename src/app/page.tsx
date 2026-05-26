import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { JourneySection } from '@/components/sections/Journey';
import { ExperienceSection } from '@/components/sections/Experience';
import { TechStackSection } from '@/components/sections/TechStack';
import { ProjectsSection } from '@/components/sections/Projects';
import { AchievementsSection } from '@/components/sections/Achievements';
import { TechnicalExperienceSection } from '@/components/sections/TechnicalExperience';

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
          <TechnicalExperienceSection />
        </section>
      </main>
    </>
  );
}
