import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, FileText, ImageIcon, BookOpen, Download } from "lucide-react"

// Definición de los temas con su contenido
const temasContenido = {
  "lentes-oftalmicos": {
    "optica-basica": {
      "refraccion-reflexion": {
        titulo: "Refracción y reflexión de la luz",
        descripcion:
          "La refracción es el cambio de dirección que experimenta la luz al pasar de un medio a otro con diferente índice de refracción. La reflexión es el cambio de dirección de los rayos de luz que ocurre en la superficie de separación entre dos medios.",
        contenido: `
          <h2>Refracción de la luz</h2>
          <p>La refracción es el fenómeno que ocurre cuando la luz cambia de dirección al pasar de un medio a otro con diferente índice de refracción. Este fenómeno es fundamental en óptica y es la base del funcionamiento de las lentes.</p>
          <p>La ley de Snell describe matemáticamente este fenómeno:</p>
          <p class="font-mono bg-slate-100 p-2 rounded">n₁ · sen(θ₁) = n₂ · sen(θ₂)</p>
          <p>Donde:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>n₁ es el índice de refracción del primer medio</li>
            <li>n₂ es el índice de refracción del segundo medio</li>
            <li>θ₁ es el ángulo de incidencia</li>
            <li>θ₂ es el ángulo de refracción</li>
          </ul>
          
          <h2 class="mt-6">Reflexión de la luz</h2>
          <p>La reflexión ocurre cuando la luz rebota en una superficie y cambia de dirección. Existen dos tipos principales:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li><strong>Reflexión especular:</strong> Ocurre en superficies lisas como espejos, donde el ángulo de incidencia es igual al ángulo de reflexión.</li>
            <li><strong>Reflexión difusa:</strong> Ocurre en superficies rugosas, donde la luz se refleja en múltiples direcciones.</li>
          </ul>
          
          <h2 class="mt-6">Aplicaciones en óptica oftálmica</h2>
          <p>Estos fenómenos son fundamentales para entender cómo funcionan las lentes oftálmicas:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Las lentes positivas (convergentes) utilizan la refracción para enfocar la luz en un punto focal.</li>
            <li>Las lentes negativas (divergentes) utilizan la refracción para dispersar la luz.</li>
            <li>Los tratamientos antirreflejantes reducen la reflexión no deseada en la superficie de las lentes.</li>
          </ul>
        `,
        imagenes: [
          {
            url: "/placeholder.svg?height=300&width=500",
            descripcion: "Diagrama de refracción de la luz al pasar de un medio a otro",
          },
          {
            url: "/placeholder.svg?height=300&width=500",
            descripcion: "Comparación entre reflexión especular y difusa",
          },
        ],
        pdfUrl: "#",
        pdfNombre: "Refraccion_y_Reflexion_de_la_Luz.pdf",
      },
      "indice-refraccion": {
        titulo: "Índice de refracción de materiales",
        descripcion:
          "El índice de refracción es una medida que describe cuánto se reduce la velocidad de la luz al atravesar un material. Es crucial para entender cómo funcionan las lentes oftálmicas.",
        contenido: `
          <h2>¿Qué es el índice de refracción?</h2>
          <p>El índice de refracción (n) de un material es la relación entre la velocidad de la luz en el vacío (c) y la velocidad de la luz en dicho material (v):</p>
          <p class="font-mono bg-slate-100 p-2 rounded">n = c/v</p>
          <p>Cuanto mayor sea el índice de refracción, más se desviará la luz al pasar por el material.</p>
          
          <h2 class="mt-6">Índices de refracción en materiales ópticos</h2>
          <p>Algunos valores comunes de índices de refracción en materiales utilizados en óptica oftálmica:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Aire: 1.00</li>
            <li>Agua: 1.33</li>
            <li>Vidrio Crown: 1.52</li>
            <li>Vidrio Flint: 1.62</li>
            <li>CR-39 (plástico): 1.498</li>
            <li>Policarbonato: 1.586</li>
            <li>Trivex: 1.532</li>
            <li>Alto índice (1.67): 1.67</li>
            <li>Alto índice (1.74): 1.74</li>
            <li>Córnea: 1.376</li>
            <li>Humor acuoso: 1.336</li>
            <li>Cristalino: 1.386 - 1.406</li>
            <li>Humor vítreo: 1.336</li>
          </ul>
          
          <h2 class="mt-6">Importancia en lentes oftálmicas</h2>
          <p>El índice de refracción determina varias características importantes de las lentes:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li><strong>Espesor:</strong> A mayor índice, menor espesor para la misma potencia.</li>
            <li><strong>Peso:</strong> Lentes de alto índice suelen ser más delgadas y ligeras.</li>
            <li><strong>Aberraciones cromáticas:</strong> Materiales con alto índice suelen tener mayor dispersión cromática.</li>
            <li><strong>Reflexiones:</strong> A mayor índice, mayores reflexiones superficiales (por eso suelen requerir tratamiento antirreflejante).</li>
          </ul>
          
          <h2 class="mt-6">Selección del material según el índice</h2>
          <p>La elección del material de la lente depende de varios factores:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Potencia de la prescripción</li>
            <li>Estética deseada (espesor del borde o centro)</li>
            <li>Peso</li>
            <li>Resistencia a impactos</li>
            <li>Protección UV</li>
            <li>Presupuesto del paciente</li>
          </ul>
        `,
        imagenes: [
          {
            url: "/placeholder.svg?height=300&width=500",
            descripcion: "Comparación de espesores entre materiales de diferentes índices",
          },
          {
            url: "/placeholder.svg?height=300&width=500",
            descripcion: "Diagrama de refracción en diferentes materiales ópticos",
          },
        ],
        pdfUrl: "#",
        pdfNombre: "Indice_de_Refraccion_Materiales_Opticos.pdf",
      },
    },
  },
  "errores-refractivos": {
    "tipos-errores": {
      miopia: {
        titulo: "Miopía: definición, causas, síntomas y corrección",
        descripcion:
          "La miopía es un error refractivo donde el ojo enfoca la imagen delante de la retina, causando visión borrosa de lejos. Es uno de los problemas visuales más comunes en el mundo.",
        contenido: `
          <h2>¿Qué es la miopía?</h2>
          <p>La miopía es un error refractivo en el cual los rayos de luz que entran al ojo se enfocan delante de la retina en lugar de directamente sobre ella. Esto causa que los objetos lejanos se vean borrosos, mientras que los objetos cercanos se ven con claridad.</p>
          
          <h2 class="mt-6">Causas de la miopía</h2>
          <p>La miopía puede ser causada por diferentes factores:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li><strong>Miopía axial:</strong> El globo ocular es más largo de lo normal.</li>
            <li><strong>Miopía refractiva:</strong> La córnea o el cristalino tienen una curvatura excesiva.</li>
            <li><strong>Factores genéticos:</strong> Existe una fuerte predisposición hereditaria.</li>
            <li><strong>Factores ambientales:</strong> Trabajo prolongado en visión cercana, uso excesivo de dispositivos electrónicos.</li>
            <li><strong>Miopía progresiva:</strong> Especialmente común durante la adolescencia.</li>
          </ul>
          
          <h2 class="mt-6">Síntomas</h2>
          <ul class="list-disc pl-6 space-y-1">
            <li>Visión borrosa de objetos lejanos</li>
            <li>Entrecerrar los ojos para ver mejor</li>
            <li>Fatiga visual al intentar enfocar objetos distantes</li>
            <li>Dolores de cabeza por el esfuerzo visual</li>
            <li>Buena visión de cerca</li>
          </ul>
          
          <h2 class="mt-6">Corrección de la miopía</h2>
          <p>Existen varias opciones para corregir la miopía:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li><strong>Lentes oftálmicas:</strong> Lentes divergentes (negativas) que compensan el exceso de convergencia.</li>
            <li><strong>Lentes de contacto:</strong> Pueden ser blandas o rígidas permeables al gas (RGP).</li>
            <li><strong>Cirugía refractiva:</strong> Procedimientos como LASIK, PRK o implantes de lentes intraoculares.</li>
            <li><strong>Ortoqueratología:</strong> Uso de lentes de contacto especiales durante la noche para remodelar temporalmente la córnea.</li>
            <li><strong>Control de miopía:</strong> En niños y adolescentes, existen tratamientos para ralentizar la progresión (lentes especiales, atropina, etc.).</li>
          </ul>
          
          <h2 class="mt-6">Prescripción para miopía</h2>
          <p>La prescripción para miopía se indica con un signo negativo (-). Por ejemplo:</p>
          <p class="font-mono bg-slate-100 p-2 rounded">OD: -2.50 D (ojo derecho)<br>OS: -3.00 D (ojo izquierdo)</p>
          <p>Cuanto mayor sea el número, más alta es la miopía y más potente será la lente correctora.</p>
        `,
        imagenes: [
          {
            url: "/placeholder.svg?height=300&width=500",
            descripcion: "Diagrama de un ojo miope: los rayos se enfocan delante de la retina",
          },
          {
            url: "/placeholder.svg?height=300&width=500",
            descripcion: "Corrección de la miopía con lente divergente (negativa)",
          },
          {
            url: "/placeholder.svg?height=300&width=500",
            descripcion: "Simulación de cómo ve una persona con miopía vs. visión normal",
          },
        ],
        pdfUrl: "#",
        pdfNombre: "Miopia_Causas_Sintomas_y_Correccion.pdf",
      },
    },
  },
}

