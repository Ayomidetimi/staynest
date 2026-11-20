import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import {
  MapPin,
  Star,
  Users,
  BedDouble,
  Bath,
  Check,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { apartments, naira } from "../data/apartments";
import { today, nightsBetween } from "../utils/booking";
export default function Details() {
  const { id } = useParams(),
    navigate = useNavigate(),
    a = apartments.find((x) => x.id === id);
  const [start, setStart] = useState(""),
    [end, setEnd] = useState(""),
    [guests, setGuests] = useState(1),
    [error, setError] = useState("");
  if (!a)
    return (
      <div className="container empty">
        <h2>Apartment not found</h2>
        <Link to="/apartments" className="btn btn-dark">
          Browse apartments
        </Link>
      </div>
    );
  const nights = nightsBetween(start, end),
    fee = Math.round(a.price * nights * 0.08);
  function book(e) {
    e.preventDefault();
    if (!nights) {
      setError("Please choose valid check-in and check-out dates.");
      return;
    }
    setError("");
    navigate("/checkout", { state: { apartmentId: a.id, start, end, guests } });
  }
  return (
    <section className="container detail-page">
      <Link to="/apartments" className="back-link">
        <ArrowLeft size={17} /> All apartments
      </Link>
      <div className="detail-title">
        <div>
          <span className="eyebrow">{a.tag.toUpperCase()}</span>
          <h1>{a.name}</h1>
          <p>
            <MapPin size={17} />
            {a.location} <span>·</span>
            <Star size={16} fill="currentColor" /> {a.rating} rating
          </p>
        </div>
        <div className="detail-price">
          <strong>{naira(a.price)}</strong>
          <span> / night</span>
        </div>
      </div>
      <div className="gallery">
        <img src={a.image} alt={a.name} />
        {a.gallery.map((src, i) => (
          <img key={src} src={src} alt={`${a.name} interior ${i + 2}`} />
        ))}
      </div>
      <div className="detail-grid">
        <div>
          <div className="stats">
            <span>
              <Users size={19} /> {a.guests} guests
            </span>
            <span>
              <BedDouble size={19} /> {a.beds} bedrooms
            </span>
            <span>
              <Bath size={19} /> {a.baths} bathrooms
            </span>
          </div>
          <div className="detail-section">
            <h2>About this space</h2>
            <p>{a.description}</p>
          </div>
          <div className="detail-section">
            <h2>What this place offers</h2>
            <div className="amenities">
              {a.amenities.map((x) => (
                <span key={x}>
                  <Check size={17} />
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="note">
            These are sample properties for a concept demo. Photos, prices,
            ratings and availability are illustrative.
          </div>
        </div>
        <form className="booking-card" onSubmit={book}>
          <h3>Reserve your stay</h3>
          <p>Find your moment of escape.</p>
          <div className="date-grid">
            <label>
              CHECK-IN
              <input
                required
                type="date"
                min={today()}
                value={start}
                onChange={(e) => {
                  setStart(e.target.value);
                  if (end && end <= e.target.value) setEnd("");
                }}
              />
            </label>
            <label>
              CHECK-OUT
              <input
                required
                type="date"
                min={start || today()}
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
            </label>
          </div>
          <label className="guest-label">
            GUESTS
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            >
              {Array.from({ length: a.guests }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} {i === 0 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </label>
          {nights > 0 && (
            <div className="price-breakdown">
              <div>
                <span>
                  {naira(a.price)} × {nights} nights
                </span>
                <strong>{naira(a.price * nights)}</strong>
              </div>
              <div>
                <span>Service fee (8%)</span>
                <strong>{naira(fee)}</strong>
              </div>
              <div className="total">
                <span>Total</span>
                <strong>{naira(a.price * nights + fee)}</strong>
              </div>
            </div>
          )}
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button className="btn btn-gold full">
            Continue to booking <ArrowRight size={18} />
          </button>
          <small>No real payment will be collected in this demo.</small>
        </form>
      </div>
    </section>
  );
}
