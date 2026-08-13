import type { ComponentType } from "react";
import {
  Bath,
  BadgeDollarSign,
  Clock,
  Droplets,
  Gem,
  Grid3x3,
  Hammer,
  Layers,
  Mountain,
  Ruler,
  Shapes,
  ShieldCheck,
  Sparkles,
  Thermometer,
} from "lucide-react";

export const SITE = {
  name: "StoneSet Tile Studio",
  url: "https://stoneset-tile-studio.amsitservices.com",
  phone: "+1 (512) 555-0147",
  email: "hello@stonesettile.com",
  address: {
    street: "1842 Marlowe Avenue",
    city: "Austin",
    region: "TX",
    postalCode: "78701",
    country: "US",
  },
  hours: "Monday – Friday, 8:00 AM – 6:00 PM",
  license: "TX Lic. #R-2147",
};

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  long: string[];
  features: string[];
  image: string;
  icon: ComponentType<{ className?: string }>;
};

export const SERVICES: Service[] = [
  {
    slug: "tile-installation",
    name: "Tile Installation",
    tagline: "Precision-set ceramic, porcelain and glass tile",
    description:
      "Flawless tile installation for floors, walls, backsplashes and showers — flat, square and built to last a lifetime.",
    long: [
      "Great tile starts beneath the surface. We prepare every substrate — cement board, uncoupling membranes, self-leveling compounds — so the tile you see is flat, square and stable for decades.",
      "Our installers cut to exacting tolerances, keep grout joints uniform, and work from laser-leveled reference lines. Every project is inspected against a checklist before we call it done.",
    ],
    features: [
      "Full substrate prep and waterproofing",
      "Laser-leveled layout and square reference lines",
      "Uniform grout joints and sharp, clean cuts",
      "Porcelain, ceramic, glass and large-format tile",
    ],
    image: "/images/service-tile-installation.jpg",
    icon: Grid3x3,
  },
  {
    slug: "natural-stone-installation",
    name: "Natural Stone Installation",
    tagline: "Marble, travertine, limestone and granite",
    description:
      "Hand-set natural stone that honors the material — from honed marble floors to cleft travertine feature walls.",
    long: [
      "Natural stone is a living material: every slab has unique veining, porosity and movement. We book-match, blend and orient each piece so the finished surface reads as one continuous work.",
      "We seal stone with penetrating, color-enhancing sealers, and we know exactly which adhesives are safe for moisture-sensitive varieties like marble and limestone.",
    ],
    features: [
      "Book-matched and color-blended installations",
      "Honed, polished, tumbled and cleft finishes",
      "Stone-safe adhesives, sealers and grouts",
      "Marble, travertine, limestone, slate and granite",
    ],
    image: "/images/service-natural-stone.jpg",
    icon: Mountain,
  },
  {
    slug: "custom-mosaics",
    name: "Custom Mosaics",
    tagline: "Medallions, borders and artistic inlays",
    description:
      "From geometric bathroom medallions to hand-laid entryway inlays, we build mosaics that make a space unforgettable.",
    long: [
      "Whether you bring us a design or a wish, we draft it, engineer it, and fabricate it in glass, ceramic, stone or metal. Patterns are laid on mesh for perfect spacing, then set with surgical care.",
      "Custom mosaics shine in showers, backsplashes, fireplace surrounds and entry floors. We handle the full design-to-install process in-house.",
    ],
    features: [
      "In-house design and fabrication",
      "Glass, ceramic, stone and metal tile",
      "Floor medallions, borders and feature walls",
      "CAD-accurate patterns with perfect spacing",
    ],
    image: "/images/service-custom-mosaics.jpg",
    icon: Shapes,
  },
  {
    slug: "grout-and-sealing",
    name: "Grout & Sealing",
    tagline: "Grout replacement, sealing and maintenance",
    description:
      "Re-grouting, color sealing and protective sealing that make old tile look new and stay protected.",
    long: [
      "Cracked, stained or missing grout ruins the look of good tile and lets moisture in. We remove failing grout, clean joints, and install fresh grout — sanded, unsanded or epoxy — with crisp, consistent lines.",
      "We follow with penetrating sealers matched to your tile and grout, and we can match existing grout colors across older installations.",
    ],
    features: [
      "Grout removal, repair and replacement",
      "Sanded, unsanded and epoxy grout",
      "Penetrating sealers for tile, stone and grout",
      "Grout color matching for older floors",
    ],
    image: "/images/service-grout-sealing.jpg",
    icon: Droplets,
  },
  {
    slug: "kitchen-and-bath-tile",
    name: "Kitchen & Bath Tile",
    tagline: "Backsplashes, showers and vanities",
    description:
      "Kitchens and baths are where tile earns its keep — we design and install wet-area tile that performs and delights.",
    long: [
      "From subway backsplashes to fully waterproofed curbless showers, we handle the demanding environments first: proper waterproofing, correct slope to drain, and expansion joints where tile meets change of plane.",
      "We coordinate plumbing, electrical and cabinet schedules so your remodel flows without surprises.",
    ],
    features: [
      "Shower pans, walls and curbless entries",
      "Waterproofing membranes and vapor barriers",
      "Backsplash design and installation",
      "Coordinated scheduling with other trades",
    ],
    image: "/images/service-kitchen-bath.jpg",
    icon: Bath,
  },
  {
    slug: "floor-and-wall-tile",
    name: "Floor & Wall Tile",
    tagline: "Large-format floors, accent walls and more",
    description:
      "Statement floors and walls in large format, plank, hex and every shape in between — installed flat and true.",
    long: [
      "Large-format tile is unforgiving: lippage shows instantly. We use leveling systems, flatness-tested substrates and experienced hands to deliver mirror-smooth surfaces at any scale.",
      "For walls, we handle full-height fireplace surrounds, wainscots and feature walls with structural reinforcement where needed.",
    ],
    features: [
      "Large-format and plank tile expertise",
      "Tile leveling systems for zero lippage",
      "Wood-look, hex, herringbone and chevron patterns",
      "Full-height feature and fireplace walls",
    ],
    image: "/images/service-floor-wall.jpg",
    icon: Layers,
  },
  {
    slug: "heated-flooring-systems",
    name: "Heated Flooring Systems",
    tagline: "Radiant warmth under your tile",
    description:
      "Electric and hydronic radiant heat installed beneath your tile — warm toes, efficient homes.",
    long: [
      "Radiant heat turns a cold tile floor into the most comfortable surface in the house. We install electric mats and cables, and hydronic tubing, with careful layout to avoid joists, fixtures and transitions.",
      "We integrate thermostats, floor sensors and zoning, then set tile directly over the system with approved thin-set.",
    ],
    features: [
      "Electric mat and cable systems",
      "Hydronic tubing and manifold integration",
      "Smart thermostats and floor sensors",
      "Tile installation over approved systems",
    ],
    image: "/images/service-heated-flooring.jpg",
    icon: Thermometer,
  },
  {
    slug: "tile-repair-and-restoration",
    name: "Tile Repair & Restoration",
    tagline: "Cracked tile, popped grout, faded stone",
    description:
      "We repair cracked tile, restore faded stone, and bring decades-old floors back to life.",
    long: [
      "Cracked tile, hollow sounds, popped grout, efflorescence — every failure has a cause, and we find it before we fix it. We replace tile from your original batch or source near-perfect matches.",
      "For stone, we hone, polish and re-seal surfaces to restore the original luster without damaging the material.",
    ],
    features: [
      "Tile replacement and color matching",
      "Grout and caulk renewal",
      "Stone honing, polishing and re-sealing",
      "Substrate diagnostics for recurring failures",
    ],
    image: "/images/service-tile-repair.jpg",
    icon: Hammer,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  project: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "StoneSet replaced our builder-grade bathroom tile and it looks like a five-star hotel. Laser-flat floors, perfect grout lines, and they covered everything with drop cloths. Zero dust.",
    name: "Marisol Delgado",
    role: "Homeowner, Mueller neighborhood",
    project: "Primary bath remodel",
  },
  {
    quote:
      "They matched the marble on our 20-year-old entry floor perfectly. Guests cannot tell which tiles are new. Genuinely masterful craftsmen.",
    name: "James Whitfield",
    role: "Homeowner, Westlake Hills",
    project: "Marble entry restoration",
  },
  {
    quote:
      "The heated floor in our master bath is pure luxury. The crew was punctual, the quote was honest, and the workmanship warranty gave us total peace of mind.",
    name: "Aisha Rahman",
    role: "Homeowner, Cedar Park",
    project: "Heated bathroom floor",
  },
  {
    quote:
      "Our custom mosaic medallion exceeded every expectation. They drafted it, fabricated it, and installed it in a week. It is the centerpiece of our foyer.",
    name: "Tom & Elena Novak",
    role: "Homeowners, Round Rock",
    project: "Custom entry medallion",
  },
  {
    quote:
      "Commercial-grade precision. We remodeled 40 guest bathrooms for our boutique hotel and StoneSet delivered every one on schedule with flawless results.",
    name: "David Okafor",
    role: "General Manager, Hotel Meridian",
    project: "Hotel bathroom program",
  },
  {
    quote:
      "Our kitchen backsplash in that hand-made ceramic tile is stunning. They took the time to lay out every piece before installing so the pattern flowed perfectly.",
    name: "Sarah Chen",
    role: "Homeowner, Hyde Park",
    project: "Kitchen backsplash",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  size: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "spa-bathroom-transformation",
    title: "Spa Bathroom Transformation",
    category: "Kitchen & Bath Tile",
    location: "Westlake Hills, TX",
    size: "180 sq ft",
    duration: "3 weeks",
    image: "/images/project-1.jpg",
    description:
      "A dated 1990s master bath became a spa retreat: textured stone-look porcelain walls, a pebble mosaic shower floor, curbless entry and a heated floor tied to a smart thermostat.",
    highlights: [
      "Curbless shower with linear drain",
      "Textured stone-look porcelain, 12×24",
      "Pebble mosaic shower floor",
      "Electric radiant floor system",
    ],
  },
  {
    slug: "modern-kitchen-heritage",
    title: "Modern Kitchen with Heritage Soul",
    category: "Kitchen & Bath Tile",
    location: "Hyde Park, TX",
    size: "220 sq ft",
    duration: "2 weeks",
    image: "/images/project-2.jpg",
    description:
      "A full kitchen remodel anchored by a large-format marble-look porcelain backsplash and island. Book-matched veining, integrated outlets, and a perfectly aligned pattern across the range hood.",
    highlights: [
      "Large-format marble-look porcelain",
      "Book-matched backsplash veining",
      "Recessed outlet integration",
      "Custom-painted grout in warm ivory",
    ],
  },
  {
    slug: "herringbone-entryway",
    title: "Herringbone Entryway in Natural Stone",
    category: "Natural Stone Installation",
    location: "Round Rock, TX",
    size: "140 sq ft",
    duration: "10 days",
    image: "/images/project-3.jpg",
    description:
      "A grand first impression: hand-set natural stone in herringbone with a matching border, sealed for low maintenance, and warmed by an adjacent under-floor system.",
    highlights: [
      "Natural stone herringbone pattern",
      "Hand-cut border and corner details",
      "Penetrating color-enhancing sealer",
      "Radiant heating beneath",
    ],
  },
];

