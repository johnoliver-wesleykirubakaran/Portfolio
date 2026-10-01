/**
 * Top-level layout.
 *
 * Composes the page from the semantic sections in the prescribed order:
 * Hero → About → Projects → Skills → Contact → Footer. All content is
 * sourced from `src/data/content.ts`; this component does no string
 * manipulation and owns no copy of its own.
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  navItems,
  projects,
  contactLinks,
  content,
} from './data/content';

export default function App() {
  const { name, tagline, about, skills, contact, footer } = content;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header name={name} items={navItems} />

      <main id="main">
        <Hero name={name} tagline={tagline} />

        <Section id="about" heading={about.heading}>
          <About paragraphs={about.paragraphs} />
        </Section>

        <Section id="projects" heading={content.projects.heading}>
          <Projects items={projects} />
        </Section>

        <Section id="skills" heading={skills.heading}>
          <Skills groups={skills.groups} />
        </Section>

        <Section id="contact" heading={contact.heading}>
          <Contact intro={contact.intro} links={contactLinks} />
        </Section>
      </main>

      <Footer text={footer.text} />
    </>
  );
}