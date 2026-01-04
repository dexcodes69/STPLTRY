import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Products from "@/components/Products";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Technology />
      <Products />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;