import { motion } from 'framer-motion';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="section bg-primary text-white"
        >
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Привет, я Иван Иванов
            </h1>
            <p className="text-xl md:text-2xl text-accent">
              Frontend Developer & UI/UX Designer
            </p>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="heading">Обо мне</h2>
            <p className="text-lg">
              Креативный разработчик с страстью к созданию красивых и функциональных веб-приложений.
              Более 5 лет опыта в разработке пользовательских интерфейсов и веб-приложений.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section bg-white">
          <div className="container">
            <h2 className="heading">Опыт работы</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="subheading">Senior Frontend Developer</h3>
                <p className="text-dark/70">Awesome Company • 2020 - Настоящее время</p>
                <p className="mt-2">Разработка и поддержка крупных веб-приложений</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="subheading">Frontend Developer</h3>
                <p className="text-dark/70">Cool Startup • 2018 - 2020</p>
                <p className="mt-2">Создание пользовательских интерфейсов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section bg-light">
          <div className="container">
            <h2 className="heading">Навыки</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-secondary">Frontend</h3>
                <p>React, Vue, TypeScript</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-secondary">UI/UX</h3>
                <p>Figma, Adobe XD</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-secondary">Backend</h3>
                <p>Node.js, Express</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-secondary">Other</h3>
                <p>Git, Docker</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section">
          <div className="container">
            <h2 className="heading">Портфолио</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 bg-secondary"></div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Проект {item}</h3>
                    <p className="text-dark/70">Краткое описание проекта</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-primary text-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Свяжитесь со мной</h2>
            <div className="flex flex-col space-y-4">
              <a href="mailto:example@email.com" className="text-accent hover:text-white transition-colors">
                example@email.com
              </a>
              <a href="tel:+79001234567" className="text-accent hover:text-white transition-colors">
                +7 (900) 123-45-67
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>© 2024 Иван Иванов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
