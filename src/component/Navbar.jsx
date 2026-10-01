import React, { useState } from 'react';
import { Search, Bell, User, Film, Tv, Home, Compass, Menu, X } from 'lucide-react';

 function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo et Navigation principale */}
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-yellow-600 animate-pulse" />
              <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                STREAMFLIX
              </span>
            </a>

            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
              <a href="#" className="flex items-center space-x-1 hover:text-white transition-colors">
                <Home className="w-4 h-4" />
                <span>Accueil</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-white transition-colors">
                <Film className="w-4 h-4" />
                <span>Films</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-white transition-colors">
                <Tv className="w-4 h-4" />
                <span>Séries</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-white transition-colors">
                <Compass className="w-4 h-4" />
                <span>Nouveautés</span>
              </a>
            </nav>
          </div>

          {/* Actions : Recherche, Notifications, Profil */}
          <div className="flex items-center space-x-4">
            
            {/* Barre de recherche interactive */}
            <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64 sm:w-72' : 'w-10'}`}>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Rechercher un film, une série..."
                  className={`w-full bg-slate-900 border border-slate-700 rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-all ${
                    isSearchOpen ? 'opacity-100' : 'opacity-0 cursor-pointer md:opacity-100 md:w-60'
                  }`}
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              {/* Badge de notification */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            {/* Profil utilisateur */}
            <div className="flex items-center space-x-2 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center overflow-hidden border border-slate-700 group-hover:border-red-500 transition-colors">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">
            Accueil
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">
            Films
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">
            Séries
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">
            Nouveautés
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar