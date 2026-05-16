import {
  contactPhone,
  contactPhoneDisplay,
  headOfficeAddress,
  headOfficeMapUrl,
  hero as legacyHero,
  locationDetails,
  locations,
  packages as legacyPackages,
  pageImages,
  popularLocationPackages,
  reasons,
  rentals,
  testimonials,
} from "../data/siteData.js";

const destinationEnhancements = {
  skardu: {
    metaDescription:
      "Compare Skardu tour packages, best travel months, private trip ideas, and route planning advice for lakes, forts, deserts, and mountain scenery.",
    bestTime: "May to October for open roads, lake visits, Deosai access, and stable sightseeing conditions.",
    idealFor: ["Families", "Honeymoon trips", "Photography tours", "Private road adventures"],
    highlights: ["Shangrila Resort", "Upper Kachura Lake", "Katpana Cold Desert", "Shigar Fort", "Deosai approach"],
    travelNotes: [
      "Plan extra buffer time for mountain road conditions and weather changes, especially if you are combining Skardu with longer northern routes.",
      "Skardu works well for both relaxed sightseeing and more ambitious photography-focused tours because the scenery changes dramatically within short driving distances.",
      "Travelers who want a smoother pace usually stay at least four nights so the trip does not feel like back-to-back driving.",
    ],
    localAngle:
      "Among Northern Pakistan tour routes, Skardu stands out because it combines alpine lakes, desert terrain, heritage forts, and dramatic Karakoram backdrops in one destination. That makes it one of the strongest choices for travelers comparing honeymoon tours, family travel packages, and scenic private trips.",
    related: ["hunza", "gilgit", "kashmir"],
  },
  gilgit: {
    metaDescription:
      "Explore Gilgit travel planning, route ideas, mountain viewpoints, cultural stops, and multi-day northern Pakistan itineraries with private transport.",
    bestTime: "April to October for easier highway travel, valley access, and clearer mountain viewpoints.",
    idealFor: ["Road-trip travelers", "Cultural explorers", "Transit-based northern tours", "Short valley extensions"],
    highlights: ["Kargah Buddha", "Naltar Valley approach", "Karakoram Highway access", "Bazaar district", "River viewpoints"],
    travelNotes: [
      "Gilgit is often strongest as a strategic overnight base inside longer northern Pakistan tours because it connects well to Hunza, Naltar, and Skardu-bound travel planning.",
      "Travelers who enjoy local markets, handicrafts, and regional food usually appreciate giving Gilgit more than just a transit stop.",
      "If you are comparing destinations for convenience, Gilgit offers efficient onward access and useful logistics for private family tours.",
    ],
    localAngle:
      "Gilgit is less about one iconic postcard stop and more about travel flow, regional culture, and access. It is a practical anchor for travelers who want a smoother Northern Pakistan package instead of a rushed point-to-point itinerary.",
    related: ["hunza", "skardu", "naran-kaghan"],
  },
  kashmir: {
    metaDescription:
      "Review Kashmir tour ideas, scenic valley planning, private family travel routes, and seasonal advice for Neelum Valley and surrounding viewpoints.",
    bestTime: "April to October for green valleys, river views, and more comfortable road access across major sightseeing points.",
    idealFor: ["Families", "Couples", "Nature-focused holidays", "Calmer scenic road trips"],
    highlights: ["Neelum Valley", "Sharda", "Keran viewpoints", "Toli Pir", "Banjosa Lake"],
    travelNotes: [
      "Kashmir routes are usually best when paced gently, with more time reserved for valley drives, riverside viewpoints, and overnight stays rather than packing too many stops into one day.",
      "It is a strong option for families and couples who want greenery, cooler weather, and comfortable sightseeing without needing technical trekking.",
      "Because weather patterns can shift quickly in hill regions, itinerary flexibility improves the overall experience.",
    ],
    localAngle:
      "For travelers searching for a softer, greener alternative to high-altitude northern routes, Kashmir offers a more restful style of holiday. It fits well for honeymoon tours, family trips, and scenic private packages built around river valleys and slower pacing.",
    related: ["nathiagali", "swat", "naran-kaghan"],
  },
  chitral: {
    metaDescription:
      "Plan Chitral tours with culture-led itineraries, Kalash Valley travel ideas, mountain route notes, and custom private package guidance.",
    bestTime: "May to October for cultural touring, mountain scenery, and better overland access to key stops.",
    idealFor: ["Culture-led travel", "Adventure-minded couples", "Photography tours", "Custom long-distance trips"],
    highlights: ["Kalash Valleys", "Chitral town", "Hindu Kush views", "Traditional wooden architecture", "Festival-season travel"],
    travelNotes: [
      "Chitral rewards travelers who want a more distinctive cultural route rather than a standard sightseeing loop.",
      "Private planning matters more here because road times, weather, and local events can significantly affect daily pacing.",
      "Travelers interested in Kalash culture should structure their trip around respect, timing, and overnight positioning rather than trying to rush in and out.",
    ],
    localAngle:
      "Chitral performs best as a custom travel product for visitors who want heritage, mountain drama, and route character. It is not the easiest destination, but it can be one of the most memorable for travelers who value culture and depth over convenience.",
    related: ["swat", "gilgit", "hunza"],
  },
  swat: {
    metaDescription:
      "Compare Swat family tours, scenic road-trip packages, travel timing, and route planning for valleys, rivers, forests, and hill stations.",
    bestTime: "March to October for river scenery, green valleys, family holidays, and mountain resort access.",
    idealFor: ["Families", "Weekend escapes", "Summer road trips", "Couples wanting easy mountain scenery"],
    highlights: ["Mingora", "Fizagat", "Malam Jabba", "Kalam direction", "River and valley viewpoints"],
    travelNotes: [
      "Swat is one of the easiest northern destinations to sell and to travel because it combines strong scenery with a friendlier road profile for families.",
      "It works especially well for summer holidays, short honeymoon escapes, and first-time northern Pakistan tours where comfort matters as much as scenery.",
      "Travelers extending beyond Swat should build in enough rest time between valley drives to keep the trip enjoyable.",
    ],
    localAngle:
      "Swat sits in a sweet spot between accessibility and scenery. For many travelers it is the most practical family package option when compared with longer, higher-altitude routes deeper into Gilgit-Baltistan.",
    related: ["malam-jabba", "mingora", "nathiagali"],
  },
  "malam-jabba": {
    metaDescription:
      "Discover Malam Jabba tour planning, resort-style mountain escapes, family travel ideas, and route guidance inside the wider Swat region.",
    bestTime: "Year-round, with green scenery in warmer months and a cooler mountain atmosphere for winter visitors.",
    idealFor: ["Families", "Short couples trips", "Weekend mountain stays", "Swat add-on itineraries"],
    highlights: ["Mountain viewpoints", "Pine forests", "Cool weather", "Resort-style stays", "Easy scenic extensions from Swat"],
    travelNotes: [
      "Malam Jabba is best positioned as a focused hill escape or as a polished extension inside a wider Swat itinerary.",
      "Travelers who prefer shorter drives and cooler weather often like Malam Jabba more than longer valley circuits.",
      "It is particularly suitable for guests who want a cleaner, slower mountain stay with minimal logistical complexity.",
    ],
    localAngle:
      "Malam Jabba is not about maximum sightseeing density. It performs best for travelers who want atmosphere, cooler temperatures, and a higher-comfort hill station experience inside the Swat region.",
    related: ["swat", "mingora", "nathiagali"],
  },
  mingora: {
    metaDescription:
      "Use Mingora as a practical Swat travel base for hotels, local markets, museum stops, and efficient transfers toward surrounding mountain routes.",
    bestTime: "March to October for easier movement across Swat and more comfortable urban-to-valley transfers.",
    idealFor: ["Transit stays", "Short cultural stops", "Family logistics", "Market and museum visits"],
    highlights: ["Local bazaars", "Hotel access", "Swat Museum area", "Food stops", "Transfer base for surrounding routes"],
    travelNotes: [
      "Mingora is not usually the hero destination, but it matters operationally because it can simplify hotel selection, meal stops, and onward movement inside Swat packages.",
      "For family travelers and large groups, a well-planned Mingora base can make the rest of the itinerary more comfortable.",
      "Combining Mingora with Malam Jabba or broader Swat touring often produces better pacing than trying to sleep in a new place every night.",
    ],
    localAngle:
      "From an SEO and sales perspective, Mingora is a useful support page because it answers practical trip-planning intent. People searching it are often closer to converting because they are looking for logistics, not just inspiration.",
    related: ["swat", "malam-jabba", "naran-kaghan"],
  },
  "naran-kaghan": {
    metaDescription:
      "Review Naran Kaghan travel ideas, lake routes, summer family packages, and private northern Pakistan road-trip planning before you book.",
    bestTime: "June to September for open passes, alpine lakes, and the classic summer road-trip season.",
    idealFor: ["Families", "Summer holidays", "Road-trip groups", "Scenic first-time travelers"],
    highlights: ["Lake Saif-ul-Muluk region", "Lulusar side", "Babusar direction", "Riverside stays", "Alpine viewpoints"],
    travelNotes: [
      "Naran Kaghan is highly seasonal, so timing is one of the main planning variables and should be made clear in package positioning.",
      "This route is ideal for families and first-time travelers who want scenic returns without the longer commitment of deep northern circuits.",
      "Because the area is so popular in peak season, hotel and vehicle planning should be handled early for smoother execution.",
    ],
    localAngle:
      "Naran Kaghan is one of the strongest short-format northern Pakistan products because it is visual, seasonal, and easy to understand. It converts well for summer traffic looking for lake views, road trips, and family packages.",
    related: ["nathiagali", "kashmir", "swat"],
  },
  nathiagali: {
    metaDescription:
      "Plan Nathia Gali trips with cool-weather hill station advice, family and couple travel ideas, and short-route private getaway options.",
    bestTime: "March to November for forest walks, misty viewpoints, and hill-station weather without extreme road complexity.",
    idealFor: ["Weekend escapes", "Couples", "Families", "Short scenic breaks from major cities"],
    highlights: ["Mukshpuri access", "Miranjani area", "Pipeline Track", "Colonial-era atmosphere", "Cool pine forests"],
    travelNotes: [
      "Nathia Gali is one of the best quick-getaway pages for travelers starting from Rawalpindi or Islamabad because the route is shorter and easier to explain.",
      "It fits couples, small families, and guests looking for a refined hill-station mood rather than a longer expedition.",
      "When combined with Murree-side planning or Kashmir-facing itineraries, Nathia Gali becomes a strong short-break product.",
    ],
    localAngle:
      "Nathia Gali performs well for near-city organic search demand. It appeals to travelers who want cooler weather, easy planning, and a premium short holiday feel without committing to a deep north itinerary.",
    related: ["kashmir", "naran-kaghan", "swat"],
  },
  hunza: {
    metaDescription:
      "Compare Hunza Valley tour packages, autumn travel ideas, family and honeymoon itineraries, and route planning for private northern Pakistan holidays.",
    bestTime: "April to October, with spring blossoms and autumn colors both performing strongly for travel demand.",
    idealFor: ["Honeymoon tours", "Family holidays", "Photography trips", "Premium private travel"],
    highlights: ["Baltit Fort", "Altit Fort", "Attabad Lake", "Passu Cones", "Rakaposhi viewpoints"],
    travelNotes: [
      "Hunza is one of the most commercially valuable destinations because it serves romance-led travel, family trips, autumn photography, and premium private touring all at once.",
      "Guests often benefit from at least four to five nights so they can enjoy valley movement, lakes, forts, and viewpoints without turning the tour into constant transit.",
      "Hunza combines very strong visual appeal with broad audience fit, which is why it should receive prominent internal links across the site.",
    ],
    localAngle:
      "For travelers searching high-intent Northern Pakistan keywords, Hunza is often the flagship destination. It has the strongest balance of recognizability, scenery, and itinerary flexibility for both family tours and honeymoon packages.",
    related: ["gilgit", "skardu", "naran-kaghan"],
  },
};

