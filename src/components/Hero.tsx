import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 88,
    hours: 88,
    minutes: 88,
    seconds: 88
  });

  useEffect(() => {
    // Set target date to October 4, 2025
    const targetDate = new Date('2025-10-04T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && phone && agreed) {
      try {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append('your-name', name);
        formData.append('your-email', email);
        formData.append('whatsapp', phone);
        formData.append('acceptance-119', agreed ? '1' : '');
        formData.append('_wpcf7', '198');
        formData.append('_wpcf7_unit_tag', `wpcf7-f198-p${Date.now()}-o1`);
        formData.append('_wpcf7_container_post', '0');

        const response = await fetch('https://acelerebrasil.com.br/wp-json/contact-form-7/v1/contact-forms/198/feedback', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.status === 'mail_sent') {
          toast({
            title: "Inscrição realizada!",
            description: "Você receberá mais informações em breve.",
          });
          setEmail('');
          setName('');
          setPhone('');
          setAgreed(false);
        } else {
          throw new Error(data.message || `Erro desconhecido: ${JSON.stringify(data)}`);
        }
      } catch (error: any) {
        console.error('Erro ao enviar formulário:', error);
        toast({
          title: "Erro ao realizar inscrição",
          description: error.message || "Por favor, tente novamente mais tarde.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, preencha todos os campos e aceite os termos para continuar.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-[#001a2f] via-[#001a2f]/80 via-50% to-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://i.ibb.co/s7fqbyq/site-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset 0 0 150px 150px rgba(0, 0, 0, 0.8)'
        }}
      />
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, black 100%)'
        }}
      />

      {/* Top Banner */}
      <div className="relative z-10 bg-gradient-to-r from-green-400 to-cyan-400 text-center py-4 md:py-5">
        <p className="text-black font-gilroy-black font-black text-sm md:text-lg lg:text-xl">
          PRIMEIRO LOTE, APROVEITE ANTES QUE O PREÇO AUMENTE
        </p>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Top right triangle */}
        <div className="absolute top-20 right-10" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
        
        {/* Bottom left triangle */}
        <div className="absolute bottom-40 left-20" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
        
        {/* Middle triangle */}
        <div className="absolute top-1/2 left-1/4" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
        
        {/* Top left triangle */}
        <div className="absolute top-32 left-1/3" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
        
        {/* Bottom right triangle */}
        <div className="absolute bottom-60 right-1/4" style={{
          backgroundImage: 'url(https://i.ibb.co/DH2V36B8/Layer-3.png)',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
          opacity: 0.3
        }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-gilroy-black font-black text-white leading-tight" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            TERMINE 2025 PLANEJANDO COMO{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>ACELERAR</span>
            <br />
            O CRESCIMENTO DO SEU NEGÓCIO EM 2026
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-black border border-slate-700 rounded-3xl overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[400px] md:min-h-[600px]">
            {/* Left side - Form */}
            <div className="p-4 md:p-8 lg:p-12 space-y-4 md:space-y-6 order-2 lg:order-1">
              <div className="text-white space-y-4 text-center">
                <p className="text-sm md:text-xl lg:text-2xl leading-relaxed font-rotunda" style={{ textShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(6, 182, 212, 0.15) 0px 0px 30px' }}>
                  Aprenda com os <span className="text-white font-bold" style={{ textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 15px' }}>maiores nomes</span> do mercado<br />
                  para <span className="text-white font-bold" style={{ textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 15px' }}>acelerar o faturamento</span> da sua empresa<br />
                  ou construir um negócio do zero.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <Input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-12 md:h-14 rounded-xl px-4 md:px-6 text-sm md:text-base font-rotunda"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Whatsapp com DDD"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-12 md:h-14 rounded-xl px-4 md:px-6 text-sm md:text-base font-rotunda"
                  required
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-12 md:h-14 rounded-xl px-4 md:px-6 text-sm md:text-base font-rotunda"
                  required
                />

                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox
                    id="agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-1 border-white data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                  />
                  <label
                    htmlFor="agree"
                    className="text-xs md:text-sm text-white leading-relaxed font-rotunda"
                    style={{ textShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 10px' }}
                  >
                    Concordo em fornecer meus dados para receber<br />
                    conteúdos do evento por e-mail ou outros meios
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !email || !name || !phone || !agreed}
                  className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold md:font-gilroy-black md:font-black text-lg md:text-4xl lg:text-5xl py-6 md:py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-6 flex items-center justify-center text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 md:border-2 md:border-green-300/30 disabled:cursor-not-allowed"
                  style={{
                    boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {isSubmitting ? "ENVIANDO..." : "QUERO PARTICIPAR"}
                </Button>
              </form>
            </div>

            {/* Right side - Image */}
            <div className="relative h-[300px] md:h-full md:min-h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 order-1 lg:order-2 rounded-xl md:rounded-none overflow-hidden">
              <img
                src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/header-acelere-brasil.webp"
                alt="Acelere Brasil - Paulo Canargo, Mateus Maia, Juliano Custódio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center">
          <div className="backdrop-blur-sm border border-slate-600/30 rounded-2xl px-4 md:px-10 py-6 shadow-lg bg-gradient-to-r from-green-400/10 to-cyan-400/10 w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Left side - Event info */}
              <div className="text-white space-y-2 text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-gilroy-black font-black" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>04 E 05 DE OUTUBRO</p>
                <p className="text-sm md:text-base lg:text-lg font-gilroy-black font-black" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>EM JOINVILLE</p>
                <p className="text-lg md:text-xl lg:text-2xl font-gilroy-black font-black" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>IMERSÃO PRESENCIAL</p>
              </div>
              
              {/* Right side - Countdown */}
              <div className="grid grid-cols-4 md:flex gap-2 md:gap-4 items-center">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                    <div className="text-3xl md:text-5xl font-gilroy-black font-black text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                  </div>
                  <div className="text-[10px] md:text-xs text-white font-gilroy-black font-black mt-1 md:mt-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>DIAS</div>
                </div>
                
                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                    <div className="text-3xl md:text-5xl font-gilroy-black font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                  </div>
                  <div className="text-[10px] md:text-xs text-white font-gilroy-black font-black mt-1 md:mt-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>HORAS</div>
                </div>
                
                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                    <div className="text-3xl md:text-5xl font-gilroy-black font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  </div>
                  <div className="text-[10px] md:text-xs text-white font-gilroy-black font-black mt-1 md:mt-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>MINUTOS</div>
                </div>
                
                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                    <div className="text-3xl md:text-5xl font-gilroy-black font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  </div>
                  <div className="text-[10px] md:text-xs text-white font-gilroy-black font-black mt-1 md:mt-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>SEGUNDOS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
