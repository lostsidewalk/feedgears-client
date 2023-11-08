const en = {
  // generic
  somethingHorribleHappened:
    "Something horrible happened, and we're not sure what!  Please try again in a few moments.",
  requestTimedOut: 
    "Request timed out, please try again in a few moments.",
  privacyPolicy: "Privacy Policy",
  cancel: "Cancel",
  // landing
  newsgearsRssLogo: "Newsgears RSS",
  visitUsOnGithub: "Newsgears on Github",
  supportUsOnPatreon: "Support us on Patreon",
  whatIsNewsgears: "A modern, self-hosted, RSS aggregator.",
  whyIsNewsgearsFree: "Free forever because we love RSS.",
  devBlog: "Dev Blog",
  email: "Email",
  twitter: "Twitter",
  github: "Github",
  twitch: "Twitch",
  discord: "Discord",
  copyright: "COPYRIGHT",
  contactUsWithQuestionsViaEmail:
    "Contact Lost Sidewalk Software with questions via email.",
  // demo 
  filterScreenshot: 'Queue filter screenshot',
  listLayoutsScreenshot: 'List layout screenshot',
  cardLayoutsScreenshot: 'Card layout screenshot',
  tableLayoutsScreenshot: 'Table layout screenshot',
  opmlUploadScreenshot: 'OPML upload screenshot',
  comingSoon: 'Coming soon!',
  // demo (api access) 
  apiAccess: 'API Access', 
  // demo (enhanced filtering) 
  enhancedFiltering: 'Enhanced Filtering and Searching Using LunrJS',
  enhancedFiltering_detail1: 'Apply filters and search within an article queue to focus your reading options based on your preferences or specific topics of interest.',
  enhancedFiltering_detail2: 'Easily locate articles using a variety of data points, saving time and streamlining your reading experience.  Newsgears search capabilities are backed by lunrjs.',
  // demo (feed dashboard)
  feedDashboard: 'Feed Dashboard', 
  feedDashboard_detail1: 'The feed dashboard shows summary information about each article queue.  Each dashboard card is configurable; you can add and remove details and action buttons according to your needs.',
  feedDashboard_detail2: 'Newsgears shows the number of unread items and the most recently published or updated article across all subscriptions in a queue.  The dashboard card also gives quick access to manage subscriptions, and get at-a-glance details about each feed in a queue: ',
  dashboardCardScreenshot: 'Queue dashboard card screenshot',
  queueSettingsScreenshot: 'Queue settings screenshot',
  // demo (layout options)
  layoutOptions: 'Layouts and Themes',
  layoutOptions_detail1: 'Choose from three reading layouts: tabular, list, or card views. The list view offers a streamlined presentation, allowing you to scroll through articles. The card view displays featured images and snippets for a more engaging reading experience. The tabular view provides a structured format, useful for a quick overview of headlines.',
  layoutOptions_detail2: 'Light and dark themes are available to reduce eye strain in low-light environments.',
  // demo (misc) 
  aboutNewsgears: 'About Newsgears', 
  accessible: 'Accessible', 
  accessible_detail1: 'Accessibility is a top priority. We are committed to ensuring an inclusive experience for all users of Newsgears. To achieve this, we utilize vue-announcer, a tool that makes important messages accessible to screen readers and other assistive technologies. By leveraging vue-announcer, we ensure that everyone can access the information they need seamlessly.',
  accessible_detail2: 'Moreover, we strive to meet the Web Content Accessibility Guidelines (WCAG) compliance standards. WCAG provides a set of guidelines to make digital content more accessible to people with disabilities. By adhering to these guidelines, we ensure that Newsgears is designed and developed with accessibility in mind, providing an optimal experience for all users.',
  mobileOptimized: 'Mobile Optimized',
  mobileOptimized_detail1: 'Newsgears has a mobile-optimized and responsive interface, designed with practicality in mind. Our UI ensures a smooth and consistent experience across different devices, including smartphones and tablets.',
  mobileOptimized_detail2: 'The responsive design principles of Vuetify allow our interface to adapt seamlessly to various screen sizes. Whether you\'re using a smaller mobile device or a larger tablet, the functionality and visual presentation remain consistent. This means you can enjoy the same features and user-friendly interface, regardless of the device you choose to use.',
  mobileOptimized_detail3: 'We\'ve carefully designed our interface to be intuitive and efficient on mobile devices. Navigating through articles, exploring categories, and customizing your reading preferences is easy and convenient. The layout and controls are optimized for touch interaction, ensuring a seamless experience on your mobile device.',
  secure: 'Secure',
  secure_detail1: 'One of our key privacy features is the secure image proxy. With this feature, all images within the RSS feeds are routed through our secure server before being displayed. This helps prevent any potential privacy risks associated with loading external images directly. By proxying the images, we can analyze and sanitize them, reducing the likelihood of malicious or unwanted content reaching your device.',
  secure_detail2: 'Additionally, we implement a sensible Content Security Policy (CSP) to safeguard against cross-site scripting (XSS) attacks and other potential security vulnerabilities. The CSP allows us to define trusted sources for various types of content. By enforcing these policies, we mitigate the risks associated with unauthorized code execution and unauthorized data access.',
  secure_detail3: 'Your privacy and security are of utmost importance to us. By utilizing a secure image proxy and implementing a sensible Content Security Policy, we aim to provide you with a worry-free browsing experience. Enjoy peace of mind as you explore your RSS feeds, knowing that we have taken proactive steps to protect your privacy and ensure the integrity of your data.',
  localized: 'Localized',
  localized_detail1: 'Newsgears is presently available in English, Spanish, and French.  Adding support for additional languages is our on short-term roadmap.',
  freeAsInBeer: 'Free As In Beer',
  freeAsInBeer_detail1: 'Lost Sidewalk Software embraces the principles of free and open source software (FOSS) for all of our products. All our source code is freely available on GitHub and covered by the GNU General Public License version 3 (GPLv3). This means that anyone can access, study, modify, and distribute our software.',
  freeAsInBeer_detail2: 'We welcome developers and enthusiasts to join our community and contribute to the project. Whether it\'s through code contributions, bug fixes, feature suggestions, or documentation improvements, we value and appreciate all forms of involvement. Together, we can make the Newsgears platform even better and meet the evolving needs of our users.',
  freeAsInBeer_detail3: 'In the spirit of FOSS, we believe in the freedom to use, examine, modify, and redistribute software. Our goal is to foster collaboration, knowledge sharing, and innovation. We invite you to join our journey, where we aim to build an active and supportive community of developers, contributors, and users. Your contributions, regardless of their size, are highly valued and instrumental in shaping the future of Newsgears. Let\'s celebrate the power of FOSS and work together to create a better and more inclusive experience for all.',
  selfHostable: 'Self-Hostable / Pre-Built Containers',
  selfHostable_detail1: 'You can run Newsgears in your preferred environment. Our pre-built containers and compatible with various OCI-compliant runtimes such as Docker and Podman. This gives you the freedom to deploy and manage Newsgears according to your specific requirements.',
  selfHostable_detail2: 'Self-hosting allows you to keep your data within your own environment, offering you full control over the entire RSS aggration process. You decide to run it on your local machine, private server, or within your containerized infrastructure.',
  // demo (opml) 
  opmlSupport: 'OPML Support',
  opmlSupport_detail1: 'Newsgears supports OPML import/export, making it easy to migrate your RSS subscriptions. Import feeds from OPML files produced by other readers, and consolidate multiple sources. Export your feeds, queue structures, and metadata as OPML files for backups or sharing with others.', 
  opmlSupport_detail2: 'OPML ensures compatibility and interoperability with other RSS readers.',
  // demo (reading experience)
  readingExperience: 'Streamlined Reading Experience', 
  readingExperience_detail1: 'The Newsgears article view integrates a robust media player, allowing you to conveniently view media content directly within the application.',
  readingExperience_detail2: 'Share articles effortlessly through popular platforms like Twitter, LinkedIn, Facebook, Telegram, and Blogger.',
  readingExperience_detail3: 'Filter articles by their RSS categories for quick navigation.',
  textArticleScreenshot: 'Text/HTML Article',
  podcastAudioScreenshot: 'Podcast Audio',
  youtubeVideoScreenshot: 'Youtube Video',
  imageArticleScreenshot: 'Article with Images',
  // demo (simplified organization)
  simplifiedOrganization: 'Simplified Organization',
  simplifiedOrganization_detail1: 'With Newsgears article queue system, you can easily organize your RSS feed subscriptions into topical groups. You can create queues for different topics of interest, such as gaming, technology, or sports, allowing you to stay focused and access articles from multiple sources in one place.',
  simplifiedOrganization_detail2: 'By importing articles from all the feeds in a queue, Newsgears creates a unified collection of articles. This means you don\'t have to navigate through multiple individual feeds or switch between different sources manually. You can enjoy a seamless reading experience with all relevant articles conveniently accessible in a single queue.',
  // faq
  whatIsRSS: "What is RSS/ATOM?",
  rssIs:
    "RSS (Really Simple Syndication) is a web feed format used for publishing frequently updated content such as blog entries, news headlines, audio, and video. It was first introduced by Netscape in 1999 as an XML-based format for syndicating content from news sites and blogs.",
  rssAllows:
    "RSS allows users to subscribe to content feeds using a web feed reader or aggregator, which can automatically retrieve and display new content from multiple sources in a single location. This makes it easier for users to stay up-to-date on their favorite websites and content creators without having to manually check each site for updates.",
  newsgearsIs: "Newsgears is both an RSS aggregator and an RSS reader.",
  overTheYears:
    "Over the years, RSS has evolved and several versions of the protocol have been released, including: ",
  eachVersionAdded:
    "Each version added new features and functionality, such as support for multimedia content and enclosures.",
  atomOTOH:
    "Atom, on the other hand, is a similar web feed format that was introduced in 2003 as an alternative to RSS. Like RSS, Atom is an XML-based format that allows publishers to syndicate content such as blog posts, news articles, and podcasts.",
  keyDifferences:
    "One of the key differences between RSS and Atom is that Atom is a standardized format, while RSS has multiple versions and variations. Additionally, Atom is designed to be more extensible and flexible than RSS, allowing for easier customization and support for additional metadata.",
  overallRoles:
    "Overall, RSS and Atom have played an important role in the evolution of web content syndication and have helped to make it easier for users to access and consume the content they care about.",
  listOfLinksToRSSSpecs: 'List of links to RSS specifications',
  listOfLinksOfInterest: 'List of useful and/or interesting links about RSS',
  // video panel
  rssMadeEasy: "RSS Made Easy",
  // privacy policy
  newsgearsPrivacyPolicy: "NEWSGEARS PRIVACY POLICY",
  whatInformationDoWeCollect: "What information do we collect?",
  whatWeCollectSummary:
    "We collect personal information that you provide to us.",
  whatWeCollectDetails:
    "We collect personal information that you voluntarily provide to use when you register on Newsgears, express an interest in obtaining information about us or Newsgears, when you participate in activities on Newsgears, or otherwise when you contact us.",
  whatWeCollectImportantDetails: "We do not process sensitive information.",
  whatWeCollectFurtherDetails:
    "All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.",
  someCollectionIsAutomatic: "Some information is automatically collected",
  automaticCollectionDetails:
    "Some information--such as your Internet Protocol (IP) address and/or browser and device characteristics--is collected automatically when you visit Newsgears.  This information (operating system, language preferences, referring URLs, device name, country, location, information about how and when you use Newsgears, and other technical information) does not reveal your specific identity (like your name or contact information) but may include device and usage information.  This information is primarily needed to maintain the security and operation of Newsgears, and for our internal analytics and reporting purposes.",
  howDoWeProcess: "How do we process your information?",
  howDoWeProcessSummary:
    "We process your information to provide, improve, and administer Newsgears, communicate with you, for security and fraud prevention, and to comply with law.  We may also process your information for other purposes with your consent.",
  socialLogins: "Social logins",
  socialLoginsSummary:
    "Newsgears offers you the ability to register and login using your third-party social media account details (like Google or Github logins).  Where you choose to do this, we will receive certain profile information about you from your social media provider.  The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, and profile picture, as well as other information you choose to make public on such a social media platform.",
  socialLoginsDetails:
    "We will use the information we receive only for the purposes that are described in this privacy notice or that are othrerwise made clear to you on Newsgears.  Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider.  We recommend that you review their privacy notice to understand how they collect, use, and share your personal infromation, and how you can set your privacy preferences on their sites and apps.",
  internationalInformationTransfers: "International information transfers",
  internationalInformationTransfersSummary:
    "We may transfer, store, and process your information in countries other than your own.",
  internationalInformationTransfersDetails:
    "Our servers are located in the United States.  If you are acessing Newsgears from outside the United States, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those of third-parties with whom we may share your personal information, in the United States and other countries.",
  internationalInformationTransfersDetailsFurther:
    "If you are a resident in the European Economic Area (EAA) or United Kingdom (UK), then these countries may not necessarily have data protection laws or other simliar laws as comprehensive as those in your country.  We will take all necessary measures to protected your personal information in accordance with this privacy notice and applicable law.",
  whatAreYourPrivacyRights: "What are your privacy rights?",
  yourPrivacyRightsSummary:
    "You may review, change, or terminate your account at any time.",
  yourPrivacyRightsDetails:
    "We will not distribute your personal information to outside parties without your consent.",
  yourConsent: "Your consent",
  yourConsentSummary:
    "By using our site or apps, you consent to our privacy policy.",
  doWeMakeUpdates: "Do we make updates to this notice?",
  doWeMakeUpdatesSummary:
    "Yes, we will update this notice as necessary to stay compliant with relevant laws.",
  howCanYouContactUs: "How can you contact us about this notice?",
  // image alts
  queuePageScreenshot: "Newsgears queue page screenshot",
}

export default en;
