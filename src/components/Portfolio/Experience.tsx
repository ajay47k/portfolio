import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "University of Maryland",
    location: "College Park, MD",
    period: "September 2024 – May 2025",
    achievements: [
      "Developed and deployed an LSTM deep learning model on Amazon SageMaker to predict irrigation amounts, achieving 95% accuracy and exposing its functionality using a web application.",
      "Engineered a serverless data pipeline using AWS Lambda to aggregate weather API and IoT sensor data hourly, increasing data collection reliability by 90% over the previous cron job-based approach.",
      "Automated Twilio-based SMS/email alerts, reducing water stress events by 30% through proactive notifications."
    ],
    technologies: ["Amazon SageMaker", "AWS Lambda", "LSTM", "Twilio", "IoT"]
  },
  {
    title: "Software Engineer Intern",
    company: "LGS Tech",
    location: "Baltimore, USA",
    period: "May 2024 – August 2024",
    achievements: [
      "Led development of an intelligent service order processing system using Java Spring Boot, achieving a 40% reduction in processing time by leveraging virtual threads to handle over 1,000 concurrent claims.",
      "Enhanced service order analysis by integrating Claude 3 API with a custom LangChain pipeline that automatically extracts, classifies, and validates service request data, reducing manual review time by 65%.",
      "Developed annotation-based smart caching using Spring AOP and Redis, optimizing system performance and cutting service order verification latency from 140 ms to 40 ms during peak load.",
      "Strengthened application security by implementing Role-Based Access Control (RBAC), OAuth 2.0, and OpenID Connect (OIDC) for robust authentication and authorization."
    ],
    technologies: ["Java", "Spring Boot", "Claude 3 API", "LangChain", "Redis", "OAuth 2.0", "RBAC"]
  },
  {
    title: "Software Engineer",
    company: "Tata Consultancy Services",
    location: "New Delhi, India",
    period: "October 2020 – July 2023",
    achievements: [
      "Architected cloud-native microservices on AWS with Spring Boot and JPA for a shipment processing system, integrating multiple logistics systems, achieving 35% lower latency, and supporting 50K daily shipments.",
      "Configured additional Kafka topics and partitions in the preexisting AWS MSK cluster, enabling scalable processing of 500K daily shipping events and improving real-time tracking across microservices.",
      "Developed a performance dashboard using the ELK Stack to monitor API endpoint traffic for up to 500 endpoints, which helped in generating alerts and detecting issues, reducing incident detection time by 40%.",
      "Conducted comprehensive testing of Java Spring Boot applications using JUnit and Mockito, reducing post-release defects by 30% through rigorous test case design and execution.",
      "Reduced UI build time from 45 seconds to under 1 second by utilizing a lazy loading pattern and selectively fetching JSON data from a Java Spring Boot microservice based on screen size and user scroll for the shipment logs page."
    ],
    technologies: ["AWS", "Spring Boot", "JPA", "Kafka", "MSK", "ELK Stack", "JUnit", "Mockito"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and driving innovation across diverse technology stacks
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow gradient-secondary-bg border-border/50">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base mt-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;