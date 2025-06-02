const speakers = [
  {
    name: "MATEUS MAIA",
    title: "Empresário, fundador do Instituto Projetando Felicidade e CEO da",
    company: "Acelera Brasil",
    description: "especialista em Desenvolvimento Pessoal.",
    image: "https://img001.prntscr.com/file/img001/PxKMPFKESWifVlyp3__Rng.png"
  },
  {
    name: "PAULO CAMARGO",
    title: "CEO da Zamp (Burger King e Popeyes) e ex-CEO do",
    company: "McDonald's Brasil",
    description: "Especialista e Iron Mountain. Premiado como CEO do ano pelo LIDE Brasil.",
    image: "https://img001.prntscr.com/file/img001/Yy2qUqdISm2LMZIVGzMfhA.png"
  },
  {
    name: "JULIANO CUSTÓDIO",
    title: "Fundador e CEO da EQI",
    company: "Investimento",
    description: "corretora com mais de 40 bilhões de reais sob custódia e mais de 600 assessores de investimento.",
    image: "https://img001.prntscr.com/file/img001/segGqcm5SFKwnuTz-gGegQ.png"
  }
];

const Speakers = () => {
  return (
    <section className="relative pt-32 pb-8 px-4 bg-gradient-to-b from-slate-900 via-slate-900 via-70% to-black overflow-hidden">
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

        {/* Main Speakers Grid - Imagens com tamanho original */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <div key={index} className="relative group flex justify-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="h-auto object-cover rounded-3xl shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 border border-slate-600/50 hover:border-cyan-400/50"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.2))',
                }}
              />
            </div>
          ))}
        </div>

        {/* Apenas a imagem com tamanho original */}
        <div className="flex justify-center mb-10">
          <img
            src="https://img001.prntscr.com/file/img001/zdcehhZqTuSokmSPNmGd3w.png"
            alt="Mais palestrantes"
            className="h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <a 
            href="https://chat.whatsapp.com/CYSVYE63EbQIayoK0QXgz7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-gilroy-black font-black text-3xl lg:text-4xl py-6 px-12 rounded-3xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-3xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30 inline-flex items-center justify-center"
            style={{
              boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
            MAIS INFORMAÇÕES
          </a>
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
