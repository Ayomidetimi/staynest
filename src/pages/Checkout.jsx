import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, LockKeyhole, CheckCircle2 } from "lucide-react";
import { apartments, naira } from "../data/apartments";
import { nightsBetween, saveBooking } from "../utils/booking";
export default function Checkout() {
  const { state } = useLocation(),
    navigate = useNavigate(),
    [loading, setLoading] = useState(false),
    [form, setForm] = useState({ name: "", email: "", phone: "" });
  const a = apartments.find((x) => x.id === state?.apartmentId);
  const nights = nightsBetween(state?.start, state?.end);
  if (!a || !nights)
    return (
      <div className="container empty">
        <h2>No booking selected</h2>
        <Link to="/apartments" className="btn btn-dark">
          Browse apartments
        </Link>
      </div>
    );
  const subtotal = a.price * nights,
    fee = Math.round(subtotal * 0.08),
    total = subtotal + fee;
  function submit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const booking = {
      id: `DEMO-${Date.now().toString(36).toUpperCase()}`,
      apartmentId: a.id,
      apartmentName: a.name,
      guest: form.name,
      email: form.email,
      phone: form.phone,
      start: state.start,
      end: state.end,
      guests: state.guests,
      nights,
      total,
      status: "Demo confirmed",
      createdAt: new Date().toISOString(),
    };
    saveBooking(booking);
    navigate("/confirmation", { replace: true, state: { booking } });
  }
  return (
    <section className="container checkout-page">
      <Link to={`/apartments/${a.id}`} className="back-link">
        <ArrowLeft size={17} /> Back to apartment
      </Link>
      <span className="eyebrow">ALMOST THERE</span>
      <h1>
        Complete your <em>booking.</em>
      </h1>
      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={submit}>
          <div className="demo-notice">
            <LockKeyhole size={20} />
            <div>
              <strong>Demo checkout — no real payments</strong>
              <p>
                This is a simulated booking. Do not enter real payment card
                details.
              </p>
            </div>
          </div>
          <h2>Your details</h2>
          <p>Enter sample contact details to complete the demo.</p>
          <label>
            Full name
            <input
              required
              minLength={2}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </label>
          <label>
            Email address
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Phone number
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="0800 000 0000"
            />
          </label>
          <div className="fake-payment">
            <CheckCircle2 size={21} />
            <div>
              <strong>Demo payment method</strong>
              <p>Clicking confirm will simulate a successful payment.</p>
            </div>
          </div>
          <button disabled={loading} className="btn btn-gold full">
            {loading
              ? "Processing..."
              : `Confirm demo booking · ${naira(total)}`}
          </button>
        </form>
        <aside className="checkout-summary">
          <img src={a.image} alt={a.name} />
          <div className="summary-body">
            <span className="eyebrow">YOUR STAY</span>
            <h3>{a.name}</h3>
            <p>{a.location}</p>
            <div className="summary-dates">
              <div>
                <small>CHECK-IN</small>
                <strong>{state.start}</strong>
              </div>
              <div>
                <small>CHECK-OUT</small>
                <strong>{state.end}</strong>
              </div>
            </div>
            <p>
              {state.guests} guests · {nights} nights
            </p>
            <div className="price-breakdown">
              <div>
                <span>
                  {naira(a.price)} × {nights} nights
                </span>
                <strong>{naira(subtotal)}</strong>
              </div>
              <div>
                <span>Service fee (8%)</span>
                <strong>{naira(fee)}</strong>
              </div>
              <div className="total">
                <span>Total</span>
                <strong>{naira(total)}</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
