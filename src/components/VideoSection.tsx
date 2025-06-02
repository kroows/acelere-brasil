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
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-900 via-70% to-slate-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            COMO FOI A <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>ÚLTIMA EDIÇÃO</span>
          </h2>
          <p className="text-xl text-gray-300" style={{ textShadow: '0 0 15px rgba(209, 213, 219, 0.3)' }}>
            Veja os depoimentos de quem participou e transformou seu negócio
          </p>
        </div>

        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO_AQUI"
              title="Acelere Brasil - Como foi a última edição"
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Form */}
            <div className="space-y-6">
              <div className="text-white space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
                  BAIXE AGORA NOSSO
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>EBOOK</span> E ENTRE NO
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>GRUPO</span> DO EVENTO
                </h3>
                <p className="text-gray-300" style={{ textShadow: '0 0 10px rgba(209, 213, 219, 0.3)' }}>
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
              </form>
            </div>

            {/* Right side - Image e Botão */}
            <div className="relative space-y-6">
              <img
                src="https://acelerebrasil.com.br/wp-content/uploads/2025/05/img-ebook-acelere-brasil.webp"
                alt="Ebook Acelere Brasil"
                className="w-full h-auto rounded-2xl"
              />
              
              <a 
                href="https://chat.whatsapp.com/CYSVYE63EbQIayoK0QXgz7"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-gilroy-black font-black text-3xl lg:text-4xl py-6 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30 flex items-center justify-center text-center"
                style={{
                  boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
                }}
              >
                QUERO MEU EBOOK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
