import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://composition-of-air.vercel.app"),

  title: "Composition of Air – Interactive Science Project (Grade 11)",
  description:
    "Interactive explanation of Earth's atmospheric gases—Oxygen, Nitrogen, Carbon Dioxide, and Argon. Includes animations, quizzes, and clear explanations. A Grade-11 science project by Hein Sat.",

  verification: {
    google: "ydZWrvKsgThra2oLXdPVwnp6do4vsiGok4gg3nLpQag",
  },

  keywords: [
    "composition of air",
    "grade 11 science project",
    "oxygen nitrogen carbon dioxide argon",
    "interactive science website",
    "air explanation project",
    "air composition",
    "AMI International School",
    "Hein Sat",
  ],

  authors: [{ name: "Hein Sat" }],

  openGraph: {
    title: "Composition of Air – Interactive Science Project",
    description:
      "Explore Oxygen, Nitrogen, Carbon Dioxide, and Argon through animations, quizzes, and a futuristic UI.",
    url: "https://composition-of-air.vercel.app",
    siteName: "Composition of Air Project",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Composition of Air – Interactive Science Project",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Composition of Air – Interactive Science Project",
    description:
      "Interactive air composition explanation with animations and quizzes.",
    images: ["/og-image.png"],
    creator: "@hein_sat",
  },
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
