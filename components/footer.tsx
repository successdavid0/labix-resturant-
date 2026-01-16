import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    dining: [
      { href: "/dining", label: "Menu" },
      { href: "/dining/specials", label: "Chef's Specials" },
      { href: "/dining/wine", label: "Wine & Cocktails" },
    ],
    services: [
      { href: "/pastries", label: "Pastries" },
      { href: "/gaming", label: "Gaming Lounge" },
      { href: "/catering", label: "Catering" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/events", label: "Events" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  };

  return (
    <footer className="border-t border-white-off dark:border-dark-bg-elevated bg-white-warm dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-heading font-bold text-gold-primary">
              Labix
            </div>
            <p className="text-sm text-foreground/60">
              Premium dining, exceptional pastries, and immersive gaming
              experiences in one destination.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground/60 hover:text-gold-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-gold-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-gold-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Dining Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Dining</h3>
            <ul className="space-y-2">
              {footerLinks.dining.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-gold-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-gold-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-gold-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/60">
                  123 Restaurant Street
                  <br />
                  City, State 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gold-primary flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-foreground/60 hover:text-gold-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gold-primary flex-shrink-0" />
                <a
                  href="mailto:info@labix.com"
                  className="text-sm text-foreground/60 hover:text-gold-primary transition-colors"
                >
                  info@labix.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white-off dark:border-dark-bg-elevated">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Labix Restaurant. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-foreground/60 hover:text-gold-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-foreground/60 hover:text-gold-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
