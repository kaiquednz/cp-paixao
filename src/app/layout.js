// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Casa das Portas Paixão - Portas Premium',
  description: 'Portas de alta qualidade e design para sua casa. Mais de 20 anos de tradição e excelência.',
  keywords: 'portas, madeira, qualidade, construção, reforma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-white">
        {children}
      </body>
    </html>
  )
}