/**
 * Skills: grouped plain lists. No progress bars, no percentages.
 *
 * Each group renders its label and a comma-separated list of items.
 */

import type { SkillGroup } from '../types/content';
import '../styles/Skills.css';

export interface SkillsProps {
  groups: readonly SkillGroup[];
}

export default function Skills({ groups }: SkillsProps) {
  return (
    <div className="skills">
      {groups.map((group) => (
        <div key={group.label} className="skills__group">
          <h3 className="skills__label">{group.label}</h3>
          <ul className="skills__list" role="list">
            {group.items.map((item) => (
              <li key={item} className="skills__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}