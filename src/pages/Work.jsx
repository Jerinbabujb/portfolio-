import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { projects } from '../data/projects';
import Footer from '../components/Footer';
import './Work.css';

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export default function Work() {
  const featured = projects.filter(p => p.status === 'ACTIVE PROJECT').slice(0, 4);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="work-page">
      <section className="work-hero" ref={heroRef}>
        <motion.div className="work-hero-inner" style={{ y: titleY, opacity: titleOpacity }}>
          <motion.div className="section-label"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            SELECTED WORK
          </motion.div>
          <motion.h1 className="work-hero-title"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            ACTIVE BUILDS
          </motion.h1>
          <motion.p className="work-hero-sub"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            Currently shipping and iterating. Click any project to explore the full architecture.
          </motion.p>
        </motion.div>
        <div className="work-hero-grid" />
      </section>

      <section className="work-featured">
        <div className="wf-inner">
          {featured.map((project, i) => (
            <WorkFeatureRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="work-all-cta">
        <FadeUp>
          <div className="wac-inner">
            <h2 className="wac-title">+ {projects.length - 4} MORE ARCHITECTURES</h2>
            <p className="wac-sub">Browse the full portfolio for completed and exploratory work.</p>
            <Link to="/projects" className="btn-primary">VIEW ALL PROJECTS</Link>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}

function WorkFeatureRow({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={`wf-row ${index % 2 === 1 ? 'wf-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="wf-visual" style={{ y: imgY }}>
        <div className="wf-visual-inner">
          <div className="wf-grid" />
          <div className="wf-visual-name">{project.name.replace('_', '\n')}</div>
          <motion.div className="wf-glow"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3 + index, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
      </motion.div>

      <div className="wf-text">
        <div className="wf-meta">
          <span className="tag">{project.year} / {project.category}</span>
        </div>
        <h2 className="wf-title">{project.name}</h2>
        <p className="wf-desc">{project.description}</p>
        <div className="wf-stack">
          {project.stack.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="wf-stats">
          {project.stats.slice(0, 2).map(s => (
            <div key={s.label} className="wf-stat">
              <div className="wf-stat-val">{s.value}</div>
              <div className="wf-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
        <Link to={`/work/${project.id}`} className="wf-cta">
          EXPLORE PROJECT →
        </Link>
      </div>
    </motion.div>
  );
}
