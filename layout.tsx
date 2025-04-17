import type React from "react"
import "@/app/globals.css"
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
})

export const metadata = {
  title: "Roses by Jenny | Preserved Roses That Last For Years",
  description:
    "Handcrafted eternal roses from New York City. Our preserved roses maintain their beauty for years without water or maintenance. Perfect for gifts and special occasions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
