const fr = {
  // generic
  somethingHorribleHappened:
    "Quelque chose d'horrible s'est produit et nous ne savons pas exactement quoi ! Veuillez réessayer dans quelques instants.",
  requestTimedOut: "La requête a expiré, veuillez réessayer dans quelques instants.",
  privacyPolicy: "Politique de confidentialité",
  cancel: "Annuler",
  // landing
  feedgears: "FeedGears is a news and information site about RSS and related technologies, mainly focused on tracking the development of two free/open-source projects I built: Newsgears and ComposableRSS. Both Newsgears and ComposableRSS are full-stack applications that are intended to be easy to deploy to your own environment to facilitate upstream feed access (Newsgears) and publishing (ComposableRSS) capabilities for your organization/multiple users.",
  feedgears_detail1: "This site also tracks development of RSS-related projects on Github, and information from other pertinent sources.",
  feedgears_detail2: "If you're feeling generous, please consider supporting this effort on Patreon. Better yet, make a feature request, bug report, or fork one of the many repos below and make a code contribution.",
  newsgearsLogo: "Newsgears",
  composableRss: "Composable RSS",
  newsgearsOnGithub: "Newsgears on Github",
  composableRssOnGithub: "ComposableRSS on Github",
  supportUsOnPatreon: "Support us on Patreon",
  whatIsNewsgears: "Un agrégateur RSS moderne et auto-hébergé.",
  whatIsNewsgearsDetails:
  "Newsgears is a multi-user, all-in-one feed reader/aggregator platform. This project exists to provide a free, open-source, turn-key method of facilitating access to RSS feeds for your users. Newsgears is comprised of a performant back-end feed aggregator, scalable middleware, and a modern, accessible web-based reader.",
  whyIsNewsgearsFree: "Gratuit pour toujours car nous aimons les flux RSS.",
  devBlog: "Blog de développement",
  email: "E-mail",
  twitter: "Twitter",
  github: "Github",
  twitch: "Twitch",
  discord: "Discord",
  copyright: "COPYRIGHT",
  contactUsWithQuestionsViaEmail:
    "Contactez Lost Sidewalk Software par e-mail pour toute question.",
  //
  //
  //
  whatIsComposableRss: "A self-hosted, API-driven feed server",
  whatIsComposableRssDetails:
    "ComposableRSS is a multiuser platform for creating, publishing, and fully managing all aspects of the syndicated web feed lifecycle. It provides a robust solution for managing web feeds and content distribution using a developer-friendly REST API. ComposableRSS is built upon the GPLV3 Newsgears libraries, implemented entirely in Java, and is freely available on Github.",
  youCanDeployTheEntireStack:
    "You can deploy the entire stack to your environment with minimal configuration using Docker by following the instructions located below.",
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
  filterScreenshot: "Capture d'écran du filtre de file d'attente",
  listLayoutsScreenshot: "Capture d'écran de la disposition en liste",
  cardLayoutsScreenshot: "Capture d'écran de la disposition en cartes",
  tableLayoutsScreenshot: "Capture d'écran de la disposition en tableau",
  opmlUploadScreenshot: "Capture d'écran de l'importation d'OPML",
  comingSoon: "Bientôt disponible !",
  // demo (api access)
  apiAccess: "Accès à l'API",
  // demo (enhanced filtering)
  enhancedFiltering: "Filtrage amélioré et recherche avec LunrJS",
  enhancedFiltering_detail1:
    "Appliquez des filtres et effectuez des recherches dans une file d'attente d'articles pour vous concentrer sur vos options de lecture en fonction de vos préférences ou de sujets spécifiques qui vous intéressent.",
  enhancedFiltering_detail2:
    "Localisez facilement des articles en utilisant divers points de données, gagnant ainsi du temps et simplifiant votre expérience de lecture. Les capacités de recherche de Newsgears sont soutenues par LunrJS.",
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
  feedDashboard: "Tableau de bord des flux",
  feedDashboard_detail1:
    "Le tableau de bord des flux affiche des informations résumées sur chaque file d'attente d'articles. Chaque carte du tableau de bord est configurable ; vous pouvez ajouter et supprimer des détails et des boutons d'action selon vos besoins.",
  feedDashboard_detail2:
    "Newsgears affiche le nombre d'éléments non lus et l'article le plus récemment publié ou mis à jour pour tous les abonnements dans une file d'attente. La carte du tableau de bord donne également un accès rapide pour gérer les abonnements et obtenir en un coup d'œil des détails sur chaque flux dans une file d'attente :",
  dashboardCardScreenshot: "Capture d'écran de la carte du tableau de bord de la file d'attente",
  queueSettingsScreenshot: "Capture d'écran des paramètres de la file d'attente",
  // demo (layout options)
  layoutOptions: "Dispositions et thèmes",
  layoutOptions_detail1:
    "Choisissez parmi trois dispositions de lecture : vue tabulaire, vue en liste ou vue en cartes. La vue en liste offre une présentation simplifiée, vous permettant de faire défiler les articles. La vue en cartes affiche des images en vedette et des extraits pour une expérience de lecture plus engageante. La vue tabulaire offre un format structuré, utile pour un aperçu rapide des titres.",
  layoutOptions_detail2:
    "Des thèmes clairs et sombres sont disponibles pour réduire la fatigue oculaire dans les environnements peu éclairés.",
  // demo (newsgears repositories) 
  deployingNewsgears: 'Deploying Newsgears',
  deployingNewsgears_detail1: 'The first step to deploying Newsgears to your environment is to clone the repository and customize the docker-compose.yml file for your requirements. You can boot it out of the box for testing and local development.',
  deployingNewsgears_detail2: 'Address the comments to configure Newsgears for your environment.',
  deployingNewsgears_detail3: 'Pre-built images of the individual stack components are available in the lostsidewalk repository on docker.io:',
  deployingNewsgears_detail4: 'Use `docker-compose up` to build any start any of these files; please remember to read and address comments within.',
  deployingNewsgears_detail5: 'For local testing, boots out of the box (without authentication)',
  deployingNewsgears_detail6: 'For local development, pauses boot-up until remote debugger is attached (without authentication)',
  // demo (code availability) 
  newsgearsCode: 'Newsgears Code',
  newsgearsCode_detail1: 'Newsgears is free/open-source software protected by GPLV3. I am always seeking contributions from users and developers alike. Please visit the project top-level code repository on Github for information on how to participate, including a list of immediately workable issues and a project roadmap.',
  newsgearsCode_detail2: 'The core Newsgears component libraries are published to Maven Central. You can use these if you want to integrate Newsgears functionality into your own application.',
  newsgearsCode_detail3: 'Direct links to the top-level Newsgears repositories are available here:',
  // demo 
  deployingComposableRss: 'Deploying ComposableRSS',
  deployingComposableRss_detail1: 'ComposableRSS is easy to deploy using docker. Use a docker-compose.yml file provided below to quick start your preferred version of the application for testing or local development using pre-built images hosted on docker.io.',
  deployingComposableRss_detail2: 'Address the comments to configure ComposableRSS for your environment.',
  deployingComposableRss_detail3: 'Pre-built images of the individual stack components are available here:',
  deployingComposableRss_detail4: 'Use `docker-compose up` to build any start any of these files; please remember to read and address comments within.',
  deployingComposableRss_detail5: 'For local testing, always logged in as a single administrative user',
  deployingComposableRss_detail6: 'For local development, always logged in as a s single administrative user and pauses during boot-up until remote debugger is attached',
  deployingComposableRss_detail7: 'For prod use (multi-user support enabled)',
  deployingComposableRss_detail8: 'For local development, has multi-user support and pauses during boot-up until remote debugger is attached',
  // demo
  composableRssCode: 'ComposableRSS Code',
  composableRssCode_detail1: 'ComposableRSS is free/open-source software protected by GPLV3. I am always seeking contributions from users and developers alike. Please visit the project top-level code repository on Github for information on how to participate, including a list of immediately workable issues and a project roadmap.',
  composableRssCode_detail3: 'Direct links to the top-level ComposableRSS repositories are available here:',
  // demo (misc)
  aboutNewsgears: "À propos de Newsgears",
  accessible: "Accessible",
  accessible_detail1:
    "L'accessibilité est une priorité absolue. Nous nous engageons à garantir une expérience inclusive pour tous les utilisateurs de Newsgears. Pour ce faire, nous utilisons vue-announcer, un outil qui rend les messages importants accessibles aux lecteurs d'écran et aux autres technologies d'assistance. En tirant parti de vue-announcer, nous nous assurons que tout le monde peut accéder aux informations dont il a besoin de manière transparente.",
  accessible_detail2:
    "De plus, nous nous efforçons de respecter les normes de conformité aux directives pour l'accessibilité des contenus web (WCAG). Les WCAG fournissent.",
  mobileOptimized: "Optimisé pour mobile",
  mobileOptimized_detail1:
    "Newsgears dispose d'une interface optimisée pour les mobiles et responsive, conçue dans un souci de praticité. Notre interface utilisateur garantit une expérience fluide et cohérente sur différents appareils, y compris les smartphones et les tablettes.",
  mobileOptimized_detail2:
    "Les principes de conception adaptative de Vuetify permettent à notre interface de s'adapter parfaitement à différentes tailles d'écran. Que vous utilisiez un petit appareil mobile ou une grande tablette, la fonctionnalité et la présentation visuelle restent cohérentes. Cela signifie que vous pouvez profiter des mêmes fonctionnalités et de l'interface conviviale, quel que soit l'appareil que vous choisissez d'utiliser.",
  mobileOptimized_detail3:
    "Nous avons soigneusement conçu notre interface pour qu'elle soit intuitive et efficace sur les appareils mobiles. Naviguer à travers les articles, explorer les catégories et personnaliser vos préférences de lecture est facile et pratique. La mise en page et les contrôles sont optimisés pour l'interaction tactile, garantissant une expérience fluide sur votre appareil mobile.",
  secure: "Sécurisé",
  secure_detail1:
    "Une de nos fonctionnalités clés en matière de confidentialité est le proxy d'image sécurisé. Grâce à cette fonctionnalité, toutes les images des flux RSS passent par notre serveur sécurisé avant d'être affichées. Cela contribue à prévenir tout risque potentiel pour la confidentialité lié au chargement direct des images externes. En passant par un proxy pour les images, nous pouvons les analyser et les désinfecter, réduisant ainsi la probabilité de contenu malveillant ou indésirable atteignant votre appareil.",
  secure_detail2:
    "De plus, nous mettons en œuvre une politique de sécurité des contenus (Content Security Policy - CSP) sensée pour se prémunir contre les attaques de type cross-site scripting (XSS) et autres vulnérabilités de sécurité potentielles. Le CSP nous permet de définir des sources de confiance pour différents types de contenus. En appliquant ces politiques, nous atténuons les risques liés à l'exécution de code non autorisé et à l'accès non autorisé aux données.",
  secure_detail3:
    "Votre vie privée et votre sécurité sont d'une importance capitale pour nous. En utilisant un proxy d'image sécurisé et en appliquant une politique de sécurité des contenus sensée, nous visons à vous offrir une expérience de navigation sans souci. Profitez de la tranquillité d'esprit lorsque vous explorez vos flux RSS, en sachant que nous avons pris des mesures proactives pour protéger votre vie privée et garantir l'intégrité de vos données.",
  localized: "Localisé",
  localized_detail1:
    "Newsgears est actuellement disponible en anglais, espagnol et français. L'ajout de la prise en charge de langues supplémentaires est notre feuille de route à court terme.",
  freeAsInBeer: "Gratuit comme dans une bière",
  freeAsInBeer_detail1:
    "Lost Sidewalk Software adopte les principes du logiciel libre et open source (FOSS) pour tous nos produits. Tout notre code source est librement disponible sur GitHub et est couvert par la licence publique générale GNU version 3 (GPLv3). Cela signifie que n'importe qui peut accéder, étudier, modifier et distribuer notre logiciel.",
  freeAsInBeer_detail2:
    "Nous invitons les développeurs et les passionnés à rejoindre notre communauté et à contribuer au projet. Que ce soit par des contributions de code, des corrections de bugs, des suggestions de fonctionnalités ou des améliorations de documentation, nous apprécions toutes les formes d'implication. Ensemble, nous pouvons améliorer la plateforme Newsgears et répondre aux besoins évolutifs de nos utilisateurs.",
  freeAsInBeer_detail3:
    "Dans l'esprit du logiciel libre et open source, nous croyons en la liberté d'utiliser, d'examiner, de modifier et de redistribuer les logiciels. Notre objectif est de favoriser la collaboration, le partage des connaissances et l'innovation. Nous vous invitons à vous joindre à notre aventure, où nous visons à construire une communauté active et solidaire de développeurs, contributeurs et utilisateurs. Vos contributions, quelle que soit leur taille, sont hautement valorisées et essentielles pour façonner l'avenir de Newsgears. Célébrons le pouvoir du logiciel libre et travaillons ensemble pour créer une expérience meilleure et plus inclusive pour tous.",
  // demo (opml)
  opmlSupport: "Prise en charge d'OPML",
  opmlSupport_detail1:
    "Newsgears prend en charge l'importation/exportation d'OPML, ce qui facilite la migration de vos abonnements RSS. Importez des flux à partir de fichiers OPML produits par d'autres lecteurs et consolidez plusieurs sources. Exportez vos flux, structures de files d'attente et métadonnées sous forme de fichiers OPML pour les sauvegardes ou le partage avec d'autres personnes.",
  opmlSupport_detail2:
    "OPML garantit la compatibilité et l'interopérabilité avec d'autres lecteurs RSS.",
  // demo (reading experience)
  readingExperience: "Expérience de lecture simplifiée",
  readingExperience_detail1:
    "La vue des articles de Newsgears intègre un lecteur multimédia robuste, vous permettant de visualiser facilement le contenu multimédia directement dans l'application.",
  readingExperience_detail2:
    "Partagez des articles facilement sur des plateformes populaires telles que Twitter, LinkedIn, Facebook, Telegram et Blogger.",
  readingExperience_detail3:
    "Filtrez les articles par catégories RSS pour une navigation rapide.",
  textArticleScreenshot: "Article en texte/HTML",
  podcastAudioScreenshot: "Podcast audio",
  youtubeVideoScreenshot: "Vidéo YouTube",
  imageArticleScreenshot: "Article avec images",
  // demo (simplified organization)
  simplifiedOrganization: "Organisation simplifiée",
  simplifiedOrganization_detail1:
    "Avec le système de file d'attente d'articles de Newsgears, vous pouvez facilement organiser vos abonnements aux flux RSS en groupes thématiques. Vous pouvez créer des files d'attente pour différents sujets d'intérêt, tels que les jeux, la technologie ou les sports, ce qui vous permet de rester concentré et d'accéder aux articles de plusieurs sources en un seul endroit.",
  simplifiedOrganization_detail2:
    "En important des articles de tous les flux d'une file d'attente, Newsgears crée une collection unifiée d'articles. Cela signifie que vous n'avez pas à naviguer à travers plusieurs flux individuels ou à basculer manuellement entre différentes sources. Vous pouvez profiter d'une expérience de lecture fluide avec tous les articles pertinents facilement accessibles dans une seule file d'attente.",
  // faq
  whatIsRSS: "Qu'est-ce que RSS/ATOM ?",
  rssIs:
    "RSS (Really Simple Syndication) est un format de flux web utilisé pour publier du contenu fréquemment mis à jour, tels que des billets de blog, des titres d'actualités, de l'audio et de la vidéo. Il a été introduit pour la première fois par Netscape en 1999 en tant que format basé sur XML permettant de diffuser du contenu à partir de sites d'actualités et de blogs.",
  rssAllows:
    "RSS permet aux utilisateurs de s'abonner à des flux de contenu à l'aide d'un lecteur de flux web ou d'un agrégateur, qui peut récupérer automatiquement et afficher les nouveaux contenus à partir de plusieurs sources dans un seul emplacement. Cela facilite la mise à jour des utilisateurs sur leurs sites web préférés et les créateurs de contenu sans avoir à vérifier manuellement chaque site pour les mises à jour.",
  newsgearsIs: "Newsgears est à la fois un agrégateur RSS et un lecteur RSS.",
  overTheYears:
    "Au fil des ans, RSS a évolué et plusieurs versions du protocole ont été publiées, notamment :",
  eachVersionAdded:
    "Chaque version a ajouté de nouvelles fonctionnalités, telles que la prise en charge de contenu multimédia et de pièces jointes.",
  atomOTOH:
    "Atom, en revanche, est un format de flux web similaire qui a été introduit en 2003 comme une alternative à RSS. Comme RSS, Atom est un format basé sur XML qui permet aux éditeurs de diffuser du contenu tel que des billets de blog, des articles d'actualités et des podcasts.",
  keyDifferences:
    "Une des principales différences entre RSS et Atom est qu'Atom est un format standardisé, tandis que RSS a plusieurs versions et variations. De plus, Atom est conçu pour être plus extensible et flexible que RSS, ce qui permet une personnalisation plus facile et la prise en charge de métadonnées supplémentaires.",
  overallRoles:
    "Dans l'ensemble, RSS et Atom ont joué un rôle important dans l'évolution de la syndication de contenu web et ont contribué à faciliter l'accès et la consommation du contenu qui intéresse les utilisateurs.",
  listOfLinksToRSSSpecs: "Liste de liens vers les spécifications RSS",
  listOfLinksOfInterest: "Liste de liens utiles et/ou intéressants sur RSS",
  // video panel
  rssMadeEasy: "RSS facilité",
  // privacy policy
  newsgearsPrivacyPolicy: "Politique de confidentialité de Newsgears",
  whatInformationDoWeCollect: "Quelles informations collectons-nous ?",
  whatWeCollectSummary:
    "Nous collectons des informations personnelles que vous nous fournissez.",
  whatWeCollectDetails:
    "Nous collectons des informations personnelles que vous nous fournissez volontairement lorsque vous vous inscrivez sur Newsgears, exprimez un intérêt pour obtenir des informations sur nous ou Newsgears, lorsque vous participez à des activités sur Newsgears, ou lorsque vous nous contactez.",
  whatWeCollectImportantDetails: "Nous ne traitons pas d'informations sensibles.",
  whatWeCollectFurtherDetails:
    "Toutes les informations personnelles que vous nous fournissez doivent être vraies, complètes et exactes, et vous devez nous informer de tout changement de ces informations personnelles.",
  someCollectionIsAutomatic: "Certaines informations sont collectées automatiquement",
  automaticCollectionDetails:
    "Certaines informations, telles que votre adresse IP et/ou les caractéristiques du navigateur et du dispositif, sont collectées automatiquement lorsque vous visitez Newsgears. Ces informations (système d'exploitation, préférences linguistiques, URL de référence, nom du dispositif, pays, emplacement, informations sur la manière et le moment où vous utilisez Newsgears, et autres informations techniques) ne révèlent pas votre identité spécifique (comme votre nom ou vos coordonnées), mais peuvent inclure des informations sur le dispositif et son utilisation. Ces informations sont principalement nécessaires pour assurer la sécurité et le fonctionnement de Newsgears, ainsi que pour nos analyses internes et nos rapports.",
  howDoWeProcess: "Comment traitons-nous vos informations ?",
  howDoWeProcessSummary:
    "Nous traitons vos informations pour fournir, améliorer et administrer Newsgears, communiquer avec vous, assurer la sécurité et prévenir la fraude, et respecter la loi. Nous pouvons également traiter vos informations à d'autres fins avec votre consentement.",
  socialLogins: "Connexions sociales",
  socialLoginsSummary:
    "Newsgears vous offre la possibilité de vous inscrire et de vous connecter en utilisant les détails de votre compte social tiers (comme les connexions Google ou Github). Lorsque vous choisissez de le faire, nous recevrons certaines informations de profil vous concernant de votre fournisseur de médias sociaux. Les informations de profil que nous recevons peuvent varier en fonction du fournisseur de médias sociaux concerné, mais incluront souvent votre nom, votre adresse e-mail et votre photo de profil, ainsi que d'autres informations que vous choisissez de rendre publiques sur une telle plateforme de médias sociaux.",
  socialLoginDetails:
    "Nous utiliserons les informations que nous recevons uniquement dans les buts décrits dans cet avis de confidentialité ou qui vous sont autrement expliqués sur Newsgears. Veuillez noter que nous n'avons aucun contrôle sur les autres utilisations de vos informations personnelles par votre fournisseur de médias sociaux tiers, et nous ne sommes pas responsables de ces utilisations. Nous vous recommandons de consulter leur avis de confidentialité afin de comprendre comment ils collectent, utilisent et partagent vos informations personnelles, ainsi que la manière dont vous pouvez définir vos préférences de confidentialité sur leurs sites et applications.",
  internationalInformationTransfers: "Transferts internationaux d'informations",
  internationalInformationTransfersSummary:
    "Nous pouvons transférer, stocker et traiter vos informations dans des pays autres que le vôtre.",
  internationalInformationTransfersDetails:
    "Nos serveurs sont situés aux États-Unis. Si vous accédez à Newsgears depuis l'extérieur des États-Unis, veuillez noter que vos informations peuvent être transférées, stockées et traitées par nous dans nos installations et par celles de tiers avec lesquels nous pouvons partager vos informations personnelles, aux États-Unis et dans d'autres pays.",
  internationalInformationTransfersFurther:
    "Si vous résidez dans l'Espace économique européen (EEE) ou au Royaume-Uni (RU), ces pays peuvent ne pas avoir de lois sur la protection des données ou d'autres lois similaires aussi exhaustives que celles de votre pays. Nous prendrons toutes les mesures nécessaires pour protéger vos informations personnelles conformément à cet avis de confidentialité et à la législation applicable.",
  whatAreYourPrivacyRights: "Quels sont vos droits en matière de confidentialité ?",
  yourPrivacyRightsSummary:
    "Vous pouvez examiner, modifier ou résilier votre compte à tout moment.",
  yourPrivacyRightsDetails:
    "Nous ne distribuerons pas vos informations personnelles à des tiers sans votre consentement.",
  yourConsent: "Votre consentement",
  yourConsentSummary:
    "En utilisant notre site ou nos applications, vous consentez à notre politique de confidentialité.",
  doWeMakeUpdates: "Mise à jour de cette notice",
  doWeMakeUpdatesSummary:
    "Oui, nous mettrons à jour cette notice si nécessaire pour rester conforme aux lois applicables.",
  howCanYouContactUs: "Comment pouvez-vous nous contacter concernant cette notice ?",
  // image alts
  queuePageScreenshot: "Capture d'écran de la page de file d'attente de Newsgears",
};

export default fr;
