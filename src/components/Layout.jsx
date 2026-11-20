import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X, Instagram, ArrowUpRight } from "lucide-react";
import { useState } from "react";
export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="demo-strip">
        CONCEPT DEMO · Sample listings and simulated payments only
      </div>
      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            stay<span>nest.</span>
          </Link>
          <nav className={open ? "nav-links open" : "nav-links"}>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/apartments" onClick={() => setOpen(false)}>
              Explore stays
            </NavLink>
            <NavLink to="/admin" onClick={() => setOpen(false)}>
              Admin demo
            </NavLink>
          </nav>
          <Link to="/apartments" className="btn btn-dark nav-cta">
            Find a stay <ArrowUpRight size={17} />
          </Link>
          <button
            className="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link to="/" className="brand footer-brand">
              stay<span>nest.</span>
            </Link>
            <p>
              Thoughtful spaces. Memorable stays.
              <br />
              Discover a better way to stay in Lagos.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/apartments">All apartments</Link>
            <Link to="/apartments?location=Lekki">Lekki</Link>
            <Link to="/apartments?location=Ikoyi">Ikoyi</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/admin">Admin demo</Link>
            <span>Prototype showcase</span>
            <span>Not accepting real payments</span>
          </div>
          <div>
            <h4>Follow along</h4>
            <span>
              <Instagram size={16} /> @staynest.demo
            </span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} StayNest concept demo.</span>
          <span>Made for beautiful stays.</span>
        </div>
      </footer>
    </>
  );
}
