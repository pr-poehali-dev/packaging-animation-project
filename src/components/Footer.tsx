import { Link } from "react-router-dom";
import { ShoppingBag, Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <ShoppingBag className="h-8 w-8 text-packaging-primary" />
              <span className="font-display text-xl font-bold tracking-tight">ПакетПлюс</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Производство качественной упаковки с индивидуальным дизайном для вашего бизнеса. 
              Работаем с 2011 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-packaging-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-packaging-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-packaging-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Продукция</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/paper-bags" className="text-gray-400 hover:text-white transition-colors">Бумажные пакеты</Link>
              </li>
              <li>
                <Link to="/products/plastic-bags" className="text-gray-400 hover:text-white transition-colors">Полиэтиленовые пакеты</Link>
              </li>
              <li>
                <Link to="/products/boxes" className="text-gray-400 hover:text-white transition-colors">Коробки и упаковка</Link>
              </li>
              <li>
                <Link to="/products/gift-packaging" className="text-gray-400 hover:text-white transition-colors">Подарочная упаковка</Link>
              </li>
              <li>
                <Link to="/products/food-packaging" className="text-gray-400 hover:text-white transition-colors">Упаковка для еды</Link>
              </li>
              <li>
                <Link to="/products/stickers" className="text-gray-400 hover:text-white transition-colors">Стикеры и наклейки</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Компания</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Портфолио</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Блог</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Доставка</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-packaging-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">8 (800) 555-35-35</p>
                  <p className="text-sm text-gray-400">Пн-Пт с 9:00 до 18:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-packaging-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">info@paketplus.ru</p>
                  <p className="text-sm text-gray-400">Для запросов и предложений</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-packaging-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">г. Москва</p>
                  <p className="text-sm text-gray-400">ул. Примерная, д. 123</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-packaging-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Режим работы</p>
                  <p className="text-sm text-gray-400">Пн-Пт: 9:00–18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-gray-500 text-sm order-2 md:order-1 text-center md:text-left">
              © {new Date().getFullYear()} ПакетПлюс. Все права защищены.
            </p>
            <div className="flex justify-center md:justify-end space-x-6 order-1 md:order-2">
              <Button variant="link" className="text-gray-500 hover:text-white px-0">
                Политика конфиденциальности
              </Button>
              <Button variant="link" className="text-gray-500 hover:text-white px-0">
                Пользовательское соглашение
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
