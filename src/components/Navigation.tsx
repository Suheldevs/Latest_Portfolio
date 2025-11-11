const navItems = ["About", "Resume", "Portfolio", "Contact"];

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <nav className="flex justify-end border-b border-border -mt-2 -mx-6 lg:-mx-10 px-6 lg:px-10">
      <ul className="flex flex-wrap gap-1">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => onNavigate(item.toLowerCase())}
              className={`
                px-6 py-3 text-sm font-medium transition-all duration-300 rounded-t-lg whitespace-nowrap
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
