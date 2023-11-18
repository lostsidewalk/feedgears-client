const es = {
  // generic
  somethingHorribleHappened:
    "¡Algo horrible ocurrió y no estamos seguros de qué! Por favor, inténtalo de nuevo en unos momentos.",
  requestTimedOut:
    "Tiempo de espera de la solicitud agotado. Por favor, inténtalo de nuevo en unos momentos.",
  privacyPolicy: "Política de privacidad",
  cancel: "Cancelar",
  // landing
  feedgears: "FeedGears is a news and information site about RSS and related technologies, mainly focused on tracking the development of two free/open-source projects I built: Newsgears and ComposableRSS. Both Newsgears and ComposableRSS are full-stack applications that are intended to be easy to deploy to your own environment to facilitate upstream feed access (Newsgears) and publishing (ComposableRSS) capabilities for your organization/multiple users.",
  feedgears_detail1: "This site also tracks development of RSS-related projects on Github, and information from other pertinent sources.",
  feedgears_detail2: "If you're feeling generous, please consider supporting this effort on Patreon. Better yet, make a feature request, bug report, or fork one of the many repos below and make a code contribution.",
  newsgearsLogo: "Newsgears",
  newsgearsOnGithub: "Newsgears on Github",
  composableRssOnGithub: "ComposableRSS on Github",
  supportUsOnPatreon: "Support us on Patreon",
  whatIsNewsgears: "Un agregador RSS moderno y autohospedado.",
  whatIsNewsgearsDetails:
    "Newsgears is a multi-user, self-hosted RSS reader/aggregator platform. This project exists to provide a free, open-source, turn-key method of facilitating access to RSS feeds for your users. Newsgears offers a performant back-end aggregator, security concious middleware, as well as a modern, accessible web-based reader.",
  whyIsNewsgearsFree: "Gratis para siempre porque amamos RSS.",
  devBlog: "Blog de desarrollo",
  email: "Correo electrónico",
  twitter: "Twitter",
  github: "Github",
  twitch: "Twitch",
  discord: "Discord",
  copyright: "DERECHOS DE AUTOR",
  contactUsWithQuestionsViaEmail:
    "Contacta a Lost Sidewalk Software con preguntas por correo electrónico.",
  //
  //
  //
  whatIsComposableRss: "A self-hosted, API-driven feed server",
  whatIsComposableRssDetails:
    "ComposableRSS is a multiuser platform for creating, publishing, and fully managing all aspects of the syndicated web feed lifecycle. It provides a robust solution for managing web feeds and content distribution using a developer-friendly REST API. ComposableRSS is built upon the GPLV3 Newsgears libraries, implemented entirely in Java, and is freely available on Github.",
  youCanDeployTheEntireStack:
    "You can deploy the entire stack to your environment with minimal configuration using Docker by following the instructions located on Github.",
  //
  createAndServeFeeds: "Create and Serve Feeds",
  createAndServeFeeds_detail1:
    "ComposableRSS allows your users to create and publish RSS, ATOM, and JSON web feeds. This flexibility ensures compatibility with a wide range of feed readers and content consumers. You can define feed categories, tags, and metadata to organize and enhance the discoverability of your content.",
  createAndServeFeeds_detail2:
    "Once ComposableRSS is deployed to your environment, creating and publishing your first feed is as simple as a single API call.",
  theBasics:
    "Basics: ComposableRSS is based on queues, which are collections of articles (called posts). Zero or more of the posts in a queue are published at any given moment. The articles that are published comprise the items in the feeds. Articles can be published or depublished at any time for various reasons, and the corresponding feeds are updated in real-time.",
  theBasics_detail1:
    "ComposableRSS API gives you API access to configure every aspect of the feed and item payload, by managing the corresponding queue and post entities. ComposableRSS can publish feeds in various formats, including RSS, and ATOM, and JSON by default, but you can add/remove publishers by managing the build dependencies to suit your specific needs.",
  theBasics_detail2:
    "The next several screens demonstrate how to use ComposableRSS to publish feeds, add content, and implement authentication.",
  createAndServeFeeds_apiCall:
    "1. Start by making a POST call to the internal API server (e.g., api.yourdomain.com): ",
  createAndServeFeeds_payload:
    "2. Now your feed is available in multiple formats on the hosted feed server (e.g., feed.yourdomain.com):",
  createAndServeFeeds_followOnCalls:
    "You can now make additional API calls to customize your feed, add content, confgure the server, schedule deployments, and so on.",
  createAndServeFeeds_next: "Next: Add content to your feed.",
  //
  organizeAndPublishContent: "Organize and Publish Content",
  organizeAndPublishContent_detail1:
    "With ComposableRSS, you can add and update content within your feeds by invoking targeted methods on the API. Whether you're publishing articles, blog posts, or multimedia content, managing your feed's content is straightforward behind a developer-friendly interface.",
  organizeAndPublishContent_detail2:
    "Schedule content updates, set publication dates, and edit existing entries to keep your audience engaged with fresh, relevant content.",
  organizeAndPublishContent_apiCall1:
    "1. Once you've created a queue (by completing the previous step), you can add content by making a POST call to the internal API server (e.g., api.yourdomain.com):",
  organizeAndPublishContent_apiCall2:
    "2. Now your post is available your feeds:",
  organizeAndPublishContent_apiCall3:
    "3. Next: Secure your feed and add user credentials.",
  //
  manageFeedAuth: "Manage Feed Authentication",
  manageFeedAuth_detail1:
    "ComposableRSS supports HTTP BASIC user authentication and credential management for all feeds.",
  manageFeedAuth_detail2:
    "To access authenticated feeds, the requestor must provide a valid username and password using HTTP BASIC authentication.",
  manageFeedAuth_apiCall1:
    "1. Enable authentication by making a PUT call to the API server (e.g., api.yourdomain.com) to update the 'auth' property of your queue:",
  manageFeedAuth_apiCall2:
    "2. Now, use the 'credentials' endpoint to manage individual users. Use a POST call to create new credentials:",
  manageFeedAuth_apiCall3:
    "3. To fetch the feed URLs, you need to provide a username and password, as shown:",
  //
  customizeContent: "Customize Content Expiration, Archival, and Purging",
  customizeContent_detail1:
    "ComposableRSS allows you to set custom rules for content expiration, archival, and purging. This helps you maintain a clean and efficient feed while ensuring that important content is preserved. Configure auto-archiving policies, content retention periods, and data purging schedules to align with your content strategy.",
  publishITunes: "Publish iTunes Podcasts",
  publishITunes_detail1:
    "If you're podcasting, ComposableRSS provides support for publishing iTunes podcasts and managing media enclosures. Utilize rich metadata support, episode management, and enclosure attachments to create an engaging podcasting experience for your audience.",
  publishMediaRss: "Publish MediaRSS Groups and Content",
  publishMediaRss_detail1:
    "ComposableRSS offers full support for MediaRSS groups and content, making it easy to manage and distribute multimedia content such as images, videos, and audio files within your feeds. Enhance your content distribution strategy by incorporating rich media assets, galleries, and multimedia enclosures to captivate your audience.",
  supportOrganizationalNeeds:
    "Multi-user, Social Authentication and Easy Scaling",
  supportOrganizationalNeeds_detail1:
    "ComposableRSS is a multiuser platform that aims to be both secure and compliant with modern authentication standards. Additionally, its container composition architecture enables easy scaling and customization to meet your organizational requirements.",
  supportOrganizationalNeeds_detail2:
    "Deploy ComposableRSS in containerized environments, leverage OAuth2 providers for centralized authentication, and scale horizontally to accommodate growing user demands while maintaining system reliability.",
  freeSoftware: "ComposableRSS is Free",
  freeSoftware_detail1:
    "ComposableRSS is fully free, open-source, community-supported, and protected by the GPLV3.",
  openApiV3: "OpenAPIv3",
  openApiV3_detail1:
    "OpenAPIv3 is a standardized specification for documenting RESTful APIs. This OpenAPIv3 document is your guide to using the ComposableRSS API. Click the link to access detailed information on API endpoints, parameters, request/response formats, and examples for integration with ComposableRSS.",
  aboutComposableRss: "About ComposableRSS",
  // demo
  filterScreenshot: "Captura de pantalla del filtro de cola",
  listLayoutsScreenshot: "Captura de pantalla de diseño de lista",
  cardLayoutsScreenshot: "Captura de pantalla del diseño de la tarjeta",
  tableLayoutsScreenshot: "Captura de pantalla del diseño de la tabla",
  opmlUploadScreenshot: "Captura de pantalla de carga OPML",
  comingSoon: "¡Próximamente!",
  // demo (api access)
  apiAccess: "Acceso a la API",
  // demo (enhanced filtering)
  enhancedFiltering: "Filtrado y búsqueda mejorados utilizando LunrJS",
  enhancedFiltering_detail1:
    "Aplica filtros y busca dentro de una cola de artículos para enfocar tus opciones de lectura según tus preferencias o temas específicos de interés.",
  enhancedFiltering_detail2:
    "Localiza fácilmente artículos utilizando diversos puntos de datos, ahorrando tiempo y agilizando tu experiencia de lectura. Las capacidades de búsqueda de Newsgears están respaldadas por LunrJS.",
  syntax: "Syntax",
  explanation: "Explanation",
  searchForArticlesWithWord:
    "Search for articles containing a word in the title",
  searchForArticlesPublishedBy:
    "Search for articles published by a specific author",
  searchForArticlesPublishedBetween:
    "Search for articles published between two dates",
  searchForArticlesWithWords:
    "Search for articles contain words in multiple fields",
  searchForArticlesInASpecificFeedAndCategory:
    "Search for articles with a specific category",
  // demo (feed dashboard)
  feedDashboard: "Panel de Control de Feeds",
  feedDashboard_detail1:
    "El panel de control de feeds muestra información resumida sobre cada cola de artículos. Cada tarjeta del panel es configurable; puedes agregar y quitar detalles y botones de acción según tus necesidades.",
  feedDashboard_detail2:
    "Newsgears muestra la cantidad de elementos no leídos y el artículo publicado o actualizado más recientemente en todas las suscripciones en una cola. La tarjeta del panel también brinda acceso rápido para administrar suscripciones y obtener detalles de un vistazo sobre cada feed en una cola:",
  dashboardCardScreenshot:
    "Captura de pantalla de la tarjeta del panel de la cola",
  queueSettingsScreenshot: "Captura de pantalla de la configuración de la cola",
  // demo (layout options)
  layoutOptions: "Diseños y Temas",
  layoutOptions_detail1:
    "Elige entre tres diseños de lectura: vistas en forma de tabla, lista o tarjetas. La vista en lista ofrece una presentación simplificada que te permite desplazarte por los artículos. La vista de tarjetas muestra imágenes destacadas y fragmentos para una experiencia de lectura más atractiva. La vista en forma de tabla proporciona un formato estructurado, útil para obtener una visión general rápida de los titulares.",
  layoutOptions_detail2:
    "Hay disponibles temas claros y oscuros para reducir la tensión ocular en entornos con poca luz.",
  // demo (misc)
  aboutNewsgears: "Acerca de Newsgears",
  accessible: "Accesible",
  accessible_detail1:
    "La accesibilidad es una prioridad principal. Nos comprometemos a garantizar una experiencia inclusiva para todos los usuarios de Newsgears. Para lograr esto, utilizamos vue-announcer, una herramienta que hace que los mensajes importantes sean accesibles para lectores de pantalla y otras tecnologías de asistencia. Al aprovechar vue-announcer, aseguramos que todos puedan acceder a la información que necesitan de manera fluida.",
  accessible_detail2:
    "Además, nos esforzamos por cumplir con las pautas de accesibilidad de contenido web (WCAG). WCAG proporciona un conjunto de pautas para hacer que el contenido digital sea más accesible para personas con discapacidades. Al adherirnos a estas pautas, aseguramos que Newsgears esté diseñado y desarrollado teniendo en cuenta la accesibilidad, brindando una experiencia óptima para todos los usuarios.",
  mobileOptimized: "Optimizado para Dispositivos Móviles",
  mobileOptimized_detail1:
    "Newsgears tiene una interfaz optimizada y receptiva para dispositivos móviles, diseñada pensando en la practicidad. Nuestra interfaz de usuario garantiza una experiencia fluida y consistente en diferentes dispositivos, incluidos teléfonos inteligentes y tabletas.",
  mobileOptimized_detail2:
    "Los principios de diseño receptivo de Vuetify permiten que nuestra interfaz se adapte sin problemas a diferentes tamaños de pantalla. Ya sea que utilices un dispositivo móvil más pequeño o una tableta más grande, la funcionalidad y la presentación visual se mantienen consistentes. Esto significa que puedes disfrutar de las mismas características e interfaz fácil de usar, independientemente del dispositivo que elijas utilizar.",
  mobileOptimized_detail3:
    "Hemos diseñado cuidadosamente nuestra interfaz para que sea intuitiva y eficiente en dispositivos móviles. Navegar por los artículos, explorar categorías y personalizar tus preferencias de lectura es fácil y conveniente. El diseño y los controles están optimizados para la interacción táctil, lo que garantiza una experiencia fluida en tu dispositivo móvil.",
  secure: "Seguro",
  secure_detail1:
    "Una de nuestras características clave de privacidad es el proxy de imágenes seguro. Con esta función, todas las imágenes dentro de los feeds RSS se enrutan a través de nuestro servidor seguro antes de mostrarse. Esto ayuda a evitar posibles riesgos de privacidad asociados con la carga directa de imágenes externas. Al proxyar las imágenes, podemos analizarlas y sanearlas, reduciendo la probabilidad de que contenido malicioso o no deseado llegue a tu dispositivo.",
  secure_detail2:
    "Además, implementamos una Política de Seguridad de Contenido (CSP) sensata para protegernos contra ataques de scripting entre sitios (XSS) y otras posibles vulnerabilidades de seguridad. La CSP nos permite definir fuentes confiables para varios tipos de contenido. Al hacer cumplir estas políticas, mitigamos los riesgos asociados con la ejecución de código no autorizado y el acceso no autorizado a datos.",
  secure_detail3:
    "Tu privacidad y seguridad son de suma importancia para nosotros. Al utilizar un proxy de imágenes seguro e implementar una Política de Seguridad de Contenido sensata, nuestro objetivo es brindarte una experiencia de navegación sin preocupaciones. Disfruta de la tranquilidad mientras exploras tus feeds RSS, sabiendo que hemos tomado medidas proactivas para proteger tu privacidad y garantizar la integridad de tus datos.",
  localized: "Localizado",
  localized_detail1:
    "Newsgears está actualmente disponible en inglés, español y francés. Agregar soporte para otros idiomas está en nuestro plan a corto plazo.",
  freeAsInBeer: "Gratis como en cerveza",
  freeAsInBeer_detail1:
    "Lost Sidewalk Software adopta los principios del software libre y de código abierto (FOSS) para todos nuestros productos. Todo nuestro código fuente está disponible de forma gratuita en GitHub y está cubierto por la Licencia Pública General de GNU versión 3 (GPLv3). Esto significa que cualquiera puede acceder, estudiar, modificar y distribuir nuestro software.",
  freeAsInBeer_detail2:
    "Damos la bienvenida a desarrolladores y entusiastas a unirse a nuestra comunidad y contribuir al proyecto. Ya sea a través de contribuciones de código, correcciones de errores, sugerencias de funciones o mejoras de documentación, valoramos y apreciamos todas las formas de participación. Juntos, podemos mejorar la plataforma Newsgears y satisfacer las necesidades cambiantes de nuestros usuarios.",
  freeAsInBeer_detail3:
    "En el espíritu del FOSS, creemos en la libertad de usar, examinar, modificar y redistribuir software. Nuestro objetivo es fomentar la colaboración, el intercambio de conocimientos y la innovación. Te invitamos a unirte a nuestro viaje, donde buscamos construir una comunidad activa y solidaria de desarrolladores, colaboradores y usuarios. Tus contribuciones, independientemente de su tamaño, son muy valoradas e instrumentales para dar forma al futuro de Newsgears. Celebremos el poder del FOSS y trabajemos juntos para crear una experiencia mejor y más inclusiva para todos.",
  selfHostable: "Autohospedado / Contenedores preconstruidos",
  selfHostable_detail1:
    "Puedes ejecutar Newsgears en tu entorno preferido. Nuestros contenedores preconstruidos son compatibles con varios entornos de ejecución compatibles con OCI, como Docker y Podman. Esto te brinda la libertad de implementar y administrar Newsgears según tus requisitos específicos.",
  selfHostable_detail2:
    "El autohospedaje te permite mantener tus datos dentro de tu propio entorno, ofreciéndote un control total sobre todo el proceso de agregación de RSS. Tú decides si ejecutarlo en tu máquina local, servidor privado o dentro de tu infraestructura en contenedores.",
  // demo (opml)
  opmlSupport: "Soporte de OPML",
  opmlSupport_detail1:
    "Newsgears admite la importación/exportación de OPML, lo que facilita la migración de tus suscripciones RSS. Importa feeds desde archivos OPML producidos por otros lectores y consolida múltiples fuentes. Exporta tus feeds, estructuras de cola y metadatos como archivos OPML para hacer copias de seguridad o compartir con otros.",
  opmlSupport_detail2:
    "OPML garantiza la compatibilidad y la interoperabilidad con otros lectores de RSS.",
  // demo (reading experience)
  readingExperience: "Experiencia de lectura simplificada",
  readingExperience_detail1:
    "La vista de artículo de Newsgears integra un potente reproductor de medios, lo que te permite ver cómodamente el contenido multimedia directamente dentro de la aplicación.",
  readingExperience_detail2:
    "Comparte artículos sin esfuerzo a través de plataformas populares como Twitter, LinkedIn, Facebook, Telegram y Blogger.",
  readingExperience_detail3:
    "Filtra los artículos por sus categorías de RSS para una navegación rápida.",
  textArticleScreenshot: "Artículo de texto/HTML",
  podcastAudioScreenshot: "Podcasts de audio",
  youtubeVideoScreenshot: "Video de Youtube",
  imageArticleScreenshot: "Artículo con Imágenes",
  // demo (simplified organization)
  simplifiedOrganization: "Organización simplificada",
  simplifiedOrganization_detail1:
    "Con el sistema de cola de artículos de Newsgears, puedes organizar fácilmente tus suscripciones de feeds RSS en grupos temáticos. Puedes crear colas para diferentes temas de interés, como juegos, tecnología o deportes, lo que te permite mantener el enfoque y acceder a artículos de múltiples fuentes en un solo lugar.",
  simplifiedOrganization_detail2:
    "Al importar artículos de todos los feeds en una cola, Newsgears crea una colección unificada de artículos. Esto significa que no tienes que navegar por múltiples feeds individuales o cambiar manualmente entre diferentes fuentes. Puedes disfrutar de una experiencia de lectura fluida con todos los artículos relevantes accesibles de manera conveniente en una sola cola.",
  // faq
  whatIsRSS: "¿Qué es RSS/ATOM?",
  rssIs:
    "RSS (Really Simple Syndication) es un formato de fuente web que se utiliza para publicar contenido actualizado con frecuencia, como entradas de blog, titulares de noticias, audio y video. Netscape lo introdujo por primera vez en 1999 como un formato basado en XML para distribuir contenido de sitios de noticias y blogs.",
  rssAllows:
    "RSS permite a los usuarios suscribirse a fuentes de contenido utilizando un lector o agregador de fuentes web, que puede recuperar y mostrar automáticamente contenido nuevo de múltiples fuentes en una sola ubicación. Esto hace que sea más fácil para los usuarios mantenerse actualizados sobre sus sitios web y creadores de contenido favoritos sin tener que verificar manualmente cada sitio en busca de actualizaciones.",
  newsgearsIs: "Newsgears es tanto un agregador de RSS como un lector de RSS.",
  overTheYears:
    "A lo largo de los años, RSS ha evolucionado y se han lanzado varias versiones del protocolo, que incluyen:",
  eachVersionAdded:
    "Cada versión agregó nuevas características y funcionalidades, como soporte para contenido multimedia y gabinetes.",
  atomOTOH:
    "Atom, por otro lado, es un formato de fuente web similar que se introdujo en 2003 como una alternativa a RSS. Al igual que RSS, Atom es un formato basado en XML que permite a los editores sindicar contenido como publicaciones de blogs, artículos de noticias y podcasts.",
  keyDifferences:
    "Una de las diferencias clave entre RSS y Atom es que Atom es un formato estandarizado, mientras que RSS tiene múltiples versiones y variaciones. Además, Atom está diseñado para ser más extensible y flexible que RSS, lo que permite una personalización más sencilla y soporte para metadatos adicionales.",
  overallRoles:
    "En general, RSS y Atom han jugado un papel importante en la evolución de la sindicación de contenido web y han ayudado a que sea más fácil para los usuarios acceder y consumir el contenido que les interesa.",
  listOfLinksToRSSSpecs: "Lista de enlaces a las especificaciones de RSS",
  listOfLinksOfInterest: "Lista de enlaces útiles y/o interesantes sobre RSS",
  // video panel
  rssMadeEasy: "RSS Hecho Fácil",
  // privacy policy
  newsgearsPrivacyPolicy: "POLÍTICA DE PRIVACIDAD DE ALIMENTADORES",
  whatInformationDoWeCollect: "¿Qué información recopilamos?",
  whatWeCollectSummary:
    "Recopilamos información personal que usted nos proporciona.",
  whatWeCollectDetails:
    "Recopilamos información personal que usted proporciona voluntariamente para usar cuando se registra en Newsgears, expresa interés en obtener información sobre nosotros o Newsgears, cuando participa en actividades en Newsgears o cuando se comunica con nosotros.",
  whatWeCollectImportantDetails: "No procesamos información sensible.",
  whatWeCollectFurtherDetails:
    "Toda la información personal que nos proporcione debe ser verdadera, completa y precisa, y debe notificarnos cualquier cambio en dicha información personal.",
  someCollectionIsAutomatic:
    "Parte de la información se recopila automáticamente",
  automaticCollectionDetails:
    "Parte de la información, como su dirección de Protocolo de Internet (IP) y/o las características del navegador y del dispositivo, se recopila automáticamente cuando visita Newsgears. Esta información (sistema operativo, preferencias de idioma, URL de referencia, nombre del dispositivo, país, ubicación, información sobre cómo y cuándo usa Newsgears y otra información técnica) no revela su identidad específica (como su nombre o información de contacto), pero puede incluir Información del dispositivo y uso. Esta información se necesita principalmente para mantener la seguridad y el funcionamiento de Newsgears, y para nuestros fines de informes y análisis internos.",
  howDoWeProcess: "¿Cómo procesamos su información?",
  howDoWeProcessSummary:
    "Procesamos su información para proporcionar, mejorar y administrar Newsgears, comunicarnos con usted, para seguridad y prevención de fraude, y para cumplir con la ley. También podemos procesar su información para otros fines con su consentimiento.",
  socialLogins: "Inicios de sesión sociales",
  socialLoginsSummary:
    "Newsgears le ofrece la posibilidad de registrarse e iniciar sesión utilizando los detalles de su cuenta de redes sociales de terceros (como los inicios de sesión de Google o Github). Cuando elija hacer esto, recibiremos cierta información de su perfil de su proveedor de redes sociales. La información de perfil que recibimos puede variar según el proveedor de redes sociales en cuestión, pero a menudo incluirá su nombre, dirección de correo electrónico y foto de perfil, así como otra información que elija hacer pública en dicha plataforma de redes sociales.",
  socialLoginsDetails:
    "Usaremos la información que recibimos solo para los fines que se describen en este aviso de privacidad o que se le aclaran de otro modo en Newsgears. Tenga en cuenta que no controlamos y no somos responsables de otros usos de su información personal por parte de su proveedor de redes sociales externo. Le recomendamos que revise su aviso de privacidad para comprender cómo recopilan, usan y comparten su información personal, y cómo puede configurar sus preferencias de privacidad en sus sitios y aplicaciones.",
  internationalInformationTransfers:
    "Transferencias internacionales de información",
  internationalInformationTransfersSummary:
    "Podemos transferir, almacenar y procesar su información en países distintos al suyo.",
  internationalInformationTransfersDetails:
    "Nuestros servidores están ubicados en los Estados Unidos. Si accede a Newsgears desde fuera de los Estados Unidos, tenga en cuenta que su información puede ser transferida, almacenada y procesada por nosotros en nuestras instalaciones y por aquellas de terceros con quienes podemos compartir su información personal, en los Estados Unidos. Estados y otros países.",
  internationalInformationTransfersDetailsFurther:
    "Si reside en el Espacio Económico Europeo (EAA) o el Reino Unido (RU), es posible que estos países no tengan necesariamente leyes de protección de datos u otras leyes similares tan completas como las de su país. Tomaremos todas las medidas necesarias para proteger su información personal de acuerdo con este aviso de privacidad y la ley aplicable.",
  whatAreYourPrivacyRights: "¿Cuáles son sus derechos de privacidad?",
  yourPrivacyRightsSummary:
    "Puede revisar, cambiar o cancelar su cuenta en cualquier momento.",
  yourPrivacyRightsDetails:
    "No distribuiremos su información personal a terceros sin su consentimiento.",
  yourConsent: "Tu consentimiento",
  yourConsentSummary:
    "Al usar nuestro sitio o nuestras aplicaciones, usted acepta nuestra política de privacidad.",
  doWeMakeUpdates: "¿Hacemos actualizaciones a este aviso?",
  doWeMakeUpdatesSummary:
    "Sí, actualizaremos este aviso según sea necesario para cumplir con las leyes pertinentes.",
  howCanYouContactUs:
    "¿Cómo puede ponerse en contacto con nosotros acerca de este aviso?",
  // image alts
  queuePageScreenshot: "Captura de pantalla de la página de cola de Newsgears",
};

export default es;
