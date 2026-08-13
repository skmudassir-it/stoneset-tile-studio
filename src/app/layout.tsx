import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stoneset-tile-studio.amsitservices.com"),
  title: {
    default: "StoneSet Tile Studio | Tile & Stone Installation",
    template: "%s | StoneSet Tile Studio",
  },
  description:
    "Tile and stone installation company crafting durable, beautiful surfaces — ceramic, porcelain, marble and natural stone for kitchens, baths and beyond. Free quotes, 10-year warranty.",
  keywords: [
    "tile installation",
    "natural stone installation",
    "marble tile",
    "porcelain tile",
    "backsplash installation",
    "kitchen tile",
    "bathroom tile",
    "heated flooring",
    "tile repair",
    "Austin TX tile installer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "StoneSet Tile Studio",
    title: "StoneSet Tile Studio | Tile & Stone Installation",
    description:
      "Crafting durable, beautiful surfaces — ceramic, porcelain, marble and natural stone for kitchens, baths and beyond.",
    images: [
      { url: "/images/og.jpg", width: 1200, height: 675, alt: "StoneSet Tile Studio — tile and stone installation" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoneSet Tile Studio | Tile & Stone Installation",
    description: "Crafting durable, beautiful surfaces — ceramic, porcelain, marble and natural stone.",
    images: ["/images/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5a6b78",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
