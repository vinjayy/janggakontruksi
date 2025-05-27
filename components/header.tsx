"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/tentang-kami" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-30 items-center justify-between px-4 sm:px-6">
 <Link href="/" className="flex items-center space-x-2">
<div className="relative h-20 w-20">
  <img src="/logo2.png" alt="Logo" className="h-20 w-20" />
</div>

  <span className="font-bold text-xl bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
    Jangga Jaya Kontruksi
  </span>
</Link>


        {/* Desktop Navigation - Moved to right */}
        <nav className="hidden md:flex items-center">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-white md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium p-2 hover:bg-zinc-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
