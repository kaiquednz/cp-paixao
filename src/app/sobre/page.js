// app/sobre/page.js
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function Sobre() {
  const valores = [
    {
      icon: "🎯",
      title: "Missão",
      description: "Fornecer produtos e serviços de alta qualidade, transformando entradas em experiências memoráveis com excelência e compromisso."
    },
    {
      icon: "👁️",
      title: "Visão",
      description: "Ser referência em portas e soluções para ambientes, reconhecida pela qualidade, inovação e satisfação dos clientes."
    },
    {
      icon: "💎",
      title: "Valores",
      description: "Qualidade, transparência, compromisso com o cliente, inovação e respeito ao meio ambiente."
    }
  ]

  const timeline = [
    {
      year: "2003",
      title: "Fundação",
      description: "Abertura da primeira loja com foco em portas de madeira artesanais"
    },
    {
      year: "2008",
      title: "Expansão",
      description: "Ampliação do portfólio para portas de aço e vidro"
    },
    {
      year: "2015",
      title: "Certificação",
      description: "Certificação de qualidade ISO 9001"
    },
    {
      year: "2020",
      title: "Modernização",
      description: "Implementação de processos digitais e e-commerce"
    },
    {
      year: "2024",
      title: "Presente",
      description: "Mais de 10.000 projetos realizados e 98% de satisfação"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Sobre */}
      <section className="bg-gradient-to-r from-green-900 to-brown-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossa História</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Há mais de 20 anos transformando entradas e conquistando a confiança dos nossos clientes
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Casa das Portas <span className="text-green-800">Paixão</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fundada em 2003, a Casa das Portas Paixão nasceu do sonho de oferecer produtos 
                de qualidade que unissem durabilidade, design e sofisticação. O que começou como 
                uma pequena loja de portas artesanais transformou-se em referência no segmento.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ao longo de mais de 20 anos, mantivemos nosso compromisso com a excelência, 
                investindo constantemente em tecnologia, capacitação da nossa equipe e 
                melhoria contínua dos nossos processos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoje, orgulhamo-nos de ter participado de mais de 10.000 projetos, 
                desde residências até empreendimentos comerciais, sempre com o mesmo 
                cuidado e atenção aos detalhes que nos tornaram reconhecidos no mercado.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-brown-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl">🚪</span>
                <p className="text-xl font-semibold text-gray-700 mt-4">
                  Mais de 20 anos de experiência
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-beige-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossos <span className="text-green-800">Pilares</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-6">{valor.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{valor.title}</h3>
                <p className="text-gray-600 leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossa <span className="text-green-800">Jornada</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Conteúdo */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <h3 className="text-2xl font-bold text-green-800 mb-2">{item.year}</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Ponto na linha */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Espaço vazio */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900 to-brown-800 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Projetos Realizados</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfação do Cliente</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">5K+</div>
              <div className="text-lg opacity-90">Clientes Atendidos</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}