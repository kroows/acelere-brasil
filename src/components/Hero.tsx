
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

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
            <div className="p-8 lg:p-12 space-y-6">
              <div className="text-white space-y-4">
                <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Aprenda com os <span className="text-cyan-400">maiores nomes</span> do mercado
                  <br />
                  para <span className="text-cyan-400">acelerar o faturamento</span> da sua empresa
                  <br />
                  ou construir um negócio do zero.
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Whatsapp com DDD"
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
                
                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox
                    id="agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-0.5 border-white data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                  />
                  <label htmlFor="agree" className="text-sm text-white leading-relaxed">
                    Concordo em fornecer meus dados para receber
                    <br />
                    conteúdos do evento por e-mail ou outros meios
                  </label>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-bold text-lg py-6 rounded-full transition-all duration-300 transform hover:scale-105 mt-6"
                >
                  QUERO PARTICIPAR
                </Button>
              </form>
            </div>

            {/* Right side - Image */}
            <div className="relative h-full min-h-[600px] bg-gradient-to-br from-slate-800 to-slate-900">
              <img
                src="/lovable-uploads/7227757b-308b-4a4c-978e-036f0da508e0.png"
                alt="Acelere Brasil - Paulo Canargo, Mateus Maia, Juliano Custódio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
