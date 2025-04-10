import "./globals.css"; // Si usas Tailwind o CSS global
import Link from "next/link";
import SobreMi from "./components/sobreMi";
import CarreraDeportiva from "./components/carreraDeportiva";
import ProyectosInteresantes from "./components/proyectosInteresantes";
import Cv from "./components/cv";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="py-2 font-bold">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="#sobreMi">
                SOBRE MÍ
              </Link>
            </li>
            <li>
              <Link href="#curriculumVitae">
                CURRICULUM VITAE
              </Link>
            </li>
            <li>
              <Link href="#proyectosInteresantes">
                PROYECTOS INTERESANTES
              </Link>
            </li>
            <li>
              <Link href="#carreraDeportiva">
                CARRERA DEPORTIVA
              </Link>
            </li>
          </ul>
        </nav>

        <main className="bg-black">
          <section id="sobreMi" className="mb-52 mx-6 text-white">
            <SobreMi />
          </section>

          <section id="curriculumVitae" className="my-12 mx-6 text-white">
            <Cv />
          </section>

          <section id="proyectosInteresantes" className="mb-52 mx-6 text-white display- felx ">
            <ProyectosInteresantes />
          </section>

          <section id="carreraDeportiva" className="my-12 mx-6 text-white">
            <CarreraDeportiva />
          </section>

          {children}
      </main>

      </body>
    </html>
  );
}