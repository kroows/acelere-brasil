
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const VideoSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [niche, setNiche] = useState("");

  const handleEbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && email && niche) {
      toast({
        title: "Solicitação enviada!",
        description: "Você receberá o ebook em breve.",
      });
      setName("");
      setPhone("");
      setEmail("");
      setNiche("");
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            COMO FOI A <span className="text-cyan-400">ÚLTIMA EDIÇÃO</span>
          </h2>
          <p className="text-xl text-gray-300">
            Veja os depoimentos de quem participou e transformou seu negócio
          </p>
        </div>

        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-l-[16px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop"
              alt="Evento Acelere Brasil"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${1540575467063 + i * 1000}-178a50c2df87?w=300&h=200&fit=crop`}
                alt={`Momento do evento ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Ebook Form Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Form */}
            <div className="space-y-6">
              <div className="text-white space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  BAIXE AGORA NOSSO
                  <br />
                  <span className="text-cyan-400">EBOOK</span> E ENTRE NO
                  <br />
                  <span className="text-cyan-400">GRUPO</span> DO EVENTO
                </h3>
                <p className="text-gray-300">
                  Preencha os dados abaixo, ganhe acesso imediato
                  <br />
                  e mantenha-se informado sobre as novidades do
                  <br />
                  <strong>Acelere Brasil Joinville</strong>.
                </p>
              </div>

              <form onSubmit={handleEbookSubmit} className="space-y-4">
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
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-bold text-xl py-6 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 mt-6"
                >
                  QUERO MEU EBOOK
                </button>
              </form>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <img
                src="/lovable-uploads/fbc48dbb-b255-4f54-88dc-86b5adfb0ae8.png"
                alt="Ebook Acelere Brasil"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
