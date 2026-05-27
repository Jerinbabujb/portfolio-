import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { projects } from '../data/projects';
import Footer from '../components/Footer';
import './Projects.css';

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="projects-page">
      {/* Hero */}
      <section className="proj-hero" ref={heroRef}>
        <motion.div className="proj-hero-content" style={{ y: titleY, opacity: titleOpacity }}>
          <motion.div className="section-label"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            CURATED PORTFOLIO
          </motion.div>
          <motion.h1 className="proj-hero-title"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <span className="proj-white">SELECTED</span>{' '}
            <span className="proj-cyan">ARCHITECTURES</span>
          </motion.h1>
          <motion.p className="proj-hero-sub"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}>
            A collection of high-performance digital environments, built with technical
            precision and editorial intent. Each entry represents a unique challenge in
            scale and kinetic interaction.
          </motion.p>
        </motion.div>
        <div className="proj-hero-grid" />
        <div className="proj-hero-glow" />
      </section>

      {/* Grid */}
      <section className="proj-grid-section">
        <div className="proj-grid">
          {projects.map((p, i) => (
            <FadeUp key={p.id} delay={0.05 * (i % 6)}>
              <Link to={`/work/${p.id}`} className="proj-card">
                
                
                {/* New Visual Top Section */}
<div className="proj-card-visual">
  {/* The Image (if it exists) */}
  {p.image ? (
    <img src={p.image} alt={p.name} className="proj-card-img" />
  ) : (
    <div className="visual-tech-pattern"></div>
  )}
  
  {/* Gradient overlay to make sure the icon is visible */}
  <div className="visual-overlay"></div>
  
  <div className="proj-card-icon">{getIcon(p.category)}</div>
</div>

                {/* Content Section */}
                <div className="proj-card-content">
                  <div className="proj-card-meta">
                    <span className="proj-year">{p.year}</span>
                    <span className="proj-category">{p.category}</span>
                  </div>
                  
                  <h3 className="proj-card-name">{p.name}</h3>
                  <p className="proj-card-desc">{p.description}</p>
                  
                  <div className="proj-card-bottom">
                    <div className="proj-card-tags">
                      {p.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
                      {p.tags.length > 3 && <span className="tag tag-more">+{p.tags.length - 3}</span>}
                    </div>
                    <div className="proj-card-arrow">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function getIcon(cat) {
  const icons = {
    CORE: '⬛', LABS: '🚀', ENTERPRISE: '🗄️', SEC: '🔒',
    ARCH: '☁️', DEFI: '💎', BRAND: '🔆', DATA: '📊',
    DESIGN: '🕸️', HARDWARE: '💾',
  };
  return icons[cat] || '◈';
}