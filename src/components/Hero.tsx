import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && phone && agreed) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá mais informações em breve.",
      });
      setEmail("");
      setName("");
      setPhone("");
      setAgreed(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 via-70% to-slate-900">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-400 to-cyan-400 text-center py-4 md:py-5">
        <p className="text-black font-gilroy-black font-black text-sm md:text-lg lg:text-xl">
          PRIMEIRO LOTE, APROVEITE ANTES QUE O PREÇO AUMENTE
        </p>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large triangular shapes */}
        <div className="absolute top-20 right-10 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[80px] border-b-cyan-400/20"></div>
        <div className="absolute bottom-40 left-20 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[50px] border-b-cyan-400/30"></div>
        <div className="absolute top-1/2 left-10 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[35px] border-b-cyan-400/25"></div>
        
        {/* Play button style triangles */}
        <div className="absolute top-32 left-1/4 w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-cyan-400/40 border-b-[15px] border-b-transparent"></div>
        <div className="absolute bottom-60 right-1/3 w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-cyan-400/30 border-b-[20px] border-b-transparent"></div>
        <div className="absolute top-2/3 right-20 w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-cyan-400/50 border-b-[12px] border-b-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-20">
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
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[600px]">
            {/* Left side - Form */}
            <div className="p-8 lg:p-12 space-y-6">
              <div className="text-white space-y-4 text-center">
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-rotunda" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(6, 182, 212, 0.15)' }}>
                  Aprenda com os <span className="text-white font-bold" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>maiores nomes</span> do mercado
                  <br />
                  para <span className="text-white font-bold" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>acelerar o faturamento</span> da sua empresa
                  <br />
                  ou construir um negócio do zero.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-14 rounded-full px-6 text-base font-rotunda"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Whatsapp com DDD"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-14 rounded-full px-6 text-base font-rotunda"
                  required
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-14 rounded-full px-6 text-base font-rotunda"
                  required
                />
                
                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox
                    id="agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-1 border-white data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                  />
                  <label htmlFor="agree" className="text-sm text-white leading-relaxed font-rotunda" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>
                    Concordo em fornecer meus dados para receber
                    <br />
                    conteúdos do evento por e-mail ou outros meios
                  </label>
                </div>
                
                <a 
                  href="https://chat.whatsapp.com/CYSVYE63EbQIayoK0QXgz7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-gilroy-black font-black text-5xl py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-8 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30 flex items-center justify-center text-center"
                  style={{
                    boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  QUERO PARTICIPAR
                </a>
              </form>
            </div>

            {/* Right side - Image */}
            <div className="relative h-full min-h-[600px] bg-gradient-to-br from-slate-800 to-slate-900">
              <img
                src="https://prnt.sc/ew3utIiRRerQ"
                alt="Acelere Brasil - Paulo Canargo, Mateus Maia, Juliano Custódio"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://acelerebrasil.com.br/wp-content/uploads/2025/05/header-acelere-brasil.webp";
                }}
              />
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center">
          <div className="backdrop-blur-sm border border-slate-600/30 rounded-2xl px-10 py-6 shadow-lg bg-gradient-to-r from-green-400/10 to-cyan-400/10">
            <div className="flex items-start space-x-8">
              {/* Left side - Event info */}
              <div className="text-white space-y-2 text-center">
                <p className="text-3xl lg:text-4xl font-gilroy-black font-black" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>04 E 05 DE OUTUBRO</p>
                <p className="text-base lg:text-lg font-gilroy-black font-black" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>EM JOINVILLE</p>
                <p className="text-xl lg:text-2xl font-gilroy-black font-black" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}>IMERSÃO PRESENCIAL</p>
              </div>
              
              {/* Right side - Countdown */}
              <div className="flex space-x-4 items-center">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg" style={{ width: '100px', height: '100px' }}>
                    <div className="text-5xl font-gilroy-black font-black text-white">{String(timeLeft.days).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs text-white font-gilroy-black font-black mt-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>DIAS</div>
                </div>
                
                {/* Separator */}
                <div className="text-white text-5xl font-gilroy-black font-black flex items-center" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)', height: '100px' }}>:</div>
                
                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg" style={{ width: '100px', height: '100px' }}>
                    <div className="text-5xl font-gilroy-black font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs text-white font-gilroy-black font-black mt-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>HORAS</div>
                </div>
                
                {/* Separator */}
                <div className="text-white text-5xl font-gilroy-black font-black flex items-center" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)', height: '100px' }}>:</div>
                
                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg" style={{ width: '100px', height: '100px' }}>
                    <div className="text-5xl font-gilroy-black font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs text-white font-gilroy-black font-black mt-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>MINUTOS</div>
                </div>
                
                {/* Separator */}
                <div className="text-white text-5xl font-gilroy-black font-black flex items-center" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.3)', height: '100px' }}>:</div>
                
                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg" style={{ width: '100px', height: '100px' }}>
                    <div className="text-5xl font-gilroy-black font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  </div>
                  <div className="text-xs text-white font-gilroy-black font-black mt-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>SEGUNDOS</div>
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
