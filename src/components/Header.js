import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo">
          <Link to="/" aria-label="Pinterest Home">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="#e60023" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <text x="12" y="16" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">P</text>
            </svg>
          </Link>
          <span className="logo-text">Pinterest</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <Link className="nav-link" to="/explore">Explore</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="btn btn-secondary">Log in</Link>
          <Link to="/signup" className="btn btn-primary">Sign up for free</Link>
        </div>
      </div>
    </header>
  );
}
