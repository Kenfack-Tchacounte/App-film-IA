import React from 'react';
import { Monitor, Wifi, Download, ShieldCheck, Sparkles } from 'lucide-react';

export default function StreamingExperience() {
  const features = [
    {
      id: "01",
      title: "Expérience Cinématographique 4K HDR",
      description: "Plongez au cœur de l'action avec une qualité d'image ultra-nette, des couleurs éclatantes et un son spatial Dolby Atmos immersif.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
      icon: Monitor,
      badge: "Ultra HD"
    },
    {
      id: "02",
      title: "Téléchargez et Regardez Hors-Ligne",
      description: "Prenez vos séries et films préférés partout avec vous. Téléchargez-les sur votre appareil et profitez-en sans connexion Internet.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      icon: Download,
      badge: "Mode Offline"
    },
    {
      id: "03",
      title: "Streaming Fluide sans Interruption",
      description: "Grâce à notre technologie de pointe et nos serveurs ultra-rapides, dites adieu aux temps de chargement et profitez d'une lecture fluide.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1000&auto=format&fit=crop",
      icon: Wifi,
      badge: "0% de Buffering"
    }
  ];

  return (
    <section className="bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Effets lumineux d'arrière-plan (lueurs ambiantes) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technologie de pointe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Conçu pour les cinéphiles exigeants
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Découvrez pourquoi des millions d'utilisateurs font confiance à Streamflix pour leurs soirées cinéma.
          </p>
        </div>

        {/* Blocs avec effet de scroll / sticky stacking */}
        <div className="space-y-24">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visuel avec effet de survol et effet "glassmorphism" */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    {/* Badge flottant sur l'image */}
                    <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-800 flex items-center space-x-2 text-xs font-medium text-white">
                      <ShieldCheck className="w-4 h-4 text-red-500" />
                      <span>{item.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-5xl sm:text-6xl font-black text-slate-800/80 tracking-tighter mb-2">
                    {item.id}
                  </span>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mt-2">
                    {item.description}
                  </p>

                  <div className="mt-6">
                    <button className="inline-flex items-center space-x-2 text-sm font-semibold text-red-500 hover:text-red-400 transition-colors group/btn">
                      <span>En savoir plus</span>
                      <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}