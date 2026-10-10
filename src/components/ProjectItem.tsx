/**
 * ProjectItem Component:
 * Sophisticated, editorial showcase for projects.
 * Supports large featured layouts with embedded technical visualizers (Grad-CAM for Pest Management,
 * Pipeline Workflow for RAG Configurator) and verified evaluation metrics.
 */

import type { Project } from '../types/content';
import PestProjectVisual from './PestProjectVisual';
import RagPipelineVisual from './RagPipelineVisual';
import '../styles/ProjectItem.css';

export interface ProjectItemProps {
  readonly project: Project;
  readonly index: number;
}

export default function ProjectItem({ project, index }: ProjectItemProps) {
  const isPest = project.id === 'precision-pest-management';
  const isRag = project.id === 'rag-configurator';
  const isFeatured = project.featured ?? false;

  return (
    <article
      className={`project-card ${isFeatured ? 'project-card--featured' : 'project-card--standard'}`}
      aria-labelledby={`project-title-${project.id || index}`}
    >
      {/* Top Editorial Index & Meta */}
      <div className="project-card__meta">
        <span className="project-card__number mono">
          PROJECT 0{index + 1}
        </span>
        {project.subtitle && (
          <span className="project-card__subtitle mono">
            {project.subtitle}
          </span>
        )}
      </div>

      {/* Main Header */}
      <div className="project-card__header">
        <h3 id={`project-title-${project.id || index}`} className="project-card__title">
          {project.title}
        </h3>
        <p className="project-card__description">{project.description}</p>
      </div>

      {/* Dedicated Visual Showcase Area */}
      {isPest && (
        <div className="project-card__visual">
          <PestProjectVisual />
        </div>
      )}

      {isRag && project.pipelineSteps && (
        <div className="project-card__visual">
          <RagPipelineVisual steps={project.pipelineSteps} />
        </div>
      )}

      {/* Verified Evaluation Metrics (Precision Pest Management & benchmarks) */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="project-card__metrics-section">
          <h4 className="project-card__metrics-title mono">VERIFIED EVALUATION RESULTS</h4>
          <div className="project-card__metrics-grid">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="project-card__metric-box">
                <span className="project-card__metric-val mono">{metric.value}</span>
                <span className="project-card__metric-label">{metric.label}</span>
                {metric.detail && (
                  <span className="project-card__metric-detail">{metric.detail}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Highlights / Bullet Details */}
      {project.details && project.details.length > 0 && (
        <ul className="project-card__details-list" role="list">
          {project.details.map((detail, idx) => (
            <li key={idx} className="project-card__detail-item">
              <span className="project-card__detail-bullet" aria-hidden="true">―</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Footer: Tags and Action Links */}
      <div className="project-card__footer">
        {project.tags.length > 0 && (
          <ul className="project-card__tags" role="list" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="project-card__tag mono">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {project.links.length > 0 && (
          <div className="project-card__links" role="list" aria-label="Project links">
            {project.links.map((link) => (
              <a
                key={link.label}
                className="project-card__link"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={`${project.title} — ${link.label}${link.external ? ' (opens in new tab)' : ''}`}
              >
                <span>{link.label}</span>
                <svg
                  className="project-card__link-arrow"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}