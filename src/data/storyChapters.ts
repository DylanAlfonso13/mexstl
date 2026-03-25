// Story map chapters data
// Each chapter represents a location and story in St. Louis Mexican history

export interface ImageData {
  src: string;
  caption: {
    en: string;
    es: string;
  };
  credit?: string;
}

export interface StoryChapter {
  id: string;
  era?: string; // e.g., "1821" or "Late 19th Century"
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
  image?: string; // Single image path (for backward compatibility)
  images?: ImageData[]; // Multiple images for carousel
  sources?: {
    en: string[];
    es: string[];
  };
}

export const storyChapters: StoryChapter[] = [
  {
    id: 'intro',
    era: 'Introduction',
    title: {
      en: 'Siempre Hemos Estado Aquí',
      es: 'Siempre Hemos Estado Aquí'
    },
    description: {
      en: 'Explore the rich history of the Mexican community in St. Louis, dating back to the early 1800s. This interactive map highlights key locations and stories of Mexican heritage in the Gateway City. From the Santa Fe Trail to the Mexican Revolution, discover how St. Louis has been a vital connection point between the United States and Mexico.',
      es: 'Explora la rica historia de la comunidad mexicana en St. Louis, que se remonta a principios del siglo XIX. Este mapa interactivo destaca lugares y historias clave del patrimonio mexicano en la Ciudad Gateway. Desde el Camino de Santa Fe hasta la Revolución Mexicana, descubre cómo St. Louis ha sido un punto de conexión vital entre Estados Unidos y México.'
    },
    center: [-90.1994, 38.6270],
    zoom: 11,
    pitch: 0,
    bearing: 0
  },
  {
    id: 'santa-fe-trail',
    era: '1821',
    title: {
      en: 'Santa Fe Trail',
      es: 'Camino de Santa Fe'
    },
    description: {
      en: 'Ties between St. Louis and Mexico can be traced back to the early 19th century when business relations were established between Midwestern and Mexican merchants along the Santa Fe Trail. Starting in 1821, merchant caravans used this highway to travel between Franklin, Missouri and Santa Fe, which was then part of Mexico. Exchanged goods included silks, linens, silver coins, and a great number of mules. The trail promoted vibrant trade between the two cities even before the Mexican-American War (1846-1848), in which the U.S. annexed 55 percent of Mexican territory, including Santa Fe. The long history of commerce along the Santa Fe Trail demonstrates the strong connection between the Midwest and Mexico. The relations between Mexico and St. Louis not only entailed material exchange, but also established deeper roots of professional partnerships and cultural ties that would last generations.',
      es: 'Los lazos entre St. Louis y México se remontan a principios del siglo XIX cuando se establecieron relaciones comerciales entre comerciantes del Medio Oeste y mexicanos a lo largo del Camino de Santa Fe. A partir de 1821, las caravanas de comerciantes utilizaban esta ruta para viajar entre Franklin, Missouri y Santa Fe, que entonces era parte de México. Los bienes intercambiados incluían sedas, linos, monedas de plata y un gran número de mulas. El camino promovió un comercio vibrante entre las dos ciudades incluso antes de la Guerra México-Estadounidense (1846-1848), en la que EE.UU. anexó el 55 por ciento del territorio mexicano, incluida Santa Fe. La larga historia del comercio a lo largo del Camino de Santa Fe demuestra la fuerte conexión entre el Medio Oeste y México. Las relaciones entre México y St. Louis no solo implicaron intercambio material, sino que también establecieron raíces más profundas de asociaciones profesionales y lazos culturales que durarían generaciones.'
    },
    center: [-90.2454, 38.7881], // Franklin, Missouri (Santa Fe Trail eastern terminus)
    zoom: 10,
    pitch: 0,
    bearing: 0,
    sources: {
      en: [
        'https://muse.jhu.edu/pub/15/article/690128/pdf',
        'https://www.nps.gov/safe/learn/historyculture/index.htm',
        'https://santafetrail.org/history/'
      ],
      es: [
        'https://muse.jhu.edu/pub/15/article/690128/pdf',
        'https://www.nps.gov/safe/learn/historyculture/index.htm',
        'https://santafetrail.org/history/'
      ]
    }
  },
  {
    id: 'railroad',
    era: '1883-1888',
    title: {
      en: 'Missouri Pacific Railroad Company',
      es: 'Compañía Ferroviaria Missouri Pacific'
    },
    description: {
      en: 'The Missouri Pacific Railroad Company was influential in creating physical connections between St. Louis and Mexico. In 1883, the Mexican Central Railway Line was connected to U.S. railways; in 1888, the Mexican National Railway Line was extended into the United States. Meanwhile, in Mexico, President Porfirio Díaz championed the growth of the Mexican National and Mexican Central Railroads, seeking to stimulate the economy by improving access to U.S. markets and lowering transportation costs. The Mexican Central Railway Line ran from Mexico City to El Paso, Texas, and from there to St. Louis.',
      es: 'La Compañía Ferroviaria Missouri Pacific fue influyente en la creación de conexiones físicas entre St. Louis y México. En 1883, la Línea Ferroviaria Central Mexicana se conectó a los ferrocarriles de EE.UU.; en 1888, la Línea Ferroviaria Nacional Mexicana se extendió a Estados Unidos. Mientras tanto, en México, el Presidente Porfirio Díaz promovió el crecimiento de los ferrocarriles Nacional Mexicano y Central Mexicano, buscando estimular la economía mejorando el acceso a los mercados estadounidenses y reduciendo los costos de transporte. La Línea Ferroviaria Central Mexicana iba desde la Ciudad de México hasta El Paso, Texas, y de ahí a St. Louis.'
    },
    center: [-90.1994, 38.6270],
    zoom: 12,
    pitch: 30,
    bearing: 0,
    sources: {
      en: [
        'https://muse.jhu.edu/pub/15/article/690128/pdf',
        'https://www.houstonculture.org/hispanic/roads.html'
      ],
      es: [
        'https://muse.jhu.edu/pub/15/article/690128/pdf',
        'https://www.houstonculture.org/hispanic/roads.html'
      ]
    }
  },
  {
    id: 'mercantile-exchange',
    era: '1883',
    title: {
      en: 'Mexican Mercantile Exchange',
      es: 'Intercambio Mercantil Mexicano'
    },
    description: {
      en: 'In 1883, the Mexican and Spanish-American Mercantile Exchange organization was founded in St. Louis. This organization hosted visits of prominent Mexican businessmen, encouraged the study of Spanish in St. Louis, and distributed pamphlets in Mexico promoting relations with the Midwest. This company was established by John F. Cahill, a mercantile drug business owner who had previously worked in Mexico and Cuba. Efforts such as this solidified growing relations between St. Louis and Mexico, and facilitated the beginnings of Mexican immigration to St. Louis. By the end of the nineteenth century, exports from St. Louis to Mexico amounted to $7.5 million a year.',
      es: 'En 1883, se fundó la organización Mexican and Spanish-American Mercantile Exchange en St. Louis. Esta organización organizó visitas de empresarios mexicanos prominentes, fomentó el estudio del español en St. Louis y distribuyó folletos en México promoviendo las relaciones con el Medio Oeste. Esta empresa fue establecida por John F. Cahill, propietario de un negocio mercantil de medicamentos que había trabajado anteriormente en México y Cuba. Esfuerzos como este solidificaron las crecientes relaciones entre St. Louis y México, y facilitaron los inicios de la inmigración mexicana a St. Louis. Para finales del siglo XIX, las exportaciones de St. Louis a México ascendían a $7.5 millones al año.'
    },
    center: [-90.1967, 38.6304], // Downtown St. Louis (8th & Olive area)
    zoom: 15,
    pitch: 45,
    bearing: -17.6,
    image: '/stp_flyer.png',
    sources: {
      en: [
        'https://muse.jhu.edu/pub/15/article/690128/pdf',
        'https://mexstl.org/stl_post_dispatch'
      ],
      es: [
        'https://muse.jhu.edu/pub/15/article/690128/pdf',
        'https://mexstl.org/stl_post_dispatch'
      ]
    }
  },
  {
    id: 'armijo-home',
    era: 'Late 19th Century',
    title: {
      en: 'Home of Juan C. Armijo',
      es: 'Casa de Juan C. Armijo'
    },
    description: {
      en: 'By the late nineteenth century, many prominent Mexican families had settled and established their lives in St. Louis. Juan C. Armijo, the son of the wealthiest man in Mexico at the time, Nicholas F. Armijo, attended Washington University and Saint Louis University in the late 19th century. After completing his studies, he returned home before setting out again for St. Louis and, in 1890, was rumored to be engaged with a woman in the city. Juan Armijo is a reflection of the mobility within the elite Mexican class, who could afford to base their lives in two geographical locations, with a growing circle in St. Louis.',
      es: 'A finales del siglo XIX, muchas familias mexicanas prominentes se habían establecido en St. Louis. Juan C. Armijo, hijo del hombre más rico de México en ese momento, Nicholas F. Armijo, asistió a Washington University y Saint Louis University a finales del siglo XIX. Después de completar sus estudios, regresó a casa antes de partir nuevamente hacia St. Louis y, en 1890, se rumoreaba que estaba comprometido con una mujer de la ciudad. Juan Armijo es un reflejo de la movilidad dentro de la clase élite mexicana, que podía permitirse basar sus vidas en dos ubicaciones geográficas, con un círculo creciente en St. Louis.'
    },
    center: [-90.3052, 38.6488], // Washington University area
    zoom: 14,
    pitch: 40,
    bearing: 0,
    sources: {
      en: [
        'https://timesmachine.nytimes.com/timesmachine/1890/12/23/103287788.html',
        'https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187',
        'http://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30'
      ],
      es: [
        'https://timesmachine.nytimes.com/timesmachine/1890/12/23/103287788.html',
        'https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187',
        'http://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30'
      ]
    }
  },
  {
    id: 'railway-headquarters',
    era: '1902',
    title: {
      en: 'Mexican Central Railway Headquarters',
      es: 'Sede del Ferrocarril Central Mexicano'
    },
    description: {
      en: 'In 1902, the Mexican Central Railway (Ferrocarril Central Mexicano) headquarters in the United States was moved from Boston to St. Louis. Henry Clay Pierce, president of the Waters-Pierce Oil Company, spearheaded the move in an effort to develop the American west, where St. Louis was a leading metropolis. The new headquarters were to be located in St. Louis\' National Bank of Commerce building downtown, off North Broadway and Olive Street.',
      es: 'En 1902, la sede del Ferrocarril Central Mexicano en Estados Unidos se trasladó de Boston a St. Louis. Henry Clay Pierce, presidente de la Waters-Pierce Oil Company, encabezó el traslado en un esfuerzo por desarrollar el oeste americano, donde St. Louis era una metrópoli líder. La nueva sede se ubicaría en el edificio del National Bank of Commerce en el centro de St. Louis, cerca de North Broadway y Olive Street.'
    },
    center: [-90.1906, 38.6308], // North Broadway and Olive Street area
    zoom: 16,
    pitch: 50,
    bearing: -20,
    images: [
      {
        src: '/stp_1.png',
        caption: {
          en: 'Historic St. Louis downtown district, home to major railroad and commercial operations in the early 1900s.',
          es: 'Distrito histórico del centro de St. Louis, hogar de importantes operaciones ferroviarias y comerciales a principios del siglo XX.'
        },
        credit: 'St. Louis Post-Dispatch Archives'
      },
      {
        src: '/stp_2.png',
        caption: {
          en: 'The National Bank of Commerce building and surrounding business district where the Mexican Central Railway established its U.S. headquarters.',
          es: 'El edificio del National Bank of Commerce y el distrito comercial circundante donde el Ferrocarril Central Mexicano estableció su sede en EE.UU.'
        },
        credit: 'St. Louis Post-Dispatch Archives'
      },
      {
        src: '/stp_3.png',
        caption: {
          en: 'North Broadway and Olive Street area, the heart of St. Louis commercial activity and railroad operations in 1902.',
          es: 'Zona de North Broadway y Olive Street, el corazón de la actividad comercial y operaciones ferroviarias de St. Louis en 1902.'
        },
        credit: 'St. Louis Post-Dispatch Archives'
      }
    ],
    sources: {
      en: [
        'https://mexstl.org/mexican_center',
        'https://www.builtstlouis.net/opos/chamber.html'
      ],
      es: [
        'https://mexstl.org/mexican_center',
        'https://www.builtstlouis.net/opos/chamber.html'
      ]
    }
  },
  {
    id: 'regeneracion',
    era: '1905',
    title: {
      en: 'Regeneración Newspaper',
      es: 'Periódico Regeneración'
    },
    description: {
      en: 'In 1905, Ricardo Flores Magón, an exiled journalist, escaped the Porfiriato dictatorship and settled in St. Louis. Here, Magón published the revolutionary newspaper Regeneración, a leftist publication that inspired uprisings and the Mexican Revolution in 1910. From an apartment building that would later become the campus of St. Louis University, Magón founded the Mexican Liberal Party. The legacy of Ricardo Flores Magón highlights the transnational nature of the Mexican Revolution, where influential figures penetrated Mexican politics from the United States.',
      es: 'En 1905, Ricardo Flores Magón, un periodista exiliado, escapó de la dictadura porfirista y se estableció en St. Louis. Aquí, Magón publicó el periódico revolucionario Regeneración, una publicación de izquierda que inspiró levantamientos y la Revolución Mexicana en 1910. Desde un edificio de apartamentos que luego se convertiría en el campus de Saint Louis University, Magón fundó el Partido Liberal Mexicano. El legado de Ricardo Flores Magón destaca la naturaleza transnacional de la Revolución Mexicana, donde figuras influyentes penetraron la política mexicana desde Estados Unidos.'
    },
    center: [-90.2346, 38.6354], // Saint Louis University area
    zoom: 15,
    pitch: 45,
    bearing: 0,
    sources: {
      en: [
        'https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html'
      ],
      es: [
        'https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html'
      ]
    }
  }
];
