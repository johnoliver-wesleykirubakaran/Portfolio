import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import { updateMeta } from '../utils/seo';
import TransitionLink from './TransitionLink';
import { Lf, Rf, If } from './ProjectVisuals';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Compiler compatibility mappings
const $ = {
    jsx: (type, props) => React.createElement(type, props),
    jsxs: (type, props) => React.createElement(type, props)
};
const x = { useRef, useEffect };
const Js = gsap;
const Bd = updateMeta;
const Ld = TransitionLink;
const wn = Link;

// Project finder
const Zd = projects;
const Qd = e => Zd.find(t => t.slug === e);

export default function WorkDetail() {
    let { slug: e } = useParams();
    let t = Qd(e);
    let n = useRef(null);

    useEffect(() => {
        if (t?.published) {
            Bd({
                title: `${t.title} — Mehdi Bouayaben`,
                description: t.summary,
                path: `/work/${t.slug}`
            });
        }
    }, [e, t]);

    useEffect(() => {
        let e = n.current;
        if (!e || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        let ctx = Js.context(() => {
            let titleInners = e.querySelectorAll('.cs-title-inner');
            Js.set(titleInners, {
                yPercent: 110
            });
            
            let animateTitle = () => Js.to(titleInners, {
                yPercent: 0,
                duration: 1.3,
                ease: 'expo.out',
                stagger: 0.1,
                delay: 0.1
            });
            
            if (document.fonts?.ready) {
                document.fonts.ready.then(animateTitle);
            } else {
                animateTitle();
            }

            e.querySelectorAll('.cs-reveal').forEach(el => {
                Js.from(el, {
                    autoAlpha: 0,
                    y: 32,
                    duration: 1,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%'
                    }
                });
            });

            e.querySelectorAll('.cs-visual svg [data-draw-len]').forEach(el => {
                el.style.strokeDasharray = '';
                el.style.strokeDashoffset = '';
            });

            e.querySelectorAll('.cs-visual svg').forEach(svgEl => {
                let pathsToDraw = [...svgEl.querySelectorAll('path, line, polyline')].filter(path => {
                    let style = getComputedStyle(path);
                    if (!style.stroke || style.stroke === 'none' || (style.strokeDasharray && style.strokeDasharray !== 'none') || typeof path.getTotalLength !== 'function') {
                        return false;
                    }
                    let len;
                    try {
                        len = path.getTotalLength();
                    } catch {
                        return false;
                    }
                    if (!len || len < 6) return false;
                    path.dataset.drawLen = len;
                    return true;
                });

                if (pathsToDraw.length) {
                    pathsToDraw.forEach(path => {
                        path.style.strokeDasharray = path.dataset.drawLen;
                        path.style.strokeDashoffset = path.dataset.drawLen;
                    });
                    
                    Js.to(pathsToDraw, {
                        strokeDashoffset: 0,
                        duration: 1.1,
                        ease: 'power2.inOut',
                        stagger: Math.min(0.06, 1.4 / pathsToDraw.length),
                        scrollTrigger: {
                            trigger: svgEl,
                            start: 'top 82%'
                        },
                        onComplete: () => pathsToDraw.forEach(path => {
                            path.style.strokeDasharray = '';
                            path.style.strokeDashoffset = '';
                        })
                    });
                }
            });
        }, e);

        return () => ctx.revert();
    }, [e, t]);

    if (!t || !t.published) {
        return (
            <section className="container cs-missing">
                <h1 className="cs-missing-title">Case study in progress.</h1>
                <Link className="link" to="/">
                    ← Back to work
                </Link>
            </section>
        );
    }

    let publishedProjects = Zd.filter(el => el.published);
    let nextProject = publishedProjects[(publishedProjects.findIndex(el => el.slug === t.slug) + 1) % publishedProjects.length];
    let layouts = Lf[t.slug] ?? {};
    let HeroVisual = layouts.hero;

    return (
        <article ref={n} className="cs" style={t.accent ? { "--accent": t.accent } : undefined}>
            <header className="cs-head container">
                <TransitionLink className="cs-back link" to="/" label="Home">
                    ← Work
                </TransitionLink>
                <h1 className="cs-title">
                    <span className="sr-only">{t.title}</span>
                    <span aria-hidden="true">
                        {t.title.split(' ').map((word, idx) => (
                            <span key={idx} className="cs-title-line">
                                <span className="cs-title-inner">{word}</span>
                            </span>
                        ))}
                    </span>
                </h1>
                <p className="cs-summary">{t.summary}</p>
                <dl className="cs-facts">
                    <div>
                        <dt className="label">Client</dt>
                        <dd>{t.client}</dd>
                    </div>
                    <div>
                        <dt className="label">Role</dt>
                        <dd>{t.role}</dd>
                    </div>
                    <div>
                        <dt className="label">With</dt>
                        <dd>{t.company}</dd>
                    </div>
                    <div>
                        <dt className="label">Year</dt>
                        <dd>{t.year}</dd>
                    </div>
                </dl>
            </header>
            
            {HeroVisual && (
                <div className="cs-visual cs-visual-bleed cs-reveal">
                    <HeroVisual />
                </div>
            )}
            
            <section className="cs-block container">
                <h2 className="label cs-reveal">Context</h2>
                <div className="cs-prose">
                    {t.context.map((para, idx) => (
                        <p key={idx} className="cs-reveal">{para}</p>
                    ))}
                </div>
            </section>
            
            <section className="cs-block container">
                <h2 className="label cs-reveal">The problem</h2>
                <div className="cs-prose">
                    {t.problem.map((para, idx) => (
                        <p key={idx} className="cs-reveal">{para}</p>
                    ))}
                </div>
            </section>
            
            {t.pullQuote && (
                <section className="cs-quote container cs-reveal">
                    <blockquote>{t.pullQuote}</blockquote>
                </section>
            )}
            
            <Rf groups={layouts.afterProblem} />
            
            <section className="cs-block container">
                <h2 className="label cs-reveal">What I designed</h2>
                <ol className="cs-work">
                    {t.work.map((item, idx) => (
                        <li key={idx} className="cs-work-item cs-reveal">
                            <span className="cs-work-index">{String(idx + 1).padStart(2, '0')}</span>
                            <div>
                                <h3 className="cs-work-title">{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
            
            <Rf groups={layouts.afterWork} />
            
            {t.process?.length > 0 && (
                <section className="cs-block container">
                    <h2 className="label cs-reveal">Process</h2>
                    <ol className="cs-process">
                        {t.process.map((item, idx) => (
                            <li key={idx} className="cs-process-item cs-reveal">
                                <h3 className="cs-process-title">{item.title}</h3>
                                <p>{item.body}</p>
                            </li>
                        ))}
                    </ol>
                </section>
            )}
            
            <Rf groups={layouts.afterProcess} />
            
            {t.decisions?.length > 0 && (
                <section className="cs-block container">
                    <h2 className="label cs-reveal">Constraints & decisions</h2>
                    <dl className="cs-decisions">
                        {t.decisions.map((item, idx) => (
                            <div key={idx} className="cs-decision cs-reveal">
                                <dt>{item.constraint}</dt>
                                <dd>{item.response}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            )}
            
            <Rf groups={layouts.afterDecisions} />
            
            {layouts.gallery && <If />}
            
            <section className="cs-results container">
                <h2 className="label cs-reveal">{t.outcomesLabel ?? 'Outcomes'}</h2>
                {t.outcomes?.length > 0 && (
                    <ul className="cs-outcomes">
                        {t.outcomes.map((item, idx) => (
                            <li key={idx} className="cs-outcome cs-reveal">
                                <span className="cs-outcome-value">{item.value}</span>
                                <span className="cs-outcome-label">{item.label}</span>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="cs-closing">
                    {t.closing.map((para, idx) => (
                        <p key={idx} className="cs-reveal">{para}</p>
                    ))}
                </div>
            </section>
            
            <section className="cs-block container cs-sources cs-reveal">
                <h2 className="label">{t.sources.length ? 'Sources' : 'A note on this client'}</h2>
                <p className="cs-sources-note">{t.sourcesNote}</p>
                {t.sources.length > 0 && (
                    <ul>
                        {t.sources.map((item, idx) => (
                            <li key={idx}>
                                <a className="link" href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.label} ↗
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            
            <nav className="cs-next container" aria-label="Next project">
                {nextProject ? (
                    <Ld className="cs-next-link" to={`/work/${nextProject.slug}`} label={nextProject.title} accent={nextProject.accent}>
                        <span className="label">Next</span>
                        <span className="cs-next-title">{nextProject.title}</span>
                    </Ld>
                ) : (
                    <Ld className="cs-next-link" to="/" label="Home">
                        <span className="label">Back</span>
                        <span className="cs-next-title">All work</span>
                    </Ld>
                )}
            </nav>
        </article>
    );
}
