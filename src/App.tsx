/**
 * Single-page portfolio app — editorial architecture for John Oliver.
 * All sections render sequentially and are reached by natural scrolling
 * or via the sticky header's anchor links.
 */

import Layout from './components/Layout';
import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import { projects, contactLinks, content } from './data/content';

export default function App() {
  const { hero, about, projects: projectsContent, skills, contact, footer } = content;

  return (
    <Layout>
      <HeroPage hero={hero} />
      <AboutPage about={about} />
      <ProjectsPage
        items={projects}
        sectionNumber={projectsContent.sectionNumber}
        heading={projectsContent.heading}
        intro={projectsContent.intro}
      />
      <SkillsPage
        groups={skills.groups}
        sectionNumber={skills.sectionNumber}
        heading={skills.heading}
        intro={skills.intro}
      />
      <ContactPage
        heading={contact.heading}
        sectionNumber={contact.sectionNumber}
        intro={contact.intro}
        links={contactLinks}
        location={contact.location}
        availability={contact.availability}
        footerText={footer.text}
        colophon={footer.colophon}
      />
    </Layout>
  );
}