const locationCardMap = new Map(locations.map((location) => [location.page, location]));

const details = locationDetails.map((detail) => {
  const slug = detail.page.replace("loc-", "");
  const card = locationCardMap.get(detail.page);
  const enhancement = destinationEnhancements[slug];

  return {
    slug,
    pageKey: detail.page,
    href: `/locations/${slug}`,
    name: detail.name,
    subtitle: detail.subtitle,
    image: card?.image ?? detail.heroImage,
    imageAlt: card?.alt ?? detail.heroAlt,
    heroImage: detail.heroImage,
    heroAlt: detail.heroAlt,
    summary: card?.description ?? detail.about,
    aboutTitle: detail.aboutTitle,
    about: detail.about,
    metaTitle: `${detail.name} Tour Packages, Travel Guide & Private Trips`,
    metaDescription: enhancement.metaDescription,
    bestTime: enhancement.bestTime,
    idealFor: enhancement.idealFor,
    highlights: enhancement.highlights,
    travelNotes: enhancement.travelNotes,
    localAngle: enhancement.localAngle,
    related: enhancement.related,
    plans: detail.plans.map((plan) => ({
      ...plan,
      href: "/contact",
    })),
  };
});

export const siteSettings = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.abidtourandtravels.pk",
  locale: "en-PK",
};

