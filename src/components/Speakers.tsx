
const speakers = [
  {
    name: "MARCELO HAIR",
    title: "CEO da Hair Company",
    description: "Especialista em crescimento exponencial e transformação digital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "PRISCILA CARVALHO",
    title: "Fundadora da StartupXYZ",
    description: "Referência em inovação e liderança empresarial",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "GIULIANO OLIVEIRA",
    title: "Investidor e Mentor",
    description: "Mais de 20 anos acelerando negócios no Brasil",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }
];

const Speakers = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            PALESTRANTES <span className="text-cyan-400">CONFIRMADOS</span>
          </h2>
          <p className="text-xl text-gray-300">
            Aprenda com os maiores especialistas do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative mb-6">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-xl"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-3">
                  {speaker.title}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                MAIS PALESTRANTES EM BREVE
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Estamos confirmando mais especialistas para compartilhar conhecimento exclusivo
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                QUER SABER MAIS?
              </h3>
              <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold px-6 py-3 h-auto text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                MAIS INFORMAÇÕES
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
