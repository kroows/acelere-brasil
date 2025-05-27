const benefits = [
  {
    icon: "🚀",
    title: "ACELERE SEU CRESCIMENTO",
    description: "Aprenda estratégias comprovadas para expandir seu negócio de forma sustentável e escalável."
  },
  {
    icon: "🎯",
    title: "FOQUE NO QUE IMPORTA",
    description: "Descubra como priorizar ações que realmente geram resultados e aumentam sua receita."
  },
  {
    icon: "🌐",
    title: "NETWORK DE ALTO NÍVEL",
    description: "Conecte-se com empreendedores, investidores e líderes empresariais do Brasil."
  },
  {
    icon: "💡",
    title: "INOVAÇÃO E TECNOLOGIA",
    description: "Entenda as tendências tecnológicas que vão moldar o futuro dos negócios."
  },
  {
    icon: "📈",
    title: "ESTRATÉGIAS DE VENDAS",
    description: "Domine técnicas avançadas de vendas e marketing para aumentar sua conversão."
  },
  {
    icon: "🎓",
    title: "CAPACITAÇÃO INTENSIVA",
    description: "2 dias de conteúdo prático e aplicável direto na sua realidade empresarial."
  },
  {
    icon: "🤝",
    title: "PARCERIAS ESTRATÉGICAS",
    description: "Oportunidades únicas de criar parcerias que vão alavancar seus resultados."
  },
  {
    icon: "⚡",
    title: "TRANSFORMAÇÃO DIGITAL",
    description: "Implemente ferramentas e processos digitais para otimizar sua operação."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(6, 182, 212, 0.2)' }}>
            A <span className="text-white">IMERSÃO ACELERE BRASIL</span> GARANTE
            <br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(6, 182, 212, 0.3)' }}>8 VANTAGENS</span> NESTA NOVA EDIÇÃO
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-3" style={{ textShadow: '0 0 15px rgba(6, 182, 212, 0.4)' }}>
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ textShadow: '0 0 10px rgba(209, 213, 219, 0.3)' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="relative w-full bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-white font-gilroy-black font-black text-5xl py-8 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-400/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-300 before:to-cyan-300 before:rounded-xl before:blur-xl before:opacity-30 before:-z-10 active:scale-95 border-2 border-green-300/30"
            style={{
              boxShadow: '0 30px 60px rgba(34, 197, 94, 0.4), 0 15px 30px rgba(6, 182, 212, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.15)'
            }}
          >
            ME IDENTIFIQUEI, QUERO PARTICIPAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
