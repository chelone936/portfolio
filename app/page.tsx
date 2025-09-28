"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", 'education', "work", "projects", "skills", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
<div className="lg:col-span-3 space-y-6 sm:space-y-8">
  <div className="space-y-3 sm:space-y-2">
    <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
      Edeal
      <br />
      <span className="text-muted-foreground">Aschalew</span>
    </h1>
  </div>

  <div className="space-y-6 max-w-md">
<p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
  Fullstack Developer combining <span className="text-foreground">AI</span>, <span className="text-foreground">business</span>, and <span className="text-foreground">technology</span> to craft intuitive, high-impact digital solutions.
</p>


    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        Open to new opportunities
      </div>
      <div>Ethiopia</div>
    </div>
  </div>
</div>


            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">


              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">QUICK FACTS</div>
                <div className="space-y-3">
                  {/* <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-foreground">5+ years experience</span>
                  </div> */}
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-foreground">Full-stack developer</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-foreground">AI/ML enthusiast</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Python", "AI/ML"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <section
          id="education"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Education</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
  year: "2027",
  role: "Information Systems",
  company: "Addis Ababa University",
  description: "Studying core Information Systems topics including database design, system analysis, software engineering, and data analytics, with hands-on practice in developing business-oriented applications and managing information workflows.",
  tech: ["Python", "SQL", "JavaScript", "Java"],
}

              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="work"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experince</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  role: "AI Engineer Intern",
                  company: "Mcleuker (Remote)",
                  description: "",
                  tech: ["Python", "TensorFlow", "LLMs", "APIs"],
                },
                {
                  year: "2024",
                  role: "Full Stack Freelancer",
                  company: "Self-employed",
                  description: "Delivered end-to-end web and web solutions for clients, integrating business logic and modern tech stacks.",
                  tech: ["Next.js", "Node.js", "TypeScript", "Javascript"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">SELECTED WORK</div>
            </div>

            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
              {[
                {
                  title: "NextSira – AI Powered Hiring Platform for Ethiopian Businesses",
                  description:
                    "Automates candidate-job matching, provides AI-driven summaries, generates resumes and cover letters, and aggregates listings from 20+ job sites.",
                  tech: ["Next.js", "Django", "Python", "LLMs", "Web Scraping", "Automation Scripts"],
                  status: "AI",
                  year: "2025",
                  link: "https://github.com/chelone936/next-sira",

                  source: "View Project",
                },
                {
                  title: "Shemeta – Personalized Crop Recommendations & Marketplace for Farmers",
                  description:
                    "Won 2nd Place at Reboot the Earth 2025; ML model combines satellite imagery and market data for crop suggestions, with multilingual support.",
                  tech: ["Django", "SQLite", "Next.js", "TensorFlow"],
                  status: "Data Analysis",
                  year: "2025",
                  link: "https://github.com/chelone936/shemeta",
                  source: "View Project",
                },
                {
                  title: "Sync-Chat – Context-Aware AI Assistant Platform",
                  description:
                    "Deploys AI assistants in minutes via URL, automates site crawling and embedding, supports multi-site management and embeddable widgets.",
                  tech: ["Python", "Django", "PostgreSQL", "Next.js"],
                  status: "RAG",
                  year: "2025",
                  link: "https://github.com/chelone936/sync-chat",

                  source: "View Project",
                },
                {
                  title: "Felagi – Amharic Information Retrieval System",
                  description:
                    "Full-stack Amharic news search platform with custom NLP, inverted indexing, and a public dataset of 11,000+ articles for low-resource language research.",
                  tech: ["Django", "Next.js", "Python", "BeautifulSoup", "ISR System", "SQLite"],
                  status: "NLP",
                  year: "2024",
                  link: "https://github.com/chelone936/felagi-isr",

                  source: "View Project",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                          <span>{project.year}</span>
                          <span
                            className={`px-2 py-1 rounded-full ${
                              project.status === "RAG"
                                ? "bg-green-500/10 text-green-500"
                                : project.status === "Data Analysis"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : project.status === "NLP"
                                ? "bg-yellow-500/10 text-purple-500"
                                : "bg-blue-500/10 text-blue-500"
                            }`}
                          >
                            {project.status}
                          </span>
                          <Link href={project.link}>
                                                    <span className="underline">{project.source}</span>

                          </Link>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" ref={(el) => (sectionsRef.current[4] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Skills & Technologies</h2>
              <div className="text-sm text-muted-foreground font-mono">TECH STACK</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {/* Languages */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-muted-foreground">Languages</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                  {[
                    { name: "Java", icon: "☕" },
                    { name: "Python", icon: "🐍" },
                    { name: "JavaScript", icon: "🟨" },
                    { name: "TypeScript", icon: "🔷" },
                    { name: "C++", icon: "⚡" },
                    { name: "SQL", icon: "🗃️" },
                    { name: "HTML", icon: "🌐" },
                    { name: "CSS", icon: "🎨" },
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                      style={{
                        animationDelay: `${index * 30}ms`,
                      }}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h4 className="font-medium text-xs group-hover:text-muted-foreground transition-colors duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Developer Tools */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-muted-foreground">Developer Tools</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                  {[
                    { name: "Docker", icon: "🐳" },
                    { name: "Postman", icon: "📮" },
                    { name: "Git", icon: "📝" },
                    { name: "Selenium", icon: "🔍" },
                    { name: "Supabase", icon: "⚡" },
                    { name: "Jupyter", icon: "📓" },
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                      style={{
                        animationDelay: `${index * 30}ms`,
                      }}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h4 className="font-medium text-xs group-hover:text-muted-foreground transition-colors duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Libraries / Frameworks */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-muted-foreground">Libraries / Frameworks</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                  {[
                    { name: "React", icon: "⚛️" },
                    { name: "Next.js", icon: "▲" },
                    { name: "Django", icon: "🎯" },
                    { name: "Flask", icon: "🌶️" },
                    { name: "PostgreSQL", icon: "🐘" },
                    { name: "Node.js", icon: "🟢" },
                    { name: "Express.js", icon: "🚂" },
                    { name: "LangChain", icon: "🔗" },
                    { name: "CrewAI", icon: "🤖" },
                  ].map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
                      style={{
                        animationDelay: `${index * 30}ms`,
                      }}
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className="text-lg group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <h4 className="font-medium text-xs group-hover:text-muted-foreground transition-colors duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          id="thoughts"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Recent Thoughts</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "The Future of Web Development",
                  excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
                  date: "Dec 2024",
                  readTime: "5 min",
                },
                {
                  title: "Design Systems at Scale",
                  excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
                  date: "Nov 2024",
                  readTime: "8 min",
                },
                {
                  title: "Performance-First Development",
                  excerpt: "Why performance should be a first-class citizen in your development workflow.",
                  date: "Oct 2024",
                  readTime: "6 min",
                },
                {
                  title: "The Art of Code Review",
                  excerpt: "Building better software through thoughtful and constructive code reviews.",
                  date: "Sep 2024",
                  readTime: "4 min",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        <section id="connect" ref={(el) => (sectionsRef.current[5] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:edealaschalew05@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">edealaschalew05@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="https://github.com/chelone936"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <div className="space-y-1">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        GitHub
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://linkedin.com/in/edealasc"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <div className="space-y-1">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        LinkedIn
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Edeal Aschalew. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group relative p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                <div className="relative w-4 h-4">
                  {isDark ? (
                    <svg
                      className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:rotate-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:-rotate-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </div>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-background border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {isDark ? "Light mode" : "Dark mode"}
                </span>
              </button>


            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
