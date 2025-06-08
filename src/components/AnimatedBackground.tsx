import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, #4F46E5 0%, transparent 50%)',
            'radial-gradient(circle at 60% 60%, #4F46E5 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, #4F46E5 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, #4F46E5 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20
        }}
        style={{
          background: 'radial-gradient(circle at center, #4F46E5 0%, transparent 60%)',
          filter: 'blur(40px)'
        }}
      />
    </div>
  );
}; 