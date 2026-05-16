import { Heart, Mail, MapPin, Phone, ShieldCheck, Users } from "lucide-react";

const imagePath = (fileName) => `/images/${fileName}`;
export const createDiscountPercent = (seed) =>
  Array.from(seed).reduce((total, character) => total + character.charCodeAt(0), 0) % 31 + 10;

const defaultTourPlanImages = [
  imagePath("package-explorer.webp"),
  imagePath("package-adventure-pro.webp"),
  imagePath("about-hikers.webp"),
  imagePath("cta-hunza-valley.webp"),
];

const createTourPlans = (destinationName, primaryImage, primaryAlt) => {
  const images = [primaryImage, ...defaultTourPlanImages];
  const alt = primaryAlt || `${destinationName} tour scenery`;

  return [
    {
      name: `${destinationName} Day Tour`,
      duration: "1 Day",
      image: images[0],
      alt,
      discountPercent: createDiscountPercent(`${destinationName}-day-tour`),
      description: `A focused one-day ${destinationName} plan with guided sightseeing, key viewpoints, and efficient local transfers.`,
    },
    {
      name: `${destinationName} Short Escape`,
      duration: "2 Days / 1 Night",
      image: images[1],
      alt: `${destinationName} short escape itinerary`,
      discountPercent: createDiscountPercent(`${destinationName}-short-escape`),
      description: `A relaxed two-day ${destinationName} itinerary with an overnight stay, scenic stops, and flexible pacing.`,
    },
    {
      name: `${destinationName} Explorer`,
      duration: "5 Days / 4 Nights",
      image: images[2],
      alt: `${destinationName} explorer tour itinerary`,
      discountPercent: createDiscountPercent(`${destinationName}-explorer`),
      description: `A deeper five-day ${destinationName} experience covering signature sights, local food, and comfortable daily travel.`,
    },
    {
      name: `${destinationName} Complete Tour`,
      duration: "8 Days / 7 Nights",
      image: images[3],
      alt: `${destinationName} complete tour itinerary`,
      discountPercent: createDiscountPercent(`${destinationName}-complete-tour`),
      description: `An extended eight-day ${destinationName} plan for travelers who want more time, broader coverage, and a slower rhythm.`,
    },
  ];
};

export const pageKeys = [
  "home",
  "locations",
  "loc-skardu",
  "loc-gilgit",
  "loc-kashmir",
  "loc-chitral",
  "loc-swat",
  "loc-malam-jabba",
  "loc-mingora",
  "loc-naran-kaghan",
  "loc-nathiagali",
  "loc-hunza",
  "packages",
  "rent",
  "about",
  "contact",
];

export const navigationLinks = [
  { href: "#home", label: "Home", page: "home" },
  { href: "#locations", label: "Destinations", page: "locations" },
  { href: "#packages", label: "Packages", page: "packages" },
  { href: "#rent", label: "Rent", page: "rent" },
  { href: "#about", label: "About", page: "about" },
  { href: "#contact", label: "Contact", page: "contact", isCta: true },
];

export const hero = {
  image: imagePath("hero-video-poster.webp"),
  alt: "Snowy mountain valley at sunset",
  tagline: "Explore Northern Pakistan",
  title: "Discover the Untamed Beauty of Northern Pakistan",
  description:
    "From the majestic peaks of Skardu to the lush valleys of Swat, explore 10 breathtaking destinations with expertly crafted tour plans.",
  ctaLabel: "Explore Destinations",
  ctaHref: "#locations",
};

export const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "4.9★", label: "Average Rating" },
  { value: "8+", label: "Years Experience" },
];

export const packages = [
  {
    id: "explorer",
    name: "Explorer",
    duration: "5 Days / 4 Nights",
    price: "PKR 45,000",
    pricePrefix: "From",
    image: imagePath("package-explorer.webp"),
    alt: "A red jeep traversing rocky terrains in Gilgit-Baltistan",
    discountPercent: createDiscountPercent("explorer"),
    description:
      "Perfect introduction to Northern Pakistan, visit iconic spots with comfortable hotel stays and guided tours.",
  },
  {
    id: "adventure-pro",
    name: "Adventure Pro",
    duration: "7 Days / 6 Nights",
    price: "PKR 78,000",
    pricePrefix: "From",
    popular: true,
    image: imagePath("package-adventure-pro.webp"),
    alt: "A camper enjoys sunrise in a mountain setting with a tent",
    discountPercent: createDiscountPercent("adventure-pro"),
    description:
      "The full experience, camping, jeep safaris, guided treks, and hidden valleys across multiple destinations.",
  },
  {
    id: "premium-expedition",
    name: "Premium Expedition",
    duration: "10 Days / 9 Nights",
    price: "PKR 150,000",
    pricePrefix: "From",
    image: imagePath("package-premium-expedition.webp"),
    alt: "A rustic wooden balcony of a lodge against snowy alpine mountains",
    discountPercent: createDiscountPercent("premium-expedition"),
    description:
      "Luxury adventure, private guides, premium lodges, exclusive access, and multi-destination coverage.",
  },
];

