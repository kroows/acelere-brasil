const speakers = [
  {
    name: "MATEUS MAIA",
    title: "Empresário, fundador do Instituto Projetando Felicidade e CEO da",
    company: "Acelera Brasil",
    description: "especialista em Desenvolvimento Pessoal.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "PAULO CAMARGO",
    title: "CEO da Zamp (Burger King e Popeyes) e ex-CEO do",
    company: "McDonald's Brasil",
    description: "Especialista e Iron Mountain. Premiado como CEO do ano pelo LIDE Brasil.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "JULIANO CUSTÓDIO",
    title: "Fundador e CEO da EQI",
    company: "Investimento",
    description: "corretora com mais de 40 bilhões de reais sob custódia e mais de 600 assessores de investimento.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  }
];

const Speakers = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large triangular shapes */}
        <div className="absolute top-20 right-10 w-0 h-0 border-l-[150px] border-l-transparent border-r-[150px] border-r-transparent border-b-[120px] border-b-cyan-400/10"></div>
        <div className="absolute bottom-40 left-20 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[80px] border-b-cyan-400/15"></div>
        <div className="absolute top-1/2 left-10 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[50px] border-b-cyan-400/20"></div>
        
        {/* Play button style triangles */}
        <div className="absolute top-32 left-1/4 w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-cyan-400/30 border-b-[20px] border-b-transparent"></div>
        <div className="absolute bottom-60 right-1/3 w-0 h-0 border-t-[25px] border-t-transparent border-l-[45px] border-l-cyan-400/25 border-b-[25px] border-b-transparent"></div>
        <div className="absolute top-2/3 right-20 w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-cyan-400/40 border-b-[15px] border-b-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-gilroy-black font-black text-white mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            PALESTRANTES <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>CONFIRMADOS</span>
          </h2>
        </div>

        {/* Main Speakers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-80 object-cover rounded-2xl"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center opacity-90">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-gilroy-black font-black text-white" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>
                  {speaker.name}
                </h3>
                <div className="space-y-1">
                  <p className="text-white font-rotunda text-sm leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>
                    {speaker.title}
                  </p>
                  <p className="text-cyan-400 font-rotunda font-bold text-sm" style={{ textShadow: '0 0 15px rgba(6, 182, 212, 0.4)' }}>
                    {speaker.company}
                  </p>
                  <p className="text-white font-rotunda text-sm leading-relaxed" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>
                    {speaker.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Silhouettes Section */}
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-8 mb-8">
          <div className="flex justify-center items-end space-x-4 mb-6">
            {/* Person silhouettes */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="w-16 h-20 bg-black rounded-t-full opacity-60"
                style={{
                  clipPath: 'ellipse(50% 60% at 50% 40%)'
                }}
              ></div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-gilroy-black font-black text-white mb-2" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>
              MAIS <span className="text-cyan-400" style={{ textShadow: '0 0 15px rgba(6, 182, 212, 0.4)' }}>PALESTRANTES</span> EM BREVE
            </h3>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="relative bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-gilroy-black font-black text-3xl lg:text-4xl py-6 px-12 rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-3xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30"
            style={{
              boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
            MAIS INFORMAÇÕES
          </button>
        </div>

        {/* Bottom disclaimer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 font-rotunda text-sm max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 0 10px rgba(156, 163, 175, 0.3)' }}>
            Até a data de hoje todos os palestrantes divulgados neste site permanecem confirmados. Ressaltamos que não há 
            nenhuma intenção de alteração desta grade, no entanto, por motivos de força maior é possível que haja mudanças. 
            Neste caso todos os participantes serão avisados assim que a mudança for confirmada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
