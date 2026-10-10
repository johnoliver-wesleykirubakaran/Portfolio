/**
 * PestProjectVisual: Tasteful, high-fidelity technical visualization for
 * Precision Pest Management (EfficientNet-B4 + Grad-CAM explainability).
 * Allows users to inspect inference details and toggle between Grad-CAM
 * attention activation heatmaps and feature attribution overlays.
 */

import { useState } from 'react';
import '../styles/PestProjectVisual.css';

type ViewMode = 'overlay' | 'heatmap' | 'raw';

export default function PestProjectVisual() {
  const [viewMode, setViewMode] = useState<ViewMode>('overlay');

  return (
    <div className="pest-visual">
      {/* Top technical inspector bar */}
      <div className="pest-visual__toolbar">
        <div className="pest-visual__status">
          <span className="pest-visual__status-dot" aria-hidden="true" />
          <span className="pest-visual__spec mono">IP102 · CLASS_042 · CONF 0.946</span>
        </div>

        {/* View mode toggle */}
        <div className="pest-visual__toggles" role="tablist" aria-label="Grad-CAM visual inspection modes">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'overlay'}
            className={`pest-visual__toggle-btn mono ${viewMode === 'overlay' ? 'active' : ''}`}
            onClick={() => setViewMode('overlay')}
          >
            Overlay
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'heatmap'}
            className={`pest-visual__toggle-btn mono ${viewMode === 'heatmap' ? 'active' : ''}`}
            onClick={() => setViewMode('heatmap')}
          >
            Grad-CAM Saliency
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'raw'}
            className={`pest-visual__toggle-btn mono ${viewMode === 'raw' ? 'active' : ''}`}
            onClick={() => setViewMode('raw')}
          >
            Input Tensor
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="pest-visual__display">
        <svg
          viewBox="0 0 640 340"
          className="pest-visual__canvas"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Grad-CAM activation map on IP102 insect specimen"
        >
          <defs>
            {/* Grid pattern */}
            <pattern id="pest-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            </pattern>

            {/* Heatmap radial gradient for Grad-CAM */}
            <radialGradient id="gradcam-core" cx="50%" cy="46%" r="42%">
              <stop offset="0%" stopColor="#D4A373" stopOpacity={viewMode === 'raw' ? '0' : '0.85'} />
              <stop offset="35%" stopColor="#C87A42" stopOpacity={viewMode === 'raw' ? '0' : '0.65'} />
              <stop offset="70%" stopColor="#6E4426" stopOpacity={viewMode === 'raw' ? '0' : '0.35'} />
              <stop offset="100%" stopColor="#1E1E1C" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="leaf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C211B" />
              <stop offset="100%" stopColor="#141713" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <rect width="640" height="340" fill="#131312" />
          <rect width="640" height="340" fill="url(#pest-grid)" />

          {/* Plant leaf background substrate */}
          <path
            d="M 40 320 C 120 180, 360 80, 600 50 C 580 180, 420 280, 180 330 Z"
            fill="url(#leaf-gradient)"
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth="1"
            opacity={viewMode === 'heatmap' ? '0.2' : '0.8'}
          />
          {/* Leaf venation */}
          <path
            d="M 120 280 Q 320 170 540 80"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1.5"
            opacity={viewMode === 'heatmap' ? '0.1' : '0.6'}
          />

          {/* Insect Morphology (Abstracted scientific anatomy: rice pest) */}
          <g
            className="pest-visual__specimen"
            opacity={viewMode === 'heatmap' ? '0.3' : '1'}
            style={{ transition: 'opacity 200ms ease' }}
          >
            {/* Antennae */}
            <path
              d="M 310 115 Q 270 80 230 65 M 330 115 Q 370 80 410 65"
              fill="none"
              stroke="#A19E98"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Legs */}
            <path
              d="M 290 170 L 220 160 L 180 200 M 350 170 L 420 160 L 460 200"
              fill="none"
              stroke="#686560"
              strokeWidth="1.5"
            />
            <path
              d="M 295 210 L 230 220 L 190 270 M 345 210 L 410 220 L 450 270"
              fill="none"
              stroke="#686560"
              strokeWidth="1.5"
            />
            {/* Head & Pronotum */}
            <ellipse cx="320" cy="125" rx="18" ry="14" fill="#2A2A27" stroke="#484844" strokeWidth="1.2" />
            <ellipse cx="320" cy="155" rx="26" ry="18" fill="#32322E" stroke="#484844" strokeWidth="1.2" />
            {/* Elytra (Forewings) */}
            <path
              d="M 320 168 C 290 190, 275 250, 318 285 C 320 285, 320 168, 320 168 Z"
              fill="#252522"
              stroke="#52524D"
              strokeWidth="1.2"
            />
            <path
              d="M 320 168 C 350 190, 365 250, 322 285 C 320 285, 320 168, 320 168 Z"
              fill="#2B2B27"
              stroke="#52524D"
              strokeWidth="1.2"
            />
          </g>

          {/* Grad-CAM Saliency Activation Heatmap */}
          {viewMode !== 'raw' && (
            <g className="pest-visual__gradcam-layer">
              <ellipse cx="320" cy="185" rx="145" ry="110" fill="url(#gradcam-core)" />
              {/* Peak attribution contours */}
              <circle
                cx="320"
                cy="175"
                r="45"
                fill="none"
                stroke="#D4A373"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.6"
              />
              <circle
                cx="320"
                cy="175"
                r="75"
                fill="none"
                stroke="#C87A42"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                opacity="0.4"
              />
            </g>
          )}

          {/* Target attribution crosshairs */}
          <g className="pest-visual__annotations" opacity="0.8">
            <line x1="320" y1="90" x2="320" y2="105" stroke="#D4A373" strokeWidth="1" />
            <line x1="320" y1="245" x2="320" y2="260" stroke="#D4A373" strokeWidth="1" />
            <line x1="240" y1="175" x2="255" y2="175" stroke="#D4A373" strokeWidth="1" />
            <line x1="385" y1="175" x2="400" y2="175" stroke="#D4A373" strokeWidth="1" />
          </g>

          {/* Corner Framing Marks */}
          <path d="M 16 28 L 16 16 L 28 16" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />
          <path d="M 624 28 L 624 16 L 612 16" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />
          <path d="M 16 312 L 16 324 L 28 324" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />
          <path d="M 624 312 L 624 324 L 612 324" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.2" />
        </svg>

        {/* Floating Technical Inspector HUD */}
        <div className="pest-visual__hud">
          <div className="pest-visual__hud-card">
            <span className="pest-visual__hud-label mono">BACKBONE</span>
            <span className="pest-visual__hud-val">EfficientNet-B4</span>
          </div>
          <div className="pest-visual__hud-card">
            <span className="pest-visual__hud-label mono">INPUT RESOLUTION</span>
            <span className="pest-visual__hud-val">380 × 380 px</span>
          </div>
          <div className="pest-visual__hud-card">
            <span className="pest-visual__hud-label mono">TARGET DIAGNOSIS</span>
            <span className="pest-visual__hud-val pest-visual__hud-val--accent">
              Rice Leaf Roller · 94.6%
            </span>
          </div>
        </div>
      </div>

      {/* Pipeline explanation caption */}
      <div className="pest-visual__caption">
        <p className="pest-visual__caption-text">
          <span className="mono">Grad-CAM Attribution:</span> Gradients flowing into the final convolutional layer isolate discriminating anatomical features (pronotum & elytra boundaries) on the IP102 test partition.
        </p>
      </div>
    </div>
  );
}
