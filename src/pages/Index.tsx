import { useState } from 'react';
import Icon from '@/components/ui/icon';

const fragranceFamilies = [
  { name: 'Кожаные', path: '/category/leather' },
  { name: 'Цитрусовые', path: '/category/citrus' },
  { name: 'Цитрусовые Пряные', path: '/category/citrus-spicy' },
  { name: 'Цитрусовые Фужерные', path: '/category/citrus-fougere' },
  { name: 'Фужерные', path: '/category/fougere' },
  { name: 'Фужерные Зеленые', path: '/category/fougere-green' },
  { name: 'Фужерные Фруктовые', path: '/category/fougere-fruity' },
  { name: 'Цветочные Фруктовые', path: '/category/floral-fruity' },
  { name: 'Цветочные Зеленые', path: '/category/floral-green' },
  { name: 'Цветочные Фруктовые Сладкие', path: '/category/floral-fruity-sweet' },
  { name: 'Восточные', path: '/category/oriental' },
  { name: 'Восточные Фужерные', path: '/category/oriental-fougere' },
  { name: 'Восточные Цветочные', path: '/category/oriental-floral' },
  { name: 'Восточные Пряные', path: '/category/oriental-spicy' },
];

export default function Index() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <Icon name="Flower2" className="text-accent" size={32} />
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-light text-primary mb-6 tracking-tight">
            Fragrance Families
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Откройте свой аромат среди 14 ароматических семейств
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {fragranceFamilies.map((family, index) => (
              <button
                key={family.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => window.location.href = family.path}
                className="group relative overflow-hidden bg-white border border-neutral-200 px-8 py-6 transition-all duration-500 hover:border-accent hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                
                <div className="relative flex items-center justify-between">
                  <span className="font-heading text-2xl md:text-3xl font-light text-primary group-hover:text-accent transition-colors duration-300">
                    {family.name}
                  </span>
                  
                  <Icon
                    name="ArrowRight"
                    className={`transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'translate-x-1 opacity-100 text-accent'
                        : 'opacity-0 -translate-x-2 text-primary'
                    }`}
                    size={20}
                  />
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ${
                    hoveredIndex === index ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <footer className="mt-32 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground font-light tracking-widest uppercase mb-4">
            Luxury Perfume Collection
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-accent" />
            <Icon name="Sparkles" className="text-accent" size={16} />
            <div className="h-px w-12 bg-accent" />
          </div>
        </footer>
      </div>
    </div>
  );
}