export const popularLocationPackages = [
  {
    id: "skardu-choice",
    name: "Skardu Signature Tour",
    location: "Skardu",
    duration: "5 Days / 4 Nights",
    image: imagePath("location-skardu.webp"),
    alt: "Autumn scenery at Lower Kachura Lake with mountains in Skardu",
    badge: "Most Requested",
    discountPercent: createDiscountPercent("skardu-choice"),
    description:
      "A balanced Skardu plan covering lakes, fort viewpoints, the cold desert, and relaxed sightseeing with private transport.",
    highlights: ["Upper Kachura", "Shangrila", "Cold Desert"],
    detailHref: "#loc-skardu",
  },
  {
    id: "hunza-choice",
    name: "Hunza Valley Classic",
    location: "Hunza",
    duration: "5 Days / 4 Nights",
    image: imagePath("cta-hunza-valley.webp"),
    alt: "Stunning aerial view of Hunza Valley with autumn foliage and a winding river",
    badge: "Scenic Favorite",
    discountPercent: createDiscountPercent("hunza-choice"),
    description:
      "A photography-friendly Hunza route with forts, valley viewpoints, Attabad Lake, and slow evenings in Karimabad.",
    highlights: ["Baltit Fort", "Attabad Lake", "Rakaposhi View"],
    detailHref: "#loc-hunza",
  },
  {
    id: "swat-choice",
    name: "Swat Family Escape",
    location: "Swat",
    duration: "4 Days / 3 Nights",
    image: imagePath("location-swat.webp"),
    alt: "Serene valley landscape with a meandering river surrounded by majestic mountains",
    badge: "Family Pick",
    discountPercent: createDiscountPercent("swat-choice"),
    description:
      "A comfortable Swat package built around Mingora, Fizagat, Malam Jabba, river stops, and easy mountain drives.",
    highlights: ["Mingora", "Malam Jabba", "Fizagat"],
    detailHref: "#loc-swat",
  },
  {
    id: "naran-kaghan-choice",
    name: "Naran Kaghan Lakes Route",
    location: "Naran Kaghan",
    duration: "5 Days / 4 Nights",
    image: imagePath("location-naran-kaghan.webp"),
    alt: "Serene lake surrounded by mountains in Naran, Pakistan",
    badge: "Summer Route",
    discountPercent: createDiscountPercent("naran-kaghan-choice"),
    description:
      "A classic summer road-trip package for alpine lakes, riverside stays, mountain viewpoints, and relaxed family travel.",
    highlights: ["Lake Views", "River Valley", "Babusar Route"],
    detailHref: "#loc-naran-kaghan",
  },
];

export const reasons = [
  {
    title: "Safety First",
    description: "Licensed guides, insured trips, and emergency preparedness on every tour.",
    icon: ShieldCheck,
  },
  {
    title: "Local Expertise",
    description: "Born and raised in these mountains, we know every hidden gem and secret trail.",
    icon: MapPin,
  },
  {
    title: "Eco-Friendly",
    description: "Sustainable tourism that preserves nature and supports local communities.",
    icon: Heart,
  },
  {
    title: "Small Groups",
    description: "Intimate group sizes for a personalized and authentic experience.",
    icon: Users,
  },
];

export const testimonials = [
  {
    quote:
      "The Skardu trip was life-changing. The team took care of everything, we just soaked in the views. World-class service!",
    author: "Ahmed K., Lahore",
  },
  {
    quote:
      "From Hunza to Chitral, every moment was magical. Can't wait to come back with my family!",
    author: "Sarah M., Islamabad",
  },
];

