import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

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
    <div className="min-h-screen bg-background py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-10 min-h-[calc(100vh-4rem)]">
              <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

              <div className="mt-8">
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
