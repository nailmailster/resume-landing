import type { ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedBackgroundProps {
  children: ReactNode;
}

export const AnimatedBackground = ({ children }: AnimatedBackgroundProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const translateX = useSpring(mouseX, springConfig);
  const translateY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    
    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  return (
    <motion.div
      className="relative min-h-screen"
      onMouseMove={handleMouseMove}
      style={{
        perspective: '1000px'
      }}
    >
      <motion.div
        className="relative z-10"
        style={{
          rotateX: translateY,
          rotateY: translateX
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 