import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";
import { naira } from "../data/apartments";
export default function ApartmentCard({ apartment: a }) {
  return (
    <Link to={`/apartments/${a.id}`} className="property-card">
      <div className="property-photo">
        <img src={a.image} alt={a.name} loading="lazy" />
        <span className="property-tag">{a.tag}</span>
        <span className="property-arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div className="property-info">
        <div>
          <span className="eyebrow small">{a.location}</span>
          <h3>{a.name}</h3>
          <p>
            {a.guests} guests · {a.beds} bedrooms · {a.baths} baths
          </p>
        </div>
        <div className="rating">
          <Star size={15} fill="currentColor" /> {a.rating}
        </div>
      </div>
      <div className="property-price">
        <strong>{naira(a.price)}</strong>
        <span> / night</span>
      </div>
    </Link>
  );
}
