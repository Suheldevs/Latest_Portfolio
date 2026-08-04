import ThemeToggle from "@/components/ThemeToggle";

const navItems = ["About", "Resume", "Portfolio", "Contact"];

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const currentIndex = navItems.findIndex((item) => item.toLowerCase() === activeSection);
    const delta = e.key === "ArrowRight" ? 1 : -1;
    const next = navItems[(currentIndex + delta + navItems.length) % navItems.length];
    onNavigate(next.toLowerCase());
    e.currentTarget
      .querySelector<HTMLButtonElement>(`[data-section="${next.toLowerCase()}"]`)
      ?.focus();
  };

  return (
    <nav aria-label="Sections" className="shrink-0 flex items-center justify-between gap-2 border-b border-border -mt-1 -mx-5 lg:-mx-7 px-5 lg:px-7">
      <ThemeToggle />
      <ul role="tablist" onKeyDown={handleKeyDown} className="flex flex-wrap items-center gap-1">
        {navItems.map((item) => (
          <li key={item} role="presentation">
            <button
              role="tab"
              aria-selected={activeSection === item.toLowerCase()}
              tabIndex={activeSection === item.toLowerCase() ? 0 : -1}
              data-section={item.toLowerCase()}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`
                px-3 sm:px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-t-lg whitespace-nowrap
                ${
                  activeSection === item.toLowerCase()
                    ? "text-primary bg-background/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/30"
                }
              `}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
