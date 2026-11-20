export const nightsBetween = (start, end) => {
  if (!start || !end) return 0;
  const a = Date.parse(`${start}T00:00:00Z`),
    b = Date.parse(`${end}T00:00:00Z`);
  return Number.isFinite(a) && Number.isFinite(b)
    ? Math.max(0, Math.round((b - a) / 86400000))
    : 0;
};
export const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
export const readBookings = () => {
  try {
    return JSON.parse(localStorage.getItem("staynest-bookings") || "[]");
  } catch {
    return [];
  }
};
export const saveBooking = (b) =>
  localStorage.setItem(
    "staynest-bookings",
    JSON.stringify([b, ...readBookings()]),
  );
