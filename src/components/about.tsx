import { CheckCircle, Award, Users, Clock } from 'lucide-react'

const values = [
  {
    icon: CheckCircle,
    title: 'Calidad Garantizada',
    description: 'Cada proyecto se entrega con los más altos estándares de calidad y funcionalidad.'
  },
  {
    icon: Award,
    title: 'Experiencia Comprobada',
    description: 'Con un equipo con más de 10 años de experiencia en el sector tecnológico'
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    description: 'Profesionales certificados en las últimas tecnologías y metodologías de desarrollo.'
  }
]

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Sobre Noah IT
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Innovación Tecnológica al Servicio de tu Éxito
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En Noah IT, somos más que una empresa de servicios informáticos. Somos tu socio estratégico
              en la transformación digital, comprometidos con brindar soluciones tecnológicas que impulsen
              el crecimiento y la competitividad de tu negocio.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo de expertos combina creatividad, experiencia técnica y comprensión profunda
              del negocio para crear soluciones que no solo resuelven problemas actuales, sino que también
              preparan tu empresa para los desafíos del futuro.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <value.icon className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="h-12 rounded-lg flex items-center justify-center">
                  <img
                    src="/logo-simple-nooh.it.png"
                    alt="Noah IT"
                    className="w-full h-full object-contain"
                  />
                </div> 
                <p className="text-gray-600">Servicios Informáticos Profesionales</p>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

