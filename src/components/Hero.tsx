import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-b from-cream to-peach flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-left space-y-6 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Craft Your Perfect
            <span className="block text-rose">Custom Candle</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Design a unique candle that matches your style and fills your space with personalized warmth and fragrance.
          </p>
          <Button className="bg-lavender text-gray-800 hover:bg-rose transition-colors">
            Start Designing
          </Button>
        </div>
        <div className="lg:w-1/2 animate-float">
          <img
            src="https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6"
            alt="Custom candle showcase"
            className="rounded-2xl shadow-2xl max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;