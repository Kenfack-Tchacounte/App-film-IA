import React from 'react';
import { Star, Play, Plus, Info } from 'lucide-react';

// Données fictives pour le catalogue
const MOVIES = [
  {
    id: 1,
    title: "Cyberpunk: Edgerunners",
    category: "Série • Animation",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    duration: "10 épisodes"
  },
  {
    id: 2,
    title: "Interstellar Odyssey",
    category: "Film • Sci-Fi",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    duration: "2h 49m"
  },
  {
    id: 3,
    title: "The Last Horizon",
    category: "Film • Aventure",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    duration: "1h 58m"
  },
  {
    id: 4,
    title: "Dark Neon",
    category: "Série • Thriller",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    duration: "3 saisons"
  },
  {
    id: 5,
    title: "Ocean's Secret",
    category: "Film • Documentaire",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=600&auto=format&fit=crop",
    duration: "1h 30m"
  },
  {
    id: 6,
    title: "Kingdom of Shadows",
    category: "Série • Fantasy",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
    duration: "2 saisons"
  }
];

export default function Catalog() {
  return (
    <section className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Tendances actuelles
            </h2>
            <p className="text-slate-400 text-sm mt-1">Les films et séries les plus regardés en ce moment.</p>
          </div>
          
          <div className="flex space-x-2 text-sm font-medium">
            <button className="px-4 py-1.5 rounded-full bg-red-600 text-white transition-all">Tous</button>
            <button className="px-4 py-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all hidden sm:block">Films</button>
            <button className="px-4 py-1.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all hidden sm:block">Séries</button>
          </div>
        </div>

        {/* Grille du catalogue */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {MOVIES.map((movie) => (
            <div 
              key={movie.id}
              className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image / Affiche */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                
                {/* Badge Note */}
                <div className="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center space-x-1 border border-slate-800 text-xs font-semibold text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{movie.rating}</span>
                </div>

                {/* Bouton Play rapide au survol */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-150 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Informations du contenu */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-medium text-red-500 uppercase tracking-wider">{movie.category}</span>
                  <h3 className="font-semibold text-white text-base mt-1 line-clamp-1 group-hover:text-red-400 transition-colors">
                    {movie.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>{movie.duration}</span>
                  <div className="flex space-x-1">
                    <button title="Ajouter à ma liste" className="p-1.5 hover:bg-slate-800 rounded-full hover:text-white transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                    <button title="Plus d'infos" className="p-1.5 hover:bg-slate-800 rounded-full hover:text-white transition-colors">
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}