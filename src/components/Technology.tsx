import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Recycle, Leaf, TrendingUp, CheckCircle } from "lucide-react";
import technologyImage from "@/assets/technology-bg.jpg";

const Technology = () => {
  const processSteps = [
    {
      step: "01",
      title: "Agricultural Waste Collection",
      description: "Systematic collection of agricultural residues from various sources"
    },
    {
      step: "02", 
      title: "Patented Processing",
      description: "Advanced green chemistry transformation using our proprietary technology"
    },
    {
      step: "03",
      title: "Quality Formulation",
      description: "Precision engineering of carbon materials for specific applications"
    },
    {
      step: "04",
      title: "Industrial Application",
      description: "Deployment in high-value industrial and commercial products"
    }
  ];

  const advantages = [
    "Cost-effective solution for easy industrial adoption",
    "Exceptional supply sustainability",
    "Patented lab validated research ready for commercialization", 
    "Professional company with proven technology"
  ];

  return (
    <section id="technology" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm text-primary font-medium mb-4">
            <Cpu className="w-4 h-4" />
            <span>Our Technology</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Patented Innovation</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced green carbon formulations delivering customized solutions with 
            end-to-end support from pilot deployment to full-scale implementation.
          </p>
        </div>

        {/* Technology Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">Climate Tech Innovation</Badge>
              <h3 className="text-3xl font-bold mb-4">
                Transforming Waste into Value
              </h3>
              <p className="leading-relaxed mb-6" style={{ color: '#647a88' }}>
                Sabuj Tech solved the twin problems of sustainable carbon production along with zero
                agricultural waste disposal, with their patented technology. The solution offered aims
                to solve bigger environmental problems to make a carbon neutral society.
              </p>
            </div>

            {/* Key Advantages */}
            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{advantage}</span>
                </div>
              ))}
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <Recycle className="w-6 h-6 text-primary mb-2" />
                <div className="text-lg font-bold">Zero Waste</div>
                <div className="text-sm text-muted-foreground">Complete utilization</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary mb-2" />
                <div className="text-lg font-bold">Carbon Negative</div>
                <div className="text-sm text-muted-foreground">Environmental impact</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={technologyImage}
              alt="Green Carbon Technology Process"
              className="rounded-2xl shadow-card w-full"
            />
            <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-2xl"></div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="hero-text">Process Flow</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <Card key={index} className="card-hover border-primary/20 relative">
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold"
                    style={{ background: "linear-gradient(135deg, #1fa463, #145c2c)" }}
                  >
                    {process.step}
                  </div>
                  <h4 className="font-semibold mb-3">{process.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div
          className="rounded-3xl p-8 lg:p-12 shadow-card"
          style={{ background: "linear-gradient(to bottom right, white,  #d7f2e3)" }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
              <p className="text-muted-foreground">
                Our patented formulations deliver exceptional performance across multiple applications 
                while maintaining environmental sustainability.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">1.15×</div>
                <div className="font-semibold mb-1">Production Efficiency</div>
                <div className="text-sm text-muted-foreground">Superior yarn durability</div>
              </div>
              
              <div className="p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">1.37×</div>
                <div className="font-semibold mb-1">Hydrophobic Surface</div>
                <div className="text-sm text-muted-foreground">Enhanced water resistance</div>
              </div>
              
              <div className="p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">3.5×</div>
                <div className="font-semibold mb-1">Scratch Resistance</div>
                <div className="text-sm text-muted-foreground">Improved durability</div>
              </div>
              
              <div className="p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <div className="font-semibold mb-1">Ignition Cycles</div>
                <div className="text-sm text-muted-foreground">Fire retardant capability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;