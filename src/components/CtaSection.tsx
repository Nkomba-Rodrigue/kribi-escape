
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1800&q=75')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-ocean/90 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-serif font-bold text-3xl md:text-5xl mb-6">
            Prêt à vivre l'aventure Kribi ?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10">
            Réservez votre expérience dès maintenant et bénéficiez de 15% de réduction sur votre première visite. Offre à durée limitée !
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Votre nom complet" 
                    className="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Votre email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="sr-only">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Votre numéro de téléphone" 
                    className="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="sr-only">Date souhaitée</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Calendar className="absolute right-3 top-3 text-gray-500" size={20} />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Votre message ou demande spécifique" 
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <div>
                <Button className="w-full bg-white hover:bg-gray-100 text-primary font-medium py-3 text-lg">
                  Réserver mon expérience
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
