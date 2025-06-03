import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { FormService } from "@/services/forms";

const VideoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    niche: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
      setIsAtBottom(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, niche } = formData;

    if (!name || !phone || !email || !niche) {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, preencha todos os campos para continuar.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await FormService.submitEbookForm(formData);
      
      toast({
        title: "Solicitação enviada!",
        description: "Você receberá o ebook em breve.",
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        niche: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      {/* Left side - Video */}
      <div className="space-y-6">
        <div className="aspect-video rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/seu-video-id"
            title="Launch IT - Evento Presencial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            Assista ao vídeo e descubra como o{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
              Launch IT
            </span>{" "}
            pode transformar seu negócio
          </h2>
          
          <p className="text-white/80 text-center text-sm md:text-base">
            Aprenda estratégias comprovadas de lançamento e marketing digital
            que já geraram milhões em vendas.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Baixe Nosso E-book Gratuito
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              Receba um guia completo sobre como estruturar seu primeiro lançamento
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-white border-none text-black placeholder:text-gray-500 h-12 rounded-full px-6"
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Telefone com DDD"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-white border-none text-black placeholder:text-gray-500 h-12 rounded-full px-6"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white border-none text-black placeholder:text-gray-500 h-12 rounded-full px-6"
              required
            />
            <Input
              type="text"
              name="niche"
              placeholder="Nicho"
              value={formData.niche}
              onChange={handleInputChange}
              className="bg-white border-none text-black placeholder:text-gray-500 h-12 rounded-full px-6"
              required
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? "Enviando..." : "Baixar E-book Grátis"}
            </Button>
          </form>
        </div>
      </div>

      {/* Floating scroll button */}
      <Button
        onClick={scrollToPosition}
        className="fixed bottom-8 right-8 rounded-full w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform duration-300 ${isAtBottom ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </Button>
    </div>
  );
};

export default VideoSection;
