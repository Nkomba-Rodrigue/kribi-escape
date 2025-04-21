
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Fish, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Crabes royaux",
    description: "Crabes fraîchement pêchés des eaux profondes de Kribi, préparés selon les traditions locales.",
    image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Langoustes fraîches",
    description: "Nos langoustes sont réputées pour leur chair délicate et leur goût incomparable.",
    image: "https://images.unsplash.com/photo-1565280654386-466aaf482d1e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Poissons exotiques",
    description: "Une variété de poissons exotiques pêchés quotidiennement par nos pêcheurs locaux.",
    image: "https://images.unsplash.com/photo-1513040260736-63dd0617fb66?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Crevettes géantes",
    description: "Crevettes géantes de Kribi, connues pour leur taille impressionnante et leur saveur unique.",
    image: "https://images.unsplash.com/photo-1569494315581-13c88a7e4f55?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-20 bg-gradient-to-b from-white to-foliage-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Les <span className="text-ocean">trésors</span> de notre mer
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez les produits frais que nous proposons, pêchés directement dans les eaux cristallines de Kribi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Fish className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-serif font-semibold text-lg">{product.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                >
                  Découvrir <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-ocean-dark">Voir tous nos produits</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
