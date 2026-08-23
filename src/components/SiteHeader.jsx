import React from 'react';
import { useLocation } from 'react-router-dom';
import TransitionLink from './TransitionLink';

export default function SiteHeader() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    
    return (
        <header className="site-header container">
            {isHome ? (
                <a className="site-name link" href="#top">
                    Mehdi Bouayaben
                </a>
            ) : (
                <TransitionLink className="site-name link" to="/" label="Home">
                    Mehdi Bouayaben
                </TransitionLink>
            )}
            <nav className="site-nav" aria-label="Primary">
                {['Work', 'About', 'Contact'].map((item) => {
                    const id = item.toLowerCase();
                    return isHome ? (
                        <a key={item} className="link" href={`#${id}`}>
                            {item}
                        </a>
                    ) : (
                        <TransitionLink key={item} className="link" to={`/#${id}`} label={item}>
                            {item}
                        </TransitionLink>
                    );
                })}
            </nav>
        </header>
    );
}
