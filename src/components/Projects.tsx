/**
 * Projects: a stacked list of project items.
 *
 * Renders a `<ul>` of `ProjectItem` components. No inline copy, no logic.
 */

import type { Project } from '../types/content';
import ProjectItem from './ProjectItem';
import '../styles/Projects.css';

export interface ProjectsProps {
  /** The projects to display, already filtered of placeholder links. */
  items: readonly Project[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <ul className="projects" role="list">
      {items.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </ul>
  );
}