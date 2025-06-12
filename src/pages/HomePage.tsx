
import React from 'react';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            Casa Digital
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Цифровые решения
          <span className="block bg-gradient-casa bg-clip-text text-transparent">
            для вашего дома
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
          Создаем современные веб-решения, мобильные приложения и цифровые платформы 
          для комфортной жизни в умном доме
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-casa-blue/10 backdrop-blur-sm rounded-lg p-6 animate-fade-in">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Умный дом</h3>
            <p className="text-muted-foreground">
              Автоматизация и управление всеми системами вашего дома
            </p>
          </div>
          
          <div className="bg-casa-teal/10 backdrop-blur-sm rounded-lg p-6 animate-fade-in">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Мобильные приложения</h3>
            <p className="text-muted-foreground">
              Контролируйте ваш дом из любой точки мира
            </p>
          </div>
          
          <div className="bg-casa-lavender/10 backdrop-blur-sm rounded-lg p-6 animate-fade-in">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Энергоэффективность</h3>
            <p className="text-muted-foreground">
              Оптимизация потребления ресурсов и экономия
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Casa Digital. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
