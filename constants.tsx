import React from 'react';
import { Dumbbell, Activity, HeartPulse, Zap } from 'lucide-react';
import { Feature, Testimonial } from './types';

export const NAV_ITEMS = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Process', href: '#process' },
  { label: 'Stories', href: '#testimonials' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Progressive Overload',
    description: 'We don\'t spin wheels. We increase weight, reps, or intensity. Every. Single. Time. Track it or it didn\'t happen.',
    icon: <Dumbbell className="w-8 h-8 text-black" />,
  },
  {
    title: 'Specificity',
    description: 'Train for the goal. Want to run? Run. Want to lift? Lift. No random movements. Total focus.',
    icon: <Activity className="w-8 h-8 text-black" />,
  },
  {
    title: 'Recovery = Growth',
    description: 'Sleep 7-9 hours. Eat real food. Active recovery. You don\'t grow in the gym, you grow while you sleep.',
    icon: <HeartPulse className="w-8 h-8 text-black" />,
  },
  {
    title: 'Zero Fluff Mindset',
    description: 'Mindset is the heavy lifter. No excuses. If you feel pain, stop. If you feel tired, push.',
    icon: <Zap className="w-8 h-8 text-black" />,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Samay cuts the BS. I stopped planning and started lifting. Added 20kg to my deadlift in 8 weeks.",
    author: "Arjun K.",
    role: "Software Engineer"
  },
  {
    quote: "The voice mode is insane. It's like having a coach yelling in my ear (nicely) to keep going.",
    author: "Priya M.",
    role: "Product Manager"
  },
  {
    quote: "Concise. Brutal. Effective. Best fitness decision I've made this year.",
    author: "Rohan D.",
    role: "Founder"
  }
];