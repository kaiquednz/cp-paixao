'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function Produtos() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const products = [
    {
      id: 1,
      name: "Porta de Madeira Maciça",
      description: "Porta clássica em madeira de lei com acabamento premium",
      price: "R$ 1.200,00",
      category: "madeira",
      image: "/images/porta-madeira.jpg"
    },
    {
      id: 2,
      name: "Porta de Alumínio",
      description: "Modernas portas de alumínio para áreas externas",
      price: "R$ 850,00",
      category: "aluminio",
      image: "/images/porta-aluminio.jpg"
    },
    {
      id: 3,
      name: "Porta Laminada",
      description: "Elegância e praticidade para ambientes internos",
      price: "R$ 680,00",
      category: "laminada",
      image: "/images/porta-laminada.jpg"
    },
    {
      id: 4,
      name: "Porta de Correr",
      description: "Ideal para economizar espaço em ambientes modernos",
      price: "R$ 1.500,00",
      category: "aluminio",
      image: "/images/porta-correr.jpg"
    },
    {
      id: 5,
      name: "Porta de MDF",
      description: "Acabamento perfeito para interiores residenciais",
      price: "R$ 550,00",
      category: "laminada",
      image: "/images/porta-mdf.jpg"
    },
    {
      id: 6,
      name: "Porta de Eucalipto",
      description: "Sustentabilidade e beleza em um só produto",
      price: "R$ 950,00",
      category: "madeira",
      image: "/images/porta-eucalipto.jpg"
    }
  ]

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'madeira', label: 'Madeira' },
    { id: 'aluminio', label: 'Alumínio' },
    { id: 'laminada', label: 'Laminadas' }
  ]

  const filteredProducts = activeFilter === 'todos' 
    ? products 
    : products.filter(product => product.category === activeFilter)

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Nossos Produtos</h1>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-[var(--primary-brown)] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Nenhum produto encontrado para esta categoria.</p>
          </div>
        )}
      </div>
    </div>
  )
}