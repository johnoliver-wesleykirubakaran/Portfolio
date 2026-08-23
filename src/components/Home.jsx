import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CanvasParticles from './CanvasParticles';
import TransitionLink from './TransitionLink';
import { projects } from '../data/projects';
import { updateMeta } from '../utils/seo';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Pointer state for Character repulsion in Hero headline
const Vd = {
    x: -9e4,
    y: -9e4,
    tx: -9e4,
    ty: -9e4
};
let Hd = false;

function Ud() {
    if (Hd) return;
    Hd = true;
    
    window.addEventListener('pointermove', e => {
        Vd.tx = e.clientX;
        Vd.ty = e.clientY;
    }, { passive: true });
    
    window.addEventListener('pointerdown', e => {
        Vd.tx = e.clientX;
        Vd.ty = e.clientY;
        if (e.pointerType === 'touch') {
            Vd.x = e.clientX;
            Vd.y = e.clientY;
        }
    }, { passive: true });
    
    const onPointerUp = e => {
        if (e.pointerType === 'touch') {
            Vd.tx = -9e4;
            Vd.ty = -9e4;
            Vd.x = -9e4;
            Vd.y = -9e4;
        }
    };
    
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });
    
    document.documentElement.addEventListener('pointerleave', () => {
        Vd.tx = -9e4;
        Vd.ty = -9e4;
    });
    
    gsap.ticker.add(() => {
        Vd.x += (Vd.tx - Vd.x) * 0.22;
        Vd.y += (Vd.ty - Vd.y) * 0.22;
    });
}

// Text splitter helper
function splitTextNodes(element) {
    const chars = [];
    const split = node => {
        for (let child of [...node.childNodes]) {
            if (child.nodeType === Node.TEXT_NODE) {
                const fragment = document.createDocumentFragment();
                for (let word of child.textContent.split(/(\s+)/)) {
                    if (word === '') continue;
                    if (word.trim() === '') {
                        fragment.append(word);
                        continue;
                    }
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'word';
                    for (let char of word) {
                        const charSpan = document.createElement('span');
                        charSpan.className = 'char';
                        charSpan.textContent = char;
                        wordSpan.append(charSpan);
                        chars.push(charSpan);
                    }
                    fragment.append(wordSpan);
                }
                child.replaceWith(fragment);
            } else {
                split(child);
            }
        }
    };
    split(element);
    return chars;
}

