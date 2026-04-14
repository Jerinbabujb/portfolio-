import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { getProjectById, getRelatedProjects, projects } from '../data/projects';
import Footer from '../components/Footer';
import './ProjectDetail.css';

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function SlideIn({ children, delay = 0, from = 'left' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: from === 'left' ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  const bannerRef = useRef(null);
  const { scrollYProgress: bannerScroll } = useScroll({ target: bannerRef, offset: ['start start', 'end start'] });
  const bannerY = useTransform(bannerScroll, [0, 1], ['0%', '35%']);
  const bannerOpacity = useTransform(bannerScroll, [0, 0.8], [1, 0.2]);

  const contentRef = useRef(null);
  const { scrollYProgress: contentScroll } = useScroll({ target: contentRef, offset: ['start end', 'end start'] });
  const sidebarY = useTransform(contentScroll, [0, 1], ['-5%', '5%']);

  if (!project) {
    return (
      <div className="not-found">
        <h1>PROJECT NOT FOUND</h1>
        <Link to="/projects" className="btn-primary">← BACK TO PROJECTS</Link>
      </div>
    );
  }

  const related = getRelatedProjects(project.related || []);

  return (
    <div className="detail-page">
      {/* BANNER */}
      <section className="detail-banner" ref={bannerRef}>
        <motion.div className="banner-inner" style={{ y: bannerY, opacity: bannerOpacity }}>
          <div className="banner-placeholder">
            <div className="banner-grid" />
            <div className="banner-text">
              <div className="banner-label">PROJECT</div>
              <div className="banner-name">{project.name}</div>
            </div>
            <motion.div
              className="banner-glow"
              animate={{ opacity: [0.3, 0.7, 0.3], x: ['-5%', '5%', '-5%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* HEADER */}
      <section className="detail-header">
        <div className="dh-inner">
          <div className="dh-meta">
            <span className={`status-badge ${project.status === 'ACTIVE PROJECT' ? 'active' : 'stable'}`}>
              {project.status}
            </span>
            <span className="dh-year">YEAR: {project.year}</span>
          </div>
          <motion.h1
            className="dh-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.name}
          </motion.h1>
          <motion.p
            className="dh-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            {project.description}
          </motion.p>
        </div>
        <div className="work-bg-text">WORK</div>
      </section>

      {/* MAIN CONTENT */}
      <section className="detail-content" ref={contentRef}>
        <div className="dc-inner">
          {/* Left column */}
          <div className="dc-left">
            <FadeUp>
              <div className="dc-section-label">The Vision</div>
              <p className="dc-vision">{project.vision}</p>
              <div className="dc-divider" />
              {project.fullDescription.split('\n\n').map((para, i) => (
                <p key={i} className="dc-para">{para}</p>
              ))}
            </FadeUp>

            {/* Features */}
            <FadeUp delay={0.1}>
              <div className="features-grid">
                {project.features.map((f, i) => (
                  <motion.div
                    key={i}
                    className="feature-card"
                    whileHover={{ borderColor: 'rgba(0,212,255,0.25)', y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="feature-title">{f.title}</div>
                    <div className="feature-desc">{f.desc}</div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            {/* Code */}
            <FadeUp delay={0.15}>
              <div className="code-block-detail">
                <div className="cbd-header">
                  <span className="cbd-dot red" />
                  <span className="cbd-dot amber" />
                  <span className="cbd-dot grn" />
                  <span className="cbd-filename">{id.toUpperCase()}.RS</span>
                </div>
                <pre className="cbd-body"><code>{project.code}</code></pre>
              </div>
            </FadeUp>
          </div>

          {/* Right Sidebar */}
          <motion.div className="dc-right" style={{ y: sidebarY }}>
            <SlideIn from="right" delay={0.1}>
              <div className="stack-card">
                <div className="stack-label">TECHNOLOGY STACK</div>
                <div className="stack-tags">
                  {project.stack.map(t => <span key={t} className="tag cyan">{t}</span>)}
                </div>
              </div>
            </SlideIn>

            <SlideIn from="right" delay={0.15}>
              <div className="sidebar-actions">
               <a href={project.live} target='_blank'><motion.button className="btn-live" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  LIVE DEMO ↗
                </motion.button> </a>
                <a href={project.github} target='_blank'>
                <motion.button className="btn-github" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  VIEW GITHUB &lt;/&gt;
                </motion.button>
                </a>
              </div>
            </SlideIn>

            <SlideIn from="right" delay={0.2}>
              <div className="stats-grid">
                {project.stats.map((s, i) => (
                  <motion.div key={i} className="stat-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08 }}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </motion.div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {related.length > 0 && (
        <section className="related-section">
          <div className="related-inner">
            <FadeUp>
              <div className="related-header">
                <div>
                  <div className="section-label">CURATION</div>
                  <h2 className="related-title">Related Projects</h2>
                </div>
                <Link to="/projects" className="explore-all">EXPLORE ALL →</Link>
              </div>
            </FadeUp>
            <div className="related-grid">
              {related.map((rp, i) => (
                <FadeUp key={rp.id} delay={i * 0.08}>
                  <Link to={`/work/${rp.id}`} className="related-card">
                    <div className="related-img">
                      <div className="related-img-lines">
                        {Array.from({length: 5}).map((_,j) => <div key={j} className="rel-line" style={{width:`${30+(j*15)%55}%`}} />)}
                      </div>
                    </div>
                    <div className="related-info">
                      <div className="related-name">{rp.name}</div>
                      <div className="related-desc">{rp.description.slice(0, 70)}...</div>
                      <div className="related-tags">
                        {rp.tags.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
