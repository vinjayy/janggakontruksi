import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Janggajayakontruksi - Jasa Kanopi & Pagar Ciamis",
  description:
    "Bengkel las terpercaya di Ciamis yang mengkhususkan diri dalam pembuatan dan pemasangan kanopi dan pagar berkualitas tinggi.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  )
}
