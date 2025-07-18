export default {
  global: {
    Name: 'Alojamiento, todo un universo por descubrir',
    Description:
      'Los fundamentos normativos, técnicos y operativos del proceso de Check-in en establecimientos de alojamiento turístico, abordan aspectos clave como la categorización hotelera por estrellas, los tipos de habitaciones y sus características según la categoría, la estructura organizacional del área de recepción, los perfiles del huésped, y el portafolio de servicios complementarios ofrecidos por los hoteles. Todo esto permite comprender los estándares que garantizan la calidad, seguridad y experiencia del cliente en el sector hotelero colombiano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Regulación y categorización de los establecimientos de alojamiento turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Categorización de los hoteles ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Portafolio de servicios en establecimientos de alojamiento',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de habitaciones y sus características',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Estandarización de habitaciones según categoría hotelera (NTSH-006)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<i>Amenities</i> para habitaciones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El huésped en el sector hotelero: definición y tipologías',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Recepción hotelera: centro operativo de atención y gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Estructura organizacional del área del <i>front office</i>',
            hash: 't_4_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/ejemplo.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El huésped en el sector hotelero: definición y tipologías',
      referencia:
        'CorporateMX. (2017). Clasificación de los huéspedes de hotel.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8SUt5UhQHxQ',
    },
    {
      tema: 'Recepción hotelera: centro operativo de atención y gestión',
      referencia:
        'FEHGRA. (2024). 3.1 – Recepción y Conserjería: Presentación.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-SOeT93GJJ8',
    },
  ],
  glosario: [
    {
      termino: 'Áreas comunes',
      significado:
        'Son los espacios compartidos por todos los huéspedes como pasillos, escaleras, entradas, patios, jardines, piscinas, canchas deportivas, salones de uso múltiples, estacionamientos, entre otros. ',
    },
    {
      termino: 'Banquetes',
      significado:
        'Comida a la que concurren muchas personas para celebrar algún acontecimiento.',
    },
    {
      termino: 'Barman',
      significado:
        'Persona encargada de atender a los clientes detrás de la barra y prestar los servicios propios de un bar.',
    },
    {
      termino: 'Barras',
      significado:
        'Mostradores de bar o zonas de servicio donde se sirven bebidas y, a veces comida.',
    },

    {
      termino: 'Categoría',
      significado:
        'Sistema de clasificación utilizado para indicar a los usuarios la calidad de un establecimiento alojativo. ',
    },
    {
      termino: 'Conserjería',
      significado:
        'Departamento ubicado en la recepción o próximo a ésta, desde el que se coordinan y proveen los servicios de atención al cliente. ',
    },
    {
      termino: '<i>Coworking</i>',
      significado:
        'Áreas de trabajo, salas de reuniones, zonas de descanso y conexión a internet diseñados para facilitar el trabajo y la colaboración. ',
    },
    {
      termino: '<i>Check-in</i>',
      significado: 'Registro de entrada.',
    },
    {
      termino: '<i>Check-out</i>',
      significado: 'Registro de salida.',
    },
    {
      termino: 'Expectativa',
      significado:
        'Es lo que un turista anticipadamente espera que ocurra durante su viaje. ',
    },
    {
      termino: '<i>Jacuzzi</i>',
      significado: 'Bañera de hidromasaje.',
    },
    {
      termino: '<i>Maître</i>',
      significado:
        'Jefe de comedor y máximo responsable de planificar, organizar, gestionar y controlar el servicio de comedor en hoteles y restaurantes. ',
    },
    {
      termino: 'Mozo',
      significado:
        'Mozo/camarero de salón que atiende en el comedor o restaurante, tomando pedidos y sirviendo alimentos y bebidas. ',
    },
    {
      termino: '<i>Room service</i>',
      significado:
        'Servicio de alimentos y bebidas que se presta en una habitación. ',
    },
    {
      termino: '<i>Souvenir</i>',
      significado:
        'Objeto que sirve como recuerdo de la visita a algún lugar determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2009). Clasificación de establecimientos de alojamiento y hospedaje. Categorización por estrellas de hoteles. Requisitos. https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-006-i-actu/norma-tecnica-sectorial-colombiana-ntsh-006-i.pdf.aspx',
      link: '',
    },
    {
      referencia:
        'Cuboshomes. (2022). ¿Qué son los amenities y por qué son importantes? - Blog Cubos Holiday Homes. Blog Cubo’s Holiday Homes. https://www.cuboshomes.com/blog/que-son-los-amenities-y-por-que-son-importantes/',
      link: '',
    },
    {
      referencia:
        'Moshé, K., & Lastor, C. (2024). Diseño de sistema de señalética para indicar a los huéspedes reales y potenciales, las diferentes áreas internas y externas del Hotel California Pacific Palm. Escuintla, Guatemala, 2023 (Doctoral dissertation). ',
      link: '',
    },
    {
      referencia:
        'Martín, F. J. S. (2014). La actuación lexicográfica en el “Diccionario de la Lengua Española”(DRAE): Estudio de las novedades para la 23ª edición. Anuari de Filologia. Estudis de Lingüística, (4), 43-69. ',
      link: '',
    },
    {
      referencia:
        'Cloudbeds. (2024). 10 tipos de huéspedes de hotel: ejemplos y perfiles de clientes. Cloudbeds. https://www.cloudbeds.com/es/articulos/tipos-huespedes-hotel/ ',
      link: '',
    },
    {
      referencia:
        'Chan, Z. (2016). Estructura organizacional de recepción. www.academia.edu. https://www.academia.edu/28413740/Estructura_organizacional_de_recepci%C3%B3n ',
      link: '',
    },
    {
      referencia:
        'Educaweb. (s. f.). Recepcionista de hotel. Educaweb. https://www.educaweb.com/profesion/recepcionista-hotel-130/',
      link: '',
    },
    {
      referencia:
        'Farré, R. R. (2017). Gestión de reservas y procedimientos de recepción. Editorial Síntesis. ',
      link: '',
    },
    {
      referencia:
        'Calle, M., Lazo, A., & Granados, M. (2018). Gestión del sector alojamiento-Hotel. Machala: UTMACH. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Aurora Milena Parada Ortega',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico – Regional Santander ',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
