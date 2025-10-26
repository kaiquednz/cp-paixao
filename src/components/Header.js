// components/Header.js
'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-900">
              Casa das Portas <span className="text-brown-700">Paixão</span>
            </h1>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-800 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-green-800 py-2">
              Início
            </a>
            <a href="/sobre" className="text-gray-700 hover:text-green-800 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-green-800 py-2">
              Sobre
            </a>
            <a href="/produtos" className="text-gray-700 hover:text-green-800 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-green-800 py-2">
              Produtos
            </a>
            <a href="/servicos" className="text-gray-700 hover:text-green-800 font-medium transition-all duration-300 border-b-2 border-transparent hover:border-green-800 py-2">
              Serviços
            </a>
            <a href="/contato" className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contato
            </a>
          </nav>

          {/* Menu Mobile Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`space-y-1 transition-all duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
              <div className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></div>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-green-800 font-medium py-2 border-l-4 border-green-800 pl-4">
                Início
              </a>
              <a href="/sobre" className="text-gray-700 hover:text-green-800 font-medium py-2 border-l-4 border-transparent hover:border-green-800 pl-4">
                Sobre
              </a>
              <a href="/produtos" className="text-gray-700 hover:text-green-800 font-medium py-2 border-l-4 border-transparent hover:border-green-800 pl-4">
                Produtos
              </a>
              <a href="/servicos" className="text-gray-700 hover:text-green-800 font-medium py-2 border-l-4 border-transparent hover:border-green-800 pl-4">
                Serviços
              </a>
              <a href="/contato" className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold text-center">
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}