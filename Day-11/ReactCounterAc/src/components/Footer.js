import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2024 MyWebsite. All Rights Reserved.</p>
        <ul className="footer-social-links">
          <li className="footer-link-item">
            <a href="https://www.facebook.com" className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li className="footer-link-item">
            <a href="https://www.twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li className="footer-link-item">
            <a href="https://www.instagram.com" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
