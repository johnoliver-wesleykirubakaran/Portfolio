/**
 * Skills Component: Structured technical overview with compact groups,
 * monospace categorization, and subtle editorial dividers.
 * Strictly avoids progress bars and proficiency percentages.
 */

import type { SkillGroup } from '../types/content';
import '../styles/Skills.css';

export interface SkillsProps {
  /** The 6 verified skill groups */
  readonly groups: readonly SkillGroup[];
}

export default function Skills({ groups }: SkillsProps) {
  return (
    <div className="skills-overview">
      <div className="skills-overview__grid">
        {groups.map((group, index) => (
          <div key={group.label} className="skills-group">
            <div className="skills-group__header">
              <span className="skills-group__index mono">0{index + 1}</span>
              <h3 className="skills-group__label mono">{group.label}</h3>
            </div>

            <ul className="skills-group__list" role="list" aria-label={group.label}>
              {group.items.map((item) => (
                <li key={item} className="skills-group__item">
                  <span className="skills-group__name">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}