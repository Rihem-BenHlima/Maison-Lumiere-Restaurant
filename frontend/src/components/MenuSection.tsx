import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Seared Scallops',
        description: 'Pan-seared diver scallops, cauliflower purée, brown butter, micro herbs',
        price: '28',
        tags: ['Signature'],
      },
      {
        name: 'Heirland Beet Tartare',
        description: 'Roasted heirloom beets, horseradish crème, pickled shallots, rye crumb',
        price: '22',
        tags: ['Vegetarian'],
      },
      {
        name: 'Oysters Meunière',
        description: 'Half-dozen fresh oysters, lemon beurre blanc, chive oil, salmon roe',
        price: '32',
      },
      {
        name: 'Foie Gras Terrine',
        description: 'House-cured foie gras, fig compote, toasted brioche, aged balsamic',
        price: '34',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Main Courses',
    items: [
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'A5 wagyu, pommes anna, sautéed greens, bordelaise, bone marrow',
        price: '68',
        tags: ['Signature'],
      },
      {
        name: 'Branzino al Sale',
        description: 'Salt-crusted Mediterranean sea bass, fennel confit, saffron nage',
        price: '48',
      },
      {
        name: 'Duck à l\'Orange',
        description: 'Confit duck leg & seared breast, blood orange gastrique, parsnip',
        price: '46',
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Carnaroli rice, forest mushrooms, aged parmesan, truffle pecorino',
        price: '38',
        tags: ['Vegetarian'],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Soufflé au Chocolat',
        description: 'Valrhona chocolate soufflé, crème anglaise, gold leaf',
        price: '24',
        tags: ['Signature'],
      },
      {
        name: 'Tarte Tatin',
        description: 'Caramelized apple tart, vanilla bean ice cream, salted caramel',
        price: '22',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard, caramelized sugar, fresh berries',
        price: '20',
      },
      {
        name: 'Cheese Selection',
        description: 'Artisanal cheese board, house preserves, walnut bread, honeycomb',
        price: '26',
      },
    ],
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const activeMenu = menuData.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 lg:px-12 reveal ${visible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-6">
            <span className="w-8 h-px bg-gold" />
            Our Menu
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15]">
            A Curated Selection
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-gold text-white border-gold'
                  : 'bg-transparent text-white/50 border-white/15 hover:text-gold hover:border-gold/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10" key={activeCategory}>
          {activeMenu.items.map((item, i) => (
            <div
              key={item.name}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-serif text-xl font-medium text-white group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="flex-1 border-b border-dashed border-white/15 mb-1.5" />
                <span className="font-serif text-xl font-medium text-gold">${item.price}</span>
              </div>
              <div className="flex items-start gap-3">
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="shrink-0 font-sans text-[9px] tracking-[0.2em] uppercase text-gold border border-gold/40 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tasting menu note */}
        <div className="mt-20 text-center border-t border-white/10 pt-12">
          <p className="font-serif text-2xl text-white mb-2">
            Le Grand Menu Dégustation
          </p>
          <p className="font-sans text-sm text-white/50 mb-4">
            Seven courses · Curated wine pairing available · $145 per guest
          </p>
          <button
            onClick={() =>
              document.querySelector('#reserve')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-outline"
          >
            Reserve to Experience
          </button>
        </div>
      </div>
    </section>
  );
}
