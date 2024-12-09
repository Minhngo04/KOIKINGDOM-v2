import React from 'react';

const RangeFilter = ({ title, min, max }) => {
    return (
        <div className="filter-container">
            <div className="filter-title">{title}</div>
            <div className="range-slider">
                <div className="slider-track">
                    <div className="slider-handle" />
                    <div className="slider-handle" />
                </div>
                <div className="range-values">
                    <div className="range-value">{min}</div>
                    <div className="range-divider" />
                    <div className="range-value">{max}</div>
                </div>
            </div>
        </div>
    );
};

export default RangeFilter;