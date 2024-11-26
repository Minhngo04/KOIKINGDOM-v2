import React from 'react';
import './NavigationButton.scss';
export const NavigationButton = ({ label, isActive }) => {
    return (
        <button className={`navigationButton ${isActive ? 'active' : ''}`} >
            {label}
        </button >
    );
};
export default NavigationButton;