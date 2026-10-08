import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <img
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Elegant restaurant interior with ambient candlelight"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-gold mb-6 animate-fade-in-up">
          Est. 2009 · A Culinary Journey
        </p>
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8 text-balance animate-fade-in-up"
          style={{ animationDelay: '150ms', opacity: 0 }}
        >
          Where Every Dish
          <br />
          <em className="text-gold font-light">Tells a Story</em>
        </h1>
        <p
          className="font-sans text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in-up"
          style={{ animationDelay: '300ms', opacity: 0 }}
        >
          Experience the art of fine dining in an intimate setting where seasonal
          ingredients, masterful technique, and timeless elegance converge.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '450ms', opacity: 0 }}
        >
          <button
            onClick={() =>
              document.querySelector('#reserve')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-gold"
          >
            Reserve a Table
          </button>
          <button
            onClick={() =>
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-outline"
          >
            Explore Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
