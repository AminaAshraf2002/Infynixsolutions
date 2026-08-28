import React from 'react';
import HeroSection from './HeroSection';
import hero1 from '../assets/newhero.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';

const heroData = {
  slides: [
    {
      title: "Growth Engineering Company",
      subtitle: "We build smart systems to help your business grow fast.",
      image: hero1
    },
    {
      title: "Everything Connected",
      subtitle: "Businesses struggle when their marketing, tech, and data do not talk to each other. We fix that.",
      image: hero2
    },
    {
      title: "Built to Last",
      subtitle: "We connect your tools into one system. This makes growth steady and reliable.",
      image: hero3
    },
    {
      title: "Smart Technology",
      subtitle: "We use the latest tech and clear data to move your business forward.",
      image: hero4
    }
  ],
  sectionLink: "/contact"
};

const Hero = () => {
  return <HeroSection data={heroData} />;
};

export default Hero;
