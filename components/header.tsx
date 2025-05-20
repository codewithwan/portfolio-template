"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white neo-brutalism-border border-t-0 border-l-0 border-r-0 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-neobrutalism-purple text-white px-4 py-1 neo-brutalism-border rotate-2"
        >
          Rizal
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {[
            { name: "Home", color: "bg-neobrutalism-purple" },
            { name: "About", color: "bg-neobrutalism-yellow" },
            { name: "Skills", color: "bg-neobrutalism-pink" },
            { name: "Portfolio", color: "bg-neobrutalism-blue" },
            { name: "Contact", color: "bg-neobrutalism-green" },
          ].map((item) => (
            <Link
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className={`${item.color} text-black font-bold px-4 py-2 neo-brutalism-button hover:rotate-1`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden neo-brutalism-button bg-neobrutalism-yellow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white neo-brutalism-border border-t-0 py-4 md:hidden">
            <nav className="flex flex-col space-y-2 px-4">
              {[
                { name: "Home", color: "bg-neobrutalism-purple" },
                { name: "About", color: "bg-neobrutalism-yellow" },
                { name: "Skills", color: "bg-neobrutalism-pink" },
                { name: "Portfolio", color: "bg-neobrutalism-blue" },
                { name: "Contact", color: "bg-neobrutalism-green" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className={`${item.color} text-black font-bold px-4 py-2 neo-brutalism-button`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
