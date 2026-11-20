import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { naira } from "../data/apartments";
export default function Confirmation() {
  const b = useLocation().state?.booking;
  return (
    <section className="container confirmation">
      <div className="confirmation-icon">
        <CheckCircle2 size={54} />
      </div>
      <span className="eyebrow">BOOKING DEMONSTRATION</span>
      <h1>
        Your demo stay is <em>confirmed.</em>
      </h1>
      <p>
        This is a simulated booking confirmation. No payment was processed and
        no real apartment has been reserved.
      </p>
      {b && (
        <div className="confirmation-details">
          <div>
            <span>Reference</span>
            <strong>{b.id}</strong>
          </div>
          <div>
            <span>Apartment</span>
            <strong>{b.apartmentName}</strong>
          </div>
          <div>
            <span>Dates</span>
            <strong>
              {b.start} → {b.end}
            </strong>
          </div>
          <div>
            <span>Demo total</span>
            <strong>{naira(b.total)}</strong>
          </div>
        </div>
      )}
      <Link to="/apartments" className="btn btn-dark">
        Explore more stays <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
