import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Benefits = () => {
  const situations = [
    {
      icon: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/icon-1.webp",
      text: "Você ainda não domina as ferramentas certas para criar processos mais ágeis, práticos e rentáveis para o seu negócio."
    },
    {
      icon: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/icon-2.webp",
      text: "Sabe que seu negócio pode crescer muito mais, mas ainda não encontrou o caminho ideal e consistente para isso acontecer."
    },
    {
      icon: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/icon-3.webp",
      text: "Mesmo tendo uma equipe, sente que tudo depende de você e que, sem sua presença total, as operações simplesmente não andam."
    },
    {
      icon: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/icon-4.webp",
      text: "Não sabe como construir um time que realmente abrace o negócio e se comprometa tanto quanto você."
    },
    {
      icon: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/icon-5.webp",
      text: "Perde muito tempo com pequenas demandas que poderiam ser delegadas, deixando de planejar o futuro da empresa."
    },
    {
      icon: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/icon-6.webp",
      text: "Apesar de ter pessoas ao redor, frequentemente se sente sozinho, sobretudo nos momentos decisivos de solução de problemas complexos."
    },
    {
      icon: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/icon-7.webp",
      text: "Quer entender como as empresas de maior sucesso funcionam na prática e se mantêm em expansão constante todos os dias."
    },
    {
      icon: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/icon-8.webp",
      text: "Busca a oportunidade de trocar ideias com grandes empreendedores e descobrir os segredos por trás de seus resultados expressivos."
    }
  ];

  return (
    <section className="py-20 relative">
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
      
      <div className="max-w-[980px] mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            A IMERSÃO ACELERE BRASIL É PARA TODOS QUE
            <br />
            PASSAM POR QUALQUER UMA DESSAS <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>SITUAÇÕES</span>
          </h2>
        </div>

        {/* Grid de Situações - Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-2">
          {situations.map((situation, index) => (
            <div 
              key={index} 
              className="relative bg-[#1f5161] rounded-[20px] overflow-hidden py-8 px-4 transition-all duration-300 flex flex-col justify-center w-[236px] h-[365px]"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-[90px] h-[82px] relative">
                  <img
                    src={situation.icon}
                    alt=""
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed px-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}>
                  {situation.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Swiper para Mobile */}
        <div className="lg:hidden px-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 }
            }}
            navigation
            className="w-full"
          >
            {situations.map((situation, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="relative bg-[#1f5161] rounded-[20px] overflow-hidden py-8 px-4 transition-all duration-300 flex flex-col justify-center w-full h-[365px] mx-auto"
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-[90px] h-[82px] relative">
                      <img
                        src={situation.icon}
                        alt=""
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed px-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}>
                      {situation.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12 mb-12 px-4">
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
            Independente do momento em que você se encontra, se é empreendedor ou empresário,
            <br />
            a Acelere Brasil proporcionará <span className="font-bold">impacto e mudança</span> para o seu negócio.
          </p>
        </div>

        <div className="text-center mt-12 px-4">
          <a 
            href="https://chat.whatsapp.com/CYSVYE63EbQIayoK0QXgz7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-gilroy-black font-black text-3xl md:text-4xl lg:text-5xl py-6 md:py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30 flex items-center justify-center text-center"
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
