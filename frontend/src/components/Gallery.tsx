import { useScrollReveal } from '@/hooks/useScrollReveal';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Gourmet dish on marble table with warm lighting',
    span: 'lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/24289165/pexels-photo-24289165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Gourmet shrimp appetizer with colorful vegetables',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/35546720/pexels-photo-35546720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Artistic dessert with chocolate garnish',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Wine setting with warm lighting',
    span: 'lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/26586541/pexels-photo-26586541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Gourmet caviar dish with artistic presentation',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/18784859/pexels-photo-18784859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Gourmet dessert with strawberries',
    span: '',
  },
];

export default function Gallery() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-12 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-6">
            <span className="w-8 h-px bg-gold" />
            Gallery
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="section-title">
            A Feast for <em className="text-gold">the Senses</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:auto-rows-[280px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end p-6">
                <p className="font-sans text-xs text-white/0 group-hover:text-white/80 transition-all duration-500 tracking-wide">
                  {img.alt}
                </p>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/50 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
