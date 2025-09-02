import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transformamos tu
          <span className="block bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
            Negocio Digital
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Noah IT ofrece servicios informáticos integrales para empresas que buscan innovar, 
          optimizar y crecer en el mundo digital. Tecnología de vanguardia al servicio de tu éxito.
        </p>

      </div>


    </section>
  )
}
