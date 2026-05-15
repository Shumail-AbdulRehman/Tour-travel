import { useEffect, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { WhatsAppButton } from "./components/WhatsAppButton.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LocationDetailPage } from "./pages/LocationDetailPage.jsx";
import { LocationsPage } from "./pages/LocationsPage.jsx";
import { PackagesPage } from "./pages/PackagesPage.jsx";
import { RentPage } from "./pages/RentPage.jsx";
import { locationDetails, pageKeys } from "./data/siteData.js";
import { useFadeUpObserver } from "./hooks/useFadeUpObserver.js";

const pageComponents = {
  home: HomePage,
  locations: LocationsPage,
  packages: PackagesPage,
  rent: RentPage,
  about: AboutPage,
  contact: ContactPage,
};

function getActivePage() {
  const hash = window.location.hash.replace("#", "");
  return pageKeys.includes(hash) ? hash : "home";
}

export default function App() {
  const [activePage, setActivePage] = useState(getActivePage);

  useFadeUpObserver(activePage);

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getActivePage();
      setActivePage(nextPage);
      window.scrollTo({ top: 0, left: 0 });
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const destination = locationDetails.find((location) => location.page === activePage);
  const ActivePage = pageComponents[activePage];
  const activeNavPage = activePage.startsWith("loc-") ? "locations" : activePage;

  return (
    <div className="flex min-h-screen flex-col bg-navy-50 font-body text-slate-900">
      <Navbar activePage={activeNavPage} />
      <main className="flex-1">
        {destination ? <LocationDetailPage destination={destination} /> : <ActivePage />}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