function Hero() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const headline = section.querySelector('.hero-headline');
        const cachedHtml = headline.innerHTML;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        let resetRepulsion = () => {};
        let updateRepulsion = () => {};

        const ctx = gsap.context(() => {
            const lines = section.querySelectorAll('.hero-line-inner');
            const fadeElements = section.querySelectorAll('.hero-eyebrow, .hero-foot > *');
            
            if (prefersReducedMotion) return;

            gsap.set(lines, { yPercent: 110 });
            gsap.set(fadeElements, { autoAlpha: 0, y: 24 });
            
            const animateIn = () => {
                gsap.timeline({
                    defaults: { ease: 'expo.out' }
                })
                .to(lines, {
                    yPercent: 0,
                    duration: 1.4,
                    stagger: 0.12
                }, 0.15)
                .to(fadeElements, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.08
                }, 0.7);
            };

            if (document.fonts?.ready) {
                document.fonts.ready.then(animateIn);
            } else {
                animateIn();
            }
        }, section);

        if (!prefersReducedMotion) {
            Ud();
            const chars = splitTextNodes(headline);
            const displacements = chars.map(() => ({ x: 0, y: 0, tx: 0, ty: 0 }));
            let charCenters = [];
            
            const cacheCenters = () => {
                charCenters = chars.map(char => {
                    const rect = char.getBoundingClientRect();
                    return {
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2
                    };
                });
            };

            cacheCenters();
            resetRepulsion = cacheCenters;

            updateRepulsion = () => {
                for (let i = 0; i < chars.length; i++) {
                    const center = charCenters[i];
                    const disp = displacements[i];
                    const dx = center.x - Vd.x;
                    const dy = center.y - Vd.y;
                    const distance = Math.hypot(dx, dy);
                    
                    if (distance < 150 && distance > 0.01) {
                        const force = (1 - distance / 150) * 14;
                        disp.tx = dx / distance * force;
                        disp.ty = dy / distance * force * 0.6;
                    } else {
                        disp.tx = 0;
                        disp.ty = 0;
                    }
                    
                    disp.x += (disp.tx - disp.x) * 0.14;
                    disp.y += (disp.ty - disp.y) * 0.14;
                    chars[i].style.transform = `translate(${disp.x.toFixed(2)}px, ${disp.y.toFixed(2)}px)`;
                }
            };

            window.addEventListener('resize', cacheCenters);
            window.addEventListener('scroll', cacheCenters, { passive: true });
            gsap.ticker.add(updateRepulsion);
        }

        return () => {
            window.removeEventListener('resize', resetRepulsion);
            window.removeEventListener('scroll', resetRepulsion);
            gsap.ticker.remove(updateRepulsion);
            ctx.revert();
            headline.innerHTML = cachedHtml;
        };
    }, []);

    return (
        <section id="top" ref={sectionRef} className="hero container">
            <CanvasParticles />
            <p className="hero-eyebrow label">Senior Product Designer · Canada</p>
            <h1 className="hero-title">
                <span className="sr-only">Designing products used by millions.</span>
                <span className="hero-headline" aria-hidden="true">
                    <span className="hero-line">
                        <span className="hero-line-inner">Designing products</span>
                    </span>
                    <span className="hero-line">
                        <span className="hero-line-inner">
                            used by <em>millions.</em>
                        </span>
                    </span>
                </span>
            </h1>
            <div className="hero-foot">
                <p className="hero-intro">
                    Five years across government, health and industry. Now working with frontier AI labs.
                </p>
                <p className="hero-scroll label" aria-hidden="true">Scroll ↓</p>
            </div>
        </section>
    );
}

