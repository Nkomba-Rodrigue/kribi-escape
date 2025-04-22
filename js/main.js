
// Data
const products = [
  {
    id: 1,
    name: "Crabes royaux",
    description: "Crabes fraîchement pêchés des eaux profondes de Kribi, préparés selon les traditions locales.",
    image: "images/products/crabes.jpg"
  },
  {
    id: 2,
    name: "Langoustes fraîches",
    description: "Nos langoustes sont réputées pour leur chair délicate et leur goût incomparable.",
    image: "images/products/langoustes.jpg"
  },
  {
    id: 3,
    name: "Poissons exotiques",
    description: "Une variété de poissons exotiques pêchés quotidiennement par nos pêcheurs locaux.",
    image: "images/products/poissons.jpg"
  },
  {
    id: 4,
    name: "Crevettes géantes",
    description: "Crevettes géantes de Kribi, connues pour leur taille impressionnante et leur saveur unique.",
    image: "images/products/crevettes.jpg"
  }
];

const destinations = [
  {
    id: 1,
    name: "La Chute de la Lobé",
    description: "Spectacle naturel unique où les cascades se jettent directement dans l'océan Atlantique.",
    image: "images/destinations/lobe.jpg",
    rating: 4.9,
    location: "Kribi, Sud Cameroun"
  },
  {
    id: 2,
    name: "Îlot Dipikar",
    description: "Petit paradis isolé accessible uniquement en bateau, offrant des plages vierges et une biodiversité exceptionnelle.",
    image: "images/destinations/dipikar.jpg",
    rating: 4.7,
    location: "Parc de Campo-Ma'an"
  },
  {
    id: 3,
    name: "Plage Sacrée d'Ebodjé",
    description: "Plage mystique entourée de légendes locales, connue pour ses tortues marines et sables dorés.",
    image: "images/destinations/ebodje.jpg",
    rating: 4.8,
    location: "Ebodjé, Sud de Kribi"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sophie Mbila",
    role: "Globe-trotteuse",
    text: "J'ai visité de nombreux sites touristiques, mais l'expérience de Kribi Sea Escape était vraiment unique.",
    avatar: "images/testimonials/sophie.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Jean-Pierre Kouamé",
    role: "Photographe culinaire",
    text: "Les fruits de mer de Kribi sont incomparables. Je recommande vivement l'expérience de pêche traditionnelle.",
    avatar: "images/testimonials/jean-pierre.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Amina Diop",
    role: "Voyageuse solo",
    text: "Se réveiller avec la vue sur l'océan et découvrir des sites encore préservés du tourisme de masse, c'était parfait.",
    avatar: "images/testimonials/amina.jpg",
    rating: 4
  }
];

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.menu-mobile');
const contactForm = document.getElementById('contact-form');
const productsGrid = document.getElementById('products-grid');
const destinationsGrid = document.getElementById('destinations-grid');
const testimonialsGrid = document.getElementById('testimonials-grid');
const currentYear = document.getElementById('current-year');

// Mobile menu toggle
menuToggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('active');
});

// Render products
function renderProducts() {
  productsGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="h-48 overflow-hidden">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="font-serif font-semibold text-lg mb-2">${product.name}</h3>
        <p class="text-gray-600 text-sm">${product.description}</p>
        <a href="#" class="inline-flex items-center mt-4 text-primary font-medium text-sm hover:underline">
          Découvrir
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  `).join('');
}

// Render destinations
function renderDestinations() {
  destinationsGrid.innerHTML = destinations.map(destination => `
    <div class="destination-card h-[500px]">
      <img src="${destination.image}" alt="${destination.name}" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div class="flex items-center mb-2">
          <svg class="w-4 h-4 text-ocean-light mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span class="text-sm text-ocean-light">${destination.location}</span>
        </div>
        <h3 class="font-serif font-semibold text-2xl mb-2">${destination.name}</h3>
        <p class="text-white/80 text-sm mb-4">${destination.description}</p>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-400 fill-current mr-1" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
            </svg>
            <span class="text-sm font-medium">${destination.rating}/5</span>
          </div>
          <button class="btn-outline text-sm">Explorer</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render testimonials
function renderTestimonials() {
  testimonialsGrid.innerHTML = testimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="flex items-center mb-4">
        ${Array(5).fill().map((_, i) => `
          <svg class="w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
          </svg>
        `).join('')}
      </div>
      <p class="text-gray-600 mb-6 italic">"${testimonial.text}"</p>
      <div class="flex items-center">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover mr-4">
        <div>
          <h4 class="font-medium text-gray-900">${testimonial.name}</h4>
          <p class="text-sm text-gray-500">${testimonial.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize contact form
function initContactForm() {
  contactForm.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <input type="text" placeholder="Votre nom complet" class="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900">
      <input type="email" placeholder="Votre email" class="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <input type="tel" placeholder="Votre numéro de téléphone" class="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900">
      <input type="date" class="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900">
    </div>
    <textarea placeholder="Votre message ou demande spécifique" rows="3" class="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/30 text-gray-900 mb-4"></textarea>
    <button type="submit" class="w-full bg-white hover:bg-gray-100 text-primary font-medium py-3 text-lg rounded-lg transition-colors">
      Réserver mon expérience
    </button>
  `;
}

// Set current year in footer
function setCurrentYear() {
  currentYear.textContent = new Date().getFullYear();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderDestinations();
  renderTestimonials();
  initContactForm();
  setCurrentYear();
});
