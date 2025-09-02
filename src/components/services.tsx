import { Code, Database, Shield, Cloud, Smartphone, Globe, BarChart3, Zap } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, aplicaciones web progresivas y sistemas web personalizados con las últimas tecnologías.',
    features: ['React/Next.js', 'Node.js', 'TypeScript', 'Responsive Design']
  },
  {
    icon: Database,
    title: 'Bases de Datos',
    description: 'Diseño, implementación y optimización de bases de datos para mejorar el rendimiento de tu aplicación.',
    features: ['MySQL/PostgreSQL', 'MongoDB', 'Redis', 'Optimización']
  },
  // {
  //   icon: Shield,
  //   title: 'Ciberseguridad',
  //   description: 'Protección integral de sistemas, auditorías de seguridad y cumplimiento de estándares internacionales.',
  //   features: ['Penetration Testing', 'Auditorías', 'Compliance', 'Incident Response']
  // },
  // {
  //   icon: Cloud,
  //   title: 'Cloud Computing',
  //   description: 'Migración a la nube, gestión de infraestructura y optimización de costos en plataformas cloud.',
  //   features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD', 'Monitoring']
  // },
  // {
  //   icon: Smartphone,
  //   title: 'Apps Móviles',
  //   description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
  //   features: ['React Native', 'Flutter', 'iOS/Android', 'App Store']
  // },
  {
    icon: Globe,
    title: 'Consultoría IT',
    description: 'Asesoramiento estratégico para transformación digital y optimización de procesos tecnológicos.',
    features: ['Estrategia Digital', 'Arquitectura', 'Optimización', 'Training']
  },
  {
    icon: BarChart3,
    title: 'Analytics & BI',
    description: 'Análisis de datos, dashboards interactivos y reportes para la toma de decisiones informadas.',
    features: ['Power BI', 'Tableau', 'Big Data', 'Machine Learning']
  },
  // {
  //   icon: Zap,
  //   title: 'Soporte Técnico',
  //   description: 'Soporte 24/7, mantenimiento preventivo y resolución rápida de incidencias técnicas.',
  //   features: ['Help Desk', 'Mantenimiento', 'Backup', 'Recuperación']
  // }
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 text-center leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  )
}

