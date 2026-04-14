import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">JERIN BABU</div>
          <div className="footer-copy">© 2026 JERIN BABU. BUILT WITH INTENT.</div>
        </div>
        <div className="footer-links">
          {['GITHUB', 'LINKEDIN'].map(l => (
            <a key={l} href="#" className="footer-link">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
