import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CinematicLoader from "@/components/CinematicLoader"
import CookieConsent from "@/components/CookieConsent"
import { Playfair_Display, Merriweather } from "next/font/google"
import type { Metadata } from "next"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://suits4success.com"), 
  title: {
    default: "Suits 4 Success | Empowering Careers Through Professional Attire",
    template: "%s | Suits 4 Success",
  },
  description:
    "Suits 4 Success is a nonprofit organization empowering individuals through professional clothing, workforce training, and career development programs.",
  keywords: [
    "Suits 4 Success",
    "nonprofit organization",
    "professional clothing donation",
    "workforce development",
    "job readiness programs",
    "career empowerment",
    "donate professional clothing",
    "financial donations nonprofit",
    "community support programs",
    "employment assistance",
  ],
  authors: [{ name: "Suits 4 Success" }],
  creator: "Suits 4 Success",
  publisher: "Suits 4 Success",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Suits 4 Success | Empowering Careers Through Professional Attire",
    description:
      "Support Suits 4 Success by donating professional clothing or making a financial contribution to empower individuals seeking employment.",
    url: "https://suits4success.com",
    siteName: "Suits 4 Success",
    images: [
      {
        url: "/og-image.png", // 🔴 add this image in /public
        width: 1200,
        height: 630,
        alt: "Suits 4 Success – Empowering Careers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suits 4 Success | Empowering Careers",
    description:
      "Donate professional attire or support workforce development programs that change lives.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://suits4success.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${merriweather.variable}`}
    >
      <body className="font-sans antialiased bg-white text-gray-800">
        <CinematicLoader />
        <CookieConsent />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
