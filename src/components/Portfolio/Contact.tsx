import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities to build amazing software together
          </p>
        </div>

        <Card className="card-shadow gradient-secondary-bg border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Connect?</CardTitle>
            <CardDescription className="text-base">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">Contact Information</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <p className="text-sm text-muted-foreground">ajay.sengar1207@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Phone</p>
                        <p className="text-sm text-muted-foreground">+1-(240)-501-5100</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-card">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">Location</p>
                        <p className="text-sm text-muted-foreground">United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">Connect With Me</h3>
                  
                  <div className="space-y-3">
                    <Button className="w-full justify-start glow-effect" asChild>
                      <a href="mailto:ajay.sengar1207@gmail.com">
                        <Send className="w-4 h-4 mr-3" />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://linkedin.com/in/ajay-sengar" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-3" />
                        LinkedIn Profile
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="https://github.com/ajay47k" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-3" />
                        GitHub Profile
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Open to opportunities:</strong> Full-time positions, 
                    freelance projects, and exciting collaborations in software engineering.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;