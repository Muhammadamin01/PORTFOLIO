import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="logo">ZAKARIYO</h1>
      <h1 className="h">PORTFOLIO</h1>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`line ${menuOpen ? 'open' : ''}`} />
        <div className={`line ${menuOpen ? 'open' : ''}`} />
        <div className={`line ${menuOpen ? 'open' : ''}`} />
      </div>

      <ul className={`nav-links fancy ${menuOpen ? 'active' : ''}`}>
        {['Home', 'About', 'Projects', 'Contact' , 'Skills' ].map((name, i) => (
          <li key={name} style={{ animationDelay: `${i * 0.15}s` }}>
            <a href={`#${name.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
