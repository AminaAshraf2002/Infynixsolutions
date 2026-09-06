import HeroSection from './HeroSection';

// The four hero photographs (7.3 MB combined) are deliberately no longer
// imported. The hero is now text plus a canvas animation, so nothing here needs
// to load before the page is readable.
const heroData = {
  eyebrow: 'GROWTH ENGINEERING COMPANY',
};

const Hero = () => <HeroSection data={heroData} />;

export default Hero;
