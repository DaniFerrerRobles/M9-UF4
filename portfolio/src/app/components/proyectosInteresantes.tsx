const ProyectosInteresantes = () => {
  return (
    <div className="mb-10 px-4 text-center">
      <p className="text-4xl font-bold text-white">
        ¡Aquí un oyecto interesante!
      </p>
      <ul className="mt-6 text-lg flex flex-wrap justify-center gap-8">
        <li className="flex flex-col items-center mb-6 max-w-xs">
          <a
            href="https://aprende-con-ferrer.alwaysdata.net/"
            className="text-white hover:underline"
          >
            Web de Futbol (PHP)
          </a>
          <img
            src="/futbol.jpeg"
            alt="Web de Futbol"
            className="w-32 h-32 mx-auto mt-4 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
          />
        </li>
      </ul>
    </div>
  );
};

export default ProyectosInteresantes;