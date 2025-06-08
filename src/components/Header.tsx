import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  const [language, setLanguage] = useState('ru');

  const languages = {
    ru: 'Русский',
    en: 'English',
    zh: '中文'
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary"
        >
          Иван Иванов
        </motion.h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-dark hover:text-secondary transition-colors">Обо мне</a>
          <a href="#experience" className="text-dark hover:text-secondary transition-colors">Опыт</a>
          <a href="#skills" className="text-dark hover:text-secondary transition-colors">Навыки</a>
          <a href="#portfolio" className="text-dark hover:text-secondary transition-colors">Портфолио</a>
          <a href="#contact" className="text-dark hover:text-secondary transition-colors">Контакты</a>
        </nav>

        <div className="flex items-center space-x-4">
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-light rounded-md px-2 py-1 text-sm"
          >
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>

          <div className="flex space-x-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 text-dark hover:text-secondary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-dark hover:text-secondary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 