'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

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
    // Aqui você integraria com EmailJS ou Formspree
    console.log('Dados do formulário:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    })
  }

  const contatos = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      content: "(11) 9999-9999",
      link: "tel:5511999999999"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contato@casadasportaspaixao.com.br",
      link: "mailto:contato@casadasportaspaixao.com.br"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      content: "Rua Exemplo, 123 - São Paulo, SP",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Funcionamento",
      content: "Seg - Sex: 8h às 18h | Sáb: 8h às 12h",
      link: null
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--accent-dark)] to-[var(--primary-brown)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aqui para ajudar! Fale conosco e descubra como podemos transformar seu espaço.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-8">Nossos Contatos</h2>
            <div className="space-y-6">
              {contatos.map((contato, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-[var(--primary-brown)] mt-1">
                    {contato.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{contato.title}</h3>
                    {contato.link ? (
                      <a 
                        href={contato.link}
                        target={contato.link.includes('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[var(--primary-brown)] transition-colors"
                      >
                        {contato.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{contato.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Direto */}
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-800 mb-2">Atendimento Rápido</h3>
              <p className="text-green-700 mb-4">Fale diretamente conosco pelo WhatsApp</p>
              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-8">Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="duvida">Dúvida</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="elogio">Elogio</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="6"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-brown)] focus:border-transparent"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[var(--primary-brown)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--accent-dark)] transition-colors flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Onde Estamos</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Mapa do Google Maps será integrado aqui</p>
              <p className="text-sm text-gray-500 mt-2">
                Rua Exemplo, 123 - São Paulo, SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}