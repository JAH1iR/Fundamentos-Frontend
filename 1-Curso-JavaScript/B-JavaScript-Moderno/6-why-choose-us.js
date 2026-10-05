/*
  Paso 6 - Proyecto final: "Why choose us"
  Objetivo: reunir todos los conceptos vistos para transformar datos en una estructura
  de interfaz. Este ejemplo simula una sección de marketing con varios pilares, mostrando
  cómo se puede representar la UI a partir de objetos y listas.

  Ejecuta este archivo con: node 6-why-choose-us.js
*/

const pilares = [
  {
    icono: "📖",
    titulo: "Aprendizaje claro",
    beneficio:
      "Entiende cada concepto con ejemplos directos y una progresión sin saltos innecesarios.",
  },
  {
    icono: "🛠️",
    titulo: "Práctica aplicable",
    beneficio:
      "Convierte la teoría en ejercicios que puedes probar y reutilizar en tus proyectos.",
  },
  {
    icono: "🚀",
    titulo: "Progreso visible",
    beneficio:
      "Avanza desde los fundamentos hasta crear interfaces modernas con más confianza.",
  },
  {
    icono: "🧭",
    titulo: "Acompañamiento cercano",
    beneficio:
      "Encuentra referencias claras para resolver dudas sin quedarte bloqueado.",
  },
];

const crearPilar = ({ icono, titulo, beneficio }) => ({
  icono,
  titulo,
  texto: beneficio,
});

const crearSeccion = (datos) => ({
  titulo: "Aprende con una ruta que sí avanza contigo",
  subtitulo:
    "Práctica guiada, ejemplos claros y herramientas para convertir cada concepto en una habilidad útil.",
  pilares: datos.map(crearPilar),
  cta: "Comenzar ahora",
});

const seccionWhyChooseUs = crearSeccion(pilares);
console.log(JSON.stringify(seccionWhyChooseUs, null, 2));

// ¿Qué representa esto?
// La seccion final es un objeto que puede convertirse después en JSX o HTML.
// Es la base mental para construir componentes en React.
