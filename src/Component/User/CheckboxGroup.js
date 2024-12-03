import React from 'react';
import './CheckboxGroup.scss';

const CheckboxGroup = ({ options }) => {
    return options.map((option, index) => (
        <div key={index} className="checkbox-container">
            <div className="checkbox" role="checkbox" tabIndex="0" aria-checked="false" />
            <div className="checkbox-label">{option}</div>
        </div>
    ));
};

export default CheckboxGroup;