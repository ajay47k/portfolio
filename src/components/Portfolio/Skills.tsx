import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, TestTube, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "Python", "SQL", "NoSQL", "JavaScript", "TypeScript", "HTML/CSS", "XML"]
  },
  {
    title: "Technologies",
    icon: Wrench,
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "React", "Angular", "NodeJS", "OpenAI", "Kafka", "RabbitMQ", "JWT", "PyTorch", "Keras", "TensorFlow", "MCP Server", "RESTAPI", "GraphQL", "WebSocket", "gRPC", "RAG", "LLM"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Hibernate", "Spring Data JPA", "JDBC", "PostgreSQL", "MySQL", "Redis", "Elasticsearch", "MongoDB", "Cassandra"]
  },
  {
    title: "AWS Skills",
    icon: Cloud,
    skills: ["EC2", "ECS", "EKS", "S3", "Lambda", "RDS", "DynamoDB", "CloudWatch", "Elastic Load Balancing", "Terraform"]
  },
  {
    title: "Dev Tools",
    icon: TestTube,
    skills: ["Git", "Docker", "GitLab", "GCP", "Azure", "Kubernetes", "Maven", "Gradle", "Jenkins", "GitHub Copilot", "Cursor"]
  },
  {
    title: "Testing & QA",
    icon: TestTube,
    skills: ["JUnit", "Mockito", "TestNG", "Postman", "TDD(Test Driven Development)"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern development technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-shadow gradient-secondary-bg border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;