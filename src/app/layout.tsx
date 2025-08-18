// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat, Coiny, Rubik } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const coiny = Coiny({
  variable: "--font-coiny",
  subsets: ["latin"],
  weight: "400",
});
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Sangeeth Santhosh | Web Developer & Designer",
  description:
    "Portfolio of Sangeeth Santhosh — Web Developer skilled in React, Next.js, Tailwind CSS,Pytho,django, and UI/UX design. Explore projects, services, and work experience.",
  keywords: [
    "Sangeeth Santhosh",
    "web developer",
    "Next.js portfolio",
    "React developer",
    "Tailwind CSS",
    "UI design",
    "Python developer",
    "Django developer",
    "full-stack developer",
    "web design",
    "frontend developer",
    "freelancer",
  ],
  authors: [{ name: "Sangeeth Santhosh", url: "https://sangeeth.dev" }],
  openGraph: {
    title: "Sangeeth Santhosh | Developer & Designer",
    description:
      "Explore my portfolio showcasing web development,python,django, UI/UX design, and projects built with React, Next.js, and Tailwind CSS.",
    url: "https://sangeeth.dev",
    siteName: "sangeeth.dev",
    images: [
      {
        url: "/og-image.png", // 👈 create this file in your public/ folder
        width: 1200,
        height: 630,
        alt: "Sangeeth Santhosh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangeeth Santhosh | Web Developer & Designer",
    description:
      "Portfolio website of Sangeeth Santhosh showcasing as developer.",
    creator: "@sangeeth_saa",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://sangeeth.dev"), // 👈 change to your domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${coiny.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
