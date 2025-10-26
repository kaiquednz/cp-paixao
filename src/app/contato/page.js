// app/contato/page.js
'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode integrar com um serviço de email ou API
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    })
  }

  const contactInfo = [
    {
      icon: "📞",
      title: "Telefone",
      info: "(11) 9999-9999",
      link: "tel:11999999999"
    },
    {
      icon: "📧",
      title: "Email",
      info: "contato@casadasportaspaixao.com",
      link: "mailto:contato@casadasportaspaixao.com"
    },
    {
      icon: "📍",
      title: "Endereço",
      info: "Rua das Portas, 123 - Centro, São Paulo - SP",
      link: "https://maps.google.com"
    },
    {
      icon: "🕒",
      title: "Horário de Funcionamento",
      info: "Seg - Sex: 8h às 18h | Sáb: 8h às 12h",
      link: null
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Contato */}
      <section className="bg-gradient-to-r from-green-900 to-brown-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Pronto para transformar sua casa? Fale conosco!
          </p>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Envie sua <span className="text-green-800">Mensagem</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato o mais rápido possível
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Assunto *
                    </label>
                    <select
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="orcamento">Solicitar Orçamento</option>
                      <option value="duvida">Dúvida sobre Produtos</option>
                      <option value="servico">Serviços de Instalação</option>
                      <option value="manutencao">Manutenção e Reparo</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-800 hover:bg-green-900 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nossos <span className="text-green-800">Canais</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Escolha a forma de contato que preferir. Estamos aqui para ajudar!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-all duration-300">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-600 hover:text-green-800 transition-colors duration-300"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* WhatsApp Quick Action */}
              <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-200">
                <h3 className="font-semibold text-gray-800 text-lg mb-3">Atendimento Rápido</h3>
                <p className="text-gray-600 mb-4">
                  Prefere falar diretamente? Clique abaixo para conversar no WhatsApp
                </p>
                <a 
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">💬</span>
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 px-4 bg-beige-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Nossa <span className="text-green-800">Localização</span>
          </h2>
          
          <div className="bg-gradient-to-br from-green-100 to-brown-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl">🗺️</span>
              <p className="text-xl font-semibold text-gray-700 mt-4">
                Mapa da Localização
              </p>
              <p className="text-gray-600 mt-2">
                Rua das Portas, 123 - Centro, São Paulo - SP
              </p>
              <button className="mt-4 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Abrir no Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}