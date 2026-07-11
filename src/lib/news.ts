export type NewsItem = {
  slug: string;
  tag: string;
  title: string;
  meta: string;
  feature?: boolean;
  body: string;
};

// Contenido temporal (ver MS-13): hasta que haya un CMS conectado,
// las noticias viven acá hardcodeadas.
export const newsItems: NewsItem[] = [
  {
    slug: "test-privados-pretemporada",
    tag: "MotoGP",
    title:
      "Crónica: así se vivió la última tanda de test privados antes del inicio de temporada",
    meta: "Hace 3 horas · Redacción MotoX",
    feature: true,
    body: "Los equipos cerraron la pretemporada con una última tanda de test privados marcada por tiempos muy ajustados y varias sorpresas en la tabla. En las próximas semanas se conocerá la alineación definitiva de cara al primer Gran Premio.",
  },
  {
    slug: "tiempos-pretemporada-jerez",
    tag: "Moto2",
    title: "Los tiempos que dejó la sesión de pretemporada en Jerez",
    meta: "Hace 5 horas",
    body: "La sesión en el circuito de Jerez dejó tiempos muy parejos entre los principales candidatos al título, con diferencias de apenas centésimas en la punta de la tabla.",
  },
  {
    slug: "calendario-mundial-femenino",
    tag: "Femenino",
    title: "Mundial Femenino: calendario confirmado para la nueva temporada",
    meta: "Hace 8 horas",
    body: "La organización confirmó las fechas y sedes de la próxima temporada del Mundial Femenino, que contará con más fechas que la edición anterior.",
  },
  {
    slug: "nueva-fecha-sbk-europa",
    tag: "SBK",
    title: "Superbikes suma una nueva fecha al calendario europeo",
    meta: "Ayer",
    body: "El campeonato de Superbikes anunció la incorporación de una nueva fecha en suelo europeo, ampliando el calendario de la categoría para la próxima temporada.",
  },
  {
    slug: "entrevista-revelacion-moto3",
    tag: "Moto3",
    title: "Entrevista exclusiva con la revelación de la categoría",
    meta: "Ayer",
    body: "Charlamos con una de las figuras que más dio que hablar en la pretemporada de Moto3 sobre sus expectativas para el año que comienza.",
  },
];
