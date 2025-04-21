
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-[200%] h-40 z-20">
        <div
          className="absolute w-full h-full animate-wave"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23FFFFFF'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23FFFFFF'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23FFFFFF'/%3E%3C/svg%3E\")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif font-bold text-4xl md:text-6xl leading-tight mb-6">
            Découvrez les trésors cachés de <span className="text-ocean-light">Kribi</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Explorez les richesses maritimes et les sites méconnus du littoral camerounais.
            Une expérience authentique et inoubliable vous attend.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-primary hover:bg-ocean-dark text-white px-8 py-6 text-lg">
              Explorer nos offres
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
              En savoir plus <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
