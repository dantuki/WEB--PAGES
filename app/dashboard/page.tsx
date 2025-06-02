import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Glasses, BookOpen, Activity, CheckCircle, User } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-teal-500" />
            <span className="font-bold text-xl">OptoLearn</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Mi Perfil</span>
            </Button>
            <Link href="/">
              <Button variant="outline" size="sm">
                Cerrar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-teal-50 rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-teal-800 mb-2">¡Bienvenido a OptoLearn!</h1>
          <p className="text-teal-700">
            Selecciona una categoría para comenzar tu aprendizaje en optometría. Puedes acceder a todos los temas y
            seguir tu progreso.
          </p>
        </div>

        {/* Categories Grid */}
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Categorías de Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            title="Lentes Oftálmicos"
            description="Óptica básica, tipos de lentes, materiales, tratamientos y más."
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

      {/* Recent Activity Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Actividad Reciente</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-slate-600 text-center py-8">
            Aún no tienes actividad reciente. Comienza a explorar las categorías para registrar tu progreso.
          </p>
          <div className="flex justify-center">
            <Button>Comenzar a Aprender</Button>
          </div>
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
    <Card className="transition-all duration-300 hover:shadow-md h-full">
      <CardContent className="p-6 h-full">
        <Link href={href} className="flex flex-col h-full">
          <div className="mb-4 p-3 bg-teal-50 rounded-full w-fit">{icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
          <p className="text-slate-600 flex-grow">{description}</p>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="text-teal-600 font-medium flex items-center gap-1 text-sm">
              Explorar temas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}
