import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { TransitionProvider } from './context/TransitionContext';
import SiteHeader from './components/SiteHeader';
import AwwwardsRibbon from './components/AwwwardsRibbon';
import Home from './components/Home';
import WorkDetail from './components/WorkDetail';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Manual scroll restoration
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}

export default function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const lenis = new Lenis({
            lerp: 0.1,
            anchors: true
        });
        
        window.__lenis = lenis;
        lenis.on('scroll', ScrollTrigger.update);

        const tick = time => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tick);
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);

    useEffect(() => {
        window.__lenis?.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
        ScrollTrigger.refresh();
    }, [pathname]);

    return (
        <TransitionProvider>
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <SiteHeader />
            <main id="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work/:slug" element={<WorkDetail />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
            <AwwwardsRibbon />
            <div className="grain" aria-hidden="true"></div>
        </TransitionProvider>
    );
}
