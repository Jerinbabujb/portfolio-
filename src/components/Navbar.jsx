import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'HOME' },
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
      <Link to="/" className="navbar-logo">
        JERIN BABU
      </Link>

      {/* Desktop links */}
      <div className="navbar-links desktop">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`navbar-link ${pathname === l.to ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Link to="/contact" className="nav-hire desktop">
        HIRE ME
      </Link>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? 'open' : ''}></span>
        <span className={open ? 'open' : ''}></span>
        <span className={open ? 'open' : ''}></span>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`mobile-link ${
                  pathname === l.to ? 'active' : ''
                }`}
              >
                {l.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mobile-hire"
              onClick={() => setOpen(false)}
            >
              HIRE ME
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}