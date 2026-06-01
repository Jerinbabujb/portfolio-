import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Footer from '../components/Footer';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';

const tools = [
  { label: 'REACT / VITE', sym: '⚛' },
  { label: 'NODE.JS', sym: '⬢' },
  { label: 'POSTGRESQL', sym: '▣' },
  { label: 'TYPESCRIPT', sym: '</>' },
  { label: 'REACT NATIVE', sym: '✦' },
  { label: 'WORDPRESS / PHP', sym: '☁' },
  { label: 'WEBSOCKETS', sym: '⬡' },
  { label: 'PRISMA / MONGODB', sym: '▲' },
  { label: 'DOCKER / DEPLOYMENT', sym: '◈' }, 
];

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SlideIn({ children, delay = 0, from = 'left' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: from === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const codeBgY = useTransform(heroScroll, [0, 1], ['0%', '60%']);

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({ target: aboutRef, offset: ['start end', 'end start'] });
  const aboutPhotoY = useTransform(aboutScroll, [0, 1], ['-10%', '10%']);

  const toolingRef = useRef(null);
  const { scrollYProgress: toolingScroll } = useScroll({ target: toolingRef, offset: ['start end', 'end start'] });
  const toolingBgY = useTransform(toolingScroll, [0, 1], ['-8%', '8%']);

  // --- EmailJS State & Ref ---
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Use the same IDs you used on your Contact page
    const SERVICE_ID = 'service_phwalbq';
    const TEMPLATE_ID = 'template_l3vkg5b';
    const PUBLIC_KEY = 'IWG7FhkVrzLj3ZXuT';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          formRef.current.reset();
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
    <div className="home">
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <motion.div className="hero-content" style={{ y: heroY, opacity: heroOpacity }}>
         <TypeAnimation
            sequence={['Jerin Babu', 1000, 'Web Developer', 1000, 'Full-Stack Developer', 1000, 'Mobile Developer', 1000]}
            wrapper="span"
            speed={50}
            className="type-animation-text"
            repeat={Infinity}
          />
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Full-stack developer specializing in building high-performance<br />
            systems with a focus on motion, accessibility, and architectural integrity.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            <Link to="/projects" className="btn-primary">EXPLORE WORK</Link>
            <Link to="/#stack" className="btn-ghost">VIEW STACK</Link>
          </motion.div>
        </motion.div>

        <motion.div className="hero-code-visual" style={{ y: codeBgY }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="code-line-visual"
              style={{ width: `${30 + (i * 13) % 55}%` }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 0.15 + (i % 4) * 0.05, x: 0 }}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.6 }}
            />
          ))}
          <motion.div
            className="hero-glow"
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <div className="hero-scroll-hint">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="scroll-dot" />
          </motion.div>
          <span>SCROLL</span>
        </div>

        <div className="hero-grid" />
      </section>

      {/* ABOUT */}
      <section className="about-section" ref={aboutRef}>
        <div className="about-inner">
          <motion.div className="about-photo-wrap" style={{ y: aboutPhotoY }}>
            <SlideIn from="left">
              <div className="photo-frame">
                <div className="photo-placeholder">
                  <img src='/my-image.png' alt="Jerin Babu" />
                  <div className="photo-label">FULL STACK<br />DEVELOPER</div>
                </div>
                <div className="exp-badge">
                  <span className="exp-num">03+</span>
                  <span className="exp-label">Years<br />Experience</span>
                </div>
              </div>
            </SlideIn>
          </motion.div>

          <div className="about-text-col">
            <FadeUp delay={0.1}>
              <div className="section-label">ABOUT ME</div>
              <h2 className="about-title">
                Bridging the gap between<br />
                <span className="about-cyan">Complex Logic</span> and Human<br />
                Experience.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="about-body">
                Full-stack software developer with nearly 3 years of experience in React, modern JavaScript frameworks, mobile/web development, and robust backend database integration. Skilled in high-performance application architecture, real-time data sync, and deploying secure, scalable platforms.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="about-pillars">
                <div className="pillar">
                  <div className="pillar-title">Scalable Architecture</div>
                  <div className="pillar-desc">Cloud-native designs built for seamless data flow and complex queries.</div>
                </div>
                <div className="pillar">
                  <div className="pillar-title">UX Precision</div>
                  <div className="pillar-desc">Focusing on high-fidelity responsive layouts and real-time interaction.</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section className="career-section">
        <div className="career-inner">
          <FadeUp>
            <div className="section-label">JOURNEY</div>
            <div className="career-head">
              <h2 className="career-title">Career Architecture</h2>
              <div className="career-year">2019—2026</div>
            </div>
          </FadeUp>

          <div className="timeline">
            {[
              {
                date: 'AUG 2025 — PRESENT',
                title: 'Jr Web Developer',
                company: 'Fospe Technologies W.L.L',
                desc: [
                  'Developing and maintaining high-performance web applications using modern front-end frameworks.',
                  'Collaborating with cross-functional teams to architect scalable solutions and improve overall product quality.',
                  'Implementing responsive, accessible UI designs and ensuring strict cross-browser compatibility.',
                  'Participating in comprehensive code reviews and optimizing deployment workflows.'
                ],
                tags: ['WORDPRESS', 'DEPLOYMENT', 'PHP'],
              },
              {
                date: 'APRIL 2019 — PRESENT',
                title: 'Freelance Full-Stack Developer',
                company: 'Independent',
                desc: [
                  'Architecting complex, full-stack architectures including the UniSoul matchmaking engine and Focus Flow productivity app.',
                  'Handling end-to-end deployment, moving concepts from vector-based algorithms to responsive UI/UX.',
                  'Integrating advanced features such as real-time WebSockets, real-time video sync, and secure JWT authentication.',
                  'Managing database design, containerization via Docker, and continuous cloud deployment.'
                ],
                tags: ['REACT', 'TYPESCRIPT', 'MONGODB', 'MERN', 'TAILWINDCSS'],
              },
              {
                date: 'OCT 2024 — MAR 2025',
                title: 'Software Development Engineer I',
                company: 'Innoai',
                desc: [
                  'Collaborated closely with an off-shore engineering team to script and deploy automated workflow architectures.',
                  'Utilized HuLoop and Python to automate high-volume data entry and extensive spreadsheet validation tasks.',
                  'Measurably reduced human error and operational overhead across 3 major client projects through intelligent automation.'
                ],
                tags: ['WORDPRESS', 'DEPLOYMENT', 'AUTOMATION', 'HULOOP'],
              },
              {
                date: 'AUG 2023 — SEPT 2024',
                title: 'Software Development Engineer I & Web Dev Intern',
                company: 'Everleaves Systems',
                desc: [
                  'Developed comprehensive corporate web portals and custom multi-lingual hotel booking platforms (Tragobook).',
                  'Integrated third-party APIs, authentication protocols, and wrapped responsive layouts into native React Native mobile apps.',
                  'Managed database architecture, responsive HTML/CSS templating, and direct client deployment.'
                ],
                tags: ['WORDPRESS', 'DJANGO', 'REACT', 'NODE.JS', 'MONGODB'],
              },
            ].map((item, i) => (
              <SlideIn key={i} from="left" delay={i * 0.1}>
                <div className="timeline-item">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-body">
                    <div className="timeline-row">
                      <h3 className="timeline-title">{item.title}</h3>
                      <span className="tag">{item.company}</span>
                    </div>
                    
                    <ul className="timeline-desc-list">
                      {item.desc.map((point, idx) => (
                        <li key={idx} className="timeline-desc-point">{point}</li>
                      ))}
                    </ul>

                    <div className="timeline-tags">
                      {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLING */}
      <section id="stack" className="tooling-section" ref={toolingRef}>
        <motion.div className="tooling-bg" style={{ y: toolingBgY }} />
        <div className="tooling-inner">
          <FadeUp>
            <h2 className="tooling-title">Tooling <span className="about-cyan">&amp;</span> Ecosystem</h2>
          </FadeUp>
          <div className="tools-grid">
            {tools.map((t, i) => (
              <FadeUp key={t.label} delay={i * 0.07}>
                <motion.div
                  className="tool-card"
                  whileHover={{ y: -6, borderColor: 'rgba(0,212,255,0.3)', transition: { duration: 0.2 } }}
                >
                  <div className="tool-sym">{t.sym}</div>
                  <div className="tool-label">{t.label}</div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.3}>
            <div className="code-block">
              <div className="cb-header">
                <span className="cb-dot red" /><span className="cb-dot amber" /><span className="cb-dot grn" />
              </div>
              <pre className="cb-body"><code>{`const Architect = {
  focus: `}<span className="c-str">"High Performance Systems"</span>{`,
  paradigm: [`}<span className="c-str">"functional"</span>{`, `}<span className="c-str">"typed-driven"</span>{`],
  latency_target: `}<span className="c-num">&lt; 100ms</span>{`,
  philosophy: `}<span className="c-str">"Explicit over Implicit"</span>{`
};`}</code></pre>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-left">
            <FadeUp>
              <div className="section-label">TRANSMISSION</div>
              <h2 className="cta-title">Let's <span className="cta-green">Sync.</span></h2>
              <p className="cta-body">
                I am currently accepting select opportunities for Q4 2026. If you have a project
                that requires a fusion of architectural precision and innovative UI, reach out.
              </p>
              <div className="cta-contact-info">
               <a href='mailto:jerin.babujb@gmail.com' target='_blank' rel="noreferrer"> <div className="contact-row">✉ jerin.babujb@gmail.com</div></a>
                <div className="contact-row">⊙ Manama, Bahrain // Remote</div>
              </div>
            </FadeUp>
          </div>
          
          <FadeUp delay={0.15}>
            {/* Changed from div to form, attached ref and onSubmit */}
            <form ref={formRef} onSubmit={sendEmail} className="cta-form">
              <input type="text" name="user_name" className="form-field" placeholder="FULL NAME" required />
              <input type="email" name="user_email" className="form-field" placeholder="EMAIL ADDRESS" required />
              <textarea name="message" className="form-field form-textarea" placeholder="MESSAGE" required />
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary btn-full"
                style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'TRANSMITTING...' : 
                 submitStatus === 'success' ? 'CONNECTION ESTABLISHED ✓' : 
                 submitStatus === 'error' ? 'TRANSMISSION FAILED ✕' : 
                 'ESTABLISH CONNECTION'}
              </motion.button>
            </form>
          </FadeUp>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}