import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const speakers = [
  {
    name: "MATEUS MAIA",
    title: "",
    company: "",
    description: "Empresário, fundador do Instituto Projetando Felicidade e CEO da Acelere Brasil, especialista em Desenvolvimento Pessoal.",
    image: "https://i.ibb.co/b5sgynxP/mateus-maia-1080x1800.webp"
  },
  {
    name: "PAULO CAMARGO",
    title: "",
    company: "",
    description: "CEO da Zamp (Burger King e Popeyes) e ex-CEO do McDonald's Brasil, Espaçolaser e Iron Mountain. Premiado como CEO do ano pelo LIDE Brasil.",
    image: "https://i.ibb.co/nMRv6CD9/paulo-camargo-1080x1800.webp"
  },
  {
    name: "JULIANO CUSTÓDIO",
    title: "",
    company: "",
    description: "Fundador e CEO da EQI Investimento, corretora com mais de 40 bilhões de reais sob custódia e mais de 600 assessores de investimento.",
    image: "https://i.ibb.co/d0S3sS6b/juliano-custodio-1080x1800.webp"
  },
  {
    name: "KAKÁ DINIZ",
    title: "CEO da",
    company: "Non Stop Produções",
    description: "Empresário que transformou histórias e impulsionou carreiras no digital. CEO da maior agência de influenciadores da América Latina, com faturamento superior a R$ 100 milhões.",
    image: "https://i.ibb.co/r2X6y8TP/kaka-1080x1800.webp"
  },
  {
    name: "ALFREDO SOARES",
    title: "Co-fundador da",
    company: "G4 Educação",
    description: "Co-fundador da G4 Educação e um dos principais nomes do novo empreendedorismo brasileiro. Fundador da Xtech e sócio da VTEX. Autor best-seller e mentor de milhares de empreendedores.",
    image: "https://i.ibb.co/JjnFX9sf/alfredo-1080x1800.webp"
  },
  {
    name: "SANDRO LUCAS",
    title: "Empresário",
    company: "Setor Imobiliário",
    description: "Empresário visionário do ramo imobiliário que acredita no poder da visão de futuro. Especialista em empreendimentos de alto padrão e transformação urbana.",
    image: "https://i.ibb.co/Xk55tkPc/sandro.webp"
  },
  {
    name: "FABRÍCIO OLIVEIRA",
    title: "Ex-prefeito de",
    company: "Balneário Camboriú",
    description: "Líder público e empreendedor apaixonado por cidades inteligentes e desenvolvimento sustentável. Liderou uma gestão que reposicionou a cidade como um dos maiores cases de inovação urbana do país.",
    image: "https://i.ibb.co/p80VMwN/fabricio.webp"
  },
  {
    name: "MOHAMAD ABOU WADI",
    title: "Fundador da",
    company: "Rede IOA",
    description: "Empresário, educador e visionário. Fundador da Rede IOA, Rede ITC, Instituto Lapidare, PIB Education, Uniavan e Life UniCedu. Um dos maiores transformadores da educação no Brasil.",
    image: "https://i.ibb.co/tPTXm2P5/mohamed.webp"
  },
  {
    name: "REGINALDO BOEIRA",
    title: "Fundador da",
    company: "KELMER",
    description: "Empresário e investidor com trajetória marcada pela coragem e reinvenção. Revolucionou o setor industrial ao transformar desafios em oportunidades de crescimento exponencial.",
    image: "https://i.ibb.co/d4C24MGJ/reginaldo.webp"
  },
  {
    name: "EIKE BATISTA",
    title: "Fundador do",
    company: "Grupo EBX",
    description: "Um dos empresários mais emblemáticos da história do Brasil. Com uma trajetória repleta de altos e baixos, Eike é símbolo de ousadia, visão e ambição no mundo dos negócios.",
    image: "https://i.ibb.co/3GF57BC/eike.webp"
  }
];

const SpeakerCard = ({ speaker }) => (
  <div 
    className="relative overflow-hidden bg-cover bg-center bg-no-repeat h-[450px] md:h-[500px] lg:h-[550px]"
    style={{
      backgroundImage: `url(${speaker.image})`,
      backgroundColor: '#1f5161',
      borderRadius: '20px',
      backgroundSize: '100% auto',
      backgroundPosition: 'top center',
      float: 'left',
      position: 'relative',
      zIndex: 2,
      width: '100%'
    }}
  >
    {/* Conteúdo sobreposto */}
    <div 
      className="absolute bottom-0 left-0 right-0 p-4 space-y-2"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(31, 81, 97, 0.9) 10%, #1f5161)',
        paddingTop: '40px'
      }}
    >
      {/* Nome */}
      <h3 className="text-2xl font-bold text-white text-center">{speaker.name}</h3>
      
      {/* Divisor Gradiente */}
      <div 
        style={{
          height: '4px',
          width: '100%',
          background: 'linear-gradient(-90deg, rgba(0, 243, 163), rgba(0, 184, 237))',
          borderRadius: '1px',
          marginBottom: '0.5rem'
        }}
      ></div>
      
      {/* Descrição */}
      <div className="text-center text-white">
        <p className="text-sm md:text-base lg:text-lg leading-relaxed font-rotunda" dangerouslySetInnerHTML={{ __html: speaker.description }}></p>
      </div>
    </div>
  </div>
);

const Speakers = () => {
  return (
    <section className="py-20 px-4 bg-black relative">
      <style>
        {`
          .speakers-swiper .swiper-button-next,
          .speakers-swiper .swiper-button-prev {
            color: white;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;
          }

          .speakers-swiper .swiper-button-next:hover,
          .speakers-swiper .swiper-button-prev:hover {
            transform: scale(1.1);
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          }

          .speakers-swiper .swiper-button-next:after,
          .speakers-swiper .swiper-button-prev:after {
            font-size: 24px;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .speakers-swiper .swiper-button-next:after,
            .speakers-swiper .swiper-button-prev:after {
              font-size: 20px;
            }
          }
        `}
      </style>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            PALESTRANTES <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>CONFIRMADOS</span>
          </h2>
        </div>

        {/* Desktop Carousel (3 slides) */}
        <div className="hidden md:block">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-12 speakers-swiper"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide 
                key={index}
                style={{
                  marginBottom: '30px'
                }}
              >
                <SpeakerCard speaker={speaker} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Carousel (1 slide) */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-12 speakers-swiper"
            style={{
              maxWidth: '500px',
              margin: '0 auto'
            }}
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide 
                key={index}
                style={{
                  marginBottom: '30px'
                }}
              >
                <SpeakerCard speaker={speaker} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
