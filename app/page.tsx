import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import LoginForm from "@/components/login-form"
import { Eye, Glasses, BookOpen, Activity, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Plataforma de Aprendizaje de Optometría</h1>
        <p className="text-xl text-slate-600 max-w-3xl mb-10">
          Aprende todo sobre optometría, lentes oftálmicos, adaptación de lentes de contacto, anatomía ocular, errores
          refractivos y corrección visual.
        </p>
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-t-3xl shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Categorías de Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CategoryCard
            title="Lentes Oftálmicos"
            description="Aprende sobre óptica básica, tipos de lentes, materiales, tratamientos y más."
            icon={<Glasses className="h-10 w-10 text-teal-500" />}
            href="/categorias/lentes-oftalmicos"
          />
          <CategoryCard
            title="Adaptación de Lentes de Contacto"
            description="Fundamentos de óptica, anatomía ocular, tipos de lentes de contacto y su cuidado."
            icon={<Eye className="h-10 w-10 text-teal-500" />}
            href="/categorias/lentes-contacto"
          />
          <CategoryCard
            title="Anatomía y Fisiología Ocular"
            description="Estructuras del ojo, fisiología, vías ópticas y métodos de exploración."
            icon={<BookOpen className="h-10 w-10 text-teal-500" />}
            href="/categorias/anatomia-ocular"
          />
          <CategoryCard
            title="Errores Refractivos"
            description="Miopía, hipermetropía, astigmatismo, presbicia y su diagnóstico."
            icon={<Activity className="h-10 w-10 text-teal-500" />}
            href="/categorias/errores-refractivos"
          />
          <CategoryCard
            title="Corrección Visual"
            description="Métodos de corrección, evaluación, prescripción óptica y casos clínicos."
            icon={<CheckCircle className="h-10 w-10 text-teal-500" />}
            href="/categorias/correccion-visual"
          />
        </div>
      </section>
    </div>
  )
}

function CategoryCard({
  title,
  description,
  icon,
  href,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <Link href={href} className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-teal-50 rounded-full">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </Link>
      </CardContent>
    </Card>
  )
}
