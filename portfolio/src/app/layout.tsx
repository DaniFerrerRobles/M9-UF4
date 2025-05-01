import "./globals.css";
import Link from "next/link";
import SobreMi from "./components/sobreMi";
import CarreraDeportiva from "./components/carreraDeportiva";
import ProyectosInteresantes from "./components/proyectosInteresantes";
import Cv from "./components/cv";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="py-2 bg-white text-black font-bold">
          <ul className="flex justify-center space-x-6">
            <li><Link href="#sobreMi">SOBRE MÍ</Link></li>
            <li><Link href="#curriculumVitae">CURRICULUM VITAE</Link></li>
            <li><Link href="#proyectosInteresantes">PROYECTOS INTERESANTES</Link></li>
            <li><Link href="#carreraDeportiva">CARRERA DEPORTIVA</Link></li>
          </ul>
        </nav>

        <main className="bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <section id="sobreMi" className="mb-52 text-white"><SobreMi /></section>
            <section id="curriculumVitae" className="my-12 text-white"><Cv /></section>
            <section id="proyectosInteresantes" className="mb-52 text-white flex justify-center"><ProyectosInteresantes /></section>
            <section id="carreraDeportiva" className="my-12 text-white"><CarreraDeportiva /></section>
            {children}
          </div>
      </main>


        <footer className="py-4 bg-white text-black font-bold">
          <ul className="flex justify-center space-x-6">
            <li><Link href="#sobreMi">SOBRE MÍ</Link></li>
            <li><Link href="#curriculumVitae">CURRICULUM VITAE</Link></li>
            <li><Link href="#proyectosInteresantes">PROYECTOS INTERESANTES</Link></li>
            <li><Link href="#carreraDeportiva">CARRERA DEPORTIVA</Link></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}