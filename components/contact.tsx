import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Dribbble } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-neobrutalism-gray relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white neo-brutalism-border border-l-0 border-r-0 border-t-0 transform rotate-1"></div>
      <div className="absolute top-40 left-10 w-32 h-32 bg-neobrutalism-yellow neo-brutalism-border transform rotate-12 opacity-50"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-neobrutalism-pink neo-brutalism-border transform -rotate-6 opacity-50"></div>

      <div className="container mx-auto px-4 pt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black inline-block bg-neobrutalism-green px-6 py-2 neo-brutalism-border transform rotate-1">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto mt-8 bg-white p-6 neo-brutalism-border">
            <p className="text-black text-xl">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me through
              the form below or via my social media channels.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white neo-brutalism-border neo-brutalism-shadow transform rotate-1">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-black mb-6 bg-neobrutalism-blue inline-block px-4 py-1 neo-brutalism-border transform -rotate-1">
                Send Me a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-bold text-black mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="w-full neo-brutalism-border bg-neobrutalism-gray text-black p-3 text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-bold text-black mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full neo-brutalism-border bg-neobrutalism-gray text-black p-3 text-lg"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-lg font-bold text-black mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="w-full neo-brutalism-border bg-neobrutalism-gray text-black p-3 text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-bold text-black mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="w-full neo-brutalism-border bg-neobrutalism-gray text-black p-3 min-h-[150px] text-lg"
                  />
                </div>
                <Button className="w-full bg-neobrutalism-purple text-white font-bold text-xl p-6 neo-brutalism-button">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 neo-brutalism-border neo-brutalism-shadow mb-8 transform -rotate-1">
              <h3 className="text-3xl font-bold text-black mb-6 bg-neobrutalism-pink inline-block px-4 py-1 neo-brutalism-border">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neobrutalism-yellow p-3 neo-brutalism-border">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-black">Email</h4>
                    <p className="text-black text-lg">rizal@example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neobrutalism-blue p-3 neo-brutalism-border">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-black">Phone</h4>
                    <p className="text-black text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neobrutalism-green p-3 neo-brutalism-border">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-black">Location</h4>
                    <p className="text-black text-lg">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 neo-brutalism-border neo-brutalism-shadow transform rotate-1">
              <h3 className="text-3xl font-bold text-black mb-6 bg-neobrutalism-orange inline-block px-4 py-1 neo-brutalism-border transform -rotate-1">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="w-16 h-16 bg-neobrutalism-purple neo-brutalism-border flex items-center justify-center hover:translate-y-[-5px] transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-8 h-8 text-white" />
                </a>
                <a
                  href="#"
                  className="w-16 h-16 bg-neobrutalism-blue neo-brutalism-border flex items-center justify-center hover:translate-y-[-5px] transition-transform"
                  aria-label="Twitter"
                >
                  <Twitter className="w-8 h-8 text-white" />
                </a>
                <a
                  href="#"
                  className="w-16 h-16 bg-neobrutalism-pink neo-brutalism-border flex items-center justify-center hover:translate-y-[-5px] transition-transform"
                  aria-label="Dribbble"
                >
                  <Dribbble className="w-8 h-8 text-white" />
                </a>
                <a
                  href="#"
                  className="w-16 h-16 bg-neobrutalism-green neo-brutalism-border flex items-center justify-center hover:translate-y-[-5px] transition-transform"
                  aria-label="GitHub"
                >
                  <Github className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
