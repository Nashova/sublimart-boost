import { CheckCircle, Clock, Package, Zap } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Premium Quality",
    description: "High-quality sublimation prints that last",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick processing and shipping times",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description: "Special pricing for wholesale orders",
  },
  {
    icon: Zap,
    title: "Custom Designs",
    description: "Bring your unique ideas to life",
  },
];

export const Benefits = () => {
  return (
    <div className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-xl mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};