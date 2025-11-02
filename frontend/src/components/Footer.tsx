import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} BOLTZ ILLUSTRATIONS</span>
        <div className="footer-links">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.artstation.com" target="_blank" rel="noreferrer">ArtStation</a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
