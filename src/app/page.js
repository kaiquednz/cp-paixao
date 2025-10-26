// app/page.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ProductCard from '../components/ProductCard'
import ServiceCard from '../components/ServiceCard'
import HeroSection from '../components/HeroSection'

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Porta de Madeira Maciça Nobre",
      description: "Feita em madeira de lei com acabamento envernizado premium e durabilidade garantida",
      price: "R$ 1.200,00",
      image: "/images/porta-madeira.jpg",
      category: "Madeira Maciça",
      features: ["Madeira sustentável", "Acabamento envernizado", "Durabilidade 20+ anos"],
      badge: "Mais Vendida"
    },
    {
      id: 2,
      name: "Porta de Correr de Vidro Temperado",
      description: "Elegância moderna com vidro temperado de 8mm e estrutura em alumínio anodizado",
      price: "R$ 2.500,00",
      image: "/images/porta-vidro.jpg",
      category: "Vidro e Alumínio",
      features: ["Vidro temperado 8mm", "Alumínio anodizado", "Sistema de correr suave"],
      badge: "Moderno"
    },
    {
      id: 3,
      name: "Porta de Aço com Isolamento",
      description: "Máxima segurança com isolamento térmico e acústico, ideal para áreas externas",
      price: "R$ 1.800,00",
      image: "/images/porta-aco.jpg",
      category: "Aço",
      features: ["Isolamento térmico", "Proteção acústica", "Fechadura multiponto"],
      badge: "Segurança"
    }
  ]

  const services = [
    {
      id: 1,
      title: "Instalação Profissional",
      description: "Instalação realizada por nossa equipe especializada com anos de experiência e equipamentos de precisão",
      icon: "🔧",
      features: ["Montagem precisa", "Ajuste perfeito", "Garantia do serviço", "Limpeza pós-instalação"],
      price: "A partir de R$ 200,00"
    },
    {
      id: 2,
      title: "Projeto Personalizado",
      description: "Portas sob medida para atender às necessidades específicas do seu projeto arquitetônico",
      icon: "📐",
      features: ["Medição no local", "Design exclusivo", "Acabamento personalizado", "Acompanhamento"],
      price: "Sob consulta"
    },
    {
      id: 3,
      title: "Manutenção Premium",
      description: "Serviços de manutenção preventiva e corretiva com peças originais e garantia",
      icon: "🛠️",
      features: ["Troca de fechaduras", "Ajuste de folgas", "Restauração", "Substituição de partes"],
      price: "A partir de R$ 150,00"
    }
  ]

  const stats = [
    { number: "20+", label: "Anos de Experiência" },
    { number: "10.000+", label: "Projetos Realizados" },
    { number: "98%", label: "Satisfação do Cliente" },
    { number: "5", label: "Anos de Garantia" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Nova Hero Section Impressionante */}
      <HeroSection />

      {/* Seção de Estatísticas */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-brown-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-green-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque - Design Aprimorado */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Produtos <span className="text-green-800">Premium</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça nossa seleção exclusiva de portas que unem <span className="font-semibold">beleza, durabilidade e funcionalidade</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a 
              href="/produtos" 
              className="inline-flex items-center bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-800/30"
            >
              <span>Explorar Catálogo Completo</span>
              <span className="ml-3">📋</span>
            </a>
          </div>
        </div>
      </section>

      {/* Serviços - Design Aprimorado */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-brown-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Serviços <span className="text-green-800">Especializados</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Do projeto à instalação, oferecemos <span className="font-semibold">soluções completas</span> para suas necessidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Mais Impactante */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900 to-brown-800 text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-600 rounded-full -translate-x-32 -translate-y-32 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown-600 rounded-full translate-x-48 translate-y-48 opacity-20"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-green-300">Transformar</span> sua Casa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato agora e receba um <span className="font-semibold">orçamento personalizado</span> sem compromisso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato" 
              className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              📞 Solicitar Orçamento
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-green-600 backdrop-blur-sm"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
          
          <div className="mt-8 text-green-200">
            <p>⏱️ Resposta em até 15 minutos durante o horário comercial</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}