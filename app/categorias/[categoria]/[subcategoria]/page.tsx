import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, BookOpen, CheckCircle } from "lucide-react"

// Definición de las categorías, subcategorías y temas
const contenido = {
  "lentes-oftalmicos": {
    titulo: "Lentes Oftálmicos",
    subcategorias: {
      "optica-basica": {
        titulo: "Óptica básica aplicada",
        temas: [
          { id: "refraccion-reflexion", titulo: "Refracción y reflexión de la luz" },
          { id: "indice-refraccion", titulo: "Índice de refracción de materiales" },
          { id: "potencia-dioptrica", titulo: "Potencia dióptrica" },
          { id: "eje-optico", titulo: "Eje óptico y punto focal" },
        ],
      },
      "tipos-lentes": {
        titulo: "Tipos de lentes oftálmicas",
        temas: [
          { id: "monofocales", titulo: "Monofocales (para una sola distancia)" },
          { id: "bifocales", titulo: "Bifocales (dos zonas: cerca y lejos)" },
          { id: "progresivas", titulo: "Progresivas o multifocales (cambio gradual)" },
          { id: "ocupacionales", titulo: "Lentes ocupacionales (uso en oficina, computadoras)" },
          { id: "asfericas", titulo: "Asféricas y atoricas (para reducir aberraciones)" },
        ],
      },
      materiales: {
        titulo: "Materiales de las lentes",
        temas: [
          { id: "vidrio-mineral", titulo: "Vidrio mineral" },
          { id: "organicos", titulo: "Orgánicos (CR-39, policarbonato, Trivex, etc.)" },
          { id: "indice-refraccion", titulo: "Índice bajo, medio y alto de refracción" },
          { id: "propiedades", titulo: "Propiedades ópticas y mecánicas: peso, grosor, resistencia a impactos" },
        ],
      },
      tratamientos: {
        titulo: "Tratamientos y recubrimientos",
        temas: [
          { id: "antirreflejante", titulo: "Antirreflejante (AR)" },
          { id: "fotocromatico", titulo: "Fotocromático (Transitions)" },
          { id: "proteccion-uv", titulo: "Protección UV" },
          { id: "tinte", titulo: "Tinte (cosmético o funcional)" },
          { id: "antirrayado", titulo: "Tratamiento antirrayado" },
          { id: "filtro-azul", titulo: "Filtro para luz azul" },
        ],
      },
      diseno: {
        titulo: "Diseño y geometría de lentes",
        temas: [
          { id: "lentes-positivas", titulo: "Lentes positivas vs. negativas" },
          { id: "lentes-esfericas", titulo: "Lentes esféricas, cilíndricas, tóricas" },
          { id: "centro-optico", titulo: "Centro óptico, distancia interpupilar (DIP)" },
          { id: "espesor", titulo: "Espesor, bordes y estética" },
        ],
      },
      prescripcion: {
        titulo: "Prescripción óptica y lectura de recetas",
        temas: [
          {
            id: "interpretacion",
            titulo: "Interpretación de fórmulas ópticas (Esfera, cilindro, eje, adición, prisma)",
          },
          { id: "conversion", titulo: "Conversión entre notación positiva y negativa" },
          { id: "calculo", titulo: "Cálculo de potencia efectiva" },
        ],
      },
      montaje: {
        titulo: "Montaje y centrado",
        temas: [
          { id: "tipos-monturas", titulo: "Tipos de monturas (metálicas, plásticas, al aire)" },
          { id: "centrado-optico", titulo: "Centrado óptico (altura pupilar y distancia nasopupilar)" },
          { id: "ajuste", titulo: "Ajuste de la lente a la montura" },
          { id: "marcado", titulo: "Marcado y tallado" },
        ],
      },
      "relacion-paciente": {
        titulo: "Relación lente-paciente",
        temas: [
          { id: "seleccion", titulo: "Selección de lente adecuada según receta y estilo de vida" },
          { id: "adaptacion", titulo: "Adaptación del usuario a lentes progresivas" },
          { id: "educacion", titulo: "Educación del paciente sobre mantenimiento y uso" },
        ],
      },
    },
  },
  "lentes-contacto": {
    titulo: "Adaptación de Lentes de Contacto",
    subcategorias: {
      "fundamentos-optica": {
        titulo: "Fundamentos de óptica",
        temas: [
          { id: "optica-geometrica", titulo: "Óptica geométrica (leyes de reflexión y refracción)" },
          { id: "formacion-imagenes", titulo: "Formación de imágenes por lentes" },
          { id: "aberraciones", titulo: "Aberraciones ópticas" },
          { id: "indices-refraccion", titulo: "Índices de refracción" },
        ],
      },
      "anatomia-fisiologia": {
        titulo: "Anatomía y fisiología ocular",
        temas: [
          { id: "estructura-ojo", titulo: "Estructura del ojo (córnea, cristalino, retina)" },
          { id: "sistema-lagrimal", titulo: "Sistema lagrimal" },
          { id: "parpadeo", titulo: "Parpadeo y lubricación ocular" },
          { id: "acomodacion", titulo: "Acomodación y convergencia" },
        ],
      },
      "tipos-ametropia": {
        titulo: "Tipos de ametropía",
        temas: [
          { id: "miopia", titulo: "Miopía" },
          { id: "hipermetropia", titulo: "Hipermetropía" },
          { id: "astigmatismo", titulo: "Astigmatismo" },
          { id: "presbicia", titulo: "Presbicia" },
        ],
      },
      "lentes-oftalmicas": {
        titulo: "Lentes oftálmicas",
        temas: [
          { id: "tipos-lentes", titulo: "Tipos de lentes (monofocales, bifocales, progresivos)" },
          { id: "materiales", titulo: "Materiales (vidrio, policarbonato, CR-39, etc.)" },
          { id: "tratamientos", titulo: "Tratamientos (antirreflejante, fotocromático, filtros UV, etc.)" },
          { id: "monturas", titulo: "Monturas y su relación con la corrección" },
        ],
      },
      "lentes-contacto": {
        titulo: "Lentes de contacto",
        temas: [
          {
            id: "tipos",
            titulo: "Tipos: blandas, rígidas permeables al gas (RGP), esclerales, tóricas, multifocales",
          },
          { id: "materiales", titulo: "Materiales y su compatibilidad con el ojo" },
          { id: "modalidades", titulo: "Modalidades de uso (diario, extendido, desechables)" },
          { id: "indicaciones", titulo: "Indicaciones y contraindicaciones" },
        ],
      },
      "higiene-cuidado": {
        titulo: "Higiene y cuidado del lente",
        temas: [
          { id: "mantenimiento", titulo: "Mantenimiento de lentes de contacto" },
          { id: "soluciones", titulo: "Soluciones limpiadoras y conservantes" },
          { id: "riesgos", titulo: "Riesgos de infecciones (queratitis, conjuntivitis)" },
          { id: "educacion", titulo: "Educación del paciente" },
        ],
      },
      "evaluacion-adaptacion": {
        titulo: "Evaluación y adaptación clínica",
        temas: [
          { id: "toma-medidas", titulo: "Toma de medidas (queratometría, topografía corneal, refracción)" },
          {
            id: "pruebas-adaptacion",
            titulo: "Pruebas de adaptación (lente de prueba, fluoresceína, prueba de lágrima)",
          },
          { id: "evaluacion-ajuste", titulo: "Evaluación del ajuste y confort" },
          { id: "seguimiento", titulo: "Seguimiento y monitoreo de complicaciones" },
        ],
      },
      "normas-legales": {
        titulo: "Normas y aspectos legales",
        temas: [
          { id: "recetas", titulo: "Recetas ópticas" },
          { id: "documentacion", titulo: "Documentación clínica" },
          { id: "normativas", titulo: "Normativas locales de adaptación de lentes" },
        ],
      },
    },
  },
  "anatomia-ocular": {
    titulo: "Anatomía y Fisiología Ocular",
    subcategorias: {
      "anatomia-externa": {
        titulo: "Anatomía externa del ojo",
        temas: [
          { id: "parpados", titulo: "Párpados" },
          { id: "cejas-pestanas", titulo: "Cejas y pestañas" },
          { id: "conjuntiva", titulo: "Conjuntiva" },
          {
            id: "aparato-lagrimal",
            titulo:
              "Aparato lagrimal (glándula lagrimal, puntos lagrimales, canalículos, saco y conducto nasolagrimal)",
          },
        ],
      },
      "estructuras-globo": {
        titulo: "Estructuras del globo ocular",
        temas: [
          { id: "cornea", titulo: "Córnea: capas (epitelio, estroma, endotelio)" },
          { id: "esclera", titulo: "Esclera: capa externa blanca y resistente" },
          { id: "uvea", titulo: "Úvea (iris, cuerpo ciliar, coroides)" },
          { id: "cristalino", titulo: "Cristalino: forma, función, acomodación" },
          { id: "retina", titulo: "Retina: capas, células fotorreceptoras (conos y bastones)" },
          { id: "macula-fovea", titulo: "Mácula y fóvea: visión central y agudeza visual" },
          { id: "nervio-optico", titulo: "Nervio óptico: transmisión de la imagen al cerebro" },
        ],
      },
      "humores-ojo": {
        titulo: "Humores del ojo",
        temas: [
          { id: "humor-acuoso", titulo: "Humor acuoso (función, producción, circulación)" },
          { id: "humor-vitreo", titulo: "Humor vítreo (estructura gelatinosa del interior ocular)" },
        ],
      },
      "fisiologia-ocular": {
        titulo: "Fisiología ocular",
        temas: [
          { id: "formacion-acuoso", titulo: "Formación y circulación del humor acuoso" },
          { id: "acomodacion", titulo: "Acomodación (enfoque a diferentes distancias)" },
          { id: "reflejo-pupilar", titulo: "Reflejo pupilar (miosis y midriasis)" },
          { id: "adaptacion-luz", titulo: "Adaptación a la luz (visión escotópica vs. fotópica)" },
          { id: "percepcion-color", titulo: "Percepción del color" },
          { id: "parpadeo", titulo: "Mecanismo de parpadeo y lubricación" },
        ],
      },
      "vias-opticas": {
        titulo: "Vías ópticas y procesamiento visual",
        temas: [
          {
            id: "via-visual",
            titulo: "Retina → nervio óptico → quiasma óptico → cuerpo geniculado lateral → corteza visual",
          },
          { id: "campos-visuales", titulo: "Campos visuales" },
          { id: "lesiones", titulo: "Lesiones en la vía óptica y sus efectos" },
        ],
      },
      "musculos-oculomotores": {
        titulo: "Músculos oculomotores",
        temas: [
          { id: "rectos", titulo: "Recto superior, inferior, medial y lateral" },
          { id: "oblicuos", titulo: "Oblicuo superior e inferior" },
          { id: "inervacion", titulo: "Inervación (pares craneales III, IV, VI)" },
          { id: "movimientos", titulo: "Movimientos oculares: versiones, ducciones, vergencias" },
        ],
      },
      "desarrollo-embriologico": {
        titulo: "Desarrollo embriológico del ojo",
        temas: [
          { id: "origen", titulo: "Origen de estructuras oculares" },
          { id: "malformaciones", titulo: "Malformaciones congénitas" },
        ],
      },
      "sistema-vascular": {
        titulo: "Sistema vascular y nervioso del ojo",
        temas: [
          { id: "irrigacion", titulo: "Irrigación (arteria oftálmica, coroides, retina)" },
          {
            id: "inervacion",
            titulo: "Inervación sensitiva y motora (pares craneales II, III, IV, V, VI y VII)",
          },
        ],
      },
      "metodos-exploracion": {
        titulo: "Métodos de exploración anatómica y funcional",
        temas: [
          { id: "biomicroscopia", titulo: "Biomicroscopía (lámpara de hendidura)" },
          { id: "oftalmoscopia", titulo: "Oftalmoscopía" },
          { id: "tonometria", titulo: "Tonometría" },
          { id: "campo-visual", titulo: "Evaluación del campo visual" },
          { id: "agudeza-visual", titulo: "Agudeza visual" },
          { id: "pupilas", titulo: "Pupilas y reflejos" },
        ],
      },
    },
  },
  "errores-refractivos": {
    titulo: "Errores Refractivos",
    subcategorias: {
      "fundamentos-refraccion": {
        titulo: "Fundamentos de refracción ocular",
        temas: [
          { id: "formacion-imagen", titulo: "Cómo se forma la imagen en el ojo sano (emétrope)" },
          { id: "indice-refraccion", titulo: "Índice de refracción del ojo" },
          { id: "punto-remoto", titulo: "Concepto de punto remoto y punto próximo" },
          { id: "acomodacion", titulo: "Acomodación: qué es, cómo funciona y cómo se altera" },
        ],
      },
      "tipos-errores": {
        titulo: "Tipos de errores refractivos",
        temas: [
          { id: "miopia", titulo: "Miopía: definición, causas, síntomas y corrección" },
          { id: "hipermetropia", titulo: "Hipermetropía: definición, tipos, síntomas y corrección" },
          { id: "astigmatismo", titulo: "Astigmatismo: definición, tipos, síntomas y corrección" },
          { id: "presbicia", titulo: "Presbicia: definición, síntomas y corrección" },
        ],
      },
      "diagnostico-evaluacion": {
        titulo: "Diagnóstico y evaluación",
        temas: [
          { id: "refraccion-objetiva", titulo: "Refracción objetiva: retinoscopía, autorefractómetro" },
          { id: "refraccion-subjetiva", titulo: "Refracción subjetiva: pruebas con foróptero, caja de pruebas" },
          { id: "agudeza-visual", titulo: "Agudeza visual (lejos y cerca)" },
          { id: "cicloplejia", titulo: "Cicloplejia (para evaluar hipermetropía en niños)" },
          { id: "queratometria", titulo: "Queratometría y topografía corneal" },
        ],
      },
      "relacion-anatomia": {
        titulo: "Relación con la anatomía y fisiología ocular",
        temas: [
          { id: "longitud-axial", titulo: "Longitud axial del ojo (miopía axial)" },
          { id: "curvatura-corneal", titulo: "Curvatura corneal (astigmatismo corneal)" },
          { id: "elasticidad-cristalino", titulo: "Elasticidad del cristalino (presbicia)" },
        ],
      },
      "tratamientos-correcciones": {
        titulo: "Tratamientos y correcciones",
        temas: [
          { id: "lentes-oftalmicas", titulo: "Lentes oftálmicas: monofocales, bifocales, progresivos" },
          { id: "lentes-contacto", titulo: "Lentes de contacto: blandas, rígidas, tóricas, multifocales" },
          { id: "cirugia-refractiva", titulo: "Cirugía refractiva: LASIK, PRK, lentes intraoculares" },
        ],
      },
      "casos-clinicos": {
        titulo: "Casos clínicos y prescripción óptica",
        temas: [
          { id: "interpretar-recetas", titulo: "Cómo interpretar y escribir recetas" },
          { id: "notacion", titulo: "Diferencia entre notación positiva y negativa" },
          {
            id: "ejercicios",
            titulo: "Ejercicios prácticos de casos con combinaciones de errores (ej. miopía + astigmatismo)",
          },
        ],
      },
    },
  },
  "correccion-visual": {
    titulo: "Corrección Visual",
    subcategorias: {
      "fundamentos-correccion": {
        titulo: "Fundamentos de la corrección visual",
        temas: [
          { id: "importancia", titulo: "Importancia de la corrección para la salud visual y calidad de vida" },
          {
            id: "relacion-errores",
            titulo: "Relación con los errores refractivos: miopía, hipermetropía, astigmatismo y presbicia",
          },
        ],
      },
      "metodos-correccion": {
        titulo: "Métodos de corrección visual",
        temas: [
          {
            id: "lentes-oftalmicas",
            titulo: "Lentes oftálmicas: tipos, materiales, tratamientos y elección según defecto visual",
          },
          {
            id: "lentes-contacto",
            titulo: "Lentes de contacto: tipos (blandas, rígidas permeables al gas, tóricas, multifocales)",
          },
          {
            id: "cirugia-refractiva",
            titulo: "Cirugía refractiva: técnicas, criterios de selección, riesgos y beneficios",
          },
        ],
      },
      "evaluacion-previa": {
        titulo: "Evaluación previa a la corrección",
        temas: [
          { id: "examen-visual", titulo: "Examen visual completo" },
          { id: "refraccion", titulo: "Refracción objetiva y subjetiva" },
          { id: "agudeza-visual", titulo: "Agudeza visual (lejos y cerca)" },
          { id: "queratometria", titulo: "Examen de queratometría y topografía corneal" },
          { id: "biomicroscopia", titulo: "Biomicroscopía y salud ocular general" },
          { id: "historia-clinica", titulo: "Historia clínica y estilo de vida del paciente" },
        ],
      },
      "prescripcion-optica": {
        titulo: "Prescripción óptica",
        temas: [
          { id: "lectura-recetas", titulo: "Lectura e interpretación de recetas" },
          { id: "componentes", titulo: "Componentes de una fórmula óptica (esfera, cilindro, eje, adición, prisma)" },
          {
            id: "adaptar-prescripcion",
            titulo: "Cómo adaptar la prescripción al tipo de corrección (lentes o lentes de contacto)",
          },
        ],
      },
      "factores-afectan": {
        titulo: "Factores que afectan la corrección visual",
        temas: [
          { id: "tolerancia", titulo: "Tolerancia del paciente a cambios de graduación" },
          { id: "alteraciones", titulo: "Alteraciones acomodativas o binocularidad" },
          { id: "comorbilidades", titulo: "Comorbilidades oculares (catarata, queratocono, ojo seco, etc.)" },
          { id: "adaptacion", titulo: "Adaptación psicofísica a nuevas lentes o cirugías" },
        ],
      },
      "casos-clinicos": {
        titulo: "Casos clínicos y toma de decisiones",
        temas: [
          { id: "eleccion-correccion", titulo: "Elección de la mejor opción de corrección según el paciente" },
          { id: "justificacion", titulo: "Justificación clínica de las decisiones" },
          {
            id: "casos-especiales",
            titulo: "Casos especiales (niños, adultos mayores, deportistas, pacientes con discapacidad visual)",
          },
        ],
      },
    },
  },
}

export default function SubcategoriaPage({
  params,
}: {
  params: { categoria: string; subcategoria: string }
}) {
  const categoria = contenido[params.categoria as keyof typeof contenido]

  if (!categoria) {
    notFound()
  }

  const subcategoria = categoria.subcategorias[params.subcategoria as keyof typeof categoria.subcategorias]

  if (!subcategoria) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href={`/categorias/${params.categoria}`}>
          <Button variant="ghost" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Volver a {categoria.titulo}
          </Button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">{subcategoria.titulo}</h1>
        <p className="text-lg text-slate-600 mb-8">Temas de estudio para esta subcategoría</p>

        <Card className="p-6">
          <CardContent className="p-0">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-teal-500" />
              Temas de estudio
            </h2>
            <ul className="space-y-3">
              {subcategoria.temas.map((tema, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <Link
                    href={`/categorias/${params.categoria}/${params.subcategoria}/${tema.id}`}
                    className="hover:text-teal-600 transition-colors"
                  >
                    {tema.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
