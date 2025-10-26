// components/HeroSection.js
'use client'

import { useState, useEffect } from 'react'
import AnimatedParticles from './AnimatedParticles'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Portas de Madeira Maciça",
    "Portas de Aço com Isolamento", 
    "Portas de Vidro Temperado",
    "Projetos Personalizados",
    "Instalação Profissional"
  ]

  // Efeito de digitação
  useEffect(() => {
    const current = currentText % texts.length
    const fullText = texts[current]
    
    const timeout = setTimeout(() => {
      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      )

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentText((current + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, displayText, isDeleting, texts])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-brown-900">
      {/* Partículas Animadas */}
      <AnimatedParticles />
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Padrão geométrico de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-green-400 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border-4 border-brown-300 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-green-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border-4 border-brown-400 rotate-12"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="text-white">
            {/* Badge de Destaque */}
            <div className="inline-flex items-center bg-green-700 bg-opacity-50 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="font-semibold text-green-200">+20 Anos de Experiência</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Casa das
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-brown-200 mt-2">
                Portas Paixão
              </span>
            </h1>

            {/* Texto Animado */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 h-16">
              <span className="text-green-200">Especialistas em </span>
              <span className="text-brown-200 font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Descrição */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
              Transformamos entradas em <span className="font-semibold text-white">experiências memoráveis</span>. 
              Qualidade premium, design exclusivo e instalação perfeita para seu projeto.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="/produtos" 
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-700/30 flex items-center justify-center"
              >
                <span>Ver Catálogo Completo</span>
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <a 
                href="/contato" 
                className="group bg-transparent hover:bg-white hover:text-green-900 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white backdrop-blur-sm flex items-center justify-center"
              >
                <span>Orçamento Gratuito</span>
                <span className="ml-3 group-hover:scale-110 transition-transform">📞</span>
              </a>
            </div>

            {/* Destaques Rápidos */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-green-700 border-opacity-50">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Garantia</div>
                  <div className="text-green-200 text-sm">5 anos</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brown-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Entrega</div>
                  <div className="text-green-200 text-sm">15-30 dias</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-lg">⭐</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Avaliação</div>
                  <div className="text-green-200 text-sm">4.9/5 estrelas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual da Porta */}
          <div className="relative">
            <div className="relative z-10">
              {/* Porta Principal */}
              <div className="bg-gradient-to-br from-brown-800 to-brown-900 rounded-2xl p-8 shadow-2xl border-2 border-brown-600 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-brown-700 rounded-xl p-6 border border-brown-600">
                  <div className="bg-brown-800 rounded-lg p-4 border border-brown-700 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚪</div>
                      <div className="text-brown-200 font-semibold">Porta de Madeira Maciça</div>
                      <div className="text-brown-300 text-sm">Acabamento Premium</div>
                    </div>
                  </div>
                </div>
                
                {/* Maçaneta */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-12 bg-yellow-600 rounded-full shadow-lg"></div>
                </div>
              </div>
              
              {/* Efeitos de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-brown-500/10 rounded-2xl blur-xl -z-10"></div>
            </div>
            
            {/* Elementos decorativos flutuantes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brown-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}