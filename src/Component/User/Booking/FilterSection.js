import React from 'react';
import './FilterSection.scss';

const FilterSection = ({ title, children }) => {
    return (
        <div className="filter-section">
            <div className="filter-header">
                <div className="filter-title">{title}</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/7665af486e68d04c0747c823eb7ee62b7ea675261733655be466c131ab1b5adc?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="filter-icon" />
            </div>
            {children}
        </div>
    );
};

export default FilterSection;