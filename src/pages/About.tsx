import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, Factory, CheckCircle, Award, Users, Clock, Sparkles } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Анимация элементов при скролле
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(elem => {
        const el = elem as HTMLElement;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('animate-fade-in');
          el.style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Инициализация анимаций при загрузке
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Заголовок */}
        <section className="relative pt-10 pb-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50 to-transparent -z-10"></div>
          <div className="absolute -left-20 top-40 w-64 h-64 bg-packaging-primary opacity-5 rounded-full blur-3xl -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 border border-purple-100 shadow-sm">
                  <Sparkles className="w-4 h-4 text-packaging-primary mr-2" />
                  <span className="text-sm font-medium">С 2011 года на рынке</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                  О нашей <span className="bg-clip-text text-transparent bg-gradient-to-r from-packaging-primary to-packaging-secondary">компании</span>
                </h1>
                
                <p className="text-lg text-gray-700 mb-5">
                  Мы — современное производство упаковочных материалов, которое специализируется на изготовлении качественной продукции 
                  с индивидуальным дизайном для бизнеса любого масштаба.
                </p>
                
                <p className="text-lg text-gray-700 mb-6">
                  Наша миссия — помогать бизнесу создавать уникальный имидж через качественную и стильную упаковку, 
                  которая привлекает внимание и повышает лояльность клиентов.
                </p>
                
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-packaging-primary to-packaging-secondary text-white hover:opacity-90 transition-opacity shadow-lg px-6 py-6">
                    Заказать консультацию
                  </Button>
                </div>
              </div>
              
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute -right-6 -bottom-6 w-full h-full bg-packaging-secondary/10 rounded-2xl"></div>
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1622037022021-9679cdffd2b0?q=80&w=800&auto=format&fit=crop" 
                    alt="Наша команда за работой" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* История и ценности */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 scroll-animate opacity-0">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Наша история и ценности</h2>
              <p className="text-gray-700">
                История нашей компании началась в 2011 году с небольшого производства бумажных пакетов. 
                Сегодня мы — современное предприятие полного цикла, которое предлагает широкий ассортимент упаковочных решений.
              </p>
            </div>
            
            <div className="relative">
              {/* Временная линия */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-packaging-primary/80 to-packaging-secondary/80 hidden md:block"></div>
              
              {/* Этапы развития */}
              <div className="space-y-20">
                {/* 2011 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center scroll-animate opacity-0">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-3">2011 — Начало пути</h3>
                    <p className="text-gray-700">
                      Запуск небольшого производства бумажных пакетов с простой печатью. 
                      Первые клиенты — местные кафе и магазины одежды.
                    </p>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <div className="rounded-full w-16 h-16 bg-packaging-primary shadow-lg flex items-center justify-center ml-auto mr-auto md:ml-0 md:mr-auto">
                      <Briefcase className="text-white w-8 h-8" />
                    </div>
                    <div className="hidden md:block absolute left-0 top-1/2 w-8 h-0.5 bg-packaging-primary transform -translate-y-1/2"></div>
                  </div>
                </div>
                
                {/* 2015 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center scroll-animate opacity-0">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 bg-packaging-primary shadow-lg flex items-center justify-center ml-auto mr-auto md:ml-auto md:mr-0">
                      <Factory className="text-white w-8 h-8" />
                    </div>
                    <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-packaging-primary transform -translate-y-1/2"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">2015 — Расширение производства</h3>
                    <p className="text-gray-700">
                      Покупка современного оборудования для многоцветной печати и начало производства 
                      пластиковых пакетов и подарочной упаковки.
                    </p>
                  </div>
                </div>
                
                {/* 2019 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center scroll-animate opacity-0">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-3">2019 — Запуск студии дизайна</h3>
                    <p className="text-gray-700">
                      Открытие собственной дизайн-студии, специализирующейся на разработке 
                      уникальных дизайнов упаковки для клиентов.
                    </p>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <div className="rounded-full w-16 h-16 bg-packaging-primary shadow-lg flex items-center justify-center ml-auto mr-auto md:ml-0 md:mr-auto">
                      <Sparkles className="text-white w-8 h-8" />
                    </div>
                    <div className="hidden md:block absolute left-0 top-1/2 w-8 h-0.5 bg-packaging-primary transform -translate-y-1/2"></div>
                  </div>
                </div>
                
                {/* 2023 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center scroll-animate opacity-0">
                  <div className="relative">
                    <div className="rounded-full w-16 h-16 bg-packaging-primary shadow-lg flex items-center justify-center ml-auto mr-auto md:ml-auto md:mr-0">
                      <Award className="text-white w-8 h-8" />
                    </div>
                    <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-packaging-primary transform -translate-y-1/2"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">2023 — Современность</h3>
                    <p className="text-gray-700">
                      Открытие новой производственной площадки, запуск линии эко-упаковки 
                      и расширение географии поставок на всю Россию.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Наше производство */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate opacity-0">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Наше производство</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Современное оборудование и опытные специалисты позволяют нам создавать качественную упаковку 
                любой сложности с индивидуальным дизайном.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate opacity-0">
                <div className="w-16 h-16 bg-packaging-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Factory className="w-8 h-8 text-packaging-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Оборудование</h3>
                <p className="text-gray-700 mb-4">
                  Используем современные печатные машины и станки для изготовления упаковки, 
                  что обеспечивает высокое качество и точность печати.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Многоцветные печатные машины</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Оборудование для тиснения и ламинации</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Автоматические линии сборки пакетов</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate opacity-0">
                <div className="w-16 h-16 bg-packaging-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-packaging-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Команда</h3>
                <p className="text-gray-700 mb-4">
                  Наша команда состоит из опытных технологов, дизайнеров и операторов оборудования, 
                  обеспечивающих высокое качество на каждом этапе.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Профессиональные дизайнеры</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Опытные технологи и операторы</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Служба контроля качества</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-animate opacity-0">
                <div className="w-16 h-16 bg-packaging-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-packaging-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Процесс</h3>
                <p className="text-gray-700 mb-4">
                  Отлаженный производственный процесс позволяет нам соблюдать короткие сроки 
                  изготовления и выполнять заказы любой сложности.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Оперативное согласование дизайна</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Контроль качества на каждом этапе</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Быстрая логистика и доставка</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate opacity-0">
              <div className="rounded-xl overflow-hidden shadow-lg h-80 transform transition-transform duration-700 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1595062584313-47018e0874c3?q=80&w=700&auto=format&fit=crop" 
                  alt="Производственное помещение" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-80 transform transition-transform duration-700 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?q=80&w=700&auto=format&fit=crop" 
                  alt="Печатное оборудование" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg h-80 transform transition-transform duration-700 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=700&auto=format&fit=crop" 
                  alt="Готовая продукция" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Наши клиенты */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate opacity-0">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Нам доверяют</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Ежегодно более 500 компаний выбирают нас для изготовления своей фирменной упаковки. 
                Среди наших клиентов — известные бренды и небольшие локальные компании.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 scroll-animate opacity-0">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Клиент {index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-packaging-primary to-packaging-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto scroll-animate opacity-0">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Готовы создать упаковку для вашего бренда?</h2>
              <p className="text-white/90 mb-10">
                Свяжитесь с нами, чтобы обсудить ваш проект. Мы поможем выбрать оптимальный вариант упаковки, 
                разработаем дизайн и изготовим продукцию в короткие сроки.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-packaging-primary hover:bg-white/90 transition-colors shadow-lg px-8 py-6 text-lg">
                  Заказать консультацию
                </Button>
                <Button variant="outline" className="border-white hover:bg-white/10 transition-colors px-8 py-6 text-lg">
                  Скачать презентацию
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