export const STATS = [
  { value: "15+", label: "Years in business" },
  { value: "850+", label: "Projects completed" },
  { value: "98%", label: "Clients who refer us" },
  { value: "10 yr", label: "Workmanship warranty" },
];

export const FEATURES = [
  {
    title: "Precise Craftsmanship",
    text: "Laser-leveled layouts, leveling systems and millimeter-perfect joints on every job.",
    icon: Ruler,
  },
  {
    title: "Premium Materials",
    text: "We spec and source porcelain, ceramic, marble and stone from trusted national suppliers.",
    icon: Gem,
  },
  {
    title: "On-Time Completion",
    text: "Written schedules, daily progress updates and crews that show up when they say they will.",
    icon: Clock,
  },
  {
    title: "Clean Job Sites",
    text: "Drop cloths, dust control and a walk-through clean every single day. We leave it better than we found it.",
    icon: Sparkles,
  },
  {
    title: "10-Year Warranty",
    text: "Our installations are backed by a full 10-year workmanship warranty — in writing.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    text: "Detailed, line-item quotes. No surprises, no change-order ambushes, no hidden fees.",
    icon: BadgeDollarSign,
  },
];

export const FAQS = [
  {
    q: "How much does tile installation cost?",
    a: "Most projects run $8–$18 per square foot for labor, depending on tile size, pattern complexity and substrate prep. Materials are quoted separately with trade pricing. Every project gets a detailed, line-item quote before we start — no surprises.",
  },
  {
    q: "How long does a typical project take?",
    a: "A bathroom floor takes 2–4 days. A full shower or kitchen backsplash runs 4–7 days. Whole-home floors and commercial programs are scheduled in phases with a written timeline. We share a schedule with milestones before we break ground.",
  },
  {
    q: "Do I need to move out during the work?",
    a: "Rarely. We contain dust with barriers and daily vacuuming, and we work room by room. Most homeowners live comfortably in their home through the entire project.",
  },
  {
    q: "Do you handle waterproofing and substrate prep?",
    a: "Yes — it is the most important part of the job. We install cement board, uncoupling membranes, waterproofing and self-leveling compounds as needed, and every wet area is fully waterproofed before tile goes down.",
  },
  {
    q: "Can you match existing tile or grout?",
    a: "In most cases, yes. We keep relationships with suppliers that hold discontinued lines, and we color-match grout with precision pigment systems. For stone, we blend and restore rather than tear out.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We are fully licensed in Texas and carry $2M in general liability insurance plus workers' compensation. Every installation is backed by a 10-year workmanship warranty.",
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.name);
