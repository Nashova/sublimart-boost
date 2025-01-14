import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Benefits } from "@/components/Benefits";
import { Newsletter } from "@/components/Newsletter";

const featuredProducts = [
  {
    title: "Camiseta Personalizada",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Ropa",
  },
  {
    title: "Taza con Foto",
    price: 14.99,
    image: "/placeholder.svg",
    category: "Bebidas",
  },
  {
    title: "Impresión en Lienzo",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Decoración",
  },
  {
    title: "Funda para Teléfono",
    price: 19.99,
    image: "/placeholder.svg",
    category: "Accesorios",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>

      <Benefits />
      <Newsletter />
    </div>
  );
};

export default Index;