export default function TemaPage({
  params,
}: {
  params: { categoria: string; subcategoria: string; tema: string }
}) {
  // Verificar si existe la categoría
  if (!temasContenido[params.categoria as keyof typeof temasContenido]) {
    notFound()
  }

  // Verificar si existe la subcategoría
  const subcategorias = temasContenido[params.categoria as keyof typeof temasContenido]
  if (!subcategorias[params.subcategoria as keyof typeof subcategorias]) {
    notFound()
  }

  // Verificar si existe el tema
  const temas = subcategorias[params.subcategoria as keyof typeof subcategorias]
  if (!temas[params.tema as keyof typeof temas]) {
    notFound()
  }

  const tema = temas[params.tema as keyof typeof temas]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href={`/categorias/${params.categoria}/${params.subcategoria}`}>
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Volver a temas
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">{tema.titulo}</h1>
          <p className="text-lg text-slate-600 mb-8">{tema.descripcion}</p>

          <Tabs defaultValue="contenido" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="contenido" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Contenido
              </TabsTrigger>
              <TabsTrigger value="imagenes" className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Imágenes
              </TabsTrigger>
              <TabsTrigger value="recursos" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Recursos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contenido">
              <Card>
                <CardContent className="p-6">
                  <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: tema.contenido }} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="imagenes">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Imágenes de referencia</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tema.imagenes.map((imagen, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="relative h-64 w-full">
                          <Image
                            src={imagen.url || "/placeholder.svg"}
                            alt={imagen.descripcion}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-3 bg-white">
                          <p className="text-sm text-slate-600">{imagen.descripcion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recursos">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Recursos descargables</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-red-500" />
                        <div>
                          <p className="font-medium">{tema.pdfNombre}</p>
                          <p className="text-sm text-slate-500">PDF - Material de estudio completo</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Descargar
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="font-medium">Ejercicios prácticos</p>
                          <p className="text-sm text-slate-500">PDF - Actividades para reforzar el aprendizaje</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Descargar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-200">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Tema anterior
            </Button>
            <Button className="flex items-center gap-2">
              Siguiente tema
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
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
