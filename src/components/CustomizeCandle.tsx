import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CustomizeCandle = () => {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedScent, setSelectedScent] = useState("lavender");

  return (
    <section className="py-16 bg-lavender bg-opacity-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Design Your Candle</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (4 oz)</SelectItem>
                  <SelectItem value="medium">Medium (8 oz)</SelectItem>
                  <SelectItem value="large">Large (12 oz)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="white">Pure White</SelectItem>
                  <SelectItem value="cream">Warm Cream</SelectItem>
                  <SelectItem value="sage">Sage Green</SelectItem>
                  <SelectItem value="blush">Blush Pink</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Scent</label>
              <Select value={selectedScent} onValueChange={setSelectedScent}>
                <SelectTrigger>
                  <SelectValue placeholder="Select scent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lavender">Lavender</SelectItem>
                  <SelectItem value="vanilla">Vanilla Bean</SelectItem>
                  <SelectItem value="citrus">Citrus Grove</SelectItem>
                  <SelectItem value="pine">Pine Forest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-rose hover:bg-rose/90">
              Add to Cart
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1603006905003-be475563bc59"
                alt="Customizable candle preview"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeCandle;