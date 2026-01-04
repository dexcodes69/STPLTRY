import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Prakash Ajay Taksal",
      role: "Chief Executive Officer",
      expertise: "Research and Product Development Venture | Technology Transfer | Intellectual Property Portfolio Management",
      background: "Environmental Science and Engineering",
      image: "/PAT.png",
    },
    {
      name: "Dr. Jayanta Bhattacharya",
      role: "Managing Director",
      expertise: "Green Materials | Industrial Ecology",
      background: "Ex-Professor, Department Mining Engineering and School of Environmental Science & Engineering, IIT Kharagpur",
      image: "/JB.png",
    },
    {
      name: "Dr. Bidus Kanti Das",
      role: "Business Advisor",
      expertise: "Industrial Manufacturing | Marketing Strategist",
      background: "Sustainable Technology Development",
      image: "/BKD.png",
    },
    {
      name: "Dr. Chandra Sekhar Tiwari",
      role: "Technical Advisor",
      expertise: "Advanced Materials | Strategic Development & Innovation",
      background: "Assistant Professor Grade I, Department of Metallurgical & Materials Engineering, IIT Kharagpur",
      image: "/CST.png",
    }
  ];

  return (
    <section id="team" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm text-primary font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Expert <span className="hero-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team combines deep scientific expertise with industry experience to drive 
            innovation in sustainable carbon technology and agricultural waste transformation.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-muted-foreground">PhD Experts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Patents Filed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1</div>
            <div className="text-sm text-muted-foreground">IIT Partnership</div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="block transition-transform hover:scale-[1.02]"
            >
                <Card className="card-hover border-primary/20 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Avatar Image */}
                      <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-primary/10 border border-primary/20">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <Badge variant="secondary" className="mt-1">
                              {member.role}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-medium text-primary">Expertise:</span>
                            <p className="text-sm text-muted-foreground">{member.expertise}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary">Background:</span>
                            <p className="text-sm text-muted-foreground">{member.background}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </div>
          ))}
        </div>

        {/* Institution Partnership */}
        <div
          className="mt-16 p-8 rounded-2xl shadow-card text-center"
          style={{ background: "linear-gradient(145deg , white, #d7f2e3)" }}
        >
          <div className="max-w-2xl mx-auto">
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-muted-foreground mb-4">
              Backed by the research excellence of Indian Institute of Technology Kharagpur, 
              West Bengal, India - one of the premier technical institutions in the country.
            </p>
            <Badge variant="outline" className="text-primary border-primary">
              IIT Kharagpur Partnership
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;