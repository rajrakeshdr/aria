import { Card, CardContent } from "@/components/ui/card";

const featuredCandles = [
  {
    id: 1,
    name: "Lavender Dreams",
    description: "Soothing lavender blend with vanilla undertones",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
  },
  {
    id: 2,
    name: "Citrus Sunrise",
    description: "Energizing mix of orange and lemon essential oils",
    image: "https://images.unsplash.com/photo-1608263153703-caa6b0fd7b1c",
  },
  {
    id: 3,
    name: "Forest Pine",
    description: "Fresh pine scent with cedar wood notes",
    image: "https://images.unsplash.com/photo-1605651202774-7d573fd3f12d",
  },
];

const FeaturedCandles = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCandles.map((candle) => (
            <Card key={candle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={candle.image}
                  alt={candle.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{candle.name}</h3>
                  <p className="text-gray-600">{candle.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCandles;