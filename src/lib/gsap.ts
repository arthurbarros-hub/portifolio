import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export const registerGSAP = () => {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
};

export { gsap, ScrollTrigger };
