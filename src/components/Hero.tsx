import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-secondary to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary">
              Transform Your Ideas Into Reality
            </h1>
            <p className="text-lg text-gray-600">
              Premium sublimation products crafted with precision. Turn your designs into stunning custom merchandise with our professional printing services.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/placeholder.svg"
              alt="Sublimation Products Showcase"
              className="w-full h-auto rounded-lg shadow-xl animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};