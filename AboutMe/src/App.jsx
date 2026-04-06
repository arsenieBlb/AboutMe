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
  const showSharedChrome = page === 'cv';

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
      {showSharedChrome ? <NavBar currentPage={page} /> : null}
      {showSharedChrome ? <hr className="page-divider" /> : null}

      {page === 'cv' ? <CvPage /> : null}
      {page === 'portfolio' ? <PortfolioPage /> : null}
      {page === 'about' ? <AboutPage /> : null}
    </div>
  );
}

export default App;
