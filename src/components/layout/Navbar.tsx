import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import solarioLogo from "@/assets/solario-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Certifications", path: "/certifications" },
  { name: "About", path: "/about" },
  { name: "Finance", path: "/finance" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] ${
        isScrolled
          ? "bg-gradient-header backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto h-full px-4 sm:px-0">
        <nav className="flex items-center justify-between h-full gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src={solarioLogo} 
              alt="Solario" 
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Phone & CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+13823420754"
              className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (382) 342-0754</span>
            </a>
            <Button variant="nav" size="default" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - min 44px tap target */}
          <button
            className="lg:hidden text-foreground p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-border animate-fade-in overflow-x-hidden">
          <div className="py-3 px-4">
            <nav className="space-y-0.5" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3.5 text-base font-medium rounded-lg transition-colors touch-manipulation min-h-[48px] flex items-center ${
                    location.pathname === link.path
                      ? "text-primary bg-secondary"
                      : "text-foreground/90 hover:text-foreground active:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="px-4 pt-3 pb-2 space-y-3 border-t border-border mt-3">
              <a
                href="tel:+13823420754"
                className="flex items-center gap-3 text-foreground/90 text-base py-3 min-h-[48px] touch-manipulation"
              >
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>+1 (382) 342-0754</span>
              </a>
              <Button variant="hero" size="lg" className="w-full min-h-[48px] touch-manipulation" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;