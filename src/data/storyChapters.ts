// Story map chapters data
// Each chapter represents a location and story in St. Louis Mexican history

export interface ImageData {
  src: string;
  caption: {
    en: string;
    es: string;
  };
  credit?: string;
  citation?: number; // Footnote number shown as a superscript on the caption
}

export interface Source {
  text: string; // Chicago-format citation; may contain minimal HTML (e.g. <i> for journal titles)
  url: string; // Link target; must match the href used in the description for in-text numbering
}

export interface StoryChapter {
  id: string;
  era?: string; // e.g., "1821" or "Late 19th Century"
  title: {
    en: string;
    es: string;
  };
  subtitle?: {
    en?: string;
    es?: string;
  };
  description: {
    en: string;
    es: string;
  };
  center?: [number, number]; // [longitude, latitude]
  zoom?: number;
  pitch?: number;
  bearing?: number;
  image?: string; // Single image path (for backward compatibility)
  imageCaption?: string;
  imageCaptionHref?: string;
  images?: ImageData[]; // Multiple images for carousel
  sources?: {
    en: Source[];
    es: Source[];
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
    subtitle: {
      en: 'We Have Always Been Here'
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
      en: 'Ties between St. Louis and Mexico <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">can be traced back to the early 19th century</a> when business relations were established between Midwestern and Mexican merchants along the Sante Fe Trail. <a href="https://www.nps.gov/safe/learn/historyculture/index.htm" target="_blank" rel="noopener noreferrer">Starting in 1821</a>, merchant caravans used this highway to travel between Franklin, Missouri and Santa Fe, which was then part of Mexico. <a href="https://santafetrail.org/history/#:~:text=For%20almost%2060%20years%20the,this%20route%20along%20with%20culture" target="_blank" rel="noopener noreferrer">Exchanged goods</a> included silks, linens, silver coins, and a great number of mules. The trail promoted vibrant trade between the two cities even before the <a href="https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo#:~:text=By%20its%20terms%2C%20Mexico%20ceded,Oklahoma%2C%20Kansas%2C%20and%20Wyoming." target="_blank" rel="noopener noreferrer">Mexican-American War (1846-1848)</a>, in which the U.S. annexed 55 percent of Mexican territory, including Sante Fe. The long history of commerce along the Santa Fe Trail demonstrates the strong connection between the Midwest and Mexico. The relations between Mexico and St. Louis not only entailed material exchange, but also established deeper roots of professional partnerships and cultural ties that would last generations.',
      es: 'Las conexiones entre St. Louis y México <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">se remontan a los principios del siglo 19</a>, cuando se establecieron relaciones de negocios entre los comerciantes de México y del Medio Oeste por el Camino de Santa Fe. <a href="https://www.nps.gov/safe/learn/historyculture/index.htm" target="_blank" rel="noopener noreferrer">Empezando en 1821</a>, caravanas de comerciantes utilizaban este camino para viajar entre Franklin, Missouri y Santa Fe, que entonces era parte de México. <a href="https://santafetrail.org/history/#:~:text=For%20almost%2060%20years%20the,this%20route%20along%20with%20culture" target="_blank" rel="noopener noreferrer">Los bienes intercambiados</a> incluían sedas, linos, monedas de plata y un gran número de mulas. El camino promovió frutos de comercio entre las dos ciudades incluso antes de <a href="https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo#:~:text=By%20its%20terms%2C%20Mexico%20ceded,Oklahoma%2C%20Kansas%2C%20and%20Wyoming." target="_blank" rel="noopener noreferrer">la Guerra Mexicano-Estadounidense (1846-1848)</a>, la cual resultó en la anexión de 55 por ciento del territorio mexicano, incluyendo Santa Fe. La larga historia del comercio a lo largo del Camino de Santa Fe demuestra la fuerte conexión entre el Medio Oeste y México. Las relaciones entre México y St. Louis no solo implicaban intercambio material, sino también se establecieron raíces de asociaciones profesionales y lazos culturales que durarían generaciones.'
    },
    center: [-92.7899, 39.0036], // Franklin, Missouri (Santa Fe Trail eastern terminus)
    zoom: 16,
    pitch: 50,
    bearing: 0,
    images: [
      {
        src: '/santa-fe/conestoga_wagon.jpg',
        citation: 1,
        caption: {
          en: 'The Conestoga wagon was popular on the Santa Fe Trail because its curved design kept cargo centered on rough terrain.',
          es: 'La carreta Conestoga era popular en el Camino de Santa Fe porque su diseño curvado mantenía la carga centrada en terrenos accidentados.'
        },
        credit: 'National Park Service'
      },
      {
        src: '/santa-fe/francisca_lopez.webp',
        citation: 2,
        caption: {
          en: 'Francisca López, who journeyed from New Mexico to St. Louis via the Santa Fe Trail in 1850.',
          es: 'Francisca López, quien viajó de Nuevo México a St. Louis por el Camino de Santa Fe en 1850.'
        },
        credit: 'National Park Service'
      },
      {
        src: '/santa-fe/felipe_chavez.jpg',
        citation: 3,
        caption: {
          en: 'Don Felipe Chávez, an elite New Mexican scholar, was a highly successful trader along the Santa Fe Trail known as <i>el millonario</i>.',
          es: 'Don Felipe Chávez, un erudito de la élite nuevomexicana, fue un comerciante muy exitoso a lo largo del Camino de Santa Fe, conocido como <i>el millonario</i>.'
        },
        credit: 'Santa Fe National Historic Trail: Special History Study'
      },
      {
        src: '/santa-fe/santa_fe_trail_map.png',
        citation: 4,
        caption: {
          en: 'The Santa Fe Trail connected Franklin, Missouri to Santa Fe, New Mexico (Spanish territory until 1848). St. Louis was connected via the Mississippi River.',
          es: 'El Camino de Santa Fe conectaba Franklin, Missouri con Santa Fe, Nuevo México (territorio español hasta 1848). St. Louis estaba conectado a través del río Mississippi.'
        },
        credit: 'ArcGIS web application, National Park Service'
      }
    ],
    sources: {
      en: [
        {
          text: '“Laboring for a Living on the Santa Fe Trail (U.S. National Park Service).” National Parks Service. https://www.nps.gov/articles/000/laboring-for-a-living-on-the-santa-fe-trail.htm.',
          url: 'https://www.nps.gov/articles/000/laboring-for-a-living-on-the-santa-fe-trail.htm'
        },
        {
          text: '“People of the Santa Fe Trail: Francisca López.” National Parks Service. https://www.nps.gov/people/francisca-lopez.htm.',
          url: 'https://www.nps.gov/people/francisca-lopez.htm'
        },
        {
          text: '“Felipe Chávez.” Santa Fe National Historic Trail: Special History Study (Chapter 6). https://npshistory.com/publications/safe/shs/chap6.htm.',
          url: 'https://npshistory.com/publications/safe/shs/chap6.htm'
        },
        {
          text: 'ArcGIS web application. https://nps.maps.arcgis.com/apps/webappviewer/index.html?id=24fc463363f54929833580280cc1a751.',
          url: 'https://nps.maps.arcgis.com/apps/webappviewer/index.html?id=24fc463363f54929833580280cc1a751'
        },
        {
          text: 'Gonzales, Daniel. “Mexican Immigration and the Saint Louis Region, 1900–1935.” <i>Diálogo</i> 21, no. 1 (2018): 18. https://doi.org/10.1353/dlg.2018.0003.',
          // Matches the in-text link, which points to the full text on Project MUSE
          url: 'https://muse.jhu.edu/pub/15/article/690128/pdf'
        },
        {
          text: '“History &amp; Culture - Santa Fe National Historic Trail.” National Parks Service. https://www.nps.gov/safe/learn/historyculture/index.htm.',
          url: 'https://www.nps.gov/safe/learn/historyculture/index.htm'
        },
        {
          text: 'Myers, Harry C. “A History of the Santa Fe Trail.” Santa Fe Trail. https://santafetrail.org/history/.',
          url: 'https://santafetrail.org/history/'
        },
        {
          text: '“Treaty of Guadalupe Hidalgo (1848).” Archives. https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo.',
          url: 'https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo'
        }
      ],
      es: [
        {
          text: '“Laboring for a Living on the Santa Fe Trail (U.S. National Park Service).” National Parks Service. https://www.nps.gov/articles/000/laboring-for-a-living-on-the-santa-fe-trail.htm.',
          url: 'https://www.nps.gov/articles/000/laboring-for-a-living-on-the-santa-fe-trail.htm'
        },
        {
          text: '“People of the Santa Fe Trail: Francisca López.” National Parks Service. https://www.nps.gov/people/francisca-lopez.htm.',
          url: 'https://www.nps.gov/people/francisca-lopez.htm'
        },
        {
          text: '“Felipe Chávez.” Santa Fe National Historic Trail: Special History Study (Chapter 6). https://npshistory.com/publications/safe/shs/chap6.htm.',
          url: 'https://npshistory.com/publications/safe/shs/chap6.htm'
        },
        {
          text: 'ArcGIS web application. https://nps.maps.arcgis.com/apps/webappviewer/index.html?id=24fc463363f54929833580280cc1a751.',
          url: 'https://nps.maps.arcgis.com/apps/webappviewer/index.html?id=24fc463363f54929833580280cc1a751'
        },
        {
          text: 'Gonzales, Daniel. “Mexican Immigration and the Saint Louis Region, 1900–1935.” <i>Diálogo</i> 21, no. 1 (2018): 18. https://doi.org/10.1353/dlg.2018.0003.',
          url: 'https://muse.jhu.edu/pub/15/article/690128/pdf'
        },
        {
          text: '“History &amp; Culture - Santa Fe National Historic Trail.” National Parks Service. https://www.nps.gov/safe/learn/historyculture/index.htm.',
          url: 'https://www.nps.gov/safe/learn/historyculture/index.htm'
        },
        {
          text: 'Myers, Harry C. “A History of the Santa Fe Trail.” Santa Fe Trail. https://santafetrail.org/history/.',
          url: 'https://santafetrail.org/history/'
        },
        {
          text: '“Treaty of Guadalupe Hidalgo (1848).” Archives. https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo.',
          url: 'https://www.archives.gov/milestone-documents/treaty-of-guadalupe-hidalgo'
        }
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
      en: 'The <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">Missouri Pacific Railroad Company</a> was influential in creating physical connections between St. Louis and Mexico. In 1883, the <a href="https://www.houstonculture.org/hispanic/roads.html" target="_blank" rel="noopener noreferrer">Mexican Central Railway Line</a> was connected to U.S. railways; in 1888, the Mexican National Railway Line was extended into the United States. Meanwhile, in Mexico, <a href="https://www.houstonculture.org/hispanic/roads.html" target="_blank" rel="noopener noreferrer">President Porfirio Díaz</a> championed the growth of the Mexican National and Mexican Central Railroads, seeking to stimulate the economy by improving access to U.S. markets and lowering transportation costs. The Mexican Central Railway Line ran from Mexico City to El Paso, Texas, and from there to St. Louis.',
      es: '<a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">La Compañía de Ferrocarriles del Pacifico de Missouri</a> fue influyente en crear conexiones físicas entre St. Louis y México. En 1883, el <a href="https://www.houstonculture.org/hispanic/roads.html" target="_blank" rel="noopener noreferrer">Ferrocarril Central Mexicano</a> fue conectado a los ferrocarriles de los EE.UU; en 1888, los Ferrocarriles Nacionales de México fueron extendidos a los Estados Unidos. Mientras, en México, el <a href="https://www.houstonculture.org/hispanic/roads.html" target="_blank" rel="noopener noreferrer">Presidente Porfirio Diaz</a> celebraba el crecimiento de los Ferrocarriles Nacionales y Centrales de México, con la meta de estimular la economía mexicana a través del acceso a los mercados estadounidenses con costos de transportación reducidos. La línea del Ferrocarril Central Mexicano corría desde la Ciudad de México hasta El Paso, Texas y de allí a St. Louis.'
    },
    image: '/missouri_pacific_railroad.jpg',
    imageCaption: 'Learn more about this archival document',
    imageCaptionHref: 'https://en.wikipedia.org/wiki/Missouri_Pacific_Railroad'
  },
  {
    id: 'mercantile-exchange',
    era: '1883',
    title: {
      en: 'Mexican Mercantile Exchange',
      es: 'Intercambio Mercantil Mexicano'
    },
    description: {
      en: 'In 1883, the <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">Mexican and Spanish-American Mercantile Exchange</a> organization was founded in St. Louis. This organization hosted visits of prominent Mexican businessmen, encouraged the study of Spanish in St. Louis, and distributed pamphlets in Mexico promoting relations with the Midwest. This company was established by John F. Cahill, a mercantile drug business owner who had previously worked in Mexico and Cuba. Efforts such as this solidified growing relations between St. Louis and Mexico, and facilitated the beginnings of Mexican immigration to St. Louis. By the end of the nineteenth century, exports from St. Louis to Mexico amounted to <a href="https://www.mexstl.org/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf" target="_blank" rel="noopener noreferrer">$7.5 million a year</a>.',
      es: 'En 1883, la organización del <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">Intercambio Mercantil de México e Hispanoamérica</a> fue fundada en St. Louis. Esta organización auspiciaba visitas de empresarios mexicanos destacados, motivaba el aprendizaje del idioma del español en St. Louis, y distribuía folletos en México promoviendo relaciones con el Medio Oeste. La compañía fue establecida por John F. Cahill, un propietario de un negocio de medicamentos que previamente trabajaba en México y Cuba. Esfuerzos como estos fortalecieron el crecimiento de relaciones entre St. Louis y México, al igual que facilitaron los inicios de la inmigración mexicana a St. Louis. A finales del siglo 19, las exportaciones de St. Louis a México ascendieron a <a href="https://www.mexstl.org/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf" target="_blank" rel="noopener noreferrer">$7.5 millones al año</a>.'
    },
    center: [-90.1924, 38.6287], // Downtown St. Louis (8th & Olive area)
    zoom: 16,
    pitch: 50,
    bearing: 0,
    image: '/Mexican_mercantile_exchange.png',
    imageCaption: 'Learn more about this archival document',
    imageCaptionHref: 'https://digitalcommons.lindenwood.edu/cgi/viewcontent.cgi?article=1120&context=confluence_2009'
  },
  {
    id: 'armijo-home',
    era: 'Late 19th Century',
    title: {
      en: 'Home of Juan C. Armijo',
      es: 'Casa de Juan C. Armijo'
    },
    description: {
      en: 'By the late nineteenth century, many prominent Mexican families had settled and established their lives in St. Louis. This <a href="https://timesmachine.nytimes.com/timesmachine/1890/12/23/103287788.html?auth=login-email&login=email&auth=login-email&pageNumber=1" target="_blank" rel="noopener noreferrer">New York Times</a> article highlights Juan C. Armijo, the son of the wealthiest man in Mexico at the time, Nicholas F. Armijo. Juan Armijo attended <a href="https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187&ci=54%2C524%2C918%2C771&source=bookclip#v=onepage&q=armijo&f=false" target="_blank" rel="noopener noreferrer">Washington University</a> and <a href="http://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30" target="_blank" rel="noopener noreferrer">Saint Louis University</a> in the late 19th century. After completing his studies, he returned home before setting out again for St. Louis and, in 1890, was rumored to be engaged with a woman in the city. Juan Armijo is a reflection of the mobility within the elite Mexican class, who could afford to base their lives in two geographical locations, with a growing circle in St. Louis.',
      es: 'A finales del siglo 19, numerosas familias mexicanas destacadas establecieron sus vidas en St. Louis. Este artículo del <a href="https://timesmachine.nytimes.com/timesmachine/1890/12/23/103287788.html?auth=login-email&login=email&auth=login-email&pageNumber=1" target="_blank" rel="noopener noreferrer">New York Times</a> atrae la atención a Juan C. Armijo, el hijo del hombre más rico de México en ese tiempo, Nicholas F. Armijo. Juan Armijo asistió a la <a href="https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187&ci=54%2C524%2C918%2C771&source=bookclip#v=onepage&q=armijo&f=false" target="_blank" rel="noopener noreferrer">Universidad de Washington</a> y a la <a href="http://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30" target="_blank" rel="noopener noreferrer">Universidad de St. Louis</a> a finales del siglo 19. Después de completar sus estudios, regresó a casa antes de partir de nuevo hacia St. Louis, y en 1890, había rumor de que estaba comprometido con una mujer en la ciudad. Juan Armijo es un reflejo de la movilidad dentro de la clase alta de México, los cuales podían establecer sus vidas en dos lugares a la vez, con un círculo creciente en St Louis.'
    },
    center: [-90.2120, 38.6356], // Home of Juan C. Armijo
    zoom: 16,
    pitch: 50,
    bearing: 0
  },
  {
    id: 'railway-headquarters',
    era: '1902',
    title: {
      en: 'Mexican Central Railway Headquarters',
      es: 'Sede del Ferrocarril Central Mexicano'
    },
    description: {
      en: 'In 1902, the Mexican Central Railway (Ferrocarril Central Mexicano) headquarters in the United States was moved from Boston to St. Louis. Henry Clay Pierce, president of the Waters-Pierce Oil Company, spearheaded the move in an effort to develop the American west, where St. Louis was a leading metropolis. According to this <a href="https://www.mexstl.org/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf" target="_blank" rel="noopener noreferrer">St. Louis Dispatch</a> article, the new headquarters were to be located in St. Louis\' <a href="https://www.builtstlouis.net/opos/chamber.html" target="_blank" rel="noopener noreferrer">National Bank of Commerce</a> building downtown, off North Broadway and Olive Street.',
      es: 'En 1902, la gerencia general del Ferrocarril Central Mexicano en los Estados Unidos fue trasladada de Boston a St. Louis. Henry Clay Pierce, presidente de la compañía petrolera Waters-Pierce, lideró el movimiento para desarrollar el Oeste de América, donde St. Louis era la metropolis. De acuerdo al artículo del <a href="https://www.mexstl.org/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf" target="_blank" rel="noopener noreferrer">St. Louis Dispatch</a>, la nueva gerencia general iba a estar ubicada en el <a href="https://www.builtstlouis.net/opos/chamber.html" target="_blank" rel="noopener noreferrer">Banco Nacional de Comercio</a> de St. Louis, junto a North Broadway y Olive Street.'
    },
    center: [-90.1891, 38.6281], // North Broadway and Olive Street area
    zoom: 16,
    pitch: 50,
    bearing: 0,
    image: '/railway_headquarters.png'
  },
  {
    id: 'regeneracion',
    era: '1905',
    title: {
      en: 'Regeneración Newspaper',
      es: 'Periódico Regeneración'
    },
    description: {
      en: 'In 1905, <a href="https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html" target="_blank" rel="noopener noreferrer">Ricardo Flores Magón</a>, an exiled journalist, escaped the Porfiriato dictatorship and settled in St. Louis. Here, Magón published the revolutionary newspaper Regeneración, a leftist publication that inspired uprisings and the Mexican Revolution in 1910. From an apartment building that would later become the campus of St. Louis University, Magón founded the Mexican Liberal Party. The legacy of Ricardo Flores Magón highlights the transnational nature of the Mexican Revolution, where influential figures penetrated Mexican politics from the United States.',
      es: 'En 1905, <a href="https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html" target="_blank" rel="noopener noreferrer">Ricardo Flores Magón</a>, un periodista expulsado de México, escapó de la dictadura del Porfiriato y se estableció en St. Louis. Aquí, Magón publicaba el periódico revolucionario Regeneración, una publicación democrática que inspiró levantamientos y, finalmente, la Revolución Mexicana en 1910. Localizado en un departamento que después se convertiría en la Universidad de St. Louis, Magón fundó el Partido Liberal Mexicano. El legado de Ricardo Flores Magón atrae la atención de la naturaleza transnacional de la Revolución Mexicana, donde figuras influyentes impulsaron la política mexicana desde los Estados Unidos.'
    },
    center: [-90.2346, 38.6354], // Saint Louis University area
    zoom: 16,
    pitch: 50,
    bearing: 0,
    image: '/regeneracion.jpg',
    imageCaption: 'Learn more about this archival document',
    imageCaptionHref: 'https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html'
  }
];
