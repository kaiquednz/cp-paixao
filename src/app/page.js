// app/page.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-brown-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Casa das Portas Paixão
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Qualidade e elegância para sua casa há mais de 20 anos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/produtos" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
            >
              Ver Produtos
            </a>
            <a 
              href="/contato" 
              className="bg-brown-600 hover:bg-brown-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 border border-white"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Por que Escolher a Casa das Portas Paixão?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualidade Garantida</h3>
              <p className="text-gray-600">Materiais de primeira linha e acabamento impecável</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Entrega Rápida</h3>
              <p className="text-gray-600">Entregamos no prazo combinado, sem surpresas</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instalação Profissional</h3>
              <p className="text-gray-600">Equipe especializada para instalação perfeita</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Pronto para Transformar sua Casa?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato e solicite um orçamento sem compromisso
          </p>
          <a 
            href="/contato" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}