import React from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import ApartmentCard from "../components/ApartmentCard";
import { apartments } from "../data/apartments";
export default function Apartments() {
  const [params, setParams] = useSearchParams();
  const location = params.get("location") || "";
  const max = params.get("max") || "";
  const query = params.get("q") || "";
  const update = (key, value) => {
    const p = new URLSearchParams(params);
    value ? p.set(key, value) : p.delete(key);
    setParams(p);
  };
  const filtered = apartments.filter(
    (a) =>
      (!location || a.area === location) &&
      (!max || a.price <= Number(max)) &&
      (!query ||
        `${a.name} ${a.location}`.toLowerCase().includes(query.toLowerCase())),
  );
  return (
    <section className="container listing-page">
      <span className="eyebrow">EXPLORE STAYNEST</span>
      <h1>
        Find your <em>perfect stay.</em>
      </h1>
      <p className="page-intro">
        Beautiful spaces, thoughtfully chosen. Your Lagos escape starts here.
      </p>
      <div className="filters">
        <label className="filter-search">
          <Search size={19} />
          <input
            aria-label="Search apartments"
            placeholder="Search apartments or areas"
            value={query}
            onChange={(e) => update("q", e.target.value)}
          />
        </label>
        <label>
          <SlidersHorizontal size={18} />
          <select
            aria-label="Filter by location"
            value={location}
            onChange={(e) => update("location", e.target.value)}
          >
            <option value="">All locations</option>
            <option>Lekki</option>
            <option>Ikoyi</option>
            <option>Victoria Island</option>
            <option>Ajah</option>
          </select>
        </label>
        <label>
          <select
            aria-label="Maximum nightly price"
            value={max}
            onChange={(e) => update("max", e.target.value)}
          >
            <option value="">Any price</option>
            <option value="80000">Under ₦80,000</option>
            <option value="120000">Under ₦120,000</option>
            <option value="180000">Under ₦180,000</option>
          </select>
        </label>
      </div>
      <div className="results-line">
        <strong>{filtered.length} stays</strong> to explore{" "}
        <span>All prices shown per night</span>
      </div>
      {filtered.length ? (
        <div className="property-grid">
          {filtered.map((a) => (
            <ApartmentCard key={a.id} apartment={a} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No stays found</h2>
          <p>Try a different location, search or price range.</p>
          <button className="btn btn-dark" onClick={() => setParams({})}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
