// app/produtos/page.js
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import ProductCard from '../../components/ProductCard'

export default function Produtos() {
  const allProducts = [
    {
      id: 1,
      name: "Porta de Madeira Maciça Nobre",
      description: "Feita em madeira de lei com acabamento envernizado premium",
      price: "R$ 1.200,00",
      image: "/images/porta-madeira-nobre.jpg",
      category: "Madeira Maciça",
      features: ["Madeira sustentável", "Acabamento envernizado", "Durabilidade garantida"]
    },
    {
      id: 2,
      name: "Porta de Correr de Vidro Temperado",
      description: "Elegância moderna com vidro temperado de 8mm",
      price: "R$ 2.500,00",
      image: "/images/porta-vidro-temperado.jpg",
      category: "Vidro e Alumínio",
      features: ["Vidro temperado 8mm", "Alumínio anodizado", "Sistema de correr suave"]
    },
    {
      id: 3,
      name: "Porta de Aço com Isolamento",
      description: "Segurança e conforto térmico/acústico",
      price: "R$ 1.800,00",
      image: "/images/porta-aco-isolamento.jpg",
      category: "Aço",
      features: ["Isolamento térmico", "Proteção acústica", "Fechadura multiponto"]
    },
    {
      id: 4,
      name: "Porta de MDF Laminado",
      description: "Custo-benefício com ótimo acabamento",
      price: "R$ 650,00",
      image: "/images/porta-mdf.jpg",
      category: "MDF",
      features: ["Diversas cores", "Fácil limpeza", "Instalação rápida"]
    },
    {
      id: 5,
      name: "Porta pivotante de Madeira",
      description: "Design arrojado para ambientes modernos",
      price: "R$ 3.200,00",
      image: "/images/porta-pivotante.jpg",
      category: "Design",
      features: ["Sistema pivotante", "Design exclusivo", "Instalação especializada"]
    },
    {
      id: 6,
      name: "Porta Sanfonada de PVC",
      description: "Praticidade para áreas internas",
      price: "R$ 450,00",
      image: "/images/porta-sanfonada.jpg",
      category: "PVC",
      features: ["Economia de espaço", "Fácil instalação", "Manutenção simples"]
    }
  ]

  const categories = ["Todos", "Madeira Maciça", "Vidro e Alumínio", "Aço", "MDF", "Design", "PVC"]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Produtos */}
      <section className="bg-gradient-to-r from-green-900 to-brown-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossos Produtos</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Descubra nossa linha completa de portas para todos os ambientes e estilos
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button 
                key={category}
                className="bg-white hover:bg-green-800 hover:text-white text-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-gray-300 hover:border-green-800"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}