export default function HeroServices() {
  // Option A : La couleur EXACTE du header (essaie d'abord sans l'ombre)
  
  // Option B : Une version légèrement plus CLAIRE pour compenser l'effet sombre (si l'option A paraît encore trop foncée)
   const headerColor = "#5E8D35"; 

  return (
    <section className="relative h-[50vh] md:h-[60vh] mt-20 w-full flex items-center justify-center">
      
      {/* IMAGE DE FOND */}
      <img
        src="/banniere-services.png" 
        alt="Nos Services de rénovation"
        className="absolute inset-0 w-full  h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENU */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
          Nos Services
        </h1>

        {/* LIGNE VERTE CORRIGÉE */}
        {/* J'ai retiré 'shadow-lg' qui noircissait la ligne */}
        <div 
          className="mt-4 mb-10 w-24 md:w-40 h-1 md:h-2 rounded-full"
          style={{ backgroundColor: headerColor }}
        ></div>
        
      </div>

    </section>
  );
}