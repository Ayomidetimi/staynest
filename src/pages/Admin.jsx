import React from "react";
import { Link } from "react-router-dom";
import { Building2, CalendarCheck, Wallet, ArrowUpRight } from "lucide-react";
import { apartments, naira } from "../data/apartments";
import { readBookings } from "../utils/booking";
export default function Admin() {
  const bookings = readBookings(),
    revenue = bookings.reduce((s, b) => s + b.total, 0);
  return (
    <section className="container admin-page">
      <div className="admin-header">
        <div>
          <span className="eyebrow">ADMIN PREVIEW · DEMO DATA</span>
          <h1>
            Property <em>overview.</em>
          </h1>
          <p>
            This dashboard uses local browser demo bookings only. It is not a
            secure admin portal.
          </p>
        </div>
        <Link to="/apartments" className="btn btn-dark">
          View apartments <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="admin-stats">
        <div>
          <Building2 />
          <span>Sample properties</span>
          <strong>{apartments.length}</strong>
        </div>
        <div>
          <CalendarCheck />
          <span>Demo bookings</span>
          <strong>{bookings.length}</strong>
        </div>
        <div>
          <Wallet />
          <span>Simulated revenue</span>
          <strong>{naira(revenue)}</strong>
        </div>
      </div>
      <div className="admin-table-wrap">
        <h2>Recent demo bookings</h2>
        {bookings.length ? (
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Guest</th>
                  <th>Apartment</th>
                  <th>Check-in</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.guest}</td>
                    <td>{b.apartmentName}</td>
                    <td>{b.start}</td>
                    <td>{naira(b.total)}</td>
                    <td>
                      <span className="status">{b.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty small-empty">
            <p>No demo bookings yet. Complete a test booking to see it here.</p>
            <Link to="/apartments" className="text-link">
              Explore apartments <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
