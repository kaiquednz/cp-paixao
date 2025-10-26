// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Casa das Portas Paixão
            </h3>
            <p className="text-gray-300 mb-4">
              Há mais de 20 anos oferecendo as melhores portas para sua casa. 
              Qualidade, durabilidade e design em cada produto.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition duration-300">Início</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-white transition duration-300">Sobre</a></li>
              <li><a href="/produtos" className="text-gray-300 hover:text-white transition duration-300">Produtos</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition duration-300">Serviços</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-white transition duration-300">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📞 (11) 9999-9999</li>
              <li>📧 contato@casadasportaspaixao.com</li>
              <li>📍 Endereço da Loja</li>
              <li>🕒 Seg - Sex: 8h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Casa das Portas Paixão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}