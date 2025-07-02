import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="relative py-16 px-6">
      <div className="absolute inset-0 bg-hero-bg"></div>
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Not sure where to go?
            <span className="block text-transparent bg-hero-gradient bg-clip-text">
              Perfect.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find unique places to stay and experiences that match your vibe
          </p>
        </div>
        
        <SearchBar />
      </div>
    </section>
  );
};

export default Hero;