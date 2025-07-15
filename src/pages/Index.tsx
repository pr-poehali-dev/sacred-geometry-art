import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-powder-50 to-powder-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-32">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-powder-200 text-powder-800 border-0">
                  Интегративный подход
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight">
                  Анна
                  <span className="block text-powder-600 font-normal">Психолог & Художник</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Сакральная геометрия, нейрографика и интегративная психология для гармонии души и разума
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-8 py-6 text-lg font-medium bg-powder-300 hover:bg-powder-400 text-powder-900 border-0">
                  Записаться на консультацию
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-medium border-powder-300 text-powder-700 hover:bg-powder-100">
                  Мои курсы
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-powder-200/20 to-transparent rounded-3xl"></div>
              <img 
                src="/img/25d84c17-3975-488b-a039-76d9b5b81306.jpg" 
                alt="Анна - психолог и художник"
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
              {/* Geometric decorations */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-powder-300 rounded-full opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-powder-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground">Услуги психолога</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Интегративный подход, включающий телесную терапию, гипноз, гештальт и психоанализ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "Индивидуальная терапия",
                description: "Персональная работа с использованием методов гештальт-терапии, психоанализа и эмоционально-образной терапии",
                methods: ["Гештальт", "Психоанализ", "ЭОТ"]
              },
              {
                icon: "Heart",
                title: "Телесная терапия",
                description: "Работа с телесными блоками и напряжениями для восстановления гармонии души и тела",
                methods: ["Телесная терапия", "Дыхательные практики"]
              },
              {
                icon: "Sparkles",
                title: "Гипнотерапия",
                description: "Глубинная работа с подсознанием для решения травм и изменения негативных паттернов",
                methods: ["Эриксонианский гипноз", "Регрессивная терапия"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-powder-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-powder-100 rounded-2xl flex items-center justify-center group-hover:bg-powder-200 transition-colors">
                    <Icon name={service.icon} className="w-8 h-8 text-powder-600" />
                  </div>
                  <CardTitle className="text-xl font-medium text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.methods.map((method, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-powder-100 text-powder-700 border-0">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Art Therapy Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-powder-200 text-powder-800 border-0">
                  Арт-терапия
                </Badge>
                <h2 className="text-4xl font-light tracking-tight text-foreground">
                  Нейрографика и сакральная геометрия
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Трансформация через творчество. Пошаговый план работы с сакральной геометрией для глубинного исцеления.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Диагностика состояния",
                    description: "Определяем внутренние блоки и области для проработки"
                  },
                  {
                    step: "02", 
                    title: "Создание нейрографики",
                    description: "Рисуем интуитивные линии для освобождения подсознания"
                  },
                  {
                    step: "03",
                    title: "Работа с геометрией",
                    description: "Интегрируем сакральные символы для гармонизации энергии"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-powder-200 rounded-xl flex items-center justify-center group-hover:bg-powder-300 transition-colors">
                      <span className="text-sm font-semibold text-powder-700">{step.step}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="px-8 py-6 text-lg font-medium bg-powder-300 hover:bg-powder-400 text-powder-900 border-0">
                Записаться на арт-терапию
              </Button>
            </div>

            <div className="relative">
              <img 
                src="/img/3368e6d3-73ed-4235-83be-a66241f46108.jpg" 
                alt="Нейрографика и арт-терапия"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-powder-100 rounded-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="px-6 py-20 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground">Курсы и обучение</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Онлайн и офлайн форматы. Групповые и индивидуальные программы обучения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Основы нейрографики",
                format: "Онлайн курс",
                duration: "8 недель",
                description: "Изучите основы нейрографического метода для личной трансформации и работы с клиентами",
                features: ["Теория и практика", "Сертификат", "Поддержка куратора", "Домашние задания"]
              },
              {
                title: "Сакральная геометрия в терапии",
                format: "Офлайн интенсив",
                duration: "3 дня",
                description: "Погружение в мир сакральных символов и их применение в психологической практике",
                features: ["Практические упражнения", "Материалы включены", "Сертификат", "Группа до 12 человек"]
              }
            ].map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-powder-200 bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-powder-300 text-powder-700">
                      {course.format}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <CardTitle className="text-2xl font-medium text-foreground">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {course.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Icon name="Check" className="w-5 h-5 text-powder-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-powder-300 hover:bg-powder-400 text-powder-900 border-0">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground">Картины на продажу</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Авторские работы в технике сакральной геометрии и нейрографики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Мандала гармонии",
                price: "15 000 ₽",
                size: "40x40 см",
                medium: "Акрил на холсте"
              },
              {
                title: "Поток исцеления", 
                price: "22 000 ₽",
                size: "60x40 см",
                medium: "Смешанная техника"
              },
              {
                title: "Сакральный круг",
                price: "18 000 ₽", 
                size: "50x50 см",
                medium: "Акрил, золото"
              }
            ].map((artwork, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-powder-200 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/img/75e26559-9bd6-4a82-953b-17e891abf90a.jpg" 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-foreground">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground">{artwork.medium}</p>
                    <p className="text-sm text-muted-foreground">{artwork.size}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-powder-700">{artwork.price}</span>
                    <Button size="sm" className="bg-powder-300 hover:bg-powder-400 text-powder-900 border-0">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-light tracking-tight text-foreground">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Готова ответить на ваши вопросы и помочь в начале пути к гармонии
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: "Phone",
                      title: "Телефон",
                      value: "+7 (999) 123-45-67",
                      action: "Позвонить"
                    },
                    {
                      icon: "Mail",
                      title: "Email",
                      value: "anna@example.com", 
                      action: "Написать"
                    },
                    {
                      icon: "MessageCircle",
                      title: "Telegram",
                      value: "@anna_psychology",
                      action: "Написать"
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-powder-100 rounded-xl flex items-center justify-center group-hover:bg-powder-200 transition-colors">
                        <Icon name={contact.icon} className="w-6 h-6 text-powder-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{contact.title}</h3>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-powder-600 hover:text-powder-700 hover:bg-powder-50">
                        {contact.action}
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-powder-50 rounded-2xl space-y-4">
                  <h3 className="font-medium text-foreground">Время работы</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Понедельник - Пятница: 10:00 - 20:00</p>
                    <p>Суббота: 10:00 - 16:00</p>
                    <p>Воскресенье: Выходной</p>
                  </div>
                </div>
              </div>

              <Card className="border-powder-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-foreground">Записаться на консультацию</CardTitle>
                  <CardDescription>Заполните форму и я свяжусь с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Имя</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-powder-200 focus:border-powder-400 focus:outline-none transition-colors bg-white/50" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Телефон</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-powder-200 focus:border-powder-400 focus:outline-none transition-colors bg-white/50" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Сообщение</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-powder-200 focus:border-powder-400 focus:outline-none transition-colors bg-white/50 h-24 resize-none" placeholder="Расскажите о ваших целях и пожеланиях"></textarea>
                  </div>
                  <Button className="w-full bg-powder-300 hover:bg-powder-400 text-powder-900 border-0 py-3">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-powder-900 text-white">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-light">Анна</h3>
            <p className="text-powder-200 max-w-md mx-auto">
              Психолог и художник. Интегративный подход к исцелению через искусство и терапию.
            </p>
            <div className="flex justify-center gap-6 pt-4">
              {["Instagram", "Telegram", "WhatsApp"].map((social, index) => (
                <Button key={index} variant="ghost" size="sm" className="text-powder-200 hover:text-white hover:bg-powder-800">
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;