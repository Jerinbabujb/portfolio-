import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
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

  // EmailJS form ref and state for user feedback
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Replace these with your actual EmailJS IDs
    const SERVICE_ID = 'service_phwalbq';
    const TEMPLATE_ID = 'template_l3vkg5b';
    const PUBLIC_KEY = 'IWG7FhkVrzLj3ZXuT';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current.reset(); // Clear the form after sending
          
          // Reset button text after 3 seconds
          setTimeout(() => setSubmitStatus(null), 3000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.log('FAILED...', error.text);
        }
      );
  };

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
                <a href='mailto:jerin.babujb@gmail.com' target='_blank' rel="noreferrer"> 
                  <div className="ci-value">jerin.babujb@gmail.com</div>
                </a>
              </div>
              <div className="ci-item">
                <div className="ci-label">LOCATION</div>
                <div className="ci-value">Manama, Bahrain // Remote</div>
              </div>
              <div className="ci-socials">
                <a
                  href="https://github.com/Jerinbabujb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ci-social"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/jerin-babu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ci-social"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="contact-form-wrap">
              <div className="cf-title">CONTACT</div>
              
              {/* Form specifically using the ref and onSubmit required by EmailJS */}
              <form ref={form} onSubmit={sendEmail}>
                <div className="cf-grid">
                  <input type="text" name="user_name" className="cf-input" placeholder="FULL NAME" required />
                  <input type="email" name="user_email" className="cf-input" placeholder="EMAIL ADDRESS" required />
                  <input type="text" name="company" className="cf-input cf-full" placeholder="COMPANY" />
                  <textarea name="message" className="cf-input cf-textarea cf-full" placeholder="MESSAGE" required />
                </div>
                
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary btn-full-w" 
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                  whileHover={{ scale: 1.01 }} 
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? 'TRANSMITTING...' : 
                   submitStatus === 'success' ? 'CONNECTION ESTABLISHED ✓' : 
                   submitStatus === 'error' ? 'TRANSMISSION FAILED ✕' : 
                   'ESTABLISH CONNECTION'}
                </motion.button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>
      <Footer />
    </div>
  );
}