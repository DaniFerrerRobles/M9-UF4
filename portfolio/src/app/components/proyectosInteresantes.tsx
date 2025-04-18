const ProyectosInteresantes = () => {
    return (
      <div className="mb-10 px-4 text-center">
        <p className="text-4xl font-bold">
          Aquí tienes algunos proyectos interesantes que he ido realizando durante el curso... ¡Clica en los nombres para verlos!
        </p>
        <ul className="mt-6 text-center mx-14 text-lg flex flex-wrap justify-center space-x-8">
          <li className="flex flex-col items-center mb-6">
            <a href="https://examen-uf-2-m6.vercel.app/" className="text-white-500">
              ComeCocos (JAVASCRIPT)
            </a>
            <img
              src="/cc.jpeg"
              alt="ComeCocos"
              className="w-32 h-32 mx-auto mt-4 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </li>
          <li className="flex flex-col items-center mb-6">
            <a
              href="https://ferrer.alwaysdata.net/M7-UF3-m7Examen/proyecto/agen-bootstrap-main/theme/"
              className="text-white-500"
            >
              Web de Futbol (PHP)
            </a>
            <img
              src="/futbol.jpeg"
              alt="Web de Futbol"
              className="w-32 h-32 mx-auto mt-4 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </li>
          <li className="flex flex-col items-center mb-6">
            <a
              href="https://ferrer.alwaysdata.net/M7-UF3-main/proyecto/agen-bootstrap-main/theme/"
              className="text-white-500"
            >
              Web Personal (PHP)
            </a>
            <img
              src="/personaal.jpeg"
              alt="Web Personal"
              className="w-32 h-32 mx-auto mt-4 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </li>
          <li className="flex flex-col items-center mb-6">
            <a
              href="https://aprende-con-ferrer.alwaysdata.net/uf2/patrons-de-disseny-php/"
              className="text-white-500"
            >
              Web sobre patrones de diseño (PHP)
            </a>
            <img
              src="/patrones.png"
              alt="Patrones de Diseño"
              className="w-32 h-32 mx-auto mt-4 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </li>
        </ul>
      </div>
    );
  };
  
  export default ProyectosInteresantes;  