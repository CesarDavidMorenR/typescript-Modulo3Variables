interface GrupoMusical {
  nombre: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}

const grupos = [
  {
    nombre: "The Beatles",
    añoFundacion: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
  },
  {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false,
    genero: "🎸 Rock",
  },
  {
    nombre: "AC DC",
    añoFundacion: 1973,
    activo: true,
    genero: "🤘 Hard Rock",
  },
  {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    genero: "🎼 Clásica",
  },
  {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    genero: "🎸 Rock",
  },
];

function mostrarGrupo(grupo: GrupoMusical) {
  const nombreEnNegrita = `${grupo.nombre} `;
  const nombreEnMayusculas = nombreEnNegrita.toUpperCase();
  const nombreConFormato = `\x1b[42m\x1b[2m${nombreEnMayusculas}\x1b[0m`;

  console.log(nombreConFormato);
  console.log(`Año de fundación: ${grupo.añoFundacion}`);
  console.log(`Activo: ${grupo.activo}`);
  console.log(`Género: ${grupo.genero}`);
}

for (const grupo of grupos) {
  mostrarGrupo(grupo);
}
