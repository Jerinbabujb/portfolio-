import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Footer from '../components/Footer';
import './Blog.css';

const posts = [
  { id: 1, date: '2024-03-15', tag: 'ARCHITECTURE', title: 'Building Sub-50ms Distributed Systems at Scale', excerpt: 'How we architected a global data distribution network that maintains sub-50ms latency across 6 continents — without sacrificing consistency.' },
  { id: 2, date: '2024-02-28', tag: 'MOTION', title: 'Physics-Based Animation: Beyond Easing Curves', excerpt: 'Why spring physics produce fundamentally better UX than traditional easing functions, and how to build a system around them.' },
  { id: 3, date: '2024-02-10', tag: 'WASM', title: 'Running Genomic Analysis in the Browser with Rust & WASM', excerpt: 'A deep dive into compiling Rust genomics libraries to WebAssembly and achieving near-native performance for sequence analysis.' },
  { id: 4, date: '2024-01-22', tag: 'SYSTEMS', title: 'The Micro-Frontend Cold Start Problem', excerpt: 'Diagnosing latency at the seams of a large-scale micro-frontend architecture and the orchestration runtime we built to fix it.' },
  { id: 5, date: '2024-01-08', tag: 'CRYPTO', title: 'ZK-SNARKs for Identity: A Practical Introduction', excerpt: 'From circuit design in Circom to on-chain verification — building a zero-knowledge identity system that actually ships.' },
];

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function Blog() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="blog-page">
      <section className="blog-hero" ref={heroRef}>
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="blog-hero-inner">
          <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            TRANSMISSIONS
          </motion.div>
          <motion.h1 className="blog-hero-title"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            SIGNAL LOG
          </motion.h1>
          <motion.p className="blog-hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            Technical writing on architecture, motion, and systems thinking.
          </motion.p>
        </motion.div>
        <div className="blog-grid-bg" />
      </section>

      <section className="blog-posts">
        <div className="blog-posts-inner">
          {posts.map((post, i) => (
            <FadeUp key={post.id} delay={i * 0.06}>
              <motion.div className="blog-post" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <div className="post-left">
                  <div className="post-date">{post.date}</div>
                  <span className="tag">{post.tag}</span>
                </div>
                <div className="post-right">
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-read">READ MORE →</div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function Contact() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="contact-page">
      <section className="contact-hero" ref={heroRef}>
        <motion.div style={{ y: titleY }} className="contact-hero-inner">
          <motion.div className="section-label" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            TRANSMISSION
          </motion.div>
          <motion.h1 className="contact-hero-title"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            LET'S <span className="contact-green">SYNC.</span>
          </motion.h1>
          <motion.p className="contact-hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            I am currently accepting select opportunities for Q4 2024.
          </motion.p>
        </motion.div>
        <div className="contact-grid-bg" />
      </section>

      <section className="contact-body">
        <div className="cb-inner">
          <FadeUp>
            <div className="contact-info">
              <div className="ci-item">
                <div className="ci-label">EMAIL</div>
                <div className="ci-value">hello@kineticarchitect.io</div>
              </div>
              <div className="ci-item">
                <div className="ci-label">LOCATION</div>
                <div className="ci-value">Berlin, DE // Remote</div>
              </div>
              <div className="ci-item">
                <div className="ci-label">AVAILABILITY</div>
                <div className="ci-value">Q4 2024 — Select Projects</div>
              </div>
              <div className="ci-socials">
                {['GITHUB', 'LINKEDIN', 'TWITTER', 'DRIBBBLE'].map(s => (
                  <a key={s} href="#" className="ci-social">{s}</a>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="contact-form-wrap">
              <div className="cf-title">PROJECT BRIEF</div>
              <div className="cf-grid">
                <input className="cf-input" placeholder="FULL NAME" />
                <input className="cf-input" placeholder="EMAIL ADDRESS" />
                <input className="cf-input cf-full" placeholder="COMPANY / PROJECT" />
                <textarea className="cf-input cf-textarea cf-full" placeholder="DESCRIBE YOUR PROJECT. WHAT ARE YOU BUILDING? WHAT PROBLEMS NEED SOLVING?" />
                <select className="cf-input cf-select">
                  <option value="">TIMELINE</option>
                  <option>ASAP</option>
                  <option>1-3 MONTHS</option>
                  <option>3-6 MONTHS</option>
                  <option>ONGOING</option>
                </select>
                <select className="cf-input cf-select">
                  <option value="">BUDGET RANGE</option>
                  <option>$10K - $25K</option>
                  <option>$25K - $75K</option>
                  <option>$75K - $150K</option>
                  <option>$150K+</option>
                </select>
              </div>
              <motion.button className="btn-primary btn-full-w" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                ESTABLISH CONNECTION
              </motion.button>
            </div>
          </FadeUp>
        </div>
      </section>
      <Footer />
    </div>
  );
}
