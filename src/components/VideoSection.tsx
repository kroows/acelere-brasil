
const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            COMO FOI A <span className="text-cyan-400">ÚLTIMA EDIÇÃO</span>
          </h2>
          <p className="text-xl text-gray-300">
            Veja os depoimentos de quem participou e transformou seu negócio
          </p>
        </div>

        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-l-[16px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop"
              alt="Evento Acelere Brasil"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${1540575467063 + i * 1000}-178a50c2df87?w=300&h=200&fit=crop`}
                alt={`Momento do evento ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold px-8 py-6 h-auto text-xl rounded-xl transition-all duration-300 transform hover:scale-105">
            BAIXE AGORA O EBOOK GRATUITO DO EVENTO
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
