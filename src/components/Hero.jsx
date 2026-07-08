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
      subtitle: "Engineering Intelligent Growth Systems for Businesses Built to Scale.",
      image: hero1
    },
    {
      title: "Unified Intelligence",
      subtitle: "Businesses don't struggle because they lack ambition. They struggle because technology, marketing, operations, and data often operate independently.",
      image: hero2
    },
    {
      title: "Sustainable Business Growth",
      subtitle: "Infynix engineers these into one intelligent system that enables sustainable business growth.",
      image: hero3
    },
    {
      title: "Innovation & Technology",
      subtitle: "Transforming the future with cutting-edge technology and data-driven insights.",
      image: hero4
    }
  ],
  sectionLink: "/contact"
};

const Hero = () => {
  return <HeroSection data={heroData} />;
};

export default Hero;
