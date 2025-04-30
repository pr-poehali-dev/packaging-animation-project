import { Link } from "react-router-dom";
import { ShoppingBag, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ShoppingBag className="h-8 w-8 text-packaging-primary" />
              <span className="font-display text-xl font-bold tracking-tight">ПакетПлюс</span>
            </div>
            <p className="text-gray-400 mb-6">
              Собственное производство упаковки с вашим логотипом. 
              Качественная продукция, сжатые сроки, доставка по всей России.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-packaging-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-packaging-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-packaging-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Продукция
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Продукция</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/bags" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Пакеты бумажные
                </Link>
              </li>
              <li>
                <Link to="/products/poly-bags" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Пакеты полиэтиленовые
                </Link>
              </li>
              <li>
                <Link to="/products/boxes" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Коробки картонные
                </Link>
              </li>
              <li>
                <Link to="/products/gift" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Подарочная упаковка
                </Link>
              </li>
              <li>
                <Link to="/products/eco" className="text-gray-400 hover:text-packaging-primary transition-colors">
                  Эко-упаковка
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-packaging-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white">8 (800) 555-35-35</p>
                  <p className="text-gray-400 text-sm">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-packaging-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white">info@paketplus.ru</p>
                  <p className="text-gray-400 text-sm">Отдел продаж</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-packaging-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white">г. Москва, ул. Промышленная, д. 15</p>
                  <p className="text-gray-400 text-sm">Производство и офис</p>
                </div>
              </li>
            </ul>
            <div className="mt-5">
              <Button className="bg-gradient-to-r from-packaging-primary to-packaging-secondary hover:opacity-90 transition-opacity w-full">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ПакетПлюс. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-packaging-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-packaging-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