export const pageImages = {
  about: {
    src: imagePath("about-hikers.webp"),
    alt: "Group of hikers trekking with snow-capped mountains in the background",
  },
  ctaBackground: {
    src: imagePath("cta-hunza-valley.webp"),
    alt: "Stunning aerial view of Hunza Valley with autumn foliage and a winding river",
  },
  locationsHero: {
    src: imagePath("locations-hero.webp"),
    alt: "Breathtaking view of Hunza Valley at sunset with lush greenery and majestic mountains",
  },
  packagesHero: {
    src: imagePath("about-hikers.webp"),
    alt: "Group of hikers trekking with snow-capped mountains in the background",
  },
  rentHero: {
    src: imagePath("rent-hero.webp"),
    alt: "Rugged mountains in Hunza Nagar along a winding road under a clear blue sky",
  },
  testimonialsBackground: {
    src: imagePath("testimonials-night-sky.webp"),
    alt: "A stunning view of the Milky Way galaxy filling the night sky",
  },
};

export const locations = [
  {
    id: "skardu",
    page: "loc-skardu",
    name: "Skardu",
    image: imagePath("location-skardu.webp"),
    alt: "Autumn scenery at Lower Kachura Lake with mountains in Skardu",
    description: "Land of lakes, deserts, and towering peaks, the gateway to K2 and the Karakoram.",
  },
  {
    id: "gilgit",
    page: "loc-gilgit",
    name: "Gilgit",
    image: imagePath("location-gilgit.webp"),
    alt: "Captivating view of Gilgit's river with rocky mountains in vibrant colors",
    description: "The heart of Gilgit-Baltistan, where three mighty mountain ranges converge.",
  },
  {
    id: "kashmir",
    page: "loc-kashmir",
    name: "Kashmir",
    image: imagePath("location-kashmir.webp"),
    alt: "Turquoise river winding through a lush green valley surrounded by mountains",
    description: "Paradise on Earth, emerald valleys, rushing rivers, and timeless beauty.",
  },
  {
    id: "chitral",
    page: "loc-chitral",
    name: "Chitral",
    image: imagePath("location-chitral.webp"),
    alt: "Lush greenery and mountains under a clear sky in Kalash Valley, Pakistan",
    description: "Home of the Kalash people, ancient culture meets dramatic Hindu Kush peaks.",
  },
  {
    id: "swat",
    page: "loc-swat",
    name: "Swat",
    image: imagePath("location-swat.webp"),
    alt: "Serene valley landscape with a meandering river surrounded by majestic mountains",
    description: "The Switzerland of Pakistan, waterfalls, alpine meadows, and Buddhist heritage.",
  },
  {
    id: "malam-jabba",
    page: "loc-malam-jabba",
    name: "Malam Jabba",
    image: imagePath("location-malam-jabba.webp"),
    alt: "Lush green Malam Jabba hills and forest under an overcast sky",
    description: "A highland escape in Swat with pine forests, cool weather, and wide mountain views.",
  },
  {
    id: "mingora",
    page: "loc-mingora",
    name: "Mingora",
    image: imagePath("location-mingora.webp"),
    alt: "Colorful public transport and market activity in Mingora, Swat",
    description: "Swat's busy urban base for bazaars, food stops, cultural walks, and valley transfers.",
  },
  {
    id: "naran-kaghan",
    page: "loc-naran-kaghan",
    name: "Naran Kaghan",
    image: imagePath("location-naran-kaghan.webp"),
    alt: "Serene lake surrounded by mountains in Naran, Pakistan",
    description: "A classic mountain route for lake views, riverside stays, alpine valleys, and summer road trips.",
  },
  {
    id: "nathiagali",
    page: "loc-nathiagali",
    name: "Nathia Gali",
    image: imagePath("location-nathiagali.webp"),
    alt: "Nathia Gali's rolling hills and majestic trees under a blue sky",
    description: "Misty pine forests and cool mountain air, a perfect hill station retreat.",
  },
  {
    id: "hunza",
    page: "loc-hunza",
    name: "Hunza",
    image: imagePath("cta-hunza-valley.webp"),
    alt: "Stunning aerial view of Hunza Valley with autumn foliage and a winding river",
    description: "Legendary valley of longevity, autumn colors, ancient forts, and Rakaposhi views.",
  },
];

