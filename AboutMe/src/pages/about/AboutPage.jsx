import { AboutFooter } from './components/AboutFooter';
import { AboutIntroSection } from './components/AboutIntroSection';
import { AboutNav } from './components/AboutNav';
import { BeyondCodeSection } from './components/BeyondCodeSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import './AboutPage.css';

export function AboutPage() {
  return (
    <main className="about-page">
      <AboutNav />
      <HeroSection />
      <ExperienceSection />
      <AboutIntroSection />
      <BeyondCodeSection />
      <AboutFooter />
    </main>
  );
}
