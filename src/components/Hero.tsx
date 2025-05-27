
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
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to December 4, 2024
    const targetDate = new Date('2024-12-04T00:00:00');
    
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
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-cyan-400 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cyan-400 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-cyan-400 rotate-45"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[600px]">
            {/* Left side - Form */}
            <div className="p-6 lg:p-8 space-y-4">
              <div className="text-white space-y-3">
                <h1 className="text-xl lg:text-2xl font-bold leading-tight">
                  Aprenda com os <span className="text-cyan-400">maiores nomes</span> do mercado
                  <br />
                  para <span className="text-cyan-400">acelerar o faturamento</span> da sua empresa
                  <br />
                  ou construir um negócio do zero.
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-10 rounded-full px-4"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Whatsapp com DDD"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-10 rounded-full px-4"
                  required
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-none text-black placeholder:text-gray-500 h-10 rounded-full px-4"
                  required
                />
                
                <div className="flex items-start space-x-2 pt-1">
                  <Checkbox
                    id="agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-0.5 border-white data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                  />
                  <label htmlFor="agree" className="text-xs text-white leading-relaxed">
                    Concordo em fornecer meus dados para receber
                    <br />
                    conteúdos do evento por e-mail ou outros meios
                  </label>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold text-lg py-6 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-4"
                >
                  QUERO PARTICIPAR
                </Button>
              </form>
            </div>

            {/* Right side - Image */}
            <div className="relative h-full min-h-[600px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-r-3xl">
              <img
                src="/lovable-uploads/7227757b-308b-4a4c-978e-036f0da508e0.png"
                alt="Acelere Brasil - Paulo Canargo, Mateus Maia, Juliano Custódio"
                className="w-full h-full object-cover rounded-r-3xl"
              />
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-6 flex justify-center">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl px-8 py-4">
            <div className="text-center text-white mb-2">
              <p className="text-lg font-bold">04 E 05 DE DEZEMBRO</p>
              <p className="text-sm">EM SÃO PAULO</p>
              <p className="text-sm text-cyan-400 font-bold">IMERSÃO PRESENCIAL</p>
            </div>
            <div className="flex space-x-4">
              <div className="bg-cyan-400 rounded-xl px-4 py-3 text-center min-w-[60px]">
                <div className="text-2xl font-bold text-black">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-black font-semibold">DIAS</div>
              </div>
              <div className="flex items-center text-cyan-400 text-2xl font-bold">:</div>
              <div className="bg-cyan-400 rounded-xl px-4 py-3 text-center min-w-[60px]">
                <div className="text-2xl font-bold text-black">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-black font-semibold">HORAS</div>
              </div>
              <div className="flex items-center text-cyan-400 text-2xl font-bold">:</div>
              <div className="bg-cyan-400 rounded-xl px-4 py-3 text-center min-w-[60px]">
                <div className="text-2xl font-bold text-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-black font-semibold">MINUTOS</div>
              </div>
              <div className="flex items-center text-cyan-400 text-2xl font-bold">:</div>
              <div className="bg-cyan-400 rounded-xl px-4 py-3 text-center min-w-[60px]">
                <div className="text-2xl font-bold text-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-black font-semibold">SEGUNDOS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
