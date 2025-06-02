import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-teal-500" />
          <span className="font-bold text-xl">OptoLearn</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/categorias/lentes-oftalmicos" className="text-slate-600 hover:text-slate-900">
            Lentes Oftálmicos
          </Link>
          <Link href="/categorias/lentes-contacto" className="text-slate-600 hover:text-slate-900">
            Lentes de Contacto
          </Link>
          <Link href="/categorias/anatomia-ocular" className="text-slate-600 hover:text-slate-900">
            Anatomía Ocular
          </Link>
          <Link href="/categorias/errores-refractivos" className="text-slate-600 hover:text-slate-900">
            Errores Refractivos
          </Link>
          <Link href="/categorias/correccion-visual" className="text-slate-600 hover:text-slate-900">
            Corrección Visual
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Iniciar Sesión
          </Button>
          <Button size="sm">Registrarse</Button>
        </div>
      </div>
    </header>
  )
}
