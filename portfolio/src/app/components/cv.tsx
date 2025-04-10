const Cv = () => {
    return (
      <main className="max-w-6xl mx-auto p-4 sm:p-6 md:p-10 text-white-800">
      <section className="text-center mb-10 px-2 sm:px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Curriculum Vitae - Daniel Ferrer Robles</h1>
        <img src="/dani.jpg"alt="da" className="mx-auto w-32 h-32 mb-4 mt-4"/>
        <p className="text-base sm:text-lg mt-2">
          <strong>Ciudad:</strong> Badalona, España | <strong>Tel:</strong> 601154095 | <strong>Email:</strong> daniferrer2003@gmail.com
        </p>
      </section>
  
        <section className="mb-8 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold border-b pb-2 mb-4">Resumen Profesional</h2>
          <p className="text-sm sm:text-base">
            Estudiante de Grado Superior en Desarrollo de Aplicaciones Web con sólida base en programación, diseño y
            maquetación web. Apasionado por la tecnología y con experiencia en herramientas como React, Bootstrap y Tailwind.
            Trilingüe (castellano, catalán, inglés) y con destacada trayectoria como deportista paralímpico a nivel internacional.
            Enfocado, disciplinado y comprometido, tanto en lo académico como en el alto rendimiento deportivo.
          </p>
        </section>
  
        <section className="mb-8 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold border-b pb-2 mb-4">Formación Académica</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <strong>Grado Superior en Desarrollo de Aplicaciones Web</strong><br/>
              FP LLEFIA — 2021 – Actualidad
            </li>
            <li>
              <strong>Grado Medio en Sistemas Microinformáticos y Redes</strong><br/>
              FP LLEFIA — 2018 – 2020
            </li>
            <li>
              <strong>Educación Secundaria Obligatoria (ESO)</strong><br/>
              Instituto Ventura Gassol — 2014 – 2018
            </li>
          </ul>
        </section>
  
        <section className="mb-8 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold border-b pb-2 mb-4">Habilidades Técnicas</h2>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>Lenguajes de programación: C++, Java, JavaScript, PHP</li>
            <li>Frontend: HTML, CSS, Bootstrap, Tailwind, React</li>
            <li>Bases de datos: MySQL</li>
            <li>Otros: Maquetación web, diseño responsive</li>
            <li>Idiomas: Castellano (nativo), Catalán (nativo), Inglés (básico)</li>
          </ul>
        </section>
  
        <section className="mb-8 px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold border-b pb-2 mb-4">Logros Deportivos</h2>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>5º lugar en los Juegos Paralímpicos de París 2024</li>
            <li>Doble Subcampeón del Mundo 2023</li>
            <li>Triple Campeón de España en natación paralímpica</li>
            <li>Representante de España en competiciones internacionales desde 2022</li>
          </ul>
        </section>
  
        <section className="px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold border-b pb-2 mb-4">Intereses</h2>
          <ul className="list-disc list-inside text-sm sm:text-base">
            <li>Maquetación y diseño web</li>
            <li>Tecnología y desarrollo</li>
            <li>Deporte y superación personal</li>
          </ul>
        </section>
      </main>
    );
  };
  
  export default Cv;  