import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import solarioLogo from "@/assets/solario-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-border">
      <div className="container mx-auto py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
                136 Winges Rd, Vaughan, ON L4L 6C3
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/solar-installation" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link to="/services/ev-charging" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  EV Charging
                </Link>
              </li>
              <li>
                <Link to="/services/battery-storage" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Battery Storage
                </Link>
              </li>
              <li>
                <Link to="/services/heat-pumps" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Heat Pumps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-sm">
            © 2026 Solario Energy Inc. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            ESA Licensed • TSSA Registered • Tesla Certified • NABCEP Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;