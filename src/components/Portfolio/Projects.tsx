import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Video, Users, MessageSquare, Share2, StickyNote } from "lucide-react";

const projects = [
  {
    title: "ZoomGpt",
    description: "A secure video conferencing platform with real-time chat, screen sharing, and an intuitive ReactJS UI, augmented with LLM-powered modules for meeting summarization and querying of recorded sessions.",
    technologies: ["Prisma", "OpenAI", "NextJS", "Express", "React", "Node"],
    github: "https://github.com/ajay47k/ZoomGpt.git",
    features: [
      "Real-time video conferencing",
      "Screen sharing capabilities", 
      "AI-powered meeting summarization",
      "Chat functionality",
      "Session recording and querying"
    ],
    highlights: ["LLM Integration", "Real-time Communication", "Secure Platform"]
  },
  {
    title: "Neon Notes",
    description: "A modern note-taking web application built with Next.js, Supabase, and Firebase, designed for secure, fast, and collaborative note management with PDF and image upload support.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Firebase", "Auth"],
    github: "https://github.com/ajay47k/neon-notes",
    features: [
      "User authentication with Supabase Auth",
      "Notes and topics management",
      "PDF and image uploads",
      "Profile management",
      "Responsive UI with modern components",
      "Secure environment variables management"
    ],
    highlights: ["Modern UI", "File Upload", "Secure Authentication"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in full-stack development and AI integration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-shadow gradient-secondary-bg border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {project.title === "Neon Notes" ? (
                        <StickyNote className="w-5 h-5 text-primary" />
                      ) : (
                        <Video className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>

                <div>
                  <h4 className="font-medium mb-3 text-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3 text-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;