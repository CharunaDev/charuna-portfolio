import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { Timeline } from '@/components/Experience/Timeline';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TechStack />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
