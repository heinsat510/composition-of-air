import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Composition of Air – Interactive Science Project (Grade 11)",
  description:
    "Explore Oxygen, Nitrogen, Carbon Dioxide, and Argon through animations, quizzes, and visual explanations. A Grade-11 interactive science project by Hein Sat.",
      verification: {
    google: "ydZWrvKsgThra2oLXdPVwnp6do4vsiGok4gg3nLpQag",
  },

  keywords: [
    "composition of air",
    "grade 11 science project",
    "oxygen nitrogen carbon dioxide argon",
    "interactive science website",
    "hein sat project",
    "air composition explanation",
    "AMI International School science project"
  ],
  openGraph: {
    title: "Composition of Air – Interactive Science Project",
    description:
      "A futuristic, interactive explanation of Earth's atmospheric gases including Oxygen, Nitrogen, CO₂, and Argon.",
    url: "https://composition-of-air.vercel.app",
    siteName: "Composition of Air",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Composition of Air Website"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
