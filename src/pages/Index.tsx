import { useState } from 'react';
import Icon from '@/components/ui/icon';

const fragranceFamilies = [
  { name: 'Кожаные', path: '/category/leather', featured: true },
  { name: 'Цитрусовые', path: '/category/citrus', featured: false },
  { name: 'Цитрусовые Пряные', path: '/category/citrus-spicy', featured: false },
  { name: 'Цитрусовые Фужерные', path: '/category/citrus-fougere', featured: false },
  { name: 'Фужерные', path: '/category/fougere', featured: true },
  { name: 'Фужерные Зеленые', path: '/category/fougere-green', featured: false },
  { name: 'Фужерные Фруктовые', path: '/category/fougere-fruity', featured: false },
  { name: 'Цветочные Фруктовые', path: '/category/floral-fruity', featured: false },
  { name: 'Цветочные Зеленые', path: '/category/floral-green', featured: false },
  { name: 'Цветочные Фруктовые Сладкие', path: '/category/floral-fruity-sweet', featured: false },
  { name: 'Восточные', path: '/category/oriental', featured: true },
  { name: 'Восточные Фужерные', path: '/category/oriental-fougere', featured: false },
  { name: 'Восточные Цветочные', path: '/category/oriental-floral', featured: false },
  { name: 'Восточные Пряные', path: '/category/oriental-spicy', featured: false },
  { name: 'Древесные', path: '/category/woody', featured: true },
  { name: 'Древесные Мшистые', path: '/category/woody-mossy', featured: false },
  { name: 'Древесные Пряные', path: '/category/woody-spicy', featured: false },
  { name: 'Шипровые', path: '/category/chypre', featured: false },
  { name: 'Морские', path: '/category/aquatic', featured: false },
  { name: 'Гурманские', path: '/category/gourmand', featured: true },
  { name: 'Альдегидные', path: '/category/aldehydic', featured: false },
  { name: 'Пудровые', path: '/category/powdery', featured: false },
  { name: 'Ароматические', path: '/category/aromatic', featured: false },
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
          <h1 className="font-heading text-5xl md:text-7xl font-light text-primary mb-6 tracking-tight">
            Выбрать по группе аромата
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Откройте свой аромат среди <span className="text-accent font-medium">23</span> ароматических семейств
          </p>
        </header>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {fragranceFamilies.map((family, index) => (
              <button
                key={family.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => window.location.href = family.path}
                className={`group relative overflow-hidden bg-white border border-neutral-200 transition-all duration-500 hover:border-accent hover:shadow-2xl hover:-translate-y-1 hover:scale-105 ${
                  family.featured 
                    ? 'px-8 md:px-10 py-4 md:py-5' 
                    : 'px-6 md:px-8 py-3 md:py-4'
                }`}
                style={{
                  animationDelay: `${index * 30}ms`,
                }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                
                <div className="relative flex items-center gap-3">
                  <span className={`font-heading font-light text-primary group-hover:text-accent transition-colors duration-300 ${
                    family.featured 
                      ? 'text-2xl md:text-3xl' 
                      : 'text-lg md:text-xl'
                  }`}>
                    {family.name}
                  </span>
                  
                  <Icon
                    name="ArrowRight"
                    className={`transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'translate-x-1 opacity-100 text-accent'
                        : 'opacity-0 -translate-x-2 text-primary'
                    }`}
                    size={family.featured ? 22 : 18}
                  />
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent via-accent to-transparent transition-all duration-500 ${
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