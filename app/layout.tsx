<section className="px-6 py-10 max-w-4xl mx-auto text-slate-200">
  <h1 className="text-3xl font-bold mb-4">
    Composition of Air – Interactive Grade 11 Science Project
  </h1>

  <p className="text-lg leading-relaxed mb-4">
    This website explains the four main gases in Earth’s atmosphere: 
    <strong>Nitrogen (N₂), Oxygen (O₂), Carbon Dioxide (CO₂), and Argon (Ar)</strong>. 
    Designed as a Grade 11 science project, it features animations, interactive 
    explanations, sound effects, and fast navigation between each gas.
  </p>

  <p className="leading-relaxed mb-4">
    Learn how each gas contributes to the air we breathe, explore visual charts, and test
    your understanding through quizzes. This project was created by 
    <strong>Hein Sat from AMI International School</strong>.
  </p>

  <p className="text-sm opacity-80">
    Keywords: composition of air, grade 11 science project, oxygen nitrogen carbon dioxide argon,
    air composition explanation, interactive science website, AMI International School project.
  </p>
</section>

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
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalWebsite",
              name: "Composition of Air – Interactive Science Project",
              url: "https://composition-of-air.vercel.app",
              author: {
                "@type": "Person",
                name: "Hein Sat",
              },
              description:
                "Interactive explanation of Earth's atmospheric gases—Oxygen, Nitrogen, Carbon Dioxide, and Argon. Includes animations, quizzes, and clear explanations. A Grade-11 science project by Hein Sat.",
              keywords: [
                "composition of air",
                "air composition",
                "grade 11 science project",
                "oxygen nitrogen carbon dioxide argon",
                "interactive science project",
                "AMI International School",
                "air explanation",
              ],
              educationalLevel: "Grade 11",
              learningResourceType: "Educational Science Website",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
