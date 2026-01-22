// Story map chapters data
// Each chapter represents a location and story in St. Louis Mexican history

export interface StoryChapter {
  id: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  center: [number, number]; // [longitude, latitude]
  zoom: number;
  pitch?: number;
  bearing?: number;
  image?: string; // Optional image path
}

export const storyChapters: StoryChapter[] = [
  {
    id: 'intro',
    title: {
      en: 'Mexican History in St. Louis',
      es: 'Historia Mexicana en St. Louis'
    },
    description: {
      en: 'Explore the rich history of the Mexican community in St. Louis, dating back to the early 1800s. This interactive map highlights key locations and stories of Mexican heritage in the Gateway City.',
      es: 'Explora la rica historia de la comunidad mexicana en St. Louis, que se remonta al principio del siglo diecinueve. Este mapa interactivo destaca lugares y historias clave de la herencia mexicana en la Ciudad del Gateway.'
    },
    center: [-90.1994, 38.6270], // St. Louis overview
    zoom: 11,
    pitch: 0,
    bearing: 0
  },
  {
    id: 'mercantile-exchange',
    title: {
      en: 'Testing 123',
      es: 'Probando 123'
    },
    description: {
      en: 'In 1883, the Mexican and Spanish-American Mercantile Exchange organization was founded in St. Louis. This organization hosted visits of prominent Mexican businessmen, encouraged the study of Spanish in St. Louis, and promoted commercial relations between Mexico and the United States.',
      es: 'En 1883, se fundó la organización Mexican and Spanish-American Mercantile Exchange en St. Louis. Esta organización organizó visitas de empresarios mexicanos prominentes, fomentó el estudio del español en St. Louis y promovió las relaciones comerciales entre México y Estados Unidos.'
    },
    center: [-90.1967, 38.6304], // Downtown St. Louis (8th & Olive area)
    zoom: 15,
    pitch: 45,
    bearing: -17.6,
    image: '/stp_flyer.png' // You can update this to point to an image
  },
  {
    id: 'downtown',
    title: {
      en: 'Downtown St. Louis',
      es: 'Centro de St. Louis'
    },
    description: {
      en: 'Downtown St. Louis served as a hub for Mexican business and cultural activities throughout the late 19th and early 20th centuries. Mexican merchants and community leaders established themselves in this area.',
      es: 'El centro de St. Louis sirvió como centro de negocios y actividades culturales mexicanas a lo largo de finales del siglo XIX y principios del XX. Los comerciantes y líderes comunitarios mexicanos se establecieron en esta área.'
    },
    center: [-90.1930, 38.6283],
    zoom: 14,
    pitch: 30,
    bearing: 0
  },
  // Add more chapters based on your ArcGIS Story Maps content
  // You can populate these with your actual locations
];
