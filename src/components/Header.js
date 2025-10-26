// components/Header.js
'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-800">
              Casa das Portas Paixão
            </h1>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">
              Início
            </a>
            <a href="/sobre" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">
              Sobre
            </a>
            <a href="/produtos" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">
              Produtos
            </a>
            <a href="/services" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">
              Serviços
            </a>
            <a href="/contato" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">
              Contato
            </a>
          </nav>

          {/* Menu Mobile Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-700"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Início
              </a>
              <a href="/sobre" className="text-gray-700 hover:text-green-600 font-medium">
                Sobre
              </a>
              <a href="/produtos" className="text-gray-700 hover:text-green-600 font-medium">
                Produtos
              </a>
              <a href="/services" className="text-gray-700 hover:text-green-600 font-medium">
                Serviços
              </a>
              <a href="/contato" className="text-gray-700 hover:text-green-600 font-medium">
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}