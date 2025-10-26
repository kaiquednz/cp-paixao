// app/servicos/page.js
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import ServiceCard from '../../components/ServiceCard'

export default function Servicos() {
  const allServices = [
    {
      id: 1,
      title: "Instalação Profissional",
      description: "Instalação realizada por nossa equipe especializada com anos de experiência",
      icon: "🔧",
      features: ["Montagem precisa", "Ajuste perfeito", "Garantia do serviço", "Limpeza pós-instalação"],
      price: "A partir de R$ 200,00",
      duration: "2-4 horas"
    },
    {
      id: 2,
      title: "Manutenção e Reparo",
      description: "Serviços de manutenção preventiva e corretiva para todas as marcas",
      icon: "🛠️",
      features: ["Troca de fechaduras", "Ajuste de folgas", "Restauração", "Substituição de partes"],
      price: "A partir de R$ 150,00",
      duration: "1-3 horas"
    },
    {
      id: 3,
      title: "Projeto Personalizado",
      description: "Portas sob medida para atender às necessidades específicas do seu projeto",
      icon: "📐",
      features: ["Medição no local", "Design exclusivo", "Acabamento personalizado", "Acompanhamento"],
      price: "Sob consulta",
      duration: "Personalizado"
    },
    {
      id: 4,
      title: "Restauração de Portas Antigas",
      description: "Recuperação e valorização de portas antigas com técnicas especializadas",
      icon: "🎨",
      features: ["Lixamento profissional", "Restauração de detalhes", "Acabamento histórico", "Preservação"],
      price: "A partir de R$ 500,00",
      duration: "3-7 dias"
    },
    {
      id: 5,
      title: "Instalação de Ferragens",
      description: "Colocação e ajuste de fechaduras, maçanetas e acessórios",
      icon: "🔒",
      features: ["Fechaduras digitais", "Maçanetas decorativas", "Trincos e dobradiças", "Acessórios de segurança"],
      price: "A partir de R$ 100,00",
      duration: "1-2 horas"
    },
    {
      id: 6,
      title: "Consultoria Técnica",
      description: "Assessoria especializada para escolha do produto ideal",
      icon: "💡",
      features: ["Análise do ambiente", "Recomendações técnicas", "Orçamento detalhado", "Plano de implementação"],
      price: "Grátis",
      duration: "1 hora"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Serviços */}
      <section className="bg-gradient-to-r from-green-900 to-brown-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Soluções completas do projeto à instalação, com qualidade e garantia
          </p>
        </div>
      </section>

      {/* Destaque dos Serviços */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Serviços <span className="text-green-800">Completos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Da escolha do produto à instalação final, cuidamos de cada detalhe para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 px-4 bg-beige-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Como <span className="text-green-800">Trabalhamos</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Consulta</h3>
              <p className="text-gray-600">Avaliamos suas necessidades e preferências</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Orçamento</h3>
              <p className="text-gray-600">Apresentamos proposta detalhada sem compromisso</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Execução</h3>
              <p className="text-gray-600">Realizamos o serviço com qualidade e pontualidade</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Garantia</h3>
              <p className="text-gray-600">Acompanhamos e garantimos a satisfação total</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900 to-brown-800 text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Precisa de Nossos Serviços?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato agora e agende uma visita técnica sem custo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Agendar Visita
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border-2 border-green-600"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}