import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-neobrutalism-gray relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-neobrutalism-yellow rounded-full neo-brutalism-border rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neobrutalism-pink neo-brutalism-border -rotate-6"></div>
      <div className="absolute top-1/4 right-1/4 w-20 h-20 dots-pattern opacity-20"></div>

      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center z-10">
        <div className="w-32 h-32 rounded-full bg-neobrutalism-purple mb-8 flex items-center justify-center neo-brutalism-border transform rotate-3">
          <img src="/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>

        <div className="bg-white p-8 neo-brutalism-border neo-brutalism-shadow mb-8 transform -rotate-1 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black">
            Hi, I'm <span className="bg-neobrutalism-yellow px-2">Rizal</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-neobrutalism-pink inline-block px-4 py-2 neo-brutalism-border transform rotate-1">
            UI/UX Designer
          </h2>
          <p className="text-black text-xl max-w-2xl mx-auto mb-10 font-medium">
            nganu
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button asChild className="bg-neobrutalism-blue text-black font-bold px-8 py-6 text-xl neo-brutalism-button">
            <Link href="#portfolio">View My Work</Link>
          </Button>
          <Button asChild className="bg-neobrutalism-green text-black font-bold px-8 py-6 text-xl neo-brutalism-button">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <Link
          href="#about"
          className="mt-20 animate-bounce inline-block bg-white p-4 rounded-full neo-brutalism-border"
        >
          <ArrowDown size={24} />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  )
}
