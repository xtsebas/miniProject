import React, { useState, useEffect } from 'react';
import './AnimatedName.css';

const AnimatedName = ({ text }) => {
    const [isRotated, setIsRotated] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsRotated(prevIsRotated => !prevIsRotated);
        }, 2000); // Cambiar la rotación cada segundo

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`animated ${isRotated ? 'rotated' : ''}`}>
            {text}
        </div>
    );
};

export default AnimatedName;

