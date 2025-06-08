import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedText } from './components/AnimatedText';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Section } from './components/Section';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { ContactSection } from './components/ContactSection';

type Language = 'en' | 'ru' | 'zh';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<Language>(i18n.language as Language);

  const toggleLanguage = () => {
    const languages: Language[] = ['en', 'ru', 'zh'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    const newLang = languages[nextIndex];
    void i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <div className="min-h-screen w-full bg-light dark:bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-medium bg-primary text-white rounded hover:bg-secondary transition-colors"
          >
            {language.toUpperCase()}
          </button>
          <div className="flex space-x-6">
            {['about', 'experience', 'skills', 'portfolio', 'contacts'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-primary transition-colors text-sm sm:text-base"
              >
                {t(`navigation.${item}`)}
              </a>
            ))}
          </div>
        </nav>
        
        <main className="py-8">
          <AnimatedBackground>
            <section id="about" className="text-center mb-16">
              <div className="space-y-4">
                <AnimatedText text={t('greeting')} className="text-xl sm:text-2xl text-dark dark:text-light" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary my-4 leading-tight">
                  {t('name')}
                </h1>
                <AnimatedText
                  text={t('title')}
                  className="text-xl sm:text-2xl md:text-3xl text-secondary"
                />
              </div>
            </section>
            
            <Section id="about" title={t('about.title')}>
              <p className="text-lg text-center max-w-3xl mx-auto">
                {t('about.description')}
              </p>
            </Section>

            <Section id="experience" title={t('experience.title')}>
              <div className="space-y-8">
                {(t('experience.jobs', { returnObjects: true }) as Array<any>).map((job, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
                    <p className="mt-2">{job.description}</p>
                    <ul className="mt-2 list-disc list-inside">
                      {job.achievements.map((achievement: string, i: number) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="skills" title={t('skills.title')}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(t('skills.categories', { returnObjects: true }) as Record<string, any>).map(([key, category]) => (
                  <SkillCard
                    key={key}
                    title={category.title}
                    items={category.items}
                  />
                ))}
              </div>
            </Section>

            <Section id="portfolio" title={t('portfolio.title')}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(t('portfolio.projects', { returnObjects: true }) as Array<any>).map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                  />
                ))}
              </div>
            </Section>

            <ContactSection />
          </AnimatedBackground>
        </main>
      </div>
    </div>
  );
}

export default App;
