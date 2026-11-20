import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  CalendarDays,
  Users,
  Search,
  ShieldCheck,
  Heart,
  KeyRound,
} from "lucide-react";
import ApartmentCard from "../components/ApartmentCard";
import { apartments } from "../data/apartments";
export default function Home() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="pill">
              <span className="pill-dot" /> YOUR NEXT CHAPTER STARTS HERE
            </div>
            <h1>
              Stay somewhere <em>extraordinary.</em>
            </h1>
            <p>
              Beautifully curated apartments in Lagos. More than a place to
              sleep — a space to feel at home.
            </p>
            <div className="hero-actions">
              <Link to="/apartments" className="btn btn-gold">
                Explore our stays <ArrowUpRight size={18} />
              </Link>
              <span>Discover the StayNest difference</span>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90"
              alt="Elegant modern apartment living room"
            />
            <div className="hero-image-label">
              <span>01 / 06</span>
              <span>THE AZURE PENTHOUSE — LEKKI</span>
            </div>
          </div>
        </div>
        <form
          className="container search-bar"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(
              `/apartments${location ? "?location=" + encodeURIComponent(location) : ""}`,
            );
          }}
        >
          <div className="search-field">
            <MapPin />
            <label>
              LOCATION
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Where are you going?</option>
                <option>Lekki</option>
                <option>Ikoyi</option>
                <option>Victoria Island</option>
                <option>Ajah</option>
              </select>
            </label>
          </div>
          <div className="search-field">
            <CalendarDays />
            <label>
              YOUR STAY<span>Flexible dates</span>
            </label>
          </div>
          <div className="search-field">
            <Users />
            <label>
              GUESTS<span>Find your perfect space</span>
            </label>
          </div>
          <button className="btn btn-dark search-submit">
            <Search size={19} /> Search stays
          </button>
        </form>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HANDPICKED FOR YOU</span>
            <h2>
              Stays worth <em>remembering.</em>
            </h2>
            <p>Every space has a story. Find the one that feels like yours.</p>
          </div>
          <Link to="/apartments" className="text-link">
            View all apartments <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="property-grid">
          {apartments.slice(0, 3).map((a) => (
            <ApartmentCard key={a.id} apartment={a} />
          ))}
        </div>
      </section>
      <section className="difference">
        <div className="container difference-grid">
          <div className="difference-image">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85"
              alt="Warm modern apartment interior"
            />
          </div>
          <div className="difference-copy">
            <span className="eyebrow">THE STAYNEST WAY</span>
            <h2>
              Feel at home,
              <br />
              <em>wherever you go.</em>
            </h2>
            <p>
              We believe the best trips begin with a space you love. That's why
              every StayNest home is selected for comfort, character and
              convenience.
            </p>
            <div className="benefit">
              <span>
                <Heart />
              </span>
              <div>
                <h3>Curated with care</h3>
                <p>Thoughtfully selected spaces with beautiful details.</p>
              </div>
            </div>
            <div className="benefit">
              <span>
                <ShieldCheck />
              </span>
              <div>
                <h3>Book with confidence</h3>
                <p>A simple booking journey with clear pricing.</p>
              </div>
            </div>
            <div className="benefit">
              <span>
                <KeyRound />
              </span>
              <div>
                <h3>Stay your way</h3>
                <p>From quick getaways to longer stays, find your fit.</p>
              </div>
            </div>
            <Link to="/apartments" className="btn btn-dark">
              Discover apartments <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="cta-section container">
        <span className="eyebrow">YOUR NEXT STAY AWAITS</span>
        <h2>
          Make room for <em>new memories.</em>
        </h2>
        <p>Find a place that makes every moment feel special.</p>
        <Link to="/apartments" className="btn btn-gold">
          Explore our apartments <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}
