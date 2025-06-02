import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, BookOpen } from "lucide-react"

// Definición de las categorías y sus subcategorías
const categorias = {
  "lentes-oftalmicos": {
    titulo: "Lentes Oftálmicos",
    descripcion: "Aprende sobre óptica básica, tipos de lentes, materiales, tratamientos y más.",
    subcategorias: [
      { id: "optica-basica", titulo: "Óptica básica aplicada" },
      { id: "tipos-lentes", titulo: "Tipos de lentes oftálmicas" },
      { id: "materiales", titulo: "Materiales de las lentes" },
      { id: "tratamientos", titulo: "Tratamientos y recubrimientos" },
      { id: "diseno", titulo: "Diseño y geometría de lentes" },
      { id: "prescripcion", titulo: "Prescripción óptica y lectura de recetas" },
      { id: "montaje", titulo: "Montaje y centrado" },
      { id: "relacion-paciente", titulo: "Relación lente-paciente" },
    ],
  },
  "lentes-contacto": {
    titulo: "Adaptación de Lentes de Contacto",
    descripcion: "Fundamentos de óptica, anatomía ocular, tipos de lentes de contacto y su cuidado.",
    subcategorias: [
      { id: "fundamentos-optica", titulo: "Fundamentos de óptica" },
      { id: "anatomia-fisiologia", titulo: "Anatomía y fisiología ocular" },
      { id: "tipos-ametropia", titulo: "Tipos de ametropía" },
      { id: "lentes-oftalmicas", titulo: "Lentes oftálmicas" },
      { id: "lentes-contacto", titulo: "Lentes de contacto" },
      { id: "higiene-cuidado", titulo: "Higiene y cuidado del lente" },
      { id: "evaluacion-adaptacion", titulo: "Evaluación y adaptación clínica" },
      { id: "normas-legales", titulo: "Normas y aspectos legales" },
    ],
  },
  "anatomia-ocular": {
    titulo: "Anatomía y Fisiología Ocular",
    descripcion: "Estructuras del ojo, fisiología, vías ópticas y métodos de exploración.",
    subcategorias: [
      { id: "anatomia-externa", titulo: "Anatomía externa del ojo" },
      { id: "estructuras-globo", titulo: "Estructuras del globo ocular" },
      { id: "humores-ojo", titulo: "Humores del ojo" },
      { id: "fisiologia-ocular", titulo: "Fisiología ocular" },
      { id: "vias-opticas", titulo: "Vías ópticas y procesamiento visual" },
      { id: "musculos-oculomotores", titulo: "Músculos oculomotores" },
      { id: "desarrollo-embriologico", titulo: "Desarrollo embriológico del ojo" },
      { id: "sistema-vascular", titulo: "Sistema vascular y nervioso del ojo" },
      { id: "metodos-exploracion", titulo: "Métodos de exploración anatómica y funcional" },
    ],
  },
  "errores-refractivos": {
    titulo: "Errores Refractivos",
    descripcion: "Miopía, hipermetropía, astigmatismo, presbicia y su diagnóstico.",
    subcategorias: [
      { id: "fundamentos-refraccion", titulo: "Fundamentos de refracción ocular" },
      { id: "tipos-errores", titulo: "Tipos de errores refractivos" },
      { id: "diagnostico-evaluacion", titulo: "Diagnóstico y evaluación" },
      { id: "relacion-anatomia", titulo: "Relación con la anatomía y fisiología ocular" },
      { id: "tratamientos-correcciones", titulo: "Tratamientos y correcciones" },
      { id: "casos-clinicos", titulo: "Casos clínicos y prescripción óptica" },
    ],
  },
  "correccion-visual": {
    titulo: "Corrección Visual",
    descripcion: "Métodos de corrección, evaluación, prescripción óptica y casos clínicos.",
    subcategorias: [
      { id: "fundamentos-correccion", titulo: "Fundamentos de la corrección visual" },
      { id: "metodos-correccion", titulo: "Métodos de corrección visual" },
      { id: "evaluacion-previa", titulo: "Evaluación previa a la corrección" },
      { id: "prescripcion-optica", titulo: "Prescripción óptica" },
      { id: "factores-afectan", titulo: "Factores que afectan la corrección visual" },
      { id: "casos-clinicos", titulo: "Casos clínicos y toma de decisiones" },
    ],
  },
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const categoria = categorias[params.categoria as keyof typeof categorias]

  if (!categoria) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{categoria.titulo}</h1>
        <p className="text-lg text-slate-600 mb-10">{categoria.descripcion}</p>

        <div className="grid gap-6">
          {categoria.subcategorias.map((subcategoria) => (
            <Link key={subcategoria.id} href={`/categorias/${params.categoria}/${subcategoria.id}`}>
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-teal-500" />
                    {subcategoria.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Haz clic para ver los temas de estudio</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
