import { Figma, Palette, Layers, Layout, PenTool, Smartphone } from "lucide-react"

export function Skills() {
  const skills = [
    {
      title: "UI Design",
      icon: <Layout className="w-12 h-12" />,
      description: "Creating visually appealing interfaces with attention to layout, typography, and color theory.",
      color: "bg-neobrutalism-purple",
    },
    {
      title: "UX Design",
      icon: <Layers className="w-12 h-12" />,
      description: "Designing user-centered experiences through research, wireframing, and usability testing.",
      color: "bg-neobrutalism-yellow",
    },
    {
      title: "Figma",
      icon: <Figma className="w-12 h-12" />,
      description: "Expert in using Figma for design, prototyping, and collaboration.",
      color: "bg-neobrutalism-pink",
    },
    {
      title: "Canva",
      icon: <Palette className="w-12 h-12" />,
      description: "Creating graphics, presentations, and marketing materials with Canva.",
      color: "bg-neobrutalism-blue",
    },
    {
      title: "Illustration",
      icon: <PenTool className="w-12 h-12" />,
      description: "Custom illustrations and graphics to enhance visual storytelling.",
      color: "bg-neobrutalism-green",
    },
    {
      title: "Responsive Design",
      icon: <Smartphone className="w-12 h-12" />,
      description: "Ensuring designs work seamlessly across all device sizes and platforms.",
      color: "bg-neobrutalism-orange",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-neobrutalism-gray relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white neo-brutalism-border border-l-0 border-r-0 border-t-0 transform -rotate-1"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white neo-brutalism-border border-l-0 border-r-0 border-b-0 transform rotate-1"></div>

      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black inline-block bg-neobrutalism-pink px-6 py-2 neo-brutalism-border transform rotate-1">
            My Skills
          </h2>
          <div className="max-w-2xl mx-auto mt-8 bg-white p-6 neo-brutalism-border">
            <p className="text-black text-xl">
              I specialize in creating user-centered designs using the latest tools and methodologies. Here are some of
              the key skills and tools I work with.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.color} p-6 neo-brutalism-card transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center neo-brutalism-border mb-4">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{skill.title}</h3>
              <p className="text-black font-medium">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
