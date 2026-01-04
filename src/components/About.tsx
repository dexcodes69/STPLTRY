import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm text-primary font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>About Sabuj Tech</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Leading the <span className="hero-text">Green Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabuj Tech is a Climate tech startup preparing carbon materials from agricultural residues 
            for high-value applications, ensuring long-term sustainable solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <div
          className="rounded-3xl p-8 lg:p-12 mb-16 shadow-card"
          style={{ background: "linear-gradient(145deg, white, #d7f2e3)" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed" style={{ color: '#647a88' }}>
                To lead the transformation of agro-waste residues into high-impact carbon innovations,
                establishing strong market differentiation through significant entry barriers, all while
                accelerating progress toward a climate-positive future.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Patented Solutions</h4>
                  <p className="text-sm" style={{ color: '#647a88' }}>Lab validated research ready for commercialization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Sustainable Innovation</h4>
                  <p className="text-sm" style={{ color: '#647a88' }}>Solving environmental problems with cutting-edge technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-hover border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">IIT Kharagpur</h3>
              <p className="text-sm" style={{ color: '#647a88' }}>
                Research collaboration with premier institution
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Patented Technology</h3>
              <p className="text-sm" style={{ color: '#647a88' }}>
                Multiple patents filed for innovative processes
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Zero Waste</h3>
              <p className="text-sm" style={{ color: '#647a88' }}>
                Complete agricultural waste utilization
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover border-primary/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm" style={{ color: '#647a88' }}>
                Led by renowned researchers and industry experts
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;