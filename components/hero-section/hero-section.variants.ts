import { Variants } from 'framer-motion';

export const HeroTextVariants: Variants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const HeroImageVariants: Variants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
