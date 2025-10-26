import { Truck, Wrench, Ruler, Shield, Clock, Package } from 'lucide-react'

export default function Servicos() {
  const servicos = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Entrega Rápida",
      description: "Entregamos em toda a região com agilidade e segurança",
      details: ["Entrega em até 48h", "Rastreamento online", "Equipe especializada"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Instalação Profissional",
      description: "Instalação perfeita por equipe especializada",
      details: ["Mão de obra qualificada", "Ferramentas adequadas", "Limpeza pós-instalação"]
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "Portas Sob Medida",
      description: "Criamos a porta perfeita para seu espaço",
      details: ["Medição precisa", "Múltiplos materiais", "Design personalizado"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Garantia Estendida",
      description: "Tranquilidade com nossa garantia exclusiva",
      details: ["Garantia de 5 anos", "Assistência técnica", "Suporte 24/7"]
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Manutenção Preventiva",
      description: "Mantenha suas portas sempre perfeitas",
      details: ["Inspeção técnica", "Ajustes necessários", "Limpeza especializada"]
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Retirada na Loja",
      description: "Comodidade e agilidade para clientes locais",
      details: ["Estacionamento gratuito", "Horário flexível", "Carregamento incluso"]
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--accent-dark)] to-[var(--primary-brown)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Oferecemos soluções completas para suas necessidades, da escolha à instalação final.
          </p>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-[var(--primary-brown)] mb-4">
                  {servico.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{servico.title}</h3>
                <p className="text-gray-600 mb-4">{servico.description}</p>
                <ul className="space-y-2">
                  {servico.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[var(--primary-brown)] rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de um Serviço Especial?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Entre em contato conosco e vamos encontrar a solução perfeita para sua necessidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Falar no WhatsApp
            </a>
            <a 
              href="tel:5511999999999"
              className="bg-[var(--primary-brown)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--accent-dark)] transition-colors"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}