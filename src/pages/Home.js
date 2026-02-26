import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-content container">
          <h1 className="hero-title">Find your next <span className="rotating-ideas">idea</span></h1>
          <p className="hero-subtitle">Explore over 500 million ideas and save the ones you love</p>
          <div className="hero-cta">
            <Link to="/explore" className="btn btn-primary">Explore Pinterest</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><span className="stat-number">500M+</span><span className="stat-label">Monthly ideas</span></div>
            <div className="stat-item"><span className="stat-number">300M+</span><span className="stat-label">Active users</span></div>
            <div className="stat-item"><span className="stat-number">5B+</span><span className="stat-label">Pins saved</span></div>
          </div>
        </div>

        <div className="masonry-grid" aria-hidden="true">
          <div className="masonry-column">
            <article className="pin-card"><div className="pin-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=500&q=80')"}} /></article>
            <article className="pin-card"><div className="pin-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80')"}} /></article>
          </div>
          <div className="masonry-column">
            <article className="pin-card"><div className="pin-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80')"}} /></article>
            <article className="pin-card"><div className="pin-image" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663040332608-9429498d779f?auto=format&fit=crop&w=500&q=80')"}} /></article>
          </div>
        </div>
      </section>
      <section className="categories container">
        <h2 className="section-title">Popular Categories</h2>
        <p className="section-subtitle">Browse ideas by category to find exactly what you're looking for</p>
      </section>
    </main>
  );
}
