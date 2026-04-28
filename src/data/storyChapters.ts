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
      en: 'Ties between St. Louis and Mexico can be traced back to the early 19th century when business relations were established between Midwestern and Mexican merchants along the Sante Fe Trail. Starting in 1821, merchant caravans used this highway to travel between Franklin, Missouri and Santa Fe, which was then part of Mexico. Exchanged goods included silks, linens, silver coins, and a great number of mules. The trail promoted vibrant trade between the two cities even before the Mexican-American War (1846-1848), in which the U.S. annexed 55 percent of Mexican territory, including Sante Fe. The long history of commerce along the Santa Fe Trail demonstrates the strong connection between the Midwest and Mexico. The relations between Mexico and St. Louis not only entailed material exchange, but also established deeper roots of professional partnerships and cultural ties that would last generations.',
      es: 'Las conexiones entre St. Louis y México se remontan a los principios del siglo 19, cuando se establecieron relaciones de negocios entre los comerciantes de México y del Medio Oeste por el Camino de Santa Fe. Empezando en 1821, caravanas de comerciantes utilizaban este camino para viajar entre Franklin, Missouri y Santa Fe, que entonces era parte de México. Los bienes intercambiados incluían sedas, linos, monedas de plata y un gran número de mulas. El camino promovió frutos de comercio entre las dos ciudades incluso antes de la Guerra Mexicano-Estadounidense (1846-1848), la cual resultó en la anexión de 55 por ciento del territorio mexicano, incluyendo Santa Fe. La larga historia del comercio a lo largo del Camino de Santa Fe demuestra la fuerte conexión entre el Medio Oeste y México. Las relaciones entre México y St. Louis no solo implicaban intercambio material, sino también se establecieron raíces de asociaciones profesionales y lazos culturales que durarían generaciones.'
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
      es: 'La Compañía de Ferrocarriles del Pacifico de Missouri fue influyente en crear conexiones físicas entre St. Louis y México. En 1883, el Ferrocarril Central Mexicano fue conectado a los ferrocarriles de los EE.UU; en 1888, los Ferrocarriles Nacionales de México fueron extendidos a los Estados Unidos. Mientras, en México, el Presidente Porfirio Diaz celebraba el crecimiento de los Ferrocarriles Nacionales y Centrales de México, con la meta de estimular la economía mexicana a través del acceso a los mercados estadounidenses con costos de transportación reducidos. La línea del Ferrocarril Central Mexicano corría desde la Ciudad de México hasta El Paso, Texas y de allí a St. Louis.'
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
      es: 'En 1883, la organización del Intercambio Mercantil de México e Hispanoamérica fue fundada en St. Louis. Esta organización auspiciaba visitas de empresarios mexicanos destacados, motivaba el aprendizaje del idioma del español en St. Louis, y distribuía folletos en México promoviendo relaciones con el Medio Oeste. La compañía fue establecida por John F. Cahill, un propietario de un negocio de medicamentos que previamente trabajaba en México y Cuba. Esfuerzos como estos fortalecieron el crecimiento de relaciones entre St. Louis y México, al igual que facilitaron los inicios de la inmigración mexicana a St. Louis. A finales del siglo 19, las exportaciones de St. Louis a México ascendieron a $7.5 millones al año.'
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
      en: 'By the late nineteenth century, many prominent Mexican families had settled and established their lives in St. Louis. This New York Times article highlights Juan C. Armijo, the son of the wealthiest man in Mexico at the time, Nicholas F. Armijo. Juan Armijo attended Washington University and Saint Louis University in the late 19th century. After completing his studies, he returned home before setting out again for St. Louis and, in 1890, was rumored to be engaged with a woman in the city. Juan Armijo is a reflection of the mobility within the elite Mexican class, who could afford to base their lives in two geographical locations, with a growing circle in St. Louis.',
      es: 'A finales del siglo 19, numerosas familias mexicanas destacadas establecieron sus vidas en St. Louis. Este artículo del New York Times atrae la atención a Juan C. Armijo, el hijo del hombre más rico de México en ese tiempo, Nicholas F. Armijo. Juan Armijo asistió a la Universidad de Washington y a la Universidad de St. Louis a finales del siglo 19. Después de completar sus estudios, regresó a casa antes de partir de nuevo hacia St. Louis, y en 1890, había rumor de que estaba comprometido con una mujer en la ciudad. Juan Armijo es un reflejo de la movilidad dentro de la clase alta de México, los cuales podían establecer sus vidas en dos lugares a la vez, con un círculo creciente en St Louis.'
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
      en: 'In 1902, the Mexican Central Railway (Ferrocarril Central Mexicano) headquarters in the United States was moved from Boston to St. Louis. Henry Clay Pierce, president of the Waters-Pierce Oil Company, spearheaded the move in an effort to develop the American west, where St. Louis was a leading metropolis. According to this St. Louis Dispatch article, the new headquarters were to be located in St. Louis\' National Bank of Commerce building downtown, off North Broadway and Olive Street.',
      es: 'En 1902, la gerencia general del Ferrocarril Central Mexicano en los Estados Unidos fue trasladada de Boston a St. Louis. Henry Clay Pierce, presidente de la compañía petrolera Waters-Pierce, lideró el movimiento para desarrollar el Oeste de América, donde St. Louis era la metropolis. De acuerdo al artículo del St. Louis Dispatch, la nueva gerencia general iba a estar ubicada en el Banco Nacional de Comercio de St. Louis, junto a North Broadway y Olive Street.'
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
      es: 'En 1905, Ricardo Flores Magón, un periodista expulsado de México, escapó de la dictadura del Porfiriato y se estableció en St. Louis. Aquí, Magón publicaba el periódico revolucionario Regeneración, una publicación democrática que inspiró levantamientos y, finalmente, la Revolución Mexicana en 1910. Localizado en un departamento que después se convertiría en la Universidad de St. Louis, Magón fundó el Partido Liberal Mexicano. El legado de Ricardo Flores Magón atrae la atención de la naturaleza transnacional de la Revolución Mexicana, donde figuras influyentes impulsaron la política mexicana desde los Estados Unidos.'
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
