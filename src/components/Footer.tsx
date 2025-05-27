
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
                <h3 className="text-3xl font-bold text-white">ACELERE</h3>
                <p className="text-cyan-400 font-bold">BRASIL</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span>04 • 05</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span>DEZEMBRO</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span>SÃO PAULO</span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-md mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">
              ÚLTIMA CHANCE
            </h4>
            <p className="text-gray-300 mb-6">
              Restam poucas vagas disponíveis
            </p>
            <button className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold text-xl py-6 h-auto rounded-xl transition-all duration-300 transform hover:scale-105">
              QUERO MEU EBOOK
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-gray-500 text-sm">
              © 2025 Acelere Brasil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
