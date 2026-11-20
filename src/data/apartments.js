export const apartments = [
  {
    id: "lekki-penthouse",
    name: "The Azure Penthouse",
    location: "Lekki Phase 1, Lagos",
    area: "Lekki",
    price: 145000,
    guests: 4,
    beds: 2,
    baths: 2,
    rating: 4.9,
    tag: "Guest favourite",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85",
    ],
    description:
      "An airy, design-led penthouse with thoughtful finishes and room to unwind after exploring Lagos.",
    amenities: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Free parking",
      "Smart TV",
      "24/7 security",
    ],
  },
  {
    id: "ikoyi-residence",
    name: "The Ikoyi Residence",
    location: "Ikoyi, Lagos",
    area: "Ikoyi",
    price: 210000,
    guests: 6,
    beds: 3,
    baths: 3,
    rating: 4.95,
    tag: "Luxury pick",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
    ],
    description:
      "A sophisticated city retreat with generous living spaces, contemporary interiors and premium comfort.",
    amenities: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Pool",
      "Free parking",
      "24/7 security",
    ],
  },
  {
    id: "vi-loft",
    name: "Victoria Island Loft",
    location: "Victoria Island, Lagos",
    area: "Victoria Island",
    price: 115000,
    guests: 2,
    beds: 1,
    baths: 1,
    rating: 4.85,
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=85",
    ],
    description:
      "A calm, light-filled loft near the energy of Victoria Island, perfect for couples and solo travellers.",
    amenities: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Smart TV",
      "Workspace",
      "24/7 security",
    ],
  },
  {
    id: "ajah-sanctuary",
    name: "The Palm Sanctuary",
    location: "Ajah, Lagos",
    area: "Ajah",
    price: 85000,
    guests: 4,
    beds: 2,
    baths: 2,
    rating: 4.8,
    tag: "Great value",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
    ],
    description:
      "A warm, welcoming hideaway with a relaxed atmosphere and everything needed for a comfortable stay.",
    amenities: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Free parking",
      "Smart TV",
      "24/7 security",
    ],
  },
  {
    id: "lekki-studio",
    name: "The Olive Studio",
    location: "Lekki, Lagos",
    area: "Lekki",
    price: 68000,
    guests: 2,
    beds: 1,
    baths: 1,
    rating: 4.75,
    tag: "New arrival",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
    ],
    description:
      "An intimate, beautifully styled studio for an easy weekend away or a productive work trip.",
    amenities: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Workspace",
      "Smart TV",
    ],
  },
  {
    id: "ikoyi-garden",
    name: "Garden House Ikoyi",
    location: "Ikoyi, Lagos",
    area: "Ikoyi",
    price: 175000,
    guests: 5,
    beds: 3,
    baths: 2,
    rating: 4.92,
    tag: "Guest favourite",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=85",
    ],
    description:
      "An elegant family-friendly home with inviting gathering spaces and a peaceful residential feel.",
    amenities: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Free parking",
      "Smart TV",
      "24/7 security",
    ],
  },
];
export const naira = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
