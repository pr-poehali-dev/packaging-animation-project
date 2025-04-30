import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-8 w-8 text-packaging-primary" />
          <span className="font-display text-xl font-bold tracking-tight">ПакетПлюс</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-sm font-medium hover:text-packaging-primary transition-colors">
            Главная
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-packaging-primary transition-colors">
            Продукция
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-packaging-primary transition-colors">
            Услуги
          </Link>
          <Link to="/portfolio" className="text-sm font-medium hover:text-packaging-primary transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-packaging-primary transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-packaging-primary transition-colors">
            Контакты
          </Link>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-packaging-primary" />
            <span className="text-sm font-medium">8 (800) 555-35-35</span>
          </div>
          <Button className="bg-gradient-to-r from-packaging-primary to-packaging-secondary hover:opacity-90 transition-opacity">
            Заказать звонок
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-packaging-primary" />
          ) : (
            <Menu className="h-6 w-6 text-packaging-primary" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-5 animate-fade-slide-up">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-packaging-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/products" 
                className="text-sm font-medium hover:text-packaging-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Продукция
              </Link>
              <Link 
                to="/services" 
                className="text-sm font-medium hover:text-packaging-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/portfolio" 
                className="text-sm font-medium hover:text-packaging-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Портфолио
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium hover:text-packaging-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                О нас
              </Link>
              <Link 
                to="/contacts" 
                className="text-sm font-medium hover:text-packaging-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </Link>
              <div className="pt-2 border-t">
                <div className="flex items-center space-x-2 mb-3">
                  <Phone className="h-4 w-4 text-packaging-primary" />
                  <span className="text-sm font-medium">8 (800) 555-35-35</span>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-packaging-primary to-packaging-secondary hover:opacity-90 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
