import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { 
  Code, 
  Palette, 
  Zap, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Globe,
  Smartphone,
  Search,
  TrendingUp,
  Award,
  MessageCircle,
  Instagram,
  Send,
  Mail,
  Phone,
  ExternalLink,
  X
} from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: ''
  });

  // Show promo popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromoPopup(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение часа.",
    });
    setFormData({ name: '', contact: '', service: '', message: '' });
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Интернет-магазин модной одежды",
      category: "Интернет-магазины",
      image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop`,
      results: "Увеличили конверсию на 45%",
      tech: ["React", "Node.js", "Stripe"],
      description: "Создали современный интернет-магазин с интуитивным интерфейсом и быстрой загрузкой"
    },
    {
      id: 2,
      title: "Корпоративный сайт IT-компании",
      category: "Корпоративные сайты",
      image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop`,
      results: "Рост лидов на 60%",
      tech: ["Vue.js", "Laravel", "CRM"],
      description: "Разработали корпоративный сайт с интеграцией CRM и автоматизацией процессов"
    },
    {
      id: 3,
      title: "Лендинг для стартапа",
      category: "Лендинги",
      image: `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop`,
      results: "Конверсия 8.5%",
      tech: ["Next.js", "Tailwind", "Analytics"],
      description: "Создали высококонвертирующий лендинг с A/B тестированием и аналитикой"
    },
    {
      id: 4,
      title: "Платформа онлайн-обучения",
      category: "Образование",
      image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop`,
      results: "10000+ пользователей",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Разработали образовательную платформу с видеоуроками и интерактивными заданиями"
    },
    {
      id: 5,
      title: "Сайт ресторана премиум-класса",
      category: "HoReCa",
      image: `https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop`,
      results: "Рост бронирований на 40%",
      tech: ["WordPress", "Custom Theme", "Booking"],
      description: "Создали элегантный сайт ресторана с системой онлайн-бронирования"
    },
    {
      id: 6,
      title: "Медицинский портал",
      category: "Медицина",
      image: `https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop`,
      results: "Упростили запись на 70%",
      tech: ["React", "Python", "PostgreSQL"],
      description: "Разработали медицинский портал с онлайн-записью и телемедициной"
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Разработка сайтов",
      description: "Создаем современные, быстрые и конвертирующие веб-сайты любой сложности",
      features: ["Адаптивный дизайн", "SEO-оптимизация", "Быстрая загрузка"]
    },
    {
      icon: Search,
      title: "Контекстная реклама",
      description: "Настраиваем эффективную рекламу в Google и Яндекс для привлечения целевой аудитории",
      features: ["Google Ads", "Яндекс.Директ", "Аналитика ROI"]
    },
    {
      icon: Palette,
      title: "Брендинг и дизайн",
      description: "Разрабатываем уникальный фирменный стиль и создаем запоминающиеся бренды",
      features: ["Логотип", "Фирменный стиль", "UI/UX дизайн"]
    },
    {
      icon: TrendingUp,
      title: "Digital-маркетинг",
      description: "Комплексное продвижение бизнеса в интернете с измеримыми результатами",
      features: ["SMM", "Email-маркетинг", "Контент-стратегия"]
    }
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      company: "ТechCorp",
      role: "Генеральный директор",
      text: "Casa Digital превзошли все наши ожидания. Новый сайт увеличил количество лидов в 3 раза!",
      rating: 5,
      avatar: `https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=face`
    },
    {
      name: "Елена Сидорова", 
      company: "Fashion Boutique",
      role: "Владелец бизнеса",
      text: "Профессиональная команда, отличный результат. Рекомендую всем, кто хочет серьезно заняться digital!",
      rating: 5,
      avatar: `https://images.unsplash.com/photo-1494790108755-2616b332c302?w=100&h=100&fit=crop&crop=face`
    },
    {
      name: "Михаил Козлов",
      company: "StartupX",
      role: "СЕО",
      text: "Запустили стартап с нуля до первых продаж за 2 месяца. Casa Digital - наши надежные партнеры!",
      rating: 5,
      avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('Все');
  const categories = ['Все', 'Интернет-магазины', 'Корпоративные сайты', 'Лендинги', 'Образование', 'HoReCa', 'Медицина'];

  const filteredPortfolio = selectedCategory === 'Все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-casa-blue-dark to-casa-teal-dark bg-clip-text text-transparent">
            Casa Digital
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-casa-gray-dark hover:text-casa-blue-dark transition-colors">О нас</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-casa-gray-dark hover:text-casa-blue-dark transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('services')} className="text-casa-gray-dark hover:text-casa-blue-dark transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('contact')} className="text-casa-gray-dark hover:text-casa-blue-dark transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollToSection('contact')} className="btn-primary hidden md:block">
            <MessageCircle className="w-4 h-4 mr-2" />
            Обсудить проект
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-casa-sage to-casa-lavender overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-casa-gray-dark">
              Создаём сайты,<br />
              <span className="text-gradient">
                которые приносят прибыль
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-casa-gray-dark/80">
              От студии до маркетингового агентства — помогаем бизнесу расти в digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="btn-primary text-lg px-10 py-4">
                Оставить заявку
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => scrollToSection('portfolio')} size="lg" variant="outline" className="btn-secondary text-lg px-10 py-4">
                Посмотреть портфолио
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Code className="w-12 h-12 text-casa-blue/50" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Smartphone className="w-16 h-16 text-casa-teal/50" />
        </div>
        <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Palette className="w-10 h-10 text-casa-lavender/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">О нас</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Casa Digital — это команда экспертов, которая создаёт не просто сайты, а инструменты для роста. 
              Мы адаптируемся под ваш бизнес и масштабируем решения.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Скорость разработки", desc: "Запускаем проекты в сжатые сроки без потери качества", color: "casa-coral" },
              { icon: Palette, title: "Индивидуальный дизайн", desc: "Создаем уникальные решения под ваш бренд", color: "casa-lavender" },
              { icon: Users, title: "Поддержка 24/7", desc: "Всегда на связи для решения любых вопросов", color: "casa-sage" },
              { icon: Award, title: "Гибкие условия", desc: "Адаптируем процессы под ваши потребности", color: "casa-blue" }
            ].map((item, index) => (
              <Card key={index} className="card-hover border-0 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-casa-gray-dark">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-casa-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Портфолио</h2>
            <p className="text-xl text-muted-foreground mb-8">Примеры наших успешных проектов</p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "btn-primary" : "btn-secondary"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="card-hover cursor-pointer overflow-hidden border-0 shadow-sm bg-white/70">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-casa-coral-dark text-white">
                        {item.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-casa-gray-dark">{item.title}</h3>
                      <p className="text-casa-blue-dark font-medium mb-4">{item.results}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-casa-lavender text-casa-lavender-dark">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <div className="space-y-6">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <Badge className="bg-casa-coral-dark text-white mb-4">{item.category}</Badge>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Результат:</h4>
                          <p className="text-casa-blue-dark font-medium">{item.results}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Технологии:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                              <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр digital-услуг для вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-sm overflow-hidden bg-white/70">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-casa rounded-3xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4 text-casa-gray-dark">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-casa-sage-dark mr-3" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-casa-gray/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover border-0 shadow-sm bg-white/70">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-casa-gray-dark">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-casa-blue-dark">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-casa-coral-dark fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Обсудим ваш проект?</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку и получите бесплатную консультацию</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="text-lg py-6 border-casa-gray"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон или Email"
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className="text-lg py-6 border-casa-gray"
                      required
                    />
                  </div>
                  <div>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="text-lg py-6 border-casa-gray">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Разработка сайта</SelectItem>
                        <SelectItem value="advertising">Контекстная реклама</SelectItem>
                        <SelectItem value="branding">Брендинг</SelectItem>
                        <SelectItem value="marketing">Digital-маркетинг</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем проекте"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="text-lg min-h-32 border-casa-gray"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-primary text-lg py-6">
                    <Send className="w-5 h-5 mr-2" />
                    Обсудить проект
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Отправляя заявку, вы получаете бесплатную консультацию
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-casa-blue-dark to-casa-teal-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Casa Digital</h3>
              <p className="text-white/80 mb-6">
                Создаем digital-решения, которые приносят реальные результаты вашему бизнесу.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Send className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Разработка сайтов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контекстная реклама</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Брендинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital-маркетинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-4 text-white/80">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hello@casadigital.ru</span>
                </div>
                <div className="flex items-center">
                  <Send className="w-5 h-5 mr-3" />
                  <span>@casadigital_agency</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 Casa Digital. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Promo Popup */}
      <Dialog open={showPromoPopup} onOpenChange={setShowPromoPopup}>
        <DialogContent className="max-w-md">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-gradient-casa rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Специальное предложение!</h3>
            <p className="text-muted-foreground mb-6">
              Получите <span className="text-casa-coral-dark font-bold">10% скидку</span> на первый заказ. 
              Укажите промокод <span className="font-bold">WELCOME10</span> в форме заявки.
            </p>
            <div className="flex space-x-4">
              <Button onClick={() => setShowPromoPopup(false)} className="btn-primary flex-1">
                Получить скидку
              </Button>
              <Button variant="outline" onClick={() => setShowPromoPopup(false)} size="icon">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => scrollToSection('contact')} className="btn-primary rounded-full w-16 h-16 shadow-lg animate-float">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
