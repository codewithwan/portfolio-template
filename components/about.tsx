import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 diagonal-lines opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 dots-pattern opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black inline-block bg-neobrutalism-yellow px-6 py-2 neo-brutalism-border transform -rotate-1">
            About Me
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto neo-brutalism-image">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Rizal"
                  width={400}
                  height={400}
                  className="neo-brutalism-border neo-brutalism-shadow object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neobrutalism-pink neo-brutalism-border z-[-1]"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-neobrutalism-blue neo-brutalism-border z-[-1]"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-neobrutalism-gray p-8 neo-brutalism-border neo-brutalism-shadow">
              <h3 className="text-2xl font-bold text-black mb-6 bg-neobrutalism-green inline-block px-4 py-1 neo-brutalism-border">
                UI/UX Designer
              </h3>
              <p className="text-black mb-6 text-lg">
                Hello! I'm Rizal, a UI/UX designer with a keen eye for detail and a passion for creating user-centered
                designs. With a background in both design and user psychology, I bring a holistic approach to every
                project.
              </p>
              <p className="text-black mb-6 text-lg">
                I believe that great design is not just about aesthetics, but about solving problems and creating
                intuitive experiences that users love. My design process involves deep research, collaborative ideation,
                and iterative testing to ensure the final product exceeds expectations.
              </p>
              <p className="text-black text-lg">
                When I'm not designing, you can find me exploring new design trends, attending UX workshops, or
                sketching ideas for future projects. I'm always eager to take on new challenges and collaborate with
                forward-thinking teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
