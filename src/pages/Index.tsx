import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    // Можно добавить логику отслеживания скролла для анимаций
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(elem => {
        const el = elem as HTMLElement;
        if (scrollTop + window.innerHeight > el.offsetTop) {
          el.classList.add('animate-fade-slide-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <ProductsSection />
        
        {/* О компании */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" 
                    alt="Наше производство" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-packaging-accent opacity-20 rounded-full blur-xl -z-10"></div>
              </div>
              
              <div className="scroll-animate">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">О нашем производстве</h2>
                <p className="text-gray-700 mb-5">
                  Мы специализируемся на изготовлении качественной упаковки с индивидуальным дизайном для компаний любого масштаба. 
                  Наше современное оборудование позволяет производить продукцию любой сложности с высоким качеством печати.
                </p>
                <p className="text-gray-700 mb-6">
                  Мы работаем напрямую с производством, что позволяет нам предлагать конкурентные цены и соблюдать сжатые сроки 
                  изготовления даже при больших тиражах.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="font-bold text-xl mb-1">10+ лет</h3>
                    <p className="text-gray-600">на рынке производства упаковки</p>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="font-bold text-xl mb-1">500+</h3>
                    <p className="text-gray-600">довольных клиентов по всей России</p>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="font-bold text-xl mb-1">1 000 000+</h3>
                    <p className="text-gray-600">единиц упаковки изготовлено</p>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="font-bold text-xl mb-1">3-10 дней</h3>
                    <p className="text-gray-600">срок изготовления заказа</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white scroll-animate">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">Почему выбирают нас</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Мы предлагаем полный цикл производства упаковки: от разработки дизайна до изготовления и доставки готовой продукции.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Собственное производство",
                  description: "Контролируем качество на каждом этапе и предлагаем конкурентные цены без посредников"
                },
                {
                  title: "Индивидуальный дизайн",
                  description: "Разработаем уникальный дизайн упаковки, учитывая особенности вашего бренда и продукции"
                },
                {
                  title: "Сжатые сроки",
                  description: "Благодаря оптимизированным процессам, выполняем заказы в кратчайшие сроки без потери качества"
                },
                {
                  title: "Любые объемы",
                  description: "Изготавливаем как небольшие партии от 100 штук, так и крупные оптовые заказы"
                },
                {
                  title: "Высокое качество",
                  description: "Используем только качественные материалы и современное оборудование для печати"
                },
                {
                  title: "Доставка по России",
                  description: "Организуем доставку готовой продукции в любой регион России удобным для вас способом"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover-lift">
                  <div className="w-12 h-12 bg-packaging-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-packaging-primary font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-gray-900 text-white scroll-animate">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Готовы заказать упаковку?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Свяжитесь с нами, чтобы обсудить ваш проект. Мы поможем выбрать оптимальное решение 
              и рассчитаем стоимость изготовления.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-packaging-primary to-packaging-secondary hover:opacity-90 transition-opacity shadow-lg px-8 py-6 text-lg">
                Заказать звонок
              </Button>
              <Button variant="outline" className="border-white/30 hover:bg-white/10 transition-colors px-8 py-6 text-lg">
                Посмотреть примеры работ
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
