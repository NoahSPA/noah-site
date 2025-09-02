import React from 'react'
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react'

const footerLinks = {
  servicios: [
    { name: 'Desarrollo Web', href: '#' },
    { name: 'Cloud Computing', href: '#' },
    { name: 'Consultoría IT', href: '#' }
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '#' },
    { name: 'Nuestro Equipo', href: '#' },
  ],
  recursos: [
    { name: 'Centro de Ayuda', href: '#' },
    { name: 'Documentación', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Soporte', href: '#' }
  ],
  legal: [
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Licencias', href: '#' }
  ]
}

const socialLinks: Array<{ name: string; icon: React.ComponentType<{ className?: string }>; href: string; color: string }> = [
  // { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-purple-400' },
  // { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-purple-700' },
  // { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
  // { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-700' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-12 rounded-lg flex items-center justify-center">
                <img 
                  src="/logo-simple-nooh.it.light.png" 
                  alt="Noah IT" 
                  className="w-full h-full object-contain"
                />
              </div> 
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos tu negocio digital con soluciones tecnológicas innovadoras y un equipo de expertos comprometidos con tu éxito.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">contacto@noah.it.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">+56 9 9795 8640</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Suscríbete a nuestro newsletter</h3>
            <p className="text-gray-300 mb-6">
              Recibe las últimas noticias sobre tecnología y tips para tu negocio digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Noah IT. Todos los derechos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
