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
        src: '/story-map/santa-fe/conestoga_wagon.jpg',
        citation: 1,
        caption: {
          en: 'The Conestoga wagon was popular on the Santa Fe Trail because its curved design kept cargo centered on rough terrain.',
          es: 'La carreta Conestoga era popular en el Camino de Santa Fe porque su diseño curvado mantenía la carga centrada en terrenos accidentados.'
        },
        credit: 'National Park Service'
      },
      {
        src: '/story-map/santa-fe/francisca_lopez.webp',
        citation: 2,
        caption: {
          en: 'Francisca López, who journeyed from New Mexico to St. Louis via the Santa Fe Trail in 1850.',
          es: 'Francisca López, quien viajó de Nuevo México a St. Louis por el Camino de Santa Fe en 1850.'
        },
        credit: 'National Park Service'
      },
      {
        src: '/story-map/santa-fe/felipe_chavez.jpg',
        citation: 3,
        caption: {
          en: 'Don Felipe Chávez, an elite New Mexican scholar, was a highly successful trader along the Santa Fe Trail known as <i>el millonario</i>.',
          es: 'Don Felipe Chávez, un erudito de la élite nuevomexicana, fue un comerciante muy exitoso a lo largo del Camino de Santa Fe, conocido como <i>el millonario</i>.'
        },
        credit: 'Santa Fe National Historic Trail: Special History Study'
      },
      {
        src: '/story-map/santa-fe/santa_fe_trail_map.png',
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
    era: '1883',
    title: {
      en: 'Missouri Pacific Railroad Company',
      es: 'Compañía Ferroviaria Missouri Pacific'
    },
    description: {
      en: 'The Missouri Pacific Railroad Company was instrumental in physically connecting St. Louis to Mexico. During the late 19th century, Mexican President Porfirio Díaz <a href="https://www.houstonculture.org/hispanic/roads.html" target="_blank" rel="noopener noreferrer">championed the expansion of the Mexican National and Mexican Central Railroads</a>, seeking to stimulate the economy by improving access to U.S. markets and lowering transportation costs. <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">In 1883, the Mexican Central Railway Line was connected to U.S. railways</a>; in 1888, the Mexican National Railway Line was extended into the United States. Together, the Missouri Pacific and Mexican Central Railways formed <a href="https://www.mexstl.org/looking-towards-mexico" target="_blank" rel="noopener noreferrer">a direct link from Mexico City to St. Louis via El Paso, Texas</a>. Celebrating this expanding binational infrastructure, the <a href="https://www.mexstl.org/looking-towards-mexico" target="_blank" rel="noopener noreferrer"><i>St. Louis Globe-Democrat</i></a> noted that the new routes made St. Louis a highly competitive trading partner with the "sister republic."',
      es: 'La Compañía Ferroviaria del Pacífico de Missouri fue instrumental en la conexión física entre St. Louis y México. A finales del siglo XIX, el presidente mexicano Porfirio Díaz <a href="https://www.houstonculture.org/hispanic/roads.html" target="_blank" rel="noopener noreferrer">promovió la expansión de los Ferrocarriles Nacionales y Centrales de México</a>, con la meta de estimular la economía mexicana a través del acceso a los mercados estadounidenses con costos de transportación reducidos. <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">En 1883, el Ferrocarril Central Mexicano fue conectado a los ferrocarriles de los EE.UU</a>; en 1888, los Ferrocarriles Nacionales de México fueron extendidos a los Estados Unidos. Juntos, el Missouri Pacific y los Ferrocarriles Centrales Mexicanos formaron <a href="https://www.mexstl.org/looking-towards-mexico" target="_blank" rel="noopener noreferrer">un enlace directo desde la Ciudad de México a St. Louis a través de El Paso, Texas</a>. Celebrando esta infraestructura binacional expandida, el <a href="https://www.mexstl.org/looking-towards-mexico" target="_blank" rel="noopener noreferrer"><i>St. Louis Globe-Democrat</i></a> señaló que las nuevas vías convirtieron a St. Louis en un socio comercial altamente competitivo con la "república hermana."'
    },
    center: [-90.1907, 38.6274], // 611 Olive Street, downtown St. Louis
    zoom: 16,
    pitch: 50,
    bearing: 0,
    images: [
      {
        src: '/story-map/missouri_pacific_railroad_company/missouri_pacific_railway.jpg',
        citation: 1,
        caption: {
          en: 'Missouri Pacific Railway lines (c. 1891), showing connections to El Paso and Mexican rail networks.',
          es: 'Líneas del Ferrocarril Missouri Pacific (c. 1891), mostrando las conexiones con El Paso y las redes ferroviarias mexicanas.'
        },
        credit: 'Wikipedia'
      },
      {
        src: '/story-map/missouri_pacific_railroad_company/mexican_central_railway.jpg',
        citation: 2,
        caption: {
          en: 'Mexican Central Railway lines (c. 1898), showing connections to El Paso and U.S. rail networks.',
          es: 'Líneas del Ferrocarril Central Mexicano (c. 1898), mostrando las conexiones con El Paso y las redes ferroviarias de los EE.UU.'
        },
        credit: 'Internet Archive'
      }
    ],
    sources: {
      en: [
        {
          text: 'Missouri Pacific Railroad - Wikipedia. https://en.wikipedia.org/wiki/Missouri_Pacific_Railroad.',
          url: 'https://en.wikipedia.org/wiki/Missouri_Pacific_Railroad'
        },
        {
          text: '<i>Map Of The Mexican Central Railway And Connections. May, 1898.</i> Photograph. <i>Internet Archive</i>. Chicago: Poole Brothers, 1898. https://archive.org/details/dr_map-of-the-mexican-central-railway-and-connections-may-1898-0738003.',
          url: 'https://archive.org/details/dr_map-of-the-mexican-central-railway-and-connections-may-1898-0738003'
        },
        {
          text: 'Morales, Donna S, and John P Schmal. “How We Got Here: The Roads We Took to America.” The Hispanic Experience: Cultural Heritage. https://www.houstonculture.org/hispanic/roads.html.',
          url: 'https://www.houstonculture.org/hispanic/roads.html'
        },
        {
          text: 'Gonzales, Daniel. “Mexican Immigration and the Saint Louis Region, 1900–1935.” <i>Diálogo</i> 21, no. 1 (2018): 19. https://doi.org/10.1353/dlg.2018.0003.',
          // Matches the in-text link, which points to the full text on Project MUSE
          url: 'https://muse.jhu.edu/pub/15/article/690128/pdf'
        },
        {
          text: '“Looking Towards Mexico.” <i>St. Louis Globe-Democrat</i>. January 23, 1883. https://www.mexstl.org/looking-towards-mexico.',
          url: 'https://www.mexstl.org/looking-towards-mexico'
        }
      ],
      es: [
        {
          text: 'Missouri Pacific Railroad - Wikipedia. https://en.wikipedia.org/wiki/Missouri_Pacific_Railroad.',
          url: 'https://en.wikipedia.org/wiki/Missouri_Pacific_Railroad'
        },
        {
          text: '<i>Map Of The Mexican Central Railway And Connections. May, 1898.</i> Photograph. <i>Internet Archive</i>. Chicago: Poole Brothers, 1898. https://archive.org/details/dr_map-of-the-mexican-central-railway-and-connections-may-1898-0738003.',
          url: 'https://archive.org/details/dr_map-of-the-mexican-central-railway-and-connections-may-1898-0738003'
        },
        {
          text: 'Morales, Donna S, and John P Schmal. “How We Got Here: The Roads We Took to America.” The Hispanic Experience: Cultural Heritage. https://www.houstonculture.org/hispanic/roads.html.',
          url: 'https://www.houstonculture.org/hispanic/roads.html'
        },
        {
          text: 'Gonzales, Daniel. “Mexican Immigration and the Saint Louis Region, 1900–1935.” <i>Diálogo</i> 21, no. 1 (2018): 19. https://doi.org/10.1353/dlg.2018.0003.',
          url: 'https://muse.jhu.edu/pub/15/article/690128/pdf'
        },
        {
          text: '“Looking Towards Mexico.” <i>St. Louis Globe-Democrat</i>. January 23, 1883. https://www.mexstl.org/looking-towards-mexico.',
          url: 'https://www.mexstl.org/looking-towards-mexico'
        }
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
      en: 'In 1883, the <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">Mexican and Spanish-American Mercantile Exchange</a> organization was founded in St. Louis. This organization hosted visits of prominent Mexican businessmen, encouraged the study of Spanish in St. Louis, and distributed pamphlets in Mexico promoting relations with the Midwest. This company was established by John F. Cahill, a mercantile drug business owner who had previously worked in Mexico and Cuba. Efforts such as this solidified growing relations between St. Louis and Mexico, and facilitated the beginnings of Mexican immigration to St. Louis. By the end of the nineteenth century, exports from St. Louis to Mexico amounted to <a href="https://www.mexstl.org/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf" target="_blank" rel="noopener noreferrer">$7.5 million a year — about $250 million in today’s economy</a>.',
      es: 'En 1883, la organización del <a href="https://muse.jhu.edu/pub/15/article/690128/pdf" target="_blank" rel="noopener noreferrer">Intercambio Mercantil de México e Hispanoamérica</a> fue fundada en St. Louis. Esta organización auspiciaba visitas de empresarios mexicanos destacados, motivaba el aprendizaje del idioma del español en St. Louis, y distribuía folletos en México promoviendo relaciones con el Medio Oeste. La compañía fue establecida por John F. Cahill, un propietario de un negocio de medicamentos que previamente trabajaba en México y Cuba. Esfuerzos como estos fortalecieron el crecimiento de relaciones entre St. Louis y México, al igual que facilitaron los inicios de la inmigración mexicana a St. Louis. A finales del siglo 19, las exportaciones de St. Louis a México ascendieron a <a href="https://www.mexstl.org/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf" target="_blank" rel="noopener noreferrer">$7.5 millones al año — unos 250 millones en la economía actual</a>.'
    },
    center: [-90.1924, 38.6287], // 8th and Olive Street, downtown St. Louis
    zoom: 16,
    pitch: 50,
    bearing: 0,
    // TODO: both images point at the existing placeholder for now — swap in the
    // Mercantile Exchange building and John F. Cahill portrait once available
    images: [
      {
        src: '/Mexican_mercantile_exchange.png',
        citation: 1,
        caption: {
          en: 'The Mexican and Spanish American Mercantile Exchange building was three stories tall and housed the organization’s headquarters as well as a Spanish printing office.',
          es: 'El edificio del Intercambio Mercantil de México e Hispanoamérica tenía tres pisos y albergaba la sede de la organización, así como una imprenta en español.'
        },
        credit: 'Diálogo'
      },
      {
        src: '/Mexican_mercantile_exchange.png',
        citation: 2,
        caption: {
          en: 'John F. Cahill, the founder of the Mexican and Spanish American Mercantile Exchange.',
          es: 'John F. Cahill, el fundador del Intercambio Mercantil de México e Hispanoamérica.'
        },
        credit: 'Missouri Historical Society'
      }
    ],
    sources: {
      en: [
        {
          text: 'Gonzales, Daniel. “Mexican Immigration and the Saint Louis Region, 1900–1935.” <i>Diálogo</i> 21, no. 1 (2018): 30. https://doi.org/10.1353/dlg.2018.0003.',
          url: 'https://muse.jhu.edu/pub/15/article/690128/pdf'
        },
        {
          text: '<i>John F. Cahill</i>. Photograph. 1891. Missouri Historical Society, St. Louis. http://collections.mohistory.org/resource/804628.',
          url: 'http://collections.mohistory.org/resource/804628'
        },
        {
          // Same work as footnote 1 (Gonzales), different page; the in-text link
          // resolves here, the image caption resolves to footnote 1
          text: 'Gonzales, Daniel. “Mexican Immigration and the Saint Louis Region, 1900–1935.” <i>Diálogo</i> 21, no. 1 (2018): 32. https://doi.org/10.1353/dlg.2018.0003.',
          url: 'https://muse.jhu.edu/pub/15/article/690128/pdf'
        },
        {
          text: '“Mexican Trade.” <i>St. Louis Post-Dispatch</i>. February 20, 1895. https://www.mexstl.org/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf.',
          url: 'https://www.mexstl.org/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf'
        }
      ],
      es: [
        {
          text: 'Gonzales, Daniel. “Mexican Immigration and the Saint Louis Region, 1900–1935.” <i>Diálogo</i> 21, no. 1 (2018): 30. https://doi.org/10.1353/dlg.2018.0003.',
          url: 'https://muse.jhu.edu/pub/15/article/690128/pdf'
        },
        {
          text: '<i>John F. Cahill</i>. Photograph. 1891. Missouri Historical Society, St. Louis. http://collections.mohistory.org/resource/804628.',
          url: 'http://collections.mohistory.org/resource/804628'
        },
        {
          text: 'Gonzales, Daniel. “Mexican Immigration and the Saint Louis Region, 1900–1935.” <i>Diálogo</i> 21, no. 1 (2018): 32. https://doi.org/10.1353/dlg.2018.0003.',
          url: 'https://muse.jhu.edu/pub/15/article/690128/pdf'
        },
        {
          text: '“Mexican Trade.” <i>St. Louis Post-Dispatch</i>. February 20, 1895. https://www.mexstl.org/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf.',
          url: 'https://www.mexstl.org/St_Louis_Post_Dispatch_1895_02_20_Page_4_copy.pdf'
        }
      ]
    }
  },
  {
    id: 'armijo-home',
    era: '1890',
    title: {
      en: 'Home of Juan C. Armijo',
      es: 'Casa de Juan C. Armijo'
    },
    description: {
      en: 'By the late nineteenth century, many prominent Mexican families had settled and established their lives in St. Louis. Among them was Juan C. Armijo, the son of the wealthiest man in Mexico at the time, <a href="https://nyti.ms/4eRupxh" target="_blank" rel="noopener noreferrer">Nicholas F. Armijo</a>. Juan Armijo attended <a href="https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187&ci=54%2C524%2C918%2C771&source=bookclip#v=onepage&q=armijo&f=false" target="_blank" rel="noopener noreferrer">Washington University</a> and <a href="https://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30" target="_blank" rel="noopener noreferrer">Saint Louis University</a> in the late 19th century. After completing his studies, he returned home before setting out again for St. Louis and, in 1890, <a href="https://nyti.ms/4eRupxh" target="_blank" rel="noopener noreferrer">was rumored to be engaged with a woman in the city</a>. Juan Armijo is a reflection of the mobility within the elite Mexican class, who could afford to base their lives in two geographical locations, with a growing circle in St. Louis.',
      es: 'A finales del siglo 19, numerosas familias mexicanas destacadas establecieron sus vidas en St. Louis. Entre ellos estaba Juan C. Armijo, el hijo del hombre más rico de México en ese tiempo, <a href="https://nyti.ms/4eRupxh" target="_blank" rel="noopener noreferrer">Nicholas F. Armijo</a>. Juan Armijo asistió a la <a href="https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187&ci=54%2C524%2C918%2C771&source=bookclip#v=onepage&q=armijo&f=false" target="_blank" rel="noopener noreferrer">Universidad de Washington</a> y a la <a href="https://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30" target="_blank" rel="noopener noreferrer">Universidad de St. Louis</a> a finales del siglo 19. Después de completar sus estudios, regresó a casa antes de partir de nuevo hacia St. Louis, y en 1890, <a href="https://nyti.ms/4eRupxh" target="_blank" rel="noopener noreferrer">había rumor de que estaba comprometido con una mujer en la ciudad</a>. Juan Armijo es un reflejo de la movilidad dentro de la clase alta de México, los cuales podían establecer sus vidas en dos lugares a la vez, con un círculo creciente en St Louis.'
    },
    center: [-90.2160, 38.6339], // 2635 Lucas Avenue (approx)
    zoom: 16,
    pitch: 50,
    bearing: 0,
    sources: {
      en: [
        {
          text: '“A Wealthy Young Mexican.” <i>The New York Times</i>. December 22, 1890. https://nyti.ms/4eRupxh.',
          url: 'https://nyti.ms/4eRupxh'
        },
        {
          text: '<i>A Catalogue of the Officers and Students of Washington University, for the Academic Year 1881-82.</i> St. Louis, Missouri: Washington University in St. Louis, 1882, 112. https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187&ci=54%2C524%2C918%2C771&source=bookclip#v=onepage&q=armijo&f=false.',
          url: 'https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187&ci=54%2C524%2C918%2C771&source=bookclip#v=onepage&q=armijo&f=false'
        },
        {
          text: '<i>Catalogue of the St. Louis University, 1880-81.</i> Saint Louis University Libraries Special Collections. Vol. 5. St. Louis, Missouri: St. Louis University, 1881, 26. https://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30.',
          url: 'https://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30'
        }
      ],
      es: [
        {
          text: '“A Wealthy Young Mexican.” <i>The New York Times</i>. December 22, 1890. https://nyti.ms/4eRupxh.',
          url: 'https://nyti.ms/4eRupxh'
        },
        {
          text: '<i>A Catalogue of the Officers and Students of Washington University, for the Academic Year 1881-82.</i> St. Louis, Missouri: Washington University in St. Louis, 1882, 112. https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187&ci=54%2C524%2C918%2C771&source=bookclip#v=onepage&q=armijo&f=false.',
          url: 'https://books.google.com/books?id=D7M4AAAAMAAJ&pg=RA1-PA187&ci=54%2C524%2C918%2C771&source=bookclip#v=onepage&q=armijo&f=false'
        },
        {
          text: '<i>Catalogue of the St. Louis University, 1880-81.</i> Saint Louis University Libraries Special Collections. Vol. 5. St. Louis, Missouri: St. Louis University, 1881, 26. https://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30.',
          url: 'https://digitalcollections.slu.edu/digital/collection/catalogs/id/1856/rec/30'
        }
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
      en: 'In 1902, the Mexican Central Railway (<i>Ferrocarril Central Mexicano</i>) headquarters in the United States was moved from Boston to St. Louis. Henry Clay Pierce, president of the Waters-Pierce Oil Company, spearheaded the move in an effort to develop the American west, where St. Louis was a leading metropolis. According to this <a href="https://www.mexstl.org/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf" target="_blank" rel="noopener noreferrer"><i>St. Louis Post-Dispatch</i></a> article, the new headquarters were to be located in St. Louis\' <a href="https://www.builtstlouis.net/opos/chamber.html" target="_blank" rel="noopener noreferrer">National Bank of Commerce</a> building downtown, off North Broadway and Olive Street.',
      es: 'En 1902, la gerencia general del Ferrocarril Central Mexicano en los Estados Unidos fue trasladada de Boston a St. Louis. Henry Clay Pierce, presidente de la compañía petrolera Waters-Pierce, lideró el movimiento para desarrollar el Oeste de América, donde St. Louis era la metropolis. De acuerdo al artículo del <a href="https://www.mexstl.org/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf" target="_blank" rel="noopener noreferrer"><i>St. Louis Post-Dispatch</i></a>, la nueva gerencia general iba a estar ubicada en el <a href="https://www.builtstlouis.net/opos/chamber.html" target="_blank" rel="noopener noreferrer">Banco Nacional de Comercio</a> de St. Louis, junto a North Broadway y Olive Street.'
    },
    center: [-90.1891, 38.6281], // North Broadway and Olive Street area
    zoom: 16,
    pitch: 50,
    bearing: 0,
    image: '/railway_headquarters.png',
    sources: {
      en: [
        {
          text: '“Mexican Central a St. Louis Road: H. Cay Pierce is Now its Moving Spirit.” <i>St. Louis Post-Dispatch</i>. May 8, 1902. https://www.mexstl.org/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf.',
          url: 'https://www.mexstl.org/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf'
        },
        {
          text: '“Chamber of Commerce Building.” Built St. Louis. https://www.builtstlouis.net/opos/chamber.html.',
          url: 'https://www.builtstlouis.net/opos/chamber.html'
        }
      ],
      es: [
        {
          text: '“Mexican Central a St. Louis Road: H. Cay Pierce is Now its Moving Spirit.” <i>St. Louis Post-Dispatch</i>. May 8, 1902. https://www.mexstl.org/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf.',
          url: 'https://www.mexstl.org/MEXICAN_CENTRAL_A_ST._LOUIS_RO.pdf'
        },
        {
          text: '“Chamber of Commerce Building.” Built St. Louis. https://www.builtstlouis.net/opos/chamber.html.',
          url: 'https://www.builtstlouis.net/opos/chamber.html'
        }
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
      en: 'In 1905, <a href="https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html" target="_blank" rel="noopener noreferrer">Ricardo Flores Magón</a>, an exiled journalist, escaped the Porfiriato dictatorship and settled in St. Louis. Here, Magón published the revolutionary newspaper <i>Regeneración</i>, a leftist publication that inspired uprisings and the Mexican Revolution in 1910. From an apartment building that would later become the campus of St. Louis University, Magón founded the Mexican Liberal Party. The legacy of Ricardo Flores Magón highlights the transnational nature of the Mexican Revolution, where influential figures penetrated Mexican politics from the United States.',
      es: 'En 1905, <a href="https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html" target="_blank" rel="noopener noreferrer">Ricardo Flores Magón</a>, un periodista expulsado de México, escapó de la dictadura del Porfiriato y se estableció en St. Louis. Aquí, Magón publicaba el periódico revolucionario <i>Regeneración</i>, una publicación democrática que inspiró levantamientos y, finalmente, la Revolución Mexicana en 1910. Localizado en un departamento que después se convertiría en la Universidad de St. Louis, Magón fundó el Partido Liberal Mexicano. El legado de Ricardo Flores Magón atrae la atención de la naturaleza transnacional de la Revolución Mexicana, donde figuras influyentes impulsaron la política mexicana desde los Estados Unidos.'
    },
    center: [-90.2346, 38.6354], // 107 N Channing Avenue (now SLU athletic complex)
    zoom: 16,
    pitch: 50,
    bearing: 0,
    image: '/regeneracion.jpg',
    imageCaption: 'Learn more about this archival document',
    imageCaptionHref: 'https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html',
    sources: {
      en: [
        {
          // PDF gave only a bare URL as the archival element; title/publisher
          // constructed from the article — verify
          text: '“How a Mexican Journalist Sparked a Revolution from St. Louis.” <i>St. Louis Post-Dispatch</i>. https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html.',
          url: 'https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html'
        }
      ],
      es: [
        {
          text: '“How a Mexican Journalist Sparked a Revolution from St. Louis.” <i>St. Louis Post-Dispatch</i>. https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html.',
          url: 'https://www.stltoday.com/lifestyles/how-a-mexican-journalist-sparked-a-revolution-from-st-louis/article_258177d2-3a52-5fd0-a9d3-f0127d93b38b.html'
        }
      ]
    }
  }
];
