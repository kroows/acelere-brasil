import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from "@/components/ui/button";

// Declaração de tipo para o objeto instgrm do Instagram
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

const instagramPosts = [
  {
    id: 1,
    thumbnail: "https://acelerebrasil.com.br/wp-content/uploads/2025/06/Screenshot_3.png",
    link: "https://www.instagram.com/p/DHwX3ljhLNs/",
    title: "Acelere Brasil"
  },
  {
    id: 2,
    thumbnail: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/video-2-980x1825.webp",
    link: "https://www.instagram.com/p/DHwnTsPB-F8/",
    title: "Bastidores do Evento"
  },
  {
    id: 3,
    thumbnail: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/video-3-980x1825.webp",
    link: "https://www.instagram.com/acelerebrasiloficial/reel/DHzfozzgFqV/",
    title: "Público Presente"
  },
  {
    id: 4,
    thumbnail: "https://acelerebrasil.com.br/wp-content/uploads/2025/05/video-4-980x1825.webp",
    link: "https://www.instagram.com/p/DIHERMjgozC/",
    title: "Palestrantes"
  }
];

const VideoSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [niche, setNiche] = useState("");
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Carrega o script do Instagram
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Recarrega o embed do Instagram quando disponível
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se está próximo ao final da página
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
      setIsAtBottom(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = () => {
    if (isAtBottom) {
      // Scroll para o topo
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Scroll para o final
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleEbookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && email && niche) {
      try {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('formType', 'videosection');
        formData.append('your-name', name);
        formData.append('your-email', email);
        formData.append('whatsapp', phone);
        formData.append('nicho', niche);
  
        console.log('Payload VideoSection:', Object.fromEntries(formData)); // Log para depuração
  
        const response = await fetch('https://script.google.com/macros/s/AKfycbwpb83lvpsydCCdork1tXtNjI35ZNXHRJX1_SPUxKBPuqxFN5lSAzOVC7ABpnzNhhxfrw/exec', {
          method: 'POST',
          body: formData // Envia como FormData
        });
  
        console.log('Resposta VideoSection:', response); // Log para depuração
  
        // Como 'no-cors' não permite leitura da resposta, assumimos sucesso
        toast({
          title: "E-book solicitado!",
          description: "Sua inscrição foi efetuada com sucesso.",
          duration: 3000, // 3 segundos
        });
        setName('');
        setPhone('');
        setEmail('');
        setNiche('');
      } catch (error: any) {
        console.error('Erro ao enviar formulário VideoSection:', error);
        toast({
          title: "Erro ao enviar",
          description: error.message || "Por favor, tente novamente mais tarde.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, preencha todos os campos para continuar.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-black relative">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top right triangle */}
        <div className="absolute top-40 right-20 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
        
        {/* Bottom left triangle */}
        <div className="absolute bottom-96 left-32" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
        
        {/* Middle right triangle */}
        <div className="absolute top-1/2 right-1/4 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />

        {/* Additional triangles for desktop */}
        <div className="absolute top-80 left-1/4 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '50px 50px',
          width: '50px',
          height: '50px',
          opacity: 0.2
        }} />

        <div className="absolute bottom-1/3 right-40 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '40px 40px',
          width: '40px',
          height: '40px',
          opacity: 0.2
        }} />

        <div className="absolute top-1/4 right-1/3 hidden md:block" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '45px 45px',
          width: '45px',
          height: '45px',
          opacity: 0.25
        }} />
        
        {/* Mobile specific triangles */}
        <div className="absolute top-60 right-10 md:hidden" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '50px 50px',
          width: '50px',
          height: '50px',
          opacity: 0.3
        }} />
        
        <div className="absolute bottom-40 left-5 md:hidden" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '50px 50px',
          width: '50px',
          height: '50px',
          opacity: 0.3
        }} />

        {/* Additional triangles for mobile */}
        <div className="absolute top-1/3 left-12 md:hidden" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '35px 35px',
          width: '35px',
          height: '35px',
          opacity: 0.2
        }} />

        <div className="absolute bottom-1/4 right-16 md:hidden" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '40px 40px',
          width: '40px',
          height: '40px',
          opacity: 0.25
        }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            COMO FOI A <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>ÚLTIMA EDIÇÃO</span>
          </h2>
          <p className="text-xl text-gray-300 font-rotunda" style={{ textShadow: '0 0 15px rgba(209, 213, 219, 0.3)' }}>
            Veja os depoimentos de quem participou e transformou seu negócio
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] max-w-[400px] mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
            <blockquote 
              className="instagram-media w-full h-full" 
              data-instgrm-permalink="https://www.instagram.com/p/DHwX3ljhLNs/"
              data-instgrm-version="14"
            >
            </blockquote>
            <script async src="//www.instagram.com/embed.js"></script>
          </div>
        </div>

        {/* Instagram Posts Slider */}
        <div className="mt-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 }
            }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={false}
            className="instagram-slider pb-12"
          >
            {instagramPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-[20px] overflow-hidden aspect-[4/5] group"
                >
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  
                  {/* Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Título */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-white text-lg font-bold">{post.title}</h3>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Container do mapa e informações */}
        <div className="mt-20 rounded-[20px] overflow-hidden" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative z-10">
            {/* Coluna do Mapa */}
            <div className="w-full h-full min-h-[300px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5751642816837!2d-48.85129772374376!3d-26.276446571039267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb04401d49f3d%3A0x7555af43bbcd2112!2sRua%20XV%20de%20Novembro%2C%204315%20-%20Gl%C3%B3ria%2C%20Joinville%20-%20SC%2C%2089216-201!5e0!3m2!1spt-BR!2sbr!4v1709926926800!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Coluna das Informações */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-cyan-400" 
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
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">EXPOVILLE</h3>
                  <p className="text-lg text-white">Rua XV Novembro, 4315</p>
                  <p className="text-lg font-bold text-white">Glória Joinville – SC</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="w-8 h-8"
                  >
                    <path 
                      d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z" 
                      className="fill-transparent"
                      stroke="url(#gradient2)"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-rotunda text-white">
                  04 e 05 de outubro
                </p>
              </div>

              <div className="flex justify-center">
                <div className="md:max-w-[600px] w-full">
                  <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-rotunda text-white text-center md:text-left">
                    Dois dias intensos para <span className="font-bold">transformar</span> sua vida e <span className="font-bold">acelerar</span> seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de imagens do local */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 mt-8">
          <div className="rounded-[20px] overflow-hidden p-1" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
            <img
              loading="lazy"
              decoding="async"
              width="700"
              height="465"
              src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-01.webp"
              alt="Expoville 01"
              className="rounded-xl w-full h-full object-cover"
              srcSet="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-01.webp 700w, https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-01-480x319.webp 480w"
              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
            />
          </div>
          <div className="rounded-[20px] overflow-hidden p-1" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
            <img
              loading="lazy"
              decoding="async"
              width="700"
              height="465"
              src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-02.webp"
              alt="Expoville 02"
              className="rounded-xl w-full h-full object-cover"
              srcSet="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-02.webp 700w, https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-02-480x319.webp 480w"
              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
            />
          </div>
          <div className="rounded-[20px] overflow-hidden p-1" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
            <img
              loading="lazy"
              decoding="async"
              width="700"
              height="465"
              src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-03.webp"
              alt="Expoville 03"
              className="rounded-xl w-full h-full object-cover"
              srcSet="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-03.webp 700w, https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-03-480x319.webp 480w"
              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
            />
          </div>
          <div className="rounded-[20px] overflow-hidden p-1" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
            <img
              loading="lazy"
              decoding="async"
              width="700"
              height="465"
              src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-04.webp"
              alt="Expoville 04"
              className="rounded-xl w-full h-full object-cover"
              srcSet="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-04.webp 700w, https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-04-480x319.webp 480w"
              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
            />
          </div>
        </div>

        {/* Swiper para versão mobile */}
        <div className="md:hidden mt-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full pb-12"
          >
            <SwiperSlide>
              <div className="rounded-[20px] overflow-hidden p-1" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
                <img
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="465"
                  src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-01.webp"
                  alt="Expoville 01"
                  className="rounded-xl w-full h-full object-cover"
                  srcSet="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-01.webp 700w, https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-01-480x319.webp 480w"
                  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[20px] overflow-hidden p-1" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
                <img
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="465"
                  src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-02.webp"
                  alt="Expoville 02"
                  className="rounded-xl w-full h-full object-cover"
                  srcSet="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-02.webp 700w, https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-02-480x319.webp 480w"
                  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[20px] overflow-hidden p-1" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
                <img
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="465"
                  src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-03.webp"
                  alt="Expoville 03"
                  className="rounded-xl w-full h-full object-cover"
                  srcSet="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-03.webp 700w, https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-03-480x319.webp 480w"
                  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[20px] overflow-hidden p-1" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
                <img
                  loading="lazy"
                  decoding="async"
                  width="700"
                  height="465"
                  src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-04.webp"
                  alt="Expoville 04"
                  className="rounded-xl w-full h-full object-cover"
                  srcSet="https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-04.webp 700w, https://acelerebrasil.com.br/wp-content/uploads/2025/05/expoville-04-480x319.webp 480w"
                  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 700px, 100vw"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Ebook Form Section */}
        <div className="mt-16 rounded-[20px] overflow-hidden" style={{ backgroundColor: 'rgba(31, 81, 97, 0.6)' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-start p-8">
            {/* Right side - Image (apenas mobile) */}
            <div className="lg:hidden relative">
              <img
                src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/img-ebook-acelere-brasil.webp"
                alt="Ebook Acelere Brasil"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Left side - Form */}
            <div className="space-y-6">
              <div className="text-white space-y-2 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight font-rotunda" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
                  BAIXE AGORA NOSSO
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>EBOOK</span> E ENTRE NO
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>GRUPO</span> DO EVENTO
                </h3>
                <p className="text-sm md:text-base text-white font-rotunda leading-tight" style={{ textShadow: '0 0 10px rgba(209, 213, 219, 0.3)' }}>
                  Preencha os dados abaixo, ganhe acesso imediato e mantenha-se informado sobre as novidades do <strong>Acelere Brasil Joinville</strong>.
                </p>
              </div>

              <form id="ebook-form" onSubmit={handleEbookSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-12 rounded-full px-6"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Telefone com DDD"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-12 rounded-full px-6"
                  required
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-12 rounded-full px-6"
                  required
                />
                <Input
                  type="text"
                  placeholder="Nicho"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-12 rounded-full px-6"
                  required
                />

                {/* Botão visível apenas no mobile */}
                <div className="lg:hidden">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold md:font-gilroy-black md:font-black text-[13px] sm:text-base md:text-2xl lg:text-3xl py-6 md:py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-6 flex items-center justify-center text-center md:before:absolute md:before:inset-0 md:before:bg-gradient-to-r md:before:from-green-300 md:before:to-cyan-300 md:before:rounded-xl md:before:blur-xl md:before:opacity-30 md:before:-z-10 active:scale-95 md:border-2 md:border-green-300/30 disabled:cursor-not-allowed"
                    style={{
                      boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    {isSubmitting ? "ENVIANDO..." : "QUERO MEU EBOOK"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Right side - Image e Botão (desktop) */}
            <div className="hidden lg:block relative space-y-6">
              <img
                src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/img-ebook-acelere-brasil.webp"
                alt="Ebook Acelere Brasil"
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Botão visível apenas no desktop */}
              <Button
                type="submit"
                form="ebook-form"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold md:font-gilroy-black md:font-black text-[13px] sm:text-base md:text-2xl lg:text-3xl py-6 md:py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-6 flex items-center justify-center text-center md:before:absolute md:before:inset-0 md:before:bg-gradient-to-r md:before:from-green-300 md:before:to-cyan-300 md:before:rounded-xl md:before:blur-xl md:before:opacity-30 md:before:-z-10 active:scale-95 md:border-2 md:border-green-300/30 disabled:cursor-not-allowed"
                style={{
                  boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
                }}
              >
                {isSubmitting ? "ENVIANDO..." : "QUERO MEU EBOOK"}
              </Button>
            </div>
          </div>
        </div>

        {/* Seção de Patrocinadores */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-rotunda">
            <span className="text-white">SEJA UM </span>
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>PATROCINADOR</span>
            <span className="text-white"> DESSA EDIÇÃO</span>
          </h2>

          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-sm md:text-lg text-white font-rotunda">
              Nessa edição esperamos impactar mais de <strong>1300</strong> pessoas em <strong>dois dias</strong> de imersão.
              <br />
              Quer ter sua marca em destaque em nosso evento, matérias e mídia?
              <br />
              Deseja ter um Stand no espaço durante os dois dias de evento, de 14 x 14 ou até de
              14 x 21, recebendo clientes e impactando pessoas?
              <br />
              Vai ser um grande prazer ter a sua empresa apoiando e se conectando com o nosso propósito.
            </p>
          </div>

          <a 
            href="https://chat.whatsapp.com/CYSVYE63EbQIayoK0QXgz7"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold md:font-gilroy-black md:font-black text-[13px] sm:text-base md:text-3xl lg:text-4xl py-6 md:py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-6 flex items-center justify-center text-center md:before:absolute md:before:inset-0 md:before:bg-gradient-to-r md:before:from-green-300 md:before:to-cyan-300 md:before:rounded-xl md:before:blur-xl md:before:opacity-30 md:before:-z-10 active:scale-95 md:border-2 md:border-green-300/30"
            style={{
              boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
            ENTRE EM CONTATO COM NOSSA EQUIPE
          </a>
        </div>
      </div>

      {/* Botão flutuante circular */}
      <button
        onClick={scrollToPosition}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-full before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30 flex items-center justify-center"
        style={{
          boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
        }}
      >
        {isAtBottom ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        )}
      </button>
    </section>
  );
};

export default VideoSection;
