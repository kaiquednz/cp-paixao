// components/ServiceCard.js
export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="text-4xl mb-6">{service.icon}</div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
      
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="text-green-600 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <span>{service.price}</span>
          <span>{service.duration}</span>
        </div>
        
        <button className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Solicitar Serviço
        </button>
      </div>
    </div>
  )
}