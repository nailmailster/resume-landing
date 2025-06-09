import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const ContactSection = () => {
  const { t } = useTranslation();

  const contacts = [
    { icon: FaEnvelope, href: `mailto:${t('contacts.email')}`, text: t('contacts.email') },
    { icon: FaGithub, href: t('contacts.github'), text: 'GitHub' },
    { icon: FaLinkedin, href: t('contacts.linkedin'), text: 'LinkedIn' }
  ];

  return (
    <section id="contacts" className="py-16 relative z-50 bg-light dark:bg-dark">
      <h2 className="text-3xl font-bold text-center mb-8">{t('contacts.title')}</h2>
      <div className="flex flex-col items-center space-y-4">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg hover:text-primary transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <contact.icon className="text-xl" />
            <span>{contact.text}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}; 