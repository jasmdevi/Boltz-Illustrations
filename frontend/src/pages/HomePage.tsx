import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioGallery from '../components/PortfolioGallery';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <header id="home" className="hero container">
        <div className="hero-inner">
          <h1 className="hero-title">BOLTZ ILLUSTRATIONS</h1>
          <p className="hero-subtitle">
            Artist • Illustrator • Maker — blending traditional technique with modern texture.
          </p>
          <div className="hero-cta">
            <a className="btn primary" href="#work">View Work</a>
            <a className="btn" href="mailto:hello@example.com">Contact</a>
          </div>
        </div>
      </header>

      {/* Work / Gallery */}
      <section id="work" className="section container">
        <div className="section-head">
          <h2>Selected Works</h2>
          <p>Recent pieces across ink, watercolor, and digital painting.</p>
        </div>
        <PortfolioGallery />
      </section>

      {/* About */}
      <section id="about" className="section container about">
        <div className="about-card">
          <h2>About</h2>
          <p>
            I’m an Orlando-based artist focused on vibrant color, motion, and character. My practice
            spans sketchbooks to large-format mixed media. When I’m not painting, I build interactive
            light sculptures and teach art workshops.
          </p>
          <ul className="about-list">
            <li>Mediums: watercolor, ink, gouache, digital</li>
            <li>Themes: movement, flora, myth, neon nights</li>
            <li>Available for commissions and collaborations</li>
          </ul>
          <a className="btn" href="#contact">Work with me</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section container contact">
        <div className="section-head">
          <h2>Contact</h2>
          <p>For commissions, licensing, and exhibitions.</p>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget as HTMLFormElement);
            const subject = encodeURIComponent(`Portfolio Inquiry from ${data.get('name')}`);
            const body = encodeURIComponent(
              `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
            );
            window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
          }}
        >
          <label>
            Name
            <input name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label className="full">
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="btn primary" type="submit">Send Email</button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
