import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    toast({
      title: "Message Received",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", caseType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(504) 555-1234",
      href: "tel:+15045551234",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@bonitawilsonlaw.com",
      href: "mailto:info@bonitawilsonlaw.com",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "123 St. Charles Ave, New Orleans, LA 70130",
      href: "#",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon - Fri: 8:30 AM - 5:30 PM",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
              Contact Us
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your <span className="text-primary">Free Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss your case? Contact us today for a confidential, 
            no-obligation consultation. We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="bg-secondary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(504) 555-0123"
                    required
                    className="bg-secondary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-secondary/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="caseType">Type of Case</Label>
                <select
                  id="caseType"
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-secondary/50 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select case type...</option>
                  <option value="car-accident">Car Accident</option>
                  <option value="slip-fall">Slip & Fall</option>
                  <option value="wrongful-death">Wrongful Death</option>
                  <option value="workplace-injury">Workplace Injury</option>
                  <option value="divorce">Divorce</option>
                  <option value="child-custody">Child Custody</option>
                  <option value="adoption">Adoption</option>
                  <option value="child-support">Child Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Your Case</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide a brief description of your situation..."
                  rows={5}
                  className="bg-secondary/50 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy. 
                All consultations are confidential.
              </p>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-navy-light rounded-xl overflow-hidden relative border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Greater New Orleans Area
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Map integration coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Call CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-foreground font-medium mb-3">
                Need immediate assistance?
              </p>
              <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary/20">
                <a href="tel:+15045551234" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (504) 555-1234
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
