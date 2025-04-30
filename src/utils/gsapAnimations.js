import { gsap } from 'gsap';

export const animateText = () => {
  gsap.from(".animated-text", { opacity: 0, duration: 2, y: -100 });
};