import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-secondary to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary">
              Transforma tus Ideas en Realidad
            </h1>
            <p className="text-lg text-gray-600">
              Productos de sublimación premium elaborados con precisión. Convierte tus diseños en increíbles productos personalizados con nuestros servicios de impresión profesional.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Comprar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Saber Más
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/placeholder.svg"
              alt="Muestra de Productos de Sublimación"
              className="w-full h-auto rounded-lg shadow-xl animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};