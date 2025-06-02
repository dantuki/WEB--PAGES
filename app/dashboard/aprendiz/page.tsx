import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Glasses, BookOpen, Activity, CheckCircle, User, Lightbulb, GraduationCap } from "lucide-react"

export default function AprendizDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard/aprendiz" className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-teal-500" />
            <span className="font-bold text-xl">OptoLearn</span>
            <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">Aprendiz</span>
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
          <h1 className="text-2xl font-bold text-teal-800 mb-2">¡Bienvenido a tu espacio de aprendizaje!</h1>
          <p className="text-teal-700 mb-4">
            Como aprendiz, tendrás acceso a contenido educativo adaptado para facilitar tu comprensión de los conceptos
            de optometría. Hemos simplificado la información técnica para que puedas aprender a tu ritmo.
          </p>
          <div className="flex items-center gap-2 text-teal-600">
            <GraduationCap className="h-5 w-5" />
            <span className="font-medium">Modo Aprendiz Activado</span>
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Ruta de Aprendizaje Recomendada
          </h2>
          <ol className="relative border-l border-teal-200 ml-3 space-y-6">
            <li className="mb-6 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full -left-4 ring-4 ring-white">
                <span className="text-teal-800 font-bold">1</span>
              </span>
              <h3 className="font-semibold text-lg text-slate-800">Anatomía y Fisiología Ocular</h3>
              <p className="text-slate-600 mb-2">
                Comienza aprendiendo las partes del ojo y cómo funcionan. Esto te dará una base sólida.
              </p>
              <Link href="/categorias/anatomia-ocular">
                <Button variant="outline" size="sm">
                  Comenzar
                </Button>
              </Link>
            </li>
            <li className="mb-6 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full -left-4 ring-4 ring-white">
                <span className="text-teal-800 font-bold">2</span>
              </span>
              <h3 className="font-semibold text-lg text-slate-800">Errores Refractivos</h3>
              <p className="text-slate-600 mb-2">
                Aprende sobre miopía, hipermetropía y astigmatismo de manera sencilla y visual.
              </p>
              <Link href="/categorias/errores-refractivos">
                <Button variant="outline" size="sm">
                  Explorar
                </Button>
              </Link>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full -left-4 ring-4 ring-white">
                <span className="text-teal-800 font-bold">3</span>
              </span>
              <h3 className="font-semibold text-lg text-slate-800">Corrección Visual</h3>
              <p className="text-slate-600 mb-2">
                Descubre cómo se corrigen los problemas visuales con lentes y otros métodos.
              </p>
              <Link href="/categorias/correccion-visual">
                <Button variant="outline" size="sm">
                  Descubrir
                </Button>
              </Link>
            </li>
          </ol>
        </div>

        {/* Categories Grid */}
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Todas las Categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            title="Lentes Oftálmicos"
            description="Aprende sobre los diferentes tipos de lentes que se usan para corregir problemas de visión. Contenido adaptado para principiantes."
            icon={<Glasses className="h-10 w-10 text-teal-500" />}
            href="/categorias/lentes-oftalmicos"
            level="Principiante"
          />
          <CategoryCard
            title="Adaptación de Lentes de Contacto"
            description="Descubre cómo funcionan los lentes de contacto y cómo se adaptan a los ojos. Explicaciones sencillas con muchas imágenes."
            icon={<Eye className="h-10 w-10 text-teal-500" />}
            href="/categorias/lentes-contacto"
            level="Intermedio"
          />
          <CategoryCard
            title="Anatomía y Fisiología Ocular"
            description="Conoce las partes del ojo y cómo funcionan juntas para permitirnos ver. Incluye modelos 3D interactivos."
            icon={<BookOpen className="h-10 w-10 text-teal-500" />}
            href="/categorias/anatomia-ocular"
            level="Principiante"
          />
          <CategoryCard
            title="Errores Refractivos"
            description="Entiende qué son la miopía, hipermetropía y astigmatismo de manera sencilla. Incluye simulaciones visuales."
            icon={<Activity className="h-10 w-10 text-teal-500" />}
            href="/categorias/errores-refractivos"
            level="Principiante"
          />
          <CategoryCard
            title="Corrección Visual"
            description="Aprende sobre las diferentes formas de corregir problemas visuales, desde lentes hasta cirugías, explicado de forma sencilla."
            icon={<CheckCircle className="h-10 w-10 text-teal-500" />}
            href="/categorias/correccion-visual"
            level="Intermedio"
          />
        </div>
      </section>

      {/* Learning Resources */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Recursos de Aprendizaje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-none shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Glosario Visual</h3>
              <p className="text-slate-600 mb-4">
                Un diccionario ilustrado con todos los términos de optometría que necesitas conocer, explicados de forma
                sencilla.
              </p>
              <Button variant="outline" className="bg-white">
                Ver Glosario
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-none shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Videos Explicativos</h3>
              <p className="text-slate-600 mb-4">
                Colección de videos cortos que explican conceptos complejos de manera visual y fácil de entender.
              </p>
              <Button variant="outline" className="bg-white">
                Ver Videos
              </Button>
            </CardContent>
          </Card>
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
  level,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  level: string
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md h-full">
      <CardContent className="p-6 h-full">
        <Link href={href} className="flex flex-col h-full">
          <div className="mb-4 p-3 bg-teal-50 rounded-full w-fit">{icon}</div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
            <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">{level}</span>
          </div>
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
