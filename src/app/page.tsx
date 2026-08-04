import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { JourneySection } from '@/components/sections/Journey';
import { TechStackSection } from '@/components/sections/TechStack';
import { ProjectsSection } from '@/components/sections/Projects';
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
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

