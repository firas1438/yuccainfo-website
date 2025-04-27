import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Menu, X } from "lucide-react";
import { animate } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Accueil", href: "#hero" },
  { label: "À Propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Clients", href:"#clients"},
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

// Smooth scroll function using Framer Motion
const smoothScroll = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80; // Offset for navbar

  animate(window.scrollY, targetPosition, {
    duration: 1, // 1 second for slow transition
    ease: "easeInOut",
    onUpdate: (latest) => {
      window.scrollTo(0, latest);
    },
  });
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Handle scroll for background effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-black'}`}>
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="md:hidden mr-4" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
            <Link
              href="/"
              aria-label="YUCCAINFO Home"
              className="flex items-center gap-3 text-xl font-normal text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("#hero");
              }}
            >
              <img src="/yacca.png" alt="YUCCAINFO Logo" className="h-8 w-8" />
              YUCCAINFO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className={`text-white hover:bg-white/10 hover:text-yellow-400 transition-colors ${
                  activeSection === item.href.slice(1) ? 'text-yellow-400' : ''
                }`}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.href);
                  }}
                >
                  {item.label.toUpperCase()}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 pt-0.5 space-y-2 bg-neutral-900 border border-yellow-400/30 rounded-md max-w-64">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className={`w-full justify-start text-white hover:bg-white/10 hover:text-yellow-400 transition-colors ${
                  activeSection === item.href.slice(1) ? 'text-yellow-400' : ''
                }`}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label.toUpperCase()}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
      {!isMenuOpen && (
        <Separator className="bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent h-px" />
      )}
    </nav>
  );
};

export default Navbar;