export const locationDetails = [
  {
    page: "loc-skardu",
    name: "Skardu",
    subtitle: "Gateway to K2 and the Karakoram Range",
    heroImage: imagePath("location-skardu-hero.webp"),
    heroAlt: "Scenic view of a tranquil lake with majestic mountains in Skardu",
    aboutTitle: "About Skardu",
    about:
      "Skardu is a breathtaking valley nestled at 2,500m elevation in Gilgit-Baltistan. Surrounded by the mighty Karakoram Range, it features turquoise lakes like Shangrila and Upper Kachura, the surreal Katpana Cold Desert where sand dunes meet snow-capped peaks, the vast Deosai Plains, and ancient forts overlooking the Indus River. The landscape shifts from lush green orchards to dramatic rocky gorges, making it one of the most visually diverse destinations in Pakistan.",
    plans: createTourPlans(
      "Skardu",
      imagePath("location-skardu.webp"),
      "Autumn scenery at Lower Kachura Lake with mountains in Skardu",
    ),
  },
  {
    page: "loc-gilgit",
    name: "Gilgit",
    subtitle: "Where Karakoram, Himalaya & Hindu Kush Meet",
    heroImage: imagePath("location-gilgit-hero.webp"),
    heroAlt: "Explore the snowy mountains of Gilgit by SUV",
    aboutTitle: "About Gilgit",
    about:
      "Gilgit is the capital of Gilgit-Baltistan and sits at the confluence of the Gilgit and Hunza rivers. It is where the Karakoram, Himalaya, and Hindu Kush ranges converge. The area features dramatic river gorges, ancient rock carvings at Kargah Buddha, Naltar Valley with its colorful lakes, and the Karakoram Highway. The bazaars are vibrant with local crafts, dried fruits, and gemstones.",
    plans: createTourPlans(
      "Gilgit",
      imagePath("location-gilgit.webp"),
      "Captivating view of Gilgit's river with rocky mountains in vibrant colors",
    ),
  },
  {
    page: "loc-kashmir",
    name: "Kashmir",
    subtitle: "Paradise on Earth, Neelum & Beyond",
    heroImage: imagePath("location-kashmir-hero.webp"),
    heroAlt: "Beautiful mountainous landscape in Arang Kel with lush greenery and cottages",
    aboutTitle: "About Kashmir",
    about:
      "Azad Kashmir is a land of emerald valleys, rushing rivers, and terraced hillsides. Neelum Valley stretches alongside the Neelum River with villages like Keran, Sharda, and Arang Kel. The region also features Rawalakot, Banjosa Lake, Red Fort of Muzaffarabad, and Toli Pir, a hilltop meadow with panoramic views of snow-clad peaks.",
    plans: createTourPlans(
      "Kashmir",
      imagePath("location-kashmir.webp"),
      "Turquoise river winding through a lush green valley surrounded by mountains",
    ),
  },
  {
    page: "loc-chitral",
    name: "Chitral",
    subtitle: "Ancient Kalash Culture & Hindu Kush Peaks",
    heroImage: imagePath("location-chitral.webp"),
    heroAlt: "Lush greenery and mountains under a clear sky in Kalash Valley, Pakistan",
    aboutTitle: "About Chitral",
    about:
      "Chitral is a remote, culturally rich district bordered by Afghanistan and the Hindu Kush mountains. It is famous for the Kalash Valley, home to the ancient Kalash people with unique traditions, colorful festivals, and distinctive wooden architecture. The region features Tirich Mir, Shandur Pass, and dramatic gorges carved by the Chitral River.",
    plans: createTourPlans(
      "Chitral",
      imagePath("location-chitral.webp"),
      "Lush greenery and mountains under a clear sky in Kalash Valley, Pakistan",
    ),
  },
  {
    page: "loc-swat",
    name: "Swat",
    subtitle: "The Switzerland of Pakistan",
    heroImage: imagePath("location-swat-hero.webp"),
    heroAlt: "Breathtaking view of mountains and valley in Kalam, Pakistan",
    aboutTitle: "About Swat",
    about:
      "Swat Valley is a lush paradise of emerald rivers, cascading waterfalls, and alpine meadows. The valley features Mingora, ancient Buddhist ruins of Butkara, Fizagat Park, Malam Jabba, Kalam Valley, Ushu Forest, and Mahodand Lake surrounded by snow-covered peaks.",
    plans: createTourPlans(
      "Swat",
      imagePath("location-swat.webp"),
      "Serene valley landscape with a meandering river surrounded by majestic mountains",
    ),
  },
  {
    page: "loc-malam-jabba",
    name: "Malam Jabba",
    subtitle: "Pine Forests, Hill Views & Cool Swat Air",
    heroImage: imagePath("location-malam-jabba.webp"),
    heroAlt: "Lush green Malam Jabba hills and forest under an overcast sky",
    aboutTitle: "About Malam Jabba",
    about:
      "Malam Jabba is a scenic hill station in Swat Valley known for pine-covered slopes, cool mountain weather, and broad views across the Hindu Kush foothills. It works well as a dedicated mountain stop for families, winter travelers, and visitors who want Swat scenery without a long trek.",
    plans: createTourPlans(
      "Malam Jabba",
      imagePath("location-malam-jabba.webp"),
      "Lush green Malam Jabba hills and forest under an overcast sky",
    ),
  },
  {
    page: "loc-mingora",
    name: "Mingora",
    subtitle: "Swat's Bazaar, Culture & Transfer Hub",
    heroImage: imagePath("location-mingora.webp"),
    heroAlt: "Colorful public transport and market activity in Mingora, Swat",
    aboutTitle: "About Mingora",
    about:
      "Mingora is the main commercial center of Swat and a practical base for travelers moving between the valley's cultural sites, bazaars, hotels, and mountain routes. It is useful for food stops, market walks, Swat Museum visits, and short transfers toward Malam Jabba, Kalam, and Bahrain.",
    plans: createTourPlans(
      "Mingora",
      imagePath("location-mingora.webp"),
      "Colorful public transport and market activity in Mingora, Swat",
    ),
  },
  {
    page: "loc-naran-kaghan",
    name: "Naran Kaghan",
    subtitle: "Alpine Lakes, River Valleys & Babusar Views",
    heroImage: imagePath("location-naran-kaghan.webp"),
    heroAlt: "Serene lake surrounded by mountains in Naran, Pakistan",
    aboutTitle: "About Naran Kaghan",
    about:
      "Naran Kaghan is a classic northern Pakistan route in Mansehra District, known for lake scenery, mountain roads, river valleys, and summer-season travel toward spots like Lake Saif-ul-Muluk, Lulusar Lake, and Babusar Pass. It is ideal for road-trip packages, family holidays, and scenic photography tours.",
    plans: createTourPlans(
      "Naran Kaghan",
      imagePath("location-naran-kaghan.webp"),
      "Serene lake surrounded by mountains in Naran, Pakistan",
    ),
  },
  {
    page: "loc-nathiagali",
    name: "Nathia Gali",
    subtitle: "Misty Pine Forests & Cool Mountain Air",
    heroImage: imagePath("location-nathiagali-hero.webp"),
    heroAlt: "Serene view of a mist-covered forest with tall coniferous trees on a hillside",
    aboutTitle: "About Nathia Gali",
    about:
      "Nathia Gali is a charming hill station perched at 2,500m in the Galyat region between Murree and Abbottabad. Dense forests of pine, oak, and walnut trees blanket the hillsides, often shrouded in fog. Mukshpuri Peak, Miranjani Peak, colonial-era churches, forest trails, and the Pipeline Track make it a calm mountain retreat.",
    plans: createTourPlans(
      "Nathia Gali",
      imagePath("location-nathiagali.webp"),
      "Nathia Gali's rolling hills and majestic trees under a blue sky",
    ),
  },
  {
    page: "loc-hunza",
    name: "Hunza",
    subtitle: "Valley of Legends & Eternal Beauty",
    heroImage: imagePath("location-hunza-hero.webp"),
    heroAlt: "Breathtaking autumn view of Hunza Valley surrounded by Karakoram mountains",
    aboutTitle: "About Hunza",
    about:
      "Hunza Valley is one of the most photographed destinations in Pakistan. It is famous for autumn colors, ancient Baltit and Altit Forts, views of Rakaposhi and Ultar Sar, turquoise Attabad Lake, and the legendary Passu Cones. The valley is also known for its hospitality, apricots, cherries, and walnuts.",
    plans: createTourPlans(
      "Hunza",
      imagePath("cta-hunza-valley.webp"),
      "Stunning aerial view of Hunza Valley with autumn foliage and a winding river",
    ),
  },
];

