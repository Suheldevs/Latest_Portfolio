import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import DotGridBackground from "@/components/DotGridBackground";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  // Per-section title + GA4 virtual page view
  useEffect(() => {
    const label = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);
    document.title = `Mohd Suhel — ${label}`;
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.("event", "page_view", {
      page_title: label,
      page_location: `${window.location.origin}/#${activeSection}`,
    });
  }, [activeSection]);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-background py-4 lg:py-6 px-4 lg:px-6">
      <DotGridBackground />
      <div className="relative z-10 max-w-7xl mx-auto lg:h-full">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-full">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0 lg:h-full">
            <div className="bg-card border border-border rounded-2xl p-5 lg:p-7 lg:h-full flex flex-col">
              <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

              {/* Scrolls internally on desktop; page scrolls normally on mobile */}
              <div className="mt-4 lg:mt-5 flex-1 min-h-0 lg:overflow-y-auto custom-scrollbar lg:pr-3 lg:-mr-4">
                {renderSection()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
