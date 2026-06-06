'use client';

import { motion } from 'framer-motion';

export default function FloatingBubbles() {
  const bubbles = [
    { size: 300, color: 'bg-accent-pink', top: '10%', left: '5%', delay: 0 },
    { size: 200, color: 'bg-accent-purple', top: '60%', left: '80%', delay: 1 },
    { size: 250, color: 'bg-accent-orange', top: '30%', left: '70%', delay: 2 },
    { size: 180, color: 'bg-accent-blue', top: '70%', left: '15%', delay: 0.5 },
    { size: 220, color: 'bg-accent-pink', top: '40%', left: '30%', delay: 1.5 },
    { size: 160, color: 'bg-accent-purple', top: '80%', left: '50%', delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`bubble ${bubble.color} opacity-20`}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
