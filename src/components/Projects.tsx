/**
 * Projects Component: Renders the curated showcase of technical projects.
 */

import type { Project } from '../types/content';
import ProjectItem from './ProjectItem';
import '../styles/Projects.css';

export interface ProjectsProps {
  /** Curated projects list */
  readonly items: readonly Project[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <div className="projects-feed">
      {items.map((project, index) => (
        <ProjectItem
          key={project.id || project.title}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}