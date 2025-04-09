import Link from "next/link"; // Esta importación es válida ya que estás usando el componente Link.
import "./globals.css"; // Esta importación es válida para los estilos globales.

export default function RootLayout() {
  return (
    <html lang="es">
      <head>
        {/* Aquí podrías incluir más metadatos si es necesario */}
      </head>
      <body className="bg-gray-100">
        <nav className="bg-black py-2">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/sobreMi" className="text-white">
                SOBRE MÍ
              </Link>
            </li>
            <li>
              <Link href="/curriculumVitae" className="text-white">
                CURRICULUM VITAE
              </Link>
            </li>
            <li>
              <Link href="/proyectosInteresantes" className="text-white">
                PROYECTOS INTERESANTES
              </Link>
            </li>
            <li>
              <Link href="/carreraDportiva" className="text-white">
                CARRERA DEPORTIVA
              </Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}