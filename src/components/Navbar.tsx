
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary font-serif">
              Kribi<span className="text-ocean">Escape</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#accueil"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Accueil
            </a>
            <a
              href="#produits"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Produits de la mer
            </a>
            <a
              href="#destinations"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Destinations
            </a>
            <a
              href="#experiences"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Expériences
            </a>
            <a
              href="#contact"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-ocean-dark">
              Réserver maintenant
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white absolute top-full left-0 w-full shadow-md animate-fade-in-up">
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="#accueil"
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#produits"
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits de la mer
              </a>
              <a
                href="#destinations"
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </a>
              <a
                href="#experiences"
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Expériences
              </a>
              <a
                href="#contact"
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-primary hover:bg-ocean-dark w-full">
                Réserver maintenant
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
