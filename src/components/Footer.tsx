import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Personal Injury", href: "#practice-areas" },
    { label: "Family Law", href: "#practice-areas" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <span className="text-primary text-3xl">⚜</span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-foreground tracking-wide">
                  Bonita Wilson
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                  Law
                </span>
              </div>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Serving the Greater New Orleans area with dedicated legal representation 
              in personal injury and family law matters. Your trusted advocate for 
              over 20 years.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="tel:+15045551234" className="hover:text-primary transition-colors">
                  (504) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@bonitawilsonlaw.com" className="hover:text-primary transition-colors">
                  info@bonitawilsonlaw.com
                </a>
              </li>
              <li>
                123 St. Charles Ave<br />
                New Orleans, LA 70130
              </li>
              <li className="pt-2">
                <span className="text-sm">Mon - Fri: 8:30 AM - 5:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bonita Wilson Law. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="py-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground/70 text-center max-w-4xl mx-auto">
            <strong>Attorney Advertising.</strong> This website is designed for general 
            information only. The information presented at this site should not be 
            construed to be formal legal advice nor the formation of a lawyer/client 
            relationship. Prior results do not guarantee a similar outcome. 
            Licensed in Louisiana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
