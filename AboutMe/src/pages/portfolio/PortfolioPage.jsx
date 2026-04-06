import { PortfolioFooter } from './components/PortfolioFooter';
import { PortfolioHero } from './components/PortfolioHero';
import { PortfolioNav } from './components/PortfolioNav';
import { ProjectWheelSection } from './components/ProjectWheelSection';
import './PortfolioPage.css';

export function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <PortfolioNav />
      <PortfolioHero />
      <ProjectWheelSection />
      <PortfolioFooter />
    </main>
  );
}
