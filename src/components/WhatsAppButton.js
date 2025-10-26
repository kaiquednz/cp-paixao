// components/WhatsAppButton.js
export default function WhatsAppButton() {
  const phoneNumber = "5511999999999" // Substitua pelo número real
  const message = "Olá! Gostaria de mais informações sobre as portas."

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
    >
      <div className="flex items-center justify-center w-6 h-6">
        <span className="text-lg">💬</span>
      </div>
    </a>
  )
}