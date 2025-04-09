import Link from "next/link";
import SobreMi from "./components/sobreMi";
import CarreraDeportiva from "./components/carreraDeportiva";
import ProyectosInteresantes from "./components/proyectosInteresantes";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <nav className="bg-black py-2">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#sobreMi" className="text-white">
              SOBRE MÍ
            </Link>
          </li>
          <li>
            <Link href="#curriculumVitae" className="text-white">
              CURRICULUM VITAE
            </Link>
          </li>
          <li>
            <Link href="#proyectosInteresantes" className="text-white">
              PROYECTOS INTERESANTES
            </Link>
          </li>
          <li>
            <Link href="#carreraDeportiva" className="text-white">
              CARRERA DEPORTIVA
            </Link>
          </li>
        </ul>
      </nav>

      <SobreMi />
      <ProyectosInteresantes />
      <CarreraDeportiva />
    </div>
  );
}