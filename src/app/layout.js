import './globals.css'

export const metadata = {
  title: 'Casa das Portas Paixão - Portas de Qualidade',
  description: 'Encontre as melhores portas para sua casa na Casa das Portas Paixão. Qualidade, durabilidade e design.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}