/**
 * A single project row: title, description, neutral tag chips, optional links.
 *
 * Hover state: subtle underline on the title only. Links are filtered of
 * placeholders before they reach this component.
 */

import type { Project } from '../types/content';
import '../styles/ProjectItem.css';

export interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <li className="project">
      <h3 className="project__title">{project.title}</h3>
      <p className="project__description">{project.description}</p>

      {project.tags.length > 0 && (
        <ul className="project__tags" role="list" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="project__tag">
              {tag}
            </li>
          ))}
        </ul>
      )}

      {project.links.length > 0 && (
        <div className="project__links" role="list" aria-label="Project links">
          {project.links.map((link) => (
            <a
              key={link.label}
              className="project__link"
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}