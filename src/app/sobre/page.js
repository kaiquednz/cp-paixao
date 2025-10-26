import { Users, Award, Heart, Target } from 'lucide-react'

export default function Sobre() {
  const valores = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão pelo que Fazemos",
      description: "Amar o que fazemos é o segredo para entregar produtos de qualidade excepcional"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Compromisso com a Qualidade",
      description: "Cada porta é cuidadosamente selecionada e fabricada com os melhores materiais"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência no Atendimento",
      description: "Nossa equipe está sempre pronta para superar suas expectativas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trabalho em Equipe",
      description: "Valorizamos cada membro da nossa família Paixão"
    }
  ]

  const equipe = [
    { nome: "Carlos Paixão", cargo: "Fundador & CEO", experiencia: "25 anos no mercado" },
    { nome: "Ana Silva", cargo: "Diretora Comercial", experiencia: "15 anos de experiência" },
    { nome: "Roberto Santos", cargo: "Gerente de Produção", experiencia: "20 anos na área" },
    { nome: "Marina Oliveira", cargo: "Designer de Produto", experiencia: "10 anos criando" }
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--accent-dark)] to-[var(--primary-brown)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Há mais de 20 anos transformando lares e negócios com portas que unem beleza, 
            segurança e durabilidade.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">A Casa das Portas Paixão</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Fundada em 2003 por Carlos Paixão, nossa empresa nasceu da paixão por 
                  transformar ambientes através de portas que contam histórias.
                </p>
                <p>
                  Começamos como uma pequena marcenaria no interior de São Paulo e, através 
                  de muito trabalho e dedicação, nos tornamos referência em qualidade e 
                  atendimento personalizado.
                </p>
                <p>
                  Hoje, atendemos toda a região com uma ampla variedade de produtos, desde 
                  portas clássicas até as mais modernas soluções em alumínio e laminados.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Foto da Loja/História</span>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-[var(--primary-brown)] mb-4 flex justify-center">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membro, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{membro.nome}</h3>
                <p className="text-[var(--primary-brown)] font-semibold mb-2">{membro.cargo}</p>
                <p className="text-gray-600 text-sm">{membro.experiencia}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}