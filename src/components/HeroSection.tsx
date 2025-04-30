import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Package2, TruckIcon, Calendar, Badge, Sparkles } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current) return;
      
      const scrollPosition = window.scrollY;
      // Parallax effect for images
      if (scrollPosition < window.innerHeight) {
        imageRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 -z-10"></div>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_120%,#8b5cf6,transparent)]"></div>
      </div>
      
      {/* Floating animated shapes */}
      <div ref={imageRef} className="absolute -right-10 top-20 opacity-20 animate-float w-96 h-96 rounded-full bg-packaging-primary blur-3xl -z-10"></div>
      <div className="absolute left-20 bottom-20 opacity-10 animate-float w-64 h-64 rounded-full bg-packaging-secondary blur-3xl -z-10 animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 pt-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-purple-100 shadow-sm animate-fade-slide-up">
            <Sparkles className="w-4 h-4 text-packaging-primary mr-2" />
            <span className="text-sm font-medium">Собственное производство</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-slide-up">
            Создаем упаковку,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-packaging-primary to-packaging-secondary">
              которая продает
            </span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-lg animate-fade-slide-up stagger-1">
            Изготовим качественные пакеты, коробки и различную упаковку оптом от 100 шт.
            с нанесением вашего логотипа и дизайна.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-slide-up stagger-2">
            <Button className="bg-gradient-to-r from-packaging-primary to-packaging-secondary text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-200 px-6 py-6">
              Заказать упаковку
            </Button>
            <Button variant="outline" className="bg-white border-purple-200 hover:bg-purple-50 transition-colors px-6 py-6">
              Каталог продукции
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-slide-up stagger-3">
            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover-lift">
              <Package2 className="w-6 h-6 text-packaging-primary mb-2" />
              <span className="text-sm font-medium">Собственное производство</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover-lift">
              <TruckIcon className="w-6 h-6 text-packaging-primary mb-2" />
              <span className="text-sm font-medium">Доставка по России</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover-lift">
              <Calendar className="w-6 h-6 text-packaging-primary mb-2" />
              <span className="text-sm font-medium">Сжатые сроки</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm hover-lift">
              <Badge className="w-6 h-6 text-packaging-primary mb-2" />
              <span className="text-sm font-medium">Гарантия качества</span>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="relative h-[400px] md:h-[600px] animate-rotate-in">
            {/* Floating package images */}
            <img 
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=600&auto=format&fit=crop" 
              alt="Бумажные пакеты с логотипом" 
              className="absolute -left-5 top-10 w-60 h-72 object-cover rounded-lg shadow-xl rotate-[-8deg] animate-float z-10" 
            />
            <img 
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop" 
              alt="Коробки с вашим брендом" 
              className="absolute top-20 right-0 w-72 h-48 object-cover rounded-lg shadow-xl rotate-[5deg] animate-float z-20" 
              style={{animationDelay: '1.5s'}}
            />
            <img 
              src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=600&auto=format&fit=crop" 
              alt="Упаковка с брендингом" 
              className="absolute right-10 bottom-10 w-64 h-80 object-cover rounded-lg shadow-xl rotate-[8deg] animate-float z-10" 
              style={{animationDelay: '1s'}}
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-packaging-accent opacity-20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-packaging-primary opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
