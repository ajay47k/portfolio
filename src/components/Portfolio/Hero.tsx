import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Linkedin, Github, MapPin, Download } from "lucide-react";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="flex justify-center">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/20">
            <AvatarImage src="/lovable-uploads/348bbb99-51bc-4396-a6ad-a0715431024a.png" alt="Ajay Sengar" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Hero Badge */}
        <Badge variant="secondary" className="px-4 py-2 text-sm">
          Software Engineer
        </Badge>
        
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Ajay Sengar</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-Stack Software Engineer specializing in cloud technologies, 
            microservices architecture, and scalable web applications
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>United States</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1-(240)-501-5100</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>ajay.sengar1207@gmail.com</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" className="glow-effect">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          
          <Button variant="outline" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/ajay-sengar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/ajay47k" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;