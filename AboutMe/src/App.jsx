import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { AboutPage } from './pages/about/AboutPage';
import { CvPage } from './pages/cv/CvPage';
import { PortfolioPage } from './pages/portfolio/PortfolioPage';
import './App.css';

const routes = {
  '#/': 'about',
  '#/cv': 'cv',
  '#/portfolio': 'portfolio',
};

function getCurrentPage() {
  return routes[window.location.hash] || 'about';
}

function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const syncPage = () => setPage(getCurrentPage());

    window.addEventListener('hashchange', syncPage);

    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    return () => {
      window.removeEventListener('hashchange', syncPage);
    };
  }, []);

  return (
    <div className="app-shell">
      <NavBar currentPage={page} />
      <hr className="page-divider" />

      {page === 'cv' ? <CvPage /> : null}
      {page === 'portfolio' ? <PortfolioPage /> : null}
      {page === 'about' ? <AboutPage /> : null}
    </div>
  );
}

export default App;
