const Footer = () => {
  return (
    <footer className="bg-black py-20 px-4 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.ibb.co/s7fqbyq/site-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset 0 0 200px 200px rgba(0, 0, 0, 0.9)'
        }}
      />
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-black/20"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, black 100%)'
        }}
      />
      
      <div className="container mx-auto max-w-4xl flex flex-col items-center justify-center space-y-8 relative z-10 pb-16">
        {/* Logo */}
        <div className="w-full max-w-[300px] md:max-w-[600px]">
          <img
            src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/logo-acelere-brasil.webp"
            alt="Acelere Brasil Joinville"
            className="w-full h-auto"
          />
        </div>

        {/* Data e Local */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8">
          {/* Data */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4">
            <svg 
              className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect 
                x="3" 
                y="6" 
                width="18" 
                height="15" 
                rx="2" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <path 
                d="M3 10H21" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <path 
                d="M7 2L7 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M17 2L17 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-[2rem] md:text-[2.5rem] font-bold text-white tracking-tight leading-none">
                <span className="mr-1">04</span>•<span className="ml-1">05</span>
              </span>
              <span className="text-base md:text-lg uppercase text-white tracking-wide">OUTUBRO</span>
            </div>
          </div>

          {/* Local */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4">
            <svg 
              className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
            </svg>
            <div className="flex flex-col text-center md:text-left">
              <span className="text-base md:text-lg uppercase text-white tracking-wide">LOCAL</span>
              <span className="text-[2rem] md:text-[2.5rem] font-bold text-white tracking-wider leading-none">EXPOVILLE</span>
            </div>
          </div>
        </div>

        {/* Botão */}
        <a
          href="https://chat.whatsapp.com/CYSVYE63EbQIayoK0QXgz7"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold md:font-gilroy-black md:font-black text-lg md:text-4xl lg:text-5xl py-4 md:py-6 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-6 flex items-center justify-center text-center md:before:absolute md:before:inset-0 md:before:bg-gradient-to-r md:before:from-green-300 md:before:to-cyan-300 md:before:rounded-xl md:before:blur-xl md:before:opacity-30 md:before:-z-10 active:scale-95 md:border-2 md:border-green-300/30"
          style={{
            boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
          }}
        >
          GARANTIR MEU INGRESSO
        </a>
      </div>

      {/* Assinatura do Desenvolvedor */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-10">
        <a 
          href="https://github.com/ThallesCosta-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white text-xs md:text-sm font-rotunda transition-colors duration-300"
        >
          Desenvolvido por ThallesCosta®
        </a>
      </div>
    </footer>
  );
};

export default Footer;
