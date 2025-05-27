
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && phone) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá mais informações em breve.",
      });
      setEmail("");
      setName("");
      setPhone("");
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

      <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <div className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold">
            TERMINE 2025 PLANEJANDO COMO ACELERAR O CRESCIMENTO DO SEU NEGÓCIO EM 2026
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            ACELERE
            <span className="block text-cyan-400">BRASIL</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Junte-se aos maiores empreendedores e líderes empresariais do Brasil 
            no evento que vai transformar sua visão de negócios para 2026.
          </p>

          <div className="flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span>04 • 05</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span>DEZEMBRO</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span>SÃO PAULO</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              GARANTA SUA VAGA
            </h2>
            <p className="text-gray-400">
              Vagas limitadas - Inscreva-se agora
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
              required
            />
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
              required
            />
            <Input
              type="tel"
              placeholder="Seu WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
              required
            />
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-black font-bold text-lg py-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              QUERO PARTICIPAR
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Últimas 48 horas com desconto especial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
