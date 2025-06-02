const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-black via-85% to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            A IMERSÃO ACELERE BRASIL É PARA TODOS QUE
            <br />
            PASSAM POR QUALQUER UMA DESSAS <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>SITUAÇÕES</span>
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <img 
            src="https://i.ibb.co/cSqqxPv0/pa-J1-Nzvz-T4-Suqe-Wz-Xy8-Hw.png" 
            alt="Situações"
            className="block"
          />
        </div>

        <div className="text-center mb-12">
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
            Independente do momento em que você se encontra, se é empreendedor ou empresário,
            <br />
            a Acelere Brasil proporcionará <span className="font-bold">impacto e mudança</span> para o seu negócio.
          </p>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://chat.whatsapp.com/CYSVYE63EbQIayoK0QXgz7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-gilroy-black font-black text-5xl py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30 flex items-center justify-center text-center"
            style={{
              boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
            ME IDENTIFIQUEI, QUERO PARTICIPAR
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
