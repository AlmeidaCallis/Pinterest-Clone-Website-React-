import React from 'react';
import { Link } from 'react-router-dom';

export default function Explore() {
  return (
    <main className="container" style={{paddingTop:120}}>
      <section className="explore-header">
        <h1 className="section-title">Explore the best of Pinterest</h1>
        <p className="section-subtitle">Find inspiration from creators around the world.</p>
        <div style={{marginTop:20}}><a className="btn btn-primary" href="https://in.pinterest.com/" target="_blank" rel="noreferrer">Go to Pinterest Home</a></div>
      </section>

      <div className="masonry-grid">
        <div className="masonry-column">
          <div className="pin-card"><img src="/assets/download (2).jpg" alt="idea" className="pin-image"/></div>
        </div>
      </div>
    </main>
  );
}
