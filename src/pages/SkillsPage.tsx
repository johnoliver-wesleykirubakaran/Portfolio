/**
 * SkillsPage: Section displaying structured technical capabilities.
 */

import Section from '../components/Section';
import Skills from '../components/Skills';
import type { SkillGroup } from '../types/content';
import '../styles/SkillsPage.css';

export interface SkillsPageProps {
  readonly groups: readonly SkillGroup[];
  readonly sectionNumber?: string | undefined;
  readonly heading?: string | undefined;
  readonly intro?: string | undefined;
}

export default function SkillsPage({
  groups,
  sectionNumber = '03',
  heading = 'Skills',
  intro = 'A structured technical foundation developed through hands-on coursework, research projects, and systems engineering.',
}: SkillsPageProps) {
  return (
    <Section
      id="skills"
      sectionNumber={sectionNumber}
      heading={heading}
      subheading={intro}
      className="skills-section"
    >
      <div className="skills-page">
        <Skills groups={groups} />
      </div>
    </Section>
  );
}