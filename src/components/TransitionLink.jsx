import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TransitionContext } from '../context/TransitionContext';

export default function TransitionLink({ to, label, accent, onClick, children, ...props }) {
    const transitionTo = useContext(TransitionContext);
    
    return (
        <Link
            to={to}
            onClick={(e) => {
                if (onClick) onClick(e);
                if (
                    !e.defaultPrevented &&
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !e.shiftKey &&
                    !e.altKey &&
                    e.button === 0
                ) {
                    e.preventDefault();
                    transitionTo(to, { label, accent });
                }
            }}
            {...props}
        >
            {children}
        </Link>
    );
}
