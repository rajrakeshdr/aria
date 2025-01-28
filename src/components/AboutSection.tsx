const AboutSection = () => {
  return (
    <section className="py-16 bg-peach bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Handcrafted with Love</h2>
          <p className="text-lg text-gray-600 mb-12">
            Each candle is carefully crafted using premium soy wax, natural essential oils, and cotton wicks. 
            Our artisans pour their heart into every creation, ensuring your custom candle is perfect down to the last detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Premium Materials</h3>
              <p className="text-gray-600">100% natural soy wax and essential oils</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Hand-Poured</h3>
              <p className="text-gray-600">Carefully crafted in small batches</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable materials and packaging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;