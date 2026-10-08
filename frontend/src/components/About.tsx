import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Leaf, Clock } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Award Winning',
    text: 'Recognized with culinary excellence awards for over a decade',
  },
  {
    icon: Leaf,
    title: 'Seasonal & Local',
    text: 'Sourced from regional farms with a commitment to sustainability',
  },
  {
    icon: Clock,
    title: 'Timeless Craft',
    text: 'A dedication to the craft that has defined us since 2009',
  },
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 reveal ${visible ? 'visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Chefs in a professional kitchen"
                className="w-full h-[520px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 lg:-left-12 bg-charcoal py-8 px-10 shadow-2xl">
              <p className="font-serif text-5xl text-gold font-light">15</p>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/60 mt-1">
                Years of
                <br />
                Excellence
              </p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="section-label mb-6">
              <span className="w-8 h-px bg-gold" />
              Our Story
            </div>
            <h2 className="section-title mb-8">
              A Legacy of <em className="text-gold">Culinary</em>
              <br />
              Artistry & Passion
            </h2>
            <div className="space-y-5 text-charcoal/70 font-sans text-base leading-relaxed">
              <p>
                Founded in 2009 by Chef Étienne Laurent, Maison Lumière was born from a
                simple conviction: that a meal can be a transcendent experience. What
                began as an intimate twelve-seat dining room has flourished into one of
                the city's most cherished culinary destinations.
              </p>
              <p>
                Each dish is a conversation between tradition and innovation — honoring
                classic French techniques while embracing the bounty of each season.
                Our team works closely with local artisans, farmers, and fishermen to
                ensure every ingredient meets the highest standard of quality and
                sustainability.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-charcoal/10">
              {highlights.map((item) => (
                <div key={item.title} className="text-center sm:text-left">
                  <item.icon className="w-7 h-7 text-gold mb-3 mx-auto sm:mx-0" />
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal/50 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
