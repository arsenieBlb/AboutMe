import { AboutFooter } from './components/AboutFooter';
import { AboutIntroSection } from './components/AboutIntroSection';
import { AboutNav } from './components/AboutNav';
import { BeyondCodeSection } from './components/BeyondCodeSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { TechSection } from './components/TechSection';
import './AboutPage.css';

export function AboutPage() {
  return (
    <main className="about-page">
      <AboutNav />
      <HeroSection />
      <ExperienceSection />
      <AboutIntroSection />
      <BeyondCodeSection />
      <TechSection />
      <AboutFooter />
    </main>
  );
}
