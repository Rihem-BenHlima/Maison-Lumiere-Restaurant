import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Phone, Mail, Clock, UtensilsCrossed, Facebook, Instagram, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: '128 Avenue Habib Bourguiba\nTunis, Tunisia 1000',
  },
  {
    icon: Phone,
    label: 'Reservations',
    value: '+216 71 000 123',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@maisonlumiere.fr',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat · 5:00 PM – 11:00 PM\nClosed Sundays',
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <footer id="contact" className="bg-charcoal text-white">
      {/* Top section */}
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-6">
                <UtensilsCrossed className="w-6 h-6 text-gold" />
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-xl font-semibold tracking-wide">
                    Maison Lumière
                  </span>
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/70 mt-0.5">
                    Fine Dining
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm text-white/40 leading-relaxed mb-6">
                A culinary destination where seasonal artistry meets timeless elegance.
                Join us for an unforgettable dining experience.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact info */}
            {contactInfo.map((info) => (
              <div key={info.label}>
                <div className="flex items-center gap-2 mb-4">
                  <info.icon className="w-4 h-4 text-gold" />
                  <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70">
                    {info.label}
                  </span>
                </div>
                <p className="font-serif text-lg text-white/80 leading-relaxed whitespace-pre-line">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/30">
              © {new Date().getFullYear()} Maison Lumière. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-xs text-white/30 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="font-sans text-xs text-white/30 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="font-sans text-xs text-white/30 hover:text-gold transition-colors duration-300">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
