import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/work', label: 'WORK' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/" className="navbar-logo">JERIN BABU</Link>
      <div className="navbar-links">
        {links.map((l, i) => (
          <motion.div key={l.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
            <Link to={l.to} className={`navbar-link ${pathname === l.to ? 'active' : ''}`}>
              {l.label}
            </Link>
          </motion.div>
        ))}
      </div>
      <Link to="/contact" className="nav-hire">HIRE ME</Link>
    </motion.nav>
  );
}
