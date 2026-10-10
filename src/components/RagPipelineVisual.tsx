/**
 * RagPipelineVisual: An interactive pipeline workflow visualization for RAG Configurator:
 * Documents → Chunking → Retrieval → Reranking → Evaluation.
 */

import { useState } from 'react';
import type { PipelineStep } from '../types/content';
import '../styles/RagPipelineVisual.css';

export interface RagPipelineVisualProps {
  readonly steps: readonly PipelineStep[];
}

export default function RagPipelineVisual({ steps }: RagPipelineVisualProps) {
  const [activeStepId, setActiveStepId] = useState<string>(steps[2]?.id || 'retrieve');

  const activeStep = steps.find((s) => s.id === activeStepId) || steps[0];

  return (
    <div className="rag-visual">
      {/* Top Pipeline Flow Bar */}
      <div className="rag-visual__pipeline" role="tablist" aria-label="RAG Workflow Stages">
        {steps.map((step, idx) => {
          const isActive = step.id === activeStepId;
          return (
            <div key={step.id} className="rag-visual__stage-wrapper">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`step-desc-${step.id}`}
                className={`rag-visual__stage-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveStepId(step.id)}
              >
                <span className="rag-visual__stage-num mono">0{idx + 1}</span>
                <span className="rag-visual__stage-name">{step.sublabel}</span>
              </button>

              {idx < steps.length - 1 && (
                <span className="rag-visual__connector" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Stage Detail Inspector */}
      {activeStep && (
        <div id={`step-desc-${activeStep.id}`} className="rag-visual__inspector">
          <div className="rag-visual__inspector-header">
            <div className="rag-visual__badge">
              <span className="rag-visual__badge-tag mono">{activeStep.label}</span>
              <h4 className="rag-visual__badge-title">{activeStep.sublabel}</h4>
            </div>
            <span className="rag-visual__eval-pill mono">BENCHMARK PHASE</span>
          </div>

          <p className="rag-visual__inspector-desc">
            {activeStep.description}
          </p>

          {/* Configuration Parameters Grid for this stage */}
          <div className="rag-visual__params">
            {activeStep.id === 'doc' && (
              <>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Formats</span>
                  <span className="rag-visual__param-v">Markdown, PDF, LaTeX</span>
                </div>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Filtering</span>
                  <span className="rag-visual__param-v">Boilerplate & table preservation</span>
                </div>
              </>
            )}

            {activeStep.id === 'chunk' && (
              <>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Strategies</span>
                  <span className="rag-visual__param-v">Fixed 512t vs Recursive Semantic</span>
                </div>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Overlap Ratio</span>
                  <span className="rag-visual__param-v">10% – 25% sliding stride</span>
                </div>
              </>
            )}

            {activeStep.id === 'retrieve' && (
              <>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Hybrid Engine</span>
                  <span className="rag-visual__param-v">Dense (Cosine) + Sparse BM25</span>
                </div>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Query Expansion</span>
                  <span className="rag-visual__param-v">Hypothetical Document Embeddings (HyDE)</span>
                </div>
              </>
            )}

            {activeStep.id === 'rerank' && (
              <>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Model Type</span>
                  <span className="rag-visual__param-v">Cross-Encoder BGE-Reranker</span>
                </div>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Repacking</span>
                  <span className="rag-visual__param-v">Lost-in-the-Middle context repositioning</span>
                </div>
              </>
            )}

            {activeStep.id === 'eval' && (
              <>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Retrieval Metrics</span>
                  <span className="rag-visual__param-v">Hit-Rate@K, Mean Reciprocal Rank (MRR)</span>
                </div>
                <div className="rag-visual__param-card">
                  <span className="mono rag-visual__param-k">Generation Quality</span>
                  <span className="rag-visual__param-v">Faithfulness score & Context Density</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
