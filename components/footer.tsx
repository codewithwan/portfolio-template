import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-12 bg-neobrutalism-gray neo-brutalism-border border-l-0 border-r-0 border-t-0 transform -rotate-1"></div>

      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-neobrutalism-purple text-white px-4 py-1 neo-brutalism-border rotate-2 inline-block"
            >
              Rizal
            </Link>
          </div>

          <div className="flex items-center text-lg bg-white text-black px-4 py-2 neo-brutalism-border">
            <p>© {new Date().getFullYear()} Rizal. All rights reserved.</p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center">
            <p className="flex items-center text-xl bg-neobrutalism-pink px-4 py-2 neo-brutalism-border">
              Made with <Heart className="w-5 h-5 mx-1 text-white" /> in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
