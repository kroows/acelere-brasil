import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

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
    <section className="pt-0 pb-4 md:py-20 relative">
      <style>
        {`
          .benefits-swiper .swiper-button-next,
          .benefits-swiper .swiper-button-prev {
            color: white;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;
          }

          .benefits-swiper .swiper-button-next:hover,
          .benefits-swiper .swiper-button-prev:hover {
            transform: scale(1.1);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          }

          .benefits-swiper .swiper-button-next:after,
          .benefits-swiper .swiper-button-prev:after {
            font-size: 24px;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .benefits-swiper .swiper-button-next:after,
            .benefits-swiper .swiper-button-prev:after {
              font-size: 20px;
            }
          }
        `}
      </style>

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

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top right triangle */}
        <div className="absolute top-40 right-32 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
        
        {/* Bottom left triangle */}
        <div className="absolute bottom-60 left-40" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
        
        {/* Middle triangle */}
        <div className="absolute top-1/2 right-1/3 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />

        {/* Additional triangles for desktop */}
        <div className="absolute top-96 left-1/4 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '45px 45px',
          width: '45px',
          height: '45px',
          opacity: 0.2
        }} />

        <div className="absolute bottom-1/3 right-1/4 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '50px 50px',
          width: '50px',
          height: '50px',
          opacity: 0.25
        }} />

        <div className="absolute top-60 left-20 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '40px 40px',
          width: '40px',
          height: '40px',
          opacity: 0.2
        }} />
        
        {/* Mobile specific triangles */}
        <div className="absolute top-32 right-4 md:hidden" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '50px 50px',
          width: '50px',
          height: '50px',
          opacity: 0.3
        }} />
        
        <div className="absolute bottom-40 left-6 md:hidden" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '50px 50px',
          width: '50px',
          height: '50px',
          opacity: 0.3
        }} />

        {/* Additional triangles for mobile */}
        <div className="absolute top-80 left-8 md:hidden" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '35px 35px',
          width: '35px',
          height: '35px',
          opacity: 0.2
        }} />

        <div className="absolute bottom-80 right-8 md:hidden" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '40px 40px',
          width: '40px',
          height: '40px',
          opacity: 0.25
        }} />
      </div>
      
      <div className="max-w-[980px] mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 font-rotunda" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            A IMERSÃO ACELERE BRASIL É PARA TODOS QUE PASSAM POR QUALQUER UMA DESSAS{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>SITUAÇÕES</span>
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
                <p className="text-gray-300 text-sm md:text-base leading-relaxed px-2 font-rotunda" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}>
                  {situation.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Swiper para Mobile */}
        <div className="lg:hidden px-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 }
            }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full benefits-swiper pb-12"
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
                    <p className="text-base md:text-base text-white leading-relaxed px-2 font-rotunda" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}>
                      {situation.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12 mb-12 px-4">
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto font-rotunda" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
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
            className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold md:font-gilroy-black md:font-black text-[13px] sm:text-base md:text-4xl lg:text-5xl py-6 md:py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-6 flex items-center justify-center text-center md:before:absolute md:before:inset-0 md:before:bg-gradient-to-r md:before:from-green-300 md:before:to-cyan-300 md:before:rounded-xl md:before:blur-xl md:before:opacity-30 md:before:-z-10 active:scale-95 md:border-2 md:border-green-300/30"
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
