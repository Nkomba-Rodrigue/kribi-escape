
import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Kribi<span className="text-ocean">Escape</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Découvrez les trésors cachés de Kribi et vivez une expérience authentique au cœur du littoral camerounais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ocean transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#produits" className="text-gray-400 hover:text-white transition-colors">Produits de la mer</a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#experiences" className="text-gray-400 hover:text-white transition-colors">Expériences</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-ocean mr-2 mt-1" />
                <span className="text-gray-400">Plage de Kribi, Région Sud, Cameroun</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-ocean mr-2" />
                <span className="text-gray-400">+237 6XX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-ocean mr-2" />
                <span className="text-gray-400">info@kribiescape.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir nos offres spéciales et actualités.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-ocean"
              />
              <button
                type="submit"
                className="bg-ocean hover:bg-ocean-dark px-4 py-2 rounded-r-md transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kribi Sea Escape. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
