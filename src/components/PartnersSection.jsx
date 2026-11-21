import React from 'react';
import { useIxReveal } from './WhoWeAre';
import atmosotLogo from '../assets/svg logos/ATMOSOT LOGO.svg';
import capricornLogo from '../assets/svg logos/Capricorn-logo-02.svg';
import eccLogo from '../assets/svg logos/ECC-LOGO.svg';
import hairStudioLogo from '../assets/svg logos/HAIR-STUDIO.svg';
import insightBimLogo from '../assets/svg logos/INSIGHT-BIM-LOGO.svg';
import lstudioLogo from '../assets/svg logos/L-STUDIO_LOGO-WHITE.svg';
import lyvinLogo from '../assets/svg logos/Lyvin-logo.svg';
import miniBelleLogo from '../assets/svg logos/MINI-BELLE-logo.svg';
import interioPlusLogo from '../assets/svg logos/interio-plus.svg';
import lumoraLogo from '../assets/svg logos/lumora-LOGO-WHITE.svg';
import miracleMeditationLogo from '../assets/svg logos/miracle-meditation-loGO.svg';
import nluxLogo from '../assets/svg logos/nlux.svg';

const PartnersSection = () => {
  useIxReveal();
  const partners = [
    { name: 'ATMOSOT', src: atmosotLogo },
    { name: 'Capricorn', src: capricornLogo },
    { name: 'ECC', src: eccLogo },
    { name: 'HAIR STUDIO', src: hairStudioLogo },
    { name: 'INSIGHT BIM', src: insightBimLogo },
    { name: 'L Studio', src: lstudioLogo },
    { name: 'Lyvin', src: lyvinLogo },
    { name: 'MINI BELLE', src: miniBelleLogo },
    { name: 'Interio Plus', src: interioPlusLogo },
    { name: 'Lumora', src: lumoraLogo },
    { name: 'Miracle Meditation', src: miracleMeditationLogo },
    { name: 'NLUX', src: nluxLogo }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-inner">
        <h2 className="partners-h2" data-aos="fade-up">Our Trusted <em>Partners</em></h2>
        <div className="partners-marquee-window">
          <div className="partners-marquee-track">
            {[0, 1].map((copy) => (
              <div className="partners-marquee-set" aria-hidden={copy === 1} key={copy}>
                {partners.map((partner) => (
                  <div className="partner-logo" data-aos="fade-up" key={`${copy}-${partner.name}`}>
                    <img loading="lazy" decoding="async" src={partner.src} alt={partner.name} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;