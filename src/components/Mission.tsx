import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const steps = [
  {
    number: "1",
    title: "PLANEJAMENTO ESTRATÉGICO",
    description: "Defina metas claras e objetivos mensuráveis para 2026, com foco em crescimento sustentável e lucratividade.",
    image: "https://img001.prntscr.com/file/img001/JxFM23H6RL-8e64BiiwETA.png"
  },
  {
    number: "2", 
    title: "IMPLEMENTAÇÃO EFICIENTE",
    description: "Aprenda a colocar seus planos em prática com metodologias comprovadas e ferramentas de gestão avançadas.",
    image: "https://img001.prntscr.com/file/img001/pm407gRsSlmMvVjnHxGpJQ.png"
  },
  {
    number: "3",
    title: "MONITORAMENTO CONTÍNUO",
    description: "Estabeleça indicadores de performance e sistemas de acompanhamento para garantir o sucesso dos seus projetos.",
    image: "https://img001.prntscr.com/file/img001/pDoK34mAQ-G_rPhGxOElXA.png"
  },
  {
    number: "4",
    title: "ESCALABILIDADE INTELIGENTE",
    description: "Desenvolva processos escaláveis que permitam o crescimento da sua empresa sem perder a qualidade.",
    image: "https://img001.prntscr.com/file/img001/bqTGPF4sRXmewTkWKjEYWA.png"
  },
  {
    number: "5",
    title: "RESULTADOS EXTRAORDINÁRIOS",
    description: "Alcance patamares nunca antes imaginados com estratégias testadas pelos maiores empreendedores do Brasil.",
    image: "https://img001.prntscr.com/file/img001/el9PKi1fSAqwjvdd_KpQuw.png"
  }
];

const Mission = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-black via-70% to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            A <span className="text-white">IMERSÃO ACELERE BRASIL</span> GARANTE
            <br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>5 VANTAGENS</span> NESTA NOVA EDIÇÃO
          </h2>
        </div>

        {/* Desktop - Layout Vertical */}
        <div className="hidden md:flex md:flex-col md:items-center md:space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="rounded-3xl shadow-lg overflow-hidden"
              style={{ width: '815px', height: '415px' }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile - Carrossel */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-12"
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-3xl shadow-lg overflow-hidden bg-black" style={{ width: '100%', height: '300px' }}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Mission;
