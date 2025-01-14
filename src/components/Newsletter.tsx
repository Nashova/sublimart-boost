import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Éxito!",
      description: "¡Gracias por suscribirte a nuestro boletín!",
    });
  };

  return (
    <div className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">
          Obtén 10% de Descuento en tu Primera Compra
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Suscríbete a nuestro boletín y recibe ofertas exclusivas, acceso anticipado a nuevos productos y consejos profesionales de impresión.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Ingresa tu email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            required
          />
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
            Suscribirse
          </Button>
        </form>
      </div>
    </div>
  );
};