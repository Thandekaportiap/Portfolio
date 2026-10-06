export const viewport = { once: true, amount: 0.2 };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const slideIn = (dir = 'left') => ({
  hidden: { opacity: 0, x: dir === 'left' ? -80 : 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
});

export const stagger = (gap = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

export const popIn = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 14 } },
};