export const rentals = [
  {
    id: "saloon",
    name: "Saloon",
    seats: "4 Seats",
    image: imagePath("rent-saloon.webp"),
    alt: "A white saloon car driving on a mountain road",
    description: "Comfortable sedan option for city travel, airport transfers, and family road trips.",
    price: "Contact for daily rent",
  },
  {
    id: "coaster",
    name: "Coaster",
    seats: "22-29 Seats",
    image: imagePath("rent-coaster.webp"),
    alt: "A coaster bus traveling on a scenic highway",
    description: "Large group transport for tours, family gatherings, events, and long-distance routes.",
    price: "Contact for daily rent",
  },
  {
    id: "grand-cabin",
    name: "Grand Cabin",
    seats: "10-14 Seats",
    image: imagePath("rent-grand-cabin.webp"),
    alt: "A passenger van suitable for group travel",
    description: "Spacious cabin option for comfortable group travel with luggage space.",
    price: "Contact for daily rent",
  },
  {
    id: "hiace",
    name: "Hiace",
    seats: "12-15 Seats",
    image: imagePath("rent-hiace.webp"),
    alt: "A white Hiace van parked in a rugged landscape",
    description: "Reliable van for medium-size groups, route transfers, and multi-day tours.",
    price: "Contact for daily rent",
  },
  {
    id: "brv",
    name: "BR-V",
    seats: "6-7 Seats",
    image: imagePath("rent-brv.webp"),
    alt: "A compact SUV suitable for family travel",
    description: "Flexible family vehicle for city travel, airport transfers, and comfortable day trips.",
    price: "Contact for daily rent",
  },
  {
    id: "prado",
    name: "Prado",
    seats: "5-7 Seats",
    image: imagePath("rent-prado.webp"),
    alt: "A 4x4 SUV on rocky mountain terrain",
    description: "Premium SUV for rougher mountain roads, private tours, and remote valleys.",
    price: "Contact for daily rent",
  },
  {
    id: "land-cruiser",
    name: "Land Cruiser",
    seats: "5-7 Seats",
    image: imagePath("rent-land-cruiser.webp"),
    alt: "A Land Cruiser style 4x4 vehicle on mountain terrain",
    description: "Strong 4x4 choice for high-altitude routes, jeep tracks, and rugged travel.",
    price: "Contact for daily rent",
  },
  {
    id: "apv",
    name: "APV",
    seats: "7-8 Seats",
    image: imagePath("rent-apv.webp"),
    alt: "A compact passenger van for family and group travel",
    description: "Practical van for families, small groups, and comfortable local transfers.",
    price: "Contact for daily rent",
  },
  {
    id: "wagonr",
    name: "WagonR",
    seats: "4 Seats",
    image: imagePath("rent-wagonr.webp"),
    alt: "A compact hatchback car for city and highway travel",
    description: "Efficient compact car for city rides, short trips, and budget-friendly travel.",
    price: "Contact for daily rent",
  },
  {
    id: "civic",
    name: "Civic",
    seats: "4 Seats",
    image: imagePath("rent-civic.webp"),
    alt: "A sedan car suitable for comfortable highway travel",
    description: "Comfort-focused sedan for business trips, couples, and highway travel.",
    price: "Contact for daily rent",
  },
  {
    id: "grande",
    name: "Grande",
    seats: "4 Seats",
    image: imagePath("rent-grande.webp"),
    alt: "A premium sedan car for private travel",
    description: "Premium sedan option for private transfers, family trips, and smooth routes.",
    price: "Contact for daily rent",
  },
];

export const contactPhone = "+923465056656";
export const contactPhoneDisplay = "+92 346 505 6656";
export const headOfficeMapUrl = "https://maps.app.goo.gl/wKuvtHdCcDwJ4J2C6";
export const headOfficeAddress = "Next to Monal, Sakhi Plaza, Murree Rd, Saddar, Rawalpindi, 46000, Pakistan";

export const contactDetails = [
  { label: contactPhoneDisplay, icon: Phone, href: `tel:${contactPhone}` },
  { label: "abidtravels1122@gmail.com", icon: Mail, href: "mailto:abidtravels1122@gmail.com" },
  { label: `Head Office: ${headOfficeAddress}`, icon: MapPin, href: headOfficeMapUrl, external: true },
];

export const contactOptions = [
  "Explorer (5 Days)",
  "Adventure Pro (7 Days)",
  "Premium Expedition (10 Days)",
  "Vehicle Rental",
  "Custom / Other",
];
