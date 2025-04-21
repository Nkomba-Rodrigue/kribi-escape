
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophie Mbila",
    role: "Globe-trotteuse",
    text: "J'ai visité de nombreux sites touristiques, mais l'expérience de Kribi Sea Escape était vraiment unique. Les produits de la mer étaient incroyablement frais et le voyage vers les chutes de la Lobé restera gravé dans ma mémoire.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jean-Pierre Kouamé",
    role: "Photographe culinaire",
    text: "Les fruits de mer de Kribi sont incomparables. J'ai pu capturer des images magnifiques pendant mon séjour et déguster des plats délicieux. Je recommande vivement l'expérience de pêche traditionnelle.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Amina Diop",
    role: "Voyageuse solo",
    text: "Se réveiller avec la vue sur l'océan et découvrir des sites encore préservés du tourisme de masse, c'était exactement ce que je recherchais. L'équipe de Kribi Sea Escape est attentive et professionnelle.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Ce que disent nos <span className="text-ocean">visiteurs</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Découvrez les expériences authentiques vécues par nos clients lors de leur séjour à Kribi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="border-none shadow-lg relative overflow-hidden group animate-float hover:shadow-xl transition-shadow"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-ocean/10 select-none">
                "
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-600 mb-6 italic relative z-10">"{testimonial.text}"</p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
              
              {/* Subtle decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ocean to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
