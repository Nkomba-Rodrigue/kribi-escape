
import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Route, Star } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "La Chute de la Lobé",
    description: "Spectacle naturel unique où les cascades se jettent directement dans l'océan Atlantique.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    location: "Kribi, Sud Cameroun"
  },
  {
    id: 2,
    name: "Îlot Dipikar",
    description: "Petit paradis isolé accessible uniquement en bateau, offrant des plages vierges et une biodiversité exceptionnelle.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    location: "Parc de Campo-Ma'an"
  },
  {
    id: 3,
    name: "Plage Sacrée d'Ebodjé",
    description: "Plage mystique entourée de légendes locales, connue pour ses tortues marines et sables dorés.",
    image: "https://images.unsplash.com/photo-1572792208704-461fe9341303?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    location: "Ebodjé, Sud de Kribi"
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-ocean/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
            Destinations <span className="text-ocean">inédites</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explorez les sites méconnus de Kribi et vivez des expériences authentiques loin des sentiers battus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative rounded-xl overflow-hidden h-[500px] shadow-lg"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-ocean-light mr-1" />
                  <span className="text-sm text-ocean-light">{destination.location}</span>
                </div>
                <h3 className="font-serif font-semibold text-2xl mb-2">{destination.name}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{destination.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{destination.rating}/5</span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-800 transition-colors"
                  >
                    Explorer
                  </Button>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-ocean text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Inédit
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="bg-primary hover:bg-ocean-dark group">
            Toutes les destinations
            <Route className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
