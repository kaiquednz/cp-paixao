// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Casa das Portas Paixão
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 20 anos transformando entradas em experiências memoráveis. 
              Qualidade, durabilidade e design em cada produto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                📘
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                📷
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                💼
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:pl-2">Início</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-white transition-all duration-300 hover:pl-2">Sobre Nós</a></li>
              <li><a href="/produtos" className="text-gray-300 hover:text-white transition-all duration-300 hover:pl-2">Produtos</a></li>
              <li><a href="/servicos" className="text-gray-300 hover:text-white transition-all duration-300 hover:pl-2">Serviços</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-white transition-all duration-300 hover:pl-2">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3">📞</span>
                <a href="tel:11999999999" className="hover:text-white transition-colors duration-300">(11) 9999-9999</a>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📧</span>
                <a href="mailto:contato@casadasportaspaixao.com" className="hover:text-white transition-colors duration-300">contato@casadasportaspaixao.com</a>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span>Rua das Portas, 123 - Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">🕒</span>
                <span>Seg - Sex: 8h às 18h<br/>Sáb: 8h às 12h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Casa das Portas Paixão. Todos os direitos reservados. | CNPJ: 12.345.678/0001-90</p>
        </div>
      </div>
    </footer>
  )
}