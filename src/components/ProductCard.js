// components/ProductCard.js
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.badge}
          </span>
        </div>
      )}
      
      <div className="h-48 bg-gradient-to-br from-green-100 to-brown-100 flex items-center justify-center relative overflow-hidden">
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">🚪</span>
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
          <span className="text-2xl font-bold text-green-800">{product.price}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-800 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
        
        <ul className="space-y-2 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-green-600 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
            <span>Ver Detalhes</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="text-green-800 hover:text-green-900 font-semibold flex items-center gap-2 transition-all duration-300 group/btn">
            <span>💬</span>
            <span className="group-hover/btn:underline">Orçar</span>
          </button>
        </div>
      </div>
    </div>
  )
}