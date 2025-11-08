import { type ReactNode } from 'react';
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  // TechStackSection,
  PortfolioSection,
  // HobbiesSection,
  ContactSection,
} from '../sections';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, children, className = '' }: SectionProps) => (
  <section id={id} className={`min-h-screen flex items-center justify-center py-16 ${className}`}>
    {children}
  </section>
);

const HomePage = () => (
  <div className="w-full">
    <Section id="hero" className="bg-gradient-to-br from-base-100 to-base-200">
      <HeroSection />
    </Section>

    <Section id="about" className="bg-base-100">
      <AboutSection />
    </Section>

    <Section id="experience" className="bg-base-200">
      <ExperienceSection />
    </Section>

    <Section id="portfolio" className="bg-base-100">
      <PortfolioSection />
    </Section>

    {/* <Section id="tech-stack" className="bg-base-200">
      <TechStackSection />
    </Section> */}

    {/* <Section id="hobbies" className="bg-base-100">
      <HobbiesSection />
    </Section> */}

    <Section id="contact" className="bg-base-200">
      <ContactSection />
    </Section>
  </div>
);

export default HomePage;
