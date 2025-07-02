import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PropertyGrid />
    </div>
  );
};

export default Index;
