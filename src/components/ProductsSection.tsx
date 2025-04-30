import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ProductCategory {
  id: string;
  name: string;
  image: string;
  description: string;
}

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("bags");
  
  const categories: ProductCategory[] = [
    {
      id: "bags",
      name: "Пакеты",
      image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=600&auto=format&fit=crop",
      description: "Бумажные и полиэтиленовые пакеты с вашим логотипом различных размеров и плотности"
    },
    {
      id: "boxes",
      name: "Коробки",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop",
      description: "Картонные и гофрокартонные коробки любой сложности с индивидуальным дизайном"
    },
    {
      id: "gift",
      name: "Подарочная упаковка",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop",
      description: "Премиальная упаковка для подарков, сувениров и корпоративных наборов"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-in"
          >
            Наша продукция
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Производим упаковку любой сложности с индивидуальным дизайном 
            и брендированием для компаний всех отраслей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] opacity-0 animate-fade-in ${
                activeCategory === category.id ? "ring-2 ring-packaging-primary" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.02] opacity-0 animate-fade-in"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1600000000000 + index * 100000}?q=80&w=600&auto=format&fit=crop`}
                  alt={`Пример продукции ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-2">Пример продукции {index + 1}</h3>
                <p className="text-sm text-gray-600 mb-4">Краткое описание этого типа упаковки и её преимуществах для вашего бизнеса.</p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-packaging-primary hover:text-packaging-secondary hover:bg-purple-50">
                    Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-packaging-primary to-packaging-secondary hover:opacity-90 transition-opacity shadow-lg shadow-purple-200 animate-fade-in" style={{ animationDelay: "900ms" }}>
            Смотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
