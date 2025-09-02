import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'María González',
    position: 'CEO, TechStart Solutions',
    company: 'TechStart Solutions',
    content: 'Noah IT transformó completamente nuestra infraestructura digital. Su equipo profesional y dedicado nos ayudó a implementar soluciones cloud que redujeron nuestros costos en un 40%.',
    rating: 5,
    avatar: 'MG'
  },
  {
    name: 'Carlos Rodríguez',
    position: 'Director de IT, InnovateCorp',
    company: 'InnovateCorp',
    content: 'La experiencia con Noah IT ha sido excepcional. Desarrollaron nuestra aplicación web en tiempo récord, con una calidad superior y un soporte post-venta impecable.',
    rating: 5,
    avatar: 'CR'
  },
  {
    name: 'Ana Martínez',
    position: 'Fundadora, DigitalCraft',
    company: 'DigitalCraft',
    content: 'Gracias a Noah IT, pudimos lanzar nuestra plataforma de e-commerce en solo 3 meses. Su expertise en tecnologías modernas y su enfoque en la experiencia del usuario fueron clave.',
    rating: 5,
    avatar: 'AM'
  },
  {
    name: 'Luis Fernández',
    position: 'CTO, FutureTech',
    company: 'FutureTech',
    content: 'Noah IT no solo desarrolló nuestro sistema de gestión, sino que también nos capacitó para mantenerlo. Su compromiso con el éxito del cliente va más allá del código.',
    rating: 5,
    avatar: 'LF'
  },
  {
    name: 'Sofia Vargas',
    position: 'Gerente de Operaciones, DataFlow',
    company: 'DataFlow',
    content: 'La implementación de nuestra base de datos y el sistema de analytics superó todas nuestras expectativas. Noah IT demostró un profundo conocimiento técnico y comercial.',
    rating: 5,
    avatar: 'SV'
  },
  {
    name: 'Roberto Silva',
    position: 'Director Ejecutivo, CloudFirst',
    company: 'CloudFirst',
    content: 'La migración a la nube con Noah IT fue un proceso fluido y sin interrupciones. Su metodología ágil y comunicación constante nos dio confianza en todo momento.',
    rating: 5,
    avatar: 'RS'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Descubre por qué confían en Noah IT para sus proyectos tecnológicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-end mb-4">
                <div className="p-2 rounded-full bg-purple-100">
                  <Quote className="w-5 h-5 text-purple-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
