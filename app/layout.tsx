import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ernest Cheung - Full-Stack Developer",
  description:
    "Portfolio of Ernest Cheung, Full-Stack (Front-End Focused) Developer specializing in React, NextJS, Node.js in TypeScript/JavaScript. Currently deep in LLM/GPT integration and application development.",
  keywords: [
    "Ernest Cheung",
    "Full-Stack Developer",
    "Front-End Developer",
    "React",
    "NextJS",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "LLM",
    "GPT",
    "AI Integration",
    "Portfolio",
  ],
  authors: [{ name: "Ernest Cheung", url: "https://ernestcheung.dev" }],
  creator: "Ernest Cheung",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ernestcheung.dev",
    title: "Ernest Cheung - Full-Stack Developer",
    description: "Full-Stack (Front-End Focused) Developer specializing in React, NextJS, and LLM/GPT integration",
    siteName: "Ernest Cheung Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ernest Cheung - Full-Stack Developer",
    description: "Full-Stack (Front-End Focused) Developer specializing in React, NextJS, and LLM/GPT integration",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
