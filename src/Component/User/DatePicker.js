import React from 'react';
import './CustomTourForm.scss';

export const DatePicker = ({ label, icon, value, onChange }) => {
    return (
        <div className="date-picker-container">
            <div className="date-picker-label">{label}</div>
            <input
                type="date"
                value={value}
                onChange={onChange}
                className="date-picker-input"
                aria-label={label}
            />
            <img
                loading="lazy"
                src={icon}
                alt=""
                className="date-icon"
            />
        </div>
    );
};

export default DatePicker;