export const business = {
  name: "Abid Tour & Travels",
  legalName: "Abid Tour & Travels",
  email: "Abidrasheed.78608@gmail.com",
  phone: contactPhone,
  phoneDisplay: contactPhoneDisplay,
  whatsappNumber: contactPhone.replace(/\D/g, ""),
  address: headOfficeAddress,
  mapUrl: headOfficeMapUrl,
  city: "Rawalpindi",
  region: "Punjab",
  postalCode: "46000",
  country: "PK",
  priceRange: "$$",
  areaServed: ["Skardu", "Hunza", "Gilgit", "Swat", "Kashmir", "Naran Kaghan", "Nathia Gali", "Chitral"],
};

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/locations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/rent", label: "Rent" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const homeHero = {
  eyebrow: "Northern Pakistan Tour Planning",
  title: "Private tours, family packages, and scenic road trips across Northern Pakistan.",
  description:
    "Plan Skardu, Hunza, Swat, Kashmir, Naran Kaghan, and custom northern routes with a travel agency focused on realistic pacing, private transport, and cleaner trip execution.",
  image: legacyHero.image,
  imageAlt: legacyHero.alt,
  primaryCta: { href: "/locations", label: "Explore Destinations" },
  secondaryCta: { href: "/contact", label: "Plan My Trip" },
};

