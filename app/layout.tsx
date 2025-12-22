import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Playfair_Display, Merriweather } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const merriweather  = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "500", "600"],
})

export const metadata = {
  title: "Suits 4 Success",
  description: "Empowering individuals through professional development and clothing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
