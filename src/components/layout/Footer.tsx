import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import solarioLogo from "@/assets/solario-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-border overflow-x-hidden">
      <div className="container mx-auto py-10 sm:py-12 md:py-14 px-4 sm:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={solarioLogo} 
                alt="Solario" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Ontario's trusted solar installer serving homeowners and businesses across the GTA.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="tel:+13823420754"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +1 (382) 342-0754
              </a>
              <a
                href="mailto:info@solario.ca"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@solario.ca
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                92 Westra Drive, Guelph, ON N1K 1Z7
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Services</h4>
            <ul className="space-y-0.5">
              <li>
                <Link to="/service-areas" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/services/solar-installation" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link to="/services/solar-repair" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Solar Repair
                </Link>
              </li>
              <li>
                <Link to="/services/ev-charging" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  EV Charging
                </Link>
              </li>
              <li>
                <Link to="/services/battery-storage" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link to="/services/heat-pumps" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Heat Pumps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-0.5">
              <li>
                <Link to="/about" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  About
                </Link>
              </li>
              <li>
                <Link to="/finance" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/projects" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-0.5">
              <li>
                <Link to="/privacy" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="block py-2 text-muted-foreground hover:text-primary transition-colors text-sm touch-manipulation">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-5 sm:pt-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-3 text-center md:text-left">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2026 Solario Energy Inc. All rights reserved.
          </p>
          <a
            href="https://nazxmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/80 text-xs text-center hover:underline hover:opacity-90 transition-colors"
          >
            Engineered by NazxMedia
          </a>
          <p className="text-muted-foreground/60 text-xs text-center md:text-right">
            ESA Licensed • TSSA Registered • Tesla Certified • NABCEP Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;