function SelectedWork() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const ctx = gsap.context(() => {
            gsap.from('.work-row', {
                autoAlpha: 0,
                y: 48,
                duration: 1.1,
                ease: 'expo.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: container.querySelector('.work-list'),
                    start: 'top 82%'
                }
            });
            
            gsap.from('.work .section-head', {
                autoAlpha: 0,
                y: 32,
                duration: 1,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 75%'
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={containerRef} className="work container">
            <div className="section-head">
                <h2 className="label">Selected Work</h2>
                <p className="label" aria-hidden="true">
                    ({String(projects.length).padStart(2, '0')})
                </p>
            </div>
            <ul className="work-list">
                {projects.map((project) => (
                    <li key={project.slug} className="work-row">
                        <TransitionLink
                            className="work-link"
                            to={`/work/${project.slug}`}
                            label={project.title}
                            accent={project.accent}
                        >
                            <span className="work-index">{project.id}</span>
                            <h3 className="work-title">{project.title}</h3>
                            <p className="work-meta">{project.meta}</p>
                            <span className="work-year">{project.year}</span>
                            <span className="work-arrow" aria-hidden="true">→</span>
                        </TransitionLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function About() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const ctx = gsap.context(() => {
            gsap.from('.about-reveal', {
                autoAlpha: 0,
                y: 40,
                duration: 1.1,
                ease: 'expo.out',
                stagger: 0.12,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 72%'
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="about container">
            <div className="about-grid">
                <h2 className="label about-sticky">About</h2>
                <div>
                    <p className="about-reveal about-lede">
                        I’m a product designer who works on complex systems: health platforms, government services, industrial tools.
                    </p>
                    <p className="about-reveal about-body">
                        I spent five years designing for Morocco’s government and for industrial clients. I’m now based in Canada, evaluating AI-generated design for frontier AI labs.
                    </p>
                    <ul className="about-reveal about-capabilities">
                        <li>Product design</li>
                        <li>Design systems</li>
                        <li>UX research</li>
                        <li>Accessibility, WCAG 2.1</li>
                        <li>AI evaluation & RLHF</li>
                    </ul>
                    <h3 className="about-reveal label about-notes-head">Recognition</h3>
                    <ul className="about-reveal about-notes">
                        <li>
                            This site is an{' '}
                            <a
                                className="link"
                                href="https://www.awwwards.com/sites/mehdi-bouayaben-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Awwwards Nominee
                            </a>
                            , 2026
                        </li>
                        <li>
                            Selected by Adobe & Meg Lewis, Adobe Live branding challenge, 2019 · Featured in the Adobe XD Creative Challenge, 2021
                        </li>
                        <li>Worked on KitKat “Break the Speed”, Gold Lion at Cannes 2018</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function Research() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const ctx = gsap.context(() => {
            gsap.from('.rs-reveal', {
                autoAlpha: 0,
                y: 36,
                duration: 1,
                ease: 'expo.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 75%'
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="research" ref={containerRef} className="research container">
            <div className="rs-grid">
                <h2 className="label rs-sticky">Research</h2>
                <div>
                    <p className="rs-reveal rs-meta">Preprint · July 2026</p>
                    <h3 className="rs-reveal rs-title">
                        Semantic Particle Allocation: legibility-constrained budget allocation for particle-rendered generative interfaces
                    </h3>
                    <div className="rs-prose">
                        <p className="rs-reveal">
                            The paper came out of a side prototype, a UI where an AI decides the layout and everything on screen is drawn from GPU particles. A browser can run about a million of them in real time. That sounds like a lot until the AI puts a paragraph of text on screen, because the particles have to come from somewhere, and when they spread themselves evenly across the whole layout the text is the first thing that stops being readable.
                        </p>
                        <p className="rs-reveal">
                            The allocation treats the particles like a budget. Every element has a floor, the smallest count at which it still reads, and higher-priority elements are served first. Whatever can’t reach its floor is left out of the frame, since text below its floor is just noise. The headline at the top of this page is running this exact rule, at whatever particle count your device could afford.
                        </p>
                    </div>
                    <dl className="rs-reveal rs-figures">
                        <div>
                            <dt>1,048,576</dt>
                            <dd>particles sustained in a browser</dd>
                        </div>
                        <div>
                            <dt>11.3 ms</dt>
                            <dd>per frame, consumer laptop</dd>
                        </div>
                    </dl>
                    <ul className="rs-reveal rs-notes">
                        <li>
                            <a
                                className="link"
                                href="https://doi.org/10.5281/zenodo.21632115"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read the preprint · DOI 10.5281/zenodo.21632115 ↗
                            </a>
                        </li>
                        <li>
                            <a
                                className="link"
                                href="https://orcid.org/0009-0004-9492-6345"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ORCID 0009-0004-9492-6345 ↗
                            </a>
                        </li>
                        <li>Patent pending on related interface work.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const ctx = gsap.context(() => {
            gsap.from('.contact-reveal', {
                autoAlpha: 0,
                y: 48,
                duration: 1.2,
                ease: 'expo.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 70%'
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={containerRef} className="contact container">
            <p className="contact-reveal label">Next</p>
            <a className="contact-reveal contact-cta" href="mailto:bouayabenmehdi@gmail.com">
                Let’s <em>talk.</em>
            </a>
            <div className="contact-reveal contact-links">
                <a className="link" href="mailto:bouayabenmehdi@gmail.com">
                    bouayabenmehdi@gmail.com
                </a>
                <a
                    className="link"
                    href="https://www.linkedin.com/in/bouayabenmehdi/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn ↗
                </a>
                <a
                    className="link"
                    href="https://dribbble.com/bouayabenmehdi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Dribbble ↗
                </a>
                <a
                    className="link"
                    href="https://www.behance.net/bouayabenmehdi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Behance ↗
                </a>
            </div>
            <footer className="site-footer">
                <p>© 2026 Mehdi Bouayaben</p>
                <a className="link" href="#top">
                    Back to top ↑
                </a>
            </footer>
        </section>
    );
}

export default function Home() {
    useEffect(() => {
        updateMeta({
            title: 'Mehdi Bouayaben — Senior Product Designer',
            description: 'I design products used by millions — Morocco’s national telehealth platform, industrial monitoring for Aptiv, energy systems. Senior Product Designer in Canada, working with frontier AI labs.',
            path: '/'
        });
    }, []);

    return (
        <>
            <Hero />
            <SelectedWork />
            <About />
            <Research />
            <Contact />
        </>
    );
}
