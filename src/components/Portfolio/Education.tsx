import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Engineering in Software Engineering",
    institution: "University of Maryland, College Park",
    location: "College Park, MD",
    period: "August 2023 – May 2025",
    type: "Master's Degree"
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Amity University",
    location: "India",
    period: "August 2016 – May 2020",
    type: "Bachelor's Degree"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and software engineering
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="card-shadow gradient-secondary-bg border-border/50">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {edu.type}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-base font-medium">
                      {edu.institution}
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;