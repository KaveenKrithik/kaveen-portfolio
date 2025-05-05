"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Code, Github, Linkedin, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const techStackRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Fixed Navigation */}
      <nav className="fixed top-4 right-4 z-50 flex gap-2">
        <ThemeToggle />
      </nav>

      {/* Fixed Side Navigation */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <ArrowDown className="h-4 w-4 rotate-180" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSection(aboutRef)}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <User className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSection(techStackRef)}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Code className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSection(projectsRef)}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Github className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSection(contactRef)}
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Mail className="h-4 w-4" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            KAVEEN KRITHIK
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Crafting digital experiences that blend creativity with technical excellence
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection(projectsRef)}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
          >
            View My Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-10 cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        style={{ opacity, scale, y }}
        className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
        id="about"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-md" />
              <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                <User className="h-24 w-24 text-foreground/70" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              About Me
            </h2>
            <p className="text-foreground/80 mb-4">
              I'm a passionate Full Stack Developer with a keen eye for detail and a commitment to creating efficient,
              scalable, and user-friendly applications. With expertise in both frontend and backend technologies, I
              bridge the gap between design and functionality.
            </p>
            <p className="text-foreground/80 mb-6">
              My approach combines creative problem-solving with technical expertise to deliver solutions that not only
              meet but exceed expectations. I'm constantly learning and adapting to new technologies to stay at the
              forefront of web development.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                onClick={() => window.open("https://github.com/KaveenKrithik", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <section ref={techStackRef} className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="tech-stack">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
          Tech Stack
        </h2>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools & Others</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Framer Motion"].map(
                (tech) => (
                  <TechCard key={tech} name={tech} />
                ),
              )}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL", "REST API", "Supabase"].map(
                (tech) => (
                  <TechCard key={tech} name={tech} />
                ),
              )}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel", "Figma", "Jest"].map((tech) => (
                <TechCard key={tech} name={tech} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* DAA E-LAB COMPLETION */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="daa-elab">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
          DAA E-LAB COMPLETION
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-border bg-card/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
            <CardContent className="p-6">
              <div className="aspect-video relative mb-4">
                <img
                  src="/comp.png"
                  alt="DAA E-LAB Completion"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-muted-foreground text-center">DAA E-LAB Completion</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden border-border bg-card/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
            <CardContent className="p-6">
              <div className="aspect-video relative mb-4">
                <img
                  src="/comp1.png"
                  alt="DAA E-LAB Completion"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-muted-foreground text-center">DAA E-LAB Completion</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Real world DAA Project */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="daa-project">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
          Real world DAA Project
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          <ProjectCard
            title="CARGO-MASTER"
            description="A comprehensive implementation of Knapsack algorithm and data structures, demonstrating practical applications in real-world cargo management. This project showcases efficient problem-solving techniques and optimization strategies."
            technologies={["Algorithms", "Data Structures", "TypeScript", "Next.js"]}
            githubUrl="https://github.com/KaveenKrithik/CargoMaster"
            demoUrl="https://github.com/KaveenKrithik/CargoMaster"
          />
        </div>
      </section>

      {/* Projects */}
      <section
        ref={projectsRef}
        className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-background/80"
        id="projects"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="ClubSphere"
              description="A centralized web platform using Next.js and Node.js that enables SRMIST students to seamlessly discover, register for hackathons and workshops, and join clubs — solving the problem of missed opportunities due to scattered event communication and manual promotions."
              technologies={["Next.js", "Node.js"]}
              githubUrl="https://github.com/KaveenKrithik/ClubSphereV2"
              demoUrl="https://club-sphere-srm.vercel.app/"
            />
            <ProjectCard
              title="Creatives Control"
              description="A web-based IP Marketplace and Dashboard for Clients and Legal Advisors using NextJs, Node.js and
Supabase, allowing creators to securely showcase, license, and manage their intellectual property — fostering
innovation and simplifying rights management in a digital-first environment."
              technologies={["Next.Js", "Firebase", "Chart.js"]}
              githubUrl="https://github.com/KaveenKrithik/Creatives-Control"
              demoUrl="https://creatives-control.vercel.app/"
            />
            <ProjectCard
              title="RepXplore"
              description="Developed a gym application using ReactJs and Tailwind CSS for a responsive and user-friendly interface."
              technologies={["React", "Tailwind CSS", "GenAI"]}
              githubUrl="https://github.com/KaveenKrithik/RepXplore"
              demoUrl="https://repxplore.vercel.app/"
            />
            <ProjectCard
              title="IoTA Forum"
              description="Developed a forum platform for IoTAlliance, a tech club at my college, using React.js and Firebase for real-time
communication."
              technologies={["React", "Firebase", "Tailwind CSSS"]}
              githubUrl="https://github.com/KaveenKrithik/IoTA-Forum-Prototype"
              demoUrl="https://iota-forum-test.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="contact">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
          Get In Touch
        </h2>

        <div className="bg-card p-8 rounded-xl border border-border max-w-md mx-auto shadow-lg">
          <p className="text-card-foreground/80 mb-6 text-center">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>

          <a
            href="mailto:kaveenkrithik11@gmail.com"
            className="flex items-center justify-center w-full p-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            kaveenkrithik11@gmail.com
          </a>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/KaveenKrithik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaveen-krithik-578797311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:kaveenkrithik11@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} | Kaveen Krithik</p>
      </footer>
    </div>
  )
}

function TechCard({ name }: { name: string }) {
  return (
    <Card className="overflow-hidden border-border bg-card/50 hover:bg-card/80 transition-colors group">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">{name}</span>
          <Code className="h-4 w-4 text-muted-foreground group-hover:text-purple-400 transition-colors" />
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
}: {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
}) {
  return (
    <Card className="overflow-hidden border-border bg-card/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-muted"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" /> View Code
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
            onClick={() => window.open(demoUrl, "_blank")}
          >
            Live Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
