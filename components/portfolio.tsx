import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce Redesign",
      category: "UX/UI Design",
      image: "/assets/profile.jpg",
      description:
        "A complete redesign of an e-commerce platform focusing on improving the user journey and increasing conversion rates.",
      link: "#",
      color: "bg-neobrutalism-purple",
      rotate: "rotate-2",
    },
    {
      title: "Finance App",
      category: "Mobile App Design",
      image: "/assets/project1.png",
      description:
        "A mobile banking application designed to simplify financial management with intuitive interfaces and data visualization.",
      link: "#",
      color: "bg-neobrutalism-yellow",
      rotate: "-rotate-1",
    },
    {
      title: "Travel Platform",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A travel booking platform with a focus on inspiring users through immersive imagery and streamlined booking process.",
      link: "#",
      color: "bg-neobrutalism-pink",
      rotate: "rotate-1",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-40 h-40 diagonal-lines opacity-10 transform rotate-12"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 dots-pattern opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black inline-block bg-neobrutalism-blue px-6 py-2 neo-brutalism-border transform -rotate-1">
            Featured Projects
          </h2>
          <div className="max-w-2xl mx-auto mt-8 bg-neobrutalism-gray p-6 neo-brutalism-border">
            <p className="text-black text-xl">
              Here are some of my recent projects that showcase my design process and problem-solving approach.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.color} neo-brutalism-card overflow-hidden transform ${project.rotate}`}
            >
              <div className="relative h-64 overflow-hidden neo-brutalism-border border-b-[3px] border-t-0 border-l-0 border-r-0">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="inline-block bg-white px-3 py-1 neo-brutalism-border text-sm font-bold mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-black mb-6 font-medium">{project.description}</p>
                <Button asChild className="bg-white text-black font-bold neo-brutalism-button">
                  <Link href={project.link} className="flex items-center gap-2">
                    View Project <ExternalLink size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild className="bg-neobrutalism-green text-black font-bold px-8 py-6 text-xl neo-brutalism-button">
            <Link href="#">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
