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
    </footer>
  );
}
