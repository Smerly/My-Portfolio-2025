import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ernest Cheung - Full-Stack MERN Developer",
  description:
    "Portfolio of Ernest Cheung, Full-Stack MERN Developer specializing in React, Redux, Node.js in TypeScript/JavaScript. Experienced in building scalable web applications.",
  keywords: "Ernest Cheung, Full-Stack Developer, MERN Stack, React, Redux, Node.js, TypeScript, JavaScript, Portfolio",
  authors: [{ name: "Ernest Cheung" }],
  openGraph: {
    title: "Ernest Cheung - Full-Stack MERN Developer",
    description: "Portfolio of Ernest Cheung, Full-Stack MERN Developer specializing in React, Redux, Node.js",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
