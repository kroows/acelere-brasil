import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { FormService } from "@/services/forms";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 88,
    hours: 88,
    minutes: 88,
    seconds: 88
  });

  useEffect(() => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreed: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email, agreed } = formData;

    if (!name || !phone || !email || !agreed) {
      toast({
        title: "Preencha todos os campos",
        description: "Por favor, preencha todos os campos e aceite os termos para continuar.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await FormService.submitHeroForm(formData);
      
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá mais informações em breve.",
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        agreed: false
      });
    } catch (error) {
      toast({
        title: "Erro ao realizar inscrição",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[400px] md:min-h-[600px]">
      {/* Left side - Form */}
      <div className="p-4 md:p-8 lg:p-12 space-y-4 md:space-y-6 order-2 lg:order-1">
        <div className="text-white space-y-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-gilroy-black leading-tight" style={{ textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 15px' }}>
            EVENTO GRATUITO<br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
              LAUNCH IT
            </span>
          </h1>
          
          <p className="text-sm md:text-xl lg:text-2xl leading-relaxed font-rotunda" style={{ textShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(6, 182, 212, 0.15) 0px 0px 30px' }}>
            Aprenda com os <span className="text-white font-bold" style={{ textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 15px' }}>maiores nomes</span> do mercado<br />
            para <span className="text-white font-bold" style={{ textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 15px' }}>acelerar o faturamento</span> da sua empresa<br />
            ou construir um negócio do zero.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-white border-none text-black placeholder:text-gray-500 h-12 md:h-14 rounded-xl px-4 md:px-6 text-sm md:text-base font-rotunda"
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Whatsapp com DDD"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-white border-none text-black placeholder:text-gray-500 h-12 md:h-14 rounded-xl px-4 md:px-6 text-sm md:text-base font-rotunda"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white border-none text-black placeholder:text-gray-500 h-12 md:h-14 rounded-xl px-4 md:px-6 text-sm md:text-base font-rotunda"
            required
          />

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="agree"
              checked={formData.agreed}
              onCheckedChange={handleCheckboxChange}
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
            disabled={isSubmitting || !formData.name || !formData.phone || !formData.email || !formData.agreed}
            className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold md:font-gilroy-black md:font-black text-lg md:text-4xl lg:text-5xl py-6 md:py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-6 flex items-center justify-center text-center before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 md:border-2 md:border-green-300/30 disabled:cursor-not-allowed"
            style={{
              boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
            {isSubmitting ? "ENVIANDO..." : "QUERO PARTICIPAR"}
          </Button>
        </form>
      </div>

      {/* Right side - Timer */}
      <div className="p-4 md:p-8 lg:p-12 order-1 lg:order-2">
        <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
          {[
            { label: "DIAS", value: timeLeft.days },
            { label: "HORAS", value: timeLeft.hours },
            { label: "MINUTOS", value: timeLeft.minutes },
            { label: "SEGUNDOS", value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 md:p-4">
                <span className="text-2xl md:text-5xl lg:text-6xl font-bold text-white" style={{ textShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 15px' }}>
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/80 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
