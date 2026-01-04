import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Droplets, Flame, CheckCircle } from "lucide-react";
import productsImage from "@/assets/products-bg.jpg";

const Products = () => {
  const products = [
    {
      icon: Shield,
      title: "Antimicrobial Solutions",
      description: "Advanced green carbon formulations for fabric applications",
      benefits: [
        "Effective inhibition against bacteria",
        "1.15× production efficiency elevation",
        "Superior yarn durability"
      ],
      patent: "202531064304",
      performance: "143× stronger shield against corrosion"
    },
    {
      icon: Droplets,
      title: "Anticorrosive Coatings", 
      description: "Revolutionary carbon-based protective coatings",
      benefits: [
        "Up to 50% cost reduction",
        "1.37× more hydrophobic surface",
        "3.5× scratch resistance"
      ],
      patent: "202531022904",
      performance: "Roughness cut by nearly a third"
    },
    {
      icon: Flame,
      title: "Fire Retardant Materials",
      description: "Self-extinguishing carbon composite formulations",
      benefits: [
        "Superior self-extinguishing behavior",
        "Up to 7 ignition cycles",
        "Enhanced safety performance"
      ],
      patent: "202531072429",
      performance: "1.28× smoother coating finish"
    }
  ];

  return (
    <section id="products" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-sm text-primary font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Our Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Advanced Carbon Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative green carbon formulations delivering superior performance 
            across multiple industrial applications with patented technology.
          </p>
        </div>

        {/* Hero Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={productsImage}
              alt="Green Carbon Products"
              className="rounded-2xl shadow-card w-full"
            />
          </div>
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">Patent Protected</Badge>
              <h3 className="text-3xl font-bold mb-4">
                From Agricultural Waste to High-Value Products
              </h3>
              <p className="leading-relaxed" style={{ color: '#647a88' }}>
                Our patented technology transforms agricultural residues into premium carbon materials,
                delivering exceptional performance while maintaining environmental sustainability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">143×</div>
                <div className="text-sm text-muted-foreground">Performance Boost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="card-hover border-primary/20 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Patent: {product.patent}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3 mb-4">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-primary/5 rounded-lg">
                  <div className="text-sm font-medium text-primary">Performance</div>
                  <div className="text-sm text-muted-foreground">{product.performance}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;