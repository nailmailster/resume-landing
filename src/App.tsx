import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { AnimatedText } from './components/AnimatedText';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ru } from './locales/ru';
import { en } from './locales/en';

function App() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const t = lang === 'ru' ? ru : en;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <AnimatedBackground />
      
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-800/80 shadow-md z-50 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.button
              className="text-sm px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </motion.button>
            <div className="flex space-x-6">
              {Object.keys(t.header).map((key) => (
                <motion.a
                  key={key}
                  href={`#${key}`}
                  className="hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {t.header[key as keyof typeof t.header]}
                </motion.a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-24">
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText
            text={t.hero.greeting}
            className="text-xl text-gray-600 dark:text-gray-400"
            delay={0.2}
          />
          <AnimatedText
            text={t.hero.name}
            className="text-5xl font-bold mt-2"
            delay={0.4}
          />
          <AnimatedText
            text={t.hero.position}
            className="text-2xl text-blue-500 mt-4"
            delay={0.6}
          />
        </motion.div>

        <Section id="about" title={t.about.title}>
          <p className="text-lg text-center max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </Section>

        <Section id="experience" title={t.experience.title}>
          <div className="space-y-8">
            {t.experience.jobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg p-6 backdrop-blur-sm"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{job.company} | {job.period}</p>
                <p className="mt-2">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" title={t.skills.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(t.skills.categories).map(([key, category]) => (
              <SkillCard
                key={key}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </Section>

        <Section id="portfolio" title={t.portfolio.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.portfolio.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </Section>

        <Section id="contact" title={t.contact.title}>
          <div className="text-center space-y-4">
            <motion.a
              href={`mailto:${t.contact.email}`}
              className="block text-blue-500 hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {t.contact.email}
            </motion.a>
            <motion.a
              href={t.contact.github}
              className="block text-blue-500 hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </motion.a>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
