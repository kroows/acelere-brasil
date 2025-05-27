const Footer = () => {
  return (
    <footer className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>ACELERE</h3>
                <p className="text-cyan-400 font-bold" style={{ textShadow: '0 0 15px rgba(6, 182, 212, 0.4)' }}>BRASIL</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span style={{ textShadow: '0 0 10px rgba(156, 163, 175, 0.3)' }}>04 • 05</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span style={{ textShadow: '0 0 10px rgba(156, 163, 175, 0.3)' }}>DEZEMBRO</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span style={{ textShadow: '0 0 10px rgba(156, 163, 175, 0.3)' }}>SÃO PAULO</span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-md mx-auto">
            <h4 className="text-xl font-bold text-white mb-4" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>
              ÚLTIMA CHANCE
            </h4>
            <p className="text-gray-300 mb-6" style={{ textShadow: '0 0 10px rgba(209, 213, 219, 0.3)' }}>
              Restam poucas vagas disponíveis
            </p>
            <button className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-gilroy-black font-black text-5xl py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30"
              style={{
                boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
              }}
            >
              QUERO PARTICIPAR
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-gray-500 text-sm" style={{ textShadow: '0 0 10px rgba(107, 114, 128, 0.3)' }}>
              © 2025 Acelere Brasil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
