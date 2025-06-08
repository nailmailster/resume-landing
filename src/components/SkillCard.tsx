import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  items: SkillItem[];
}

export const SkillCard = ({ title, items }: SkillCardProps) => {
  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.h3 
        className="text-xl font-bold mb-6 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <motion.ul className="space-y-4">
        {items.map((skill, index) => (
          <motion.li
            key={index}
            className="space-y-2"
            variants={item}
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
              />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}; 