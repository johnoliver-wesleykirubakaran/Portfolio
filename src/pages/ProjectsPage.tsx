/**
 * ProjectsPage: Centerpiece section showcasing featured AI/ML systems and tooling.
 */

import Section from '../components/Section';
import Projects from '../components/Projects';
import type { Project } from '../types/content';
import '../styles/ProjectsPage.css';

export interface ProjectsPageProps {
  readonly items: readonly Project[];
  readonly sectionNumber?: string | undefined;
  readonly heading?: string | undefined;
  readonly intro?: string | undefined;
}

export default function ProjectsPage({
  items,
  sectionNumber = '02',
  heading = 'Projects',
  intro = 'Architected and implemented systems focusing on model explainability, retrieval quality, and quantitative evaluation.',
}: ProjectsPageProps) {
  return (
    <Section
      id="projects"
      sectionNumber={sectionNumber}
      heading={heading}
      subheading={intro}
      className="projects-section"
    >
      <div className="projects-page">
        <Projects items={items} />
      </div>
    </Section>
  );
}