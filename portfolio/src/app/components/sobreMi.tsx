const SobreMi = () => {
  return (
    <div className="mt-12 px-4 mx-auto">
      <h1 className="text-4xl text-center font-bold">
        Daniel Ferrer Robles – Desarrollador Web y Nadador Paralímpico
      </h1>
      <div className="flex justify-center mb-6">
        <img
          src="/dani.jpg"
          alt="dani"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto"
        />
      </div>
      <p className="mt-4 text-lg text-center text-justify mx-14">
        ¡Hola! Soy Daniel Ferrer Robles, estudiante del Grado Superior de Desarrollo de Aplicaciones Web en FP LLEFIA. Me apasiona el desarrollo web, siempre buscando aprender y mejorar mis habilidades en programación. Pero mi vida no solo es programar. También soy nadador paralímpico, un mundo que me motiva y desafía constantemente. La natación me ha enseñado disciplina, constancia y superación, valores que aplico en cada proyecto en el que trabajo. Mi objetivo es combinar mi formación en desarrollo web con mi mentalidad competitiva y creativa para aportar soluciones innovadoras y funcionales.
      </p>

      <div>
      <img src="/programacion.webp" alt="cod" className="h-auto max-w-lg object-cover mx-auto mt-7"/>
      </div>
    </div>
  );
};

export default SobreMi;