export const pageArt = pageImages;
export const trustReasons = reasons;
export const socialProof = testimonials;

export const packages = legacyPackages.map((item) => ({
  ...item,
  href: "/contact",
  audiences:
    item.id === "explorer"
      ? ["First-time northern travelers", "Families", "Short annual holidays"]
      : item.id === "adventure-pro"
        ? ["Adventure couples", "Photography groups", "Mixed-destination tours"]
        : ["Premium private travel", "Honeymoon planning", "Long-form scenic itineraries"],
}));

export const featuredLocationPackages = popularLocationPackages.map((item) => ({
  ...item,
  href: item.detailHref.replace("#loc-", "/locations/"),
  contactHref: "/contact",
}));

export const destinationGuides = details;

export const rentalsCatalog = rentals.map((rental) => ({
  ...rental,
  href: "/contact",
}));

export const faqItems = [
  {
    question: "Which destinations are best for a first Northern Pakistan trip?",
    answer:
      "Hunza, Swat, Skardu, and Naran Kaghan are usually the strongest starting points because they balance scenery, route clarity, and broad traveler appeal.",
  },
  {
    question: "Do you arrange private family tours and honeymoon trips?",
    answer:
      "Yes. Most routes can be shaped around family pacing, private vehicles, scenic stop priorities, and comfort preferences for couples or honeymoon travelers.",
  },
  {
    question: "Can I book a vehicle with a driver instead of a full package?",
    answer:
      "Yes. The rental section covers cars, SUVs, vans, and group vehicles with drivers for transfers, city routes, and multi-day northern travel.",
  },
  {
    question: "How many days should I keep for Skardu or Hunza?",
    answer:
      "A practical starting point is four to five nights for either route if you want the trip to feel scenic rather than rushed.",
  },
  {
    question: "When should I contact the agency before traveling?",
    answer:
      "Earlier is better, especially for summer family travel, autumn Hunza demand, and any trip that needs multiple hotel nights or larger vehicles.",
  },
];

export const planningSteps = [
  {
    step: "01",
    title: "Confirm travel goals",
    description:
      "We narrow the destination, number of days, group size, vehicle fit, and pace so the itinerary starts from realistic travel conditions.",
  },
  {
    step: "02",
    title: "Shape the route",
    description:
      "The route is planned around travel hours, scenery priorities, stop timing, and the balance between comfort and coverage.",
  },
  {
    step: "03",
    title: "Book and coordinate",
    description:
      "Transport, hotel guidance, pickup planning, and travel notes are aligned so the tour is easier to execute on the road.",
  },
];

export const internalGuides = [
  {
    title: "Skardu tour packages",
    description: "Lakes, deserts, forts, and dramatic Karakoram scenery for private family trips and honeymoon travel.",
    href: "/locations/skardu",
  },
  {
    title: "Hunza Valley holidays",
    description: "Autumn color, forts, Attabad Lake, and premium private trip demand with very strong search intent.",
    href: "/locations/hunza",
  },
  {
    title: "Family travel in Swat",
    description: "A practical mountain holiday route with broad appeal and easier road access for shorter vacations.",
    href: "/locations/swat",
  },
];

export const packageBuyingGuidance = [
  "Choose shorter routes for family travelers, school breaks, and first-time northern holiday planning.",
  "Use deeper multi-day tours when photography, multiple valleys, or honeymoon pacing matter more than quick turnover.",
  "Reserve premium SUVs and larger cabins early for peak summer travel and multi-destination mountain itineraries.",
];

export function getDestinationBySlug(slug) {
  return destinationGuides.find((destination) => destination.slug === slug);
}

export function getRelatedDestinations(slug) {
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return [];
  }

  return destination.related.map((relatedSlug) => getDestinationBySlug(relatedSlug)).filter(Boolean);
}
