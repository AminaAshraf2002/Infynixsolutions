import { useIxReveal } from './WhoWeAre';

const InitiativesSection = () => {
  useIxReveal();
  return (
    <section className="initiatives-section" id="initiatives">
      <div className="initiatives-inner">
        {/* Left Side */}
        <div className="init-left" data-aos="fade-up">
          <h1 className="init-h1">
            Strategic<br />
            <em>Pillars</em>
          </h1>
          <p className="init-desc">
            We are pioneering the next frontier of enterprise technology with targeted research and development in cognitive systems, ethical networks, and immersive digital design.
          </p>
          <p className="init-desc">
            Our core innovation pillars are designed to build intelligent, scalable, and resilient systems that adapt to complex business ecosystems. By merging advanced AI research with human-centric interfaces, we prepare leading brands for tomorrow's digital economy.
          </p>
        </div>

        {/* Right Side Grid */}
        <div className="init-right">
          {/* Card 1: ZIRO */}
          <div className="init-card" data-aos-delay="100" data-aos="fade-up">
            <div className="init-card-logo-wrap">
              <span className="logo-ziro">ZIRO</span>
            </div>
            <p className="init-card-desc">
              <strong>Ethical Knowledge Networks</strong> — Building purpose-driven platforms focused on collaborative intelligence and data integrity.
            </p>
          </div>

          {/* Card 2: DEEP FUTURE INTELLIGENCE */}
          <div className="init-card" data-aos-delay="200" data-aos="fade-up">
            <div className="init-card-logo-wrap" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="logo-dfi-icon">
                <span />
                <span />
              </div>
              <span className="logo-dfi-text">
                DEEP FUTURE<br />INTELLIGENCE
              </span>
            </div>
            <p className="init-card-desc">
              <strong>Cognitive Computing</strong> — Developing advanced reasoning frameworks that enable seamless collaboration between humans and smart machines.
            </p>
          </div>

          {/* Card 3: advait */}
          <div className="init-card" data-aos-delay="300" data-aos="fade-up">
            <div className="init-card-logo-wrap">
              <span className="logo-advait">
                adva<span>i</span>t
              </span>
            </div>
            <p className="init-card-desc">
              <strong>Autonomous Intelligence</strong> — Engineering self-evolving architectures and autonomous engines for enterprise decision-making.
            </p>
          </div>

          {/* Card 4: Triode */}
          <div className="init-card" data-aos-delay="400" data-aos="fade-up">
            <div className="init-card-logo-wrap">
              <span className="logo-triode">
                Tr<span>i</span>ode
              </span>
            </div>
            <p className="init-card-desc">
              <strong>Intelligent Experience</strong> — Designing high-fidelity, adaptive user experiences that harmonize complex systems with human interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
