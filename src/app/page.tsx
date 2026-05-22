import { Hero } from '@/components/sections/Hero';
import { JourneySection } from '@/components/sections/Journey';
import { ExperienceSection } from '@/components/sections/Experience';
import { ProjectsSection } from '@/components/sections/Projects';

export default function HomePage() {
  return (
    <main id="content" className="relative min-h-screen">
      <Hero />
      <JourneySection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
