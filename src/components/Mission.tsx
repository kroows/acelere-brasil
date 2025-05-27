
const steps = [
  {
    number: "1",
    title: "PLANEJAMENTO ESTRATÉGICO",
    description: "Defina metas claras e objetivos mensuráveis para 2026, com foco em crescimento sustentável e lucratividade.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
  },
  {
    number: "2", 
    title: "IMPLEMENTAÇÃO EFICIENTE",
    description: "Aprenda a colocar seus planos em prática com metodologias comprovadas e ferramentas de gestão avançadas.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    number: "3",
    title: "MONITORAMENTO CONTÍNUO",
    description: "Estabeleça indicadores de performance e sistemas de acompanhamento para garantir o sucesso dos seus projetos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    number: "4",
    title: "ESCALABILIDADE INTELIGENTE",
    description: "Desenvolva processos escaláveis que permitam o crescimento da sua empresa sem perder a qualidade.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
  },
  {
    number: "5",
    title: "RESULTADOS EXTRAORDINÁRIOS",
    description: "Alcance patamares nunca antes imaginados com estratégias testadas pelos maiores empreendedores do Brasil.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
  }
];

const Mission = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            A IMERSÃO ACELERE BRASIL GARANTE
            <br />
            <span className="text-cyan-400">5 VANTAGENS</span> NESTA NOVA EDIÇÃO
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                />
              </div>
              
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">{step.number}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
