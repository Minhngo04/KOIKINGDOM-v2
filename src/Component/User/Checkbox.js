import React from 'react';
import './CustomTourForm.scss';

const Checkbox = ({ label, id, checked, onChange }) => {
    return (
        <div className="checkbox-container-customer">
            <div className="checkbox-wrapper">
                <div
                    type="checkbox"
                    id={id}
                    className="checkbox-input"
                    checked={checked}
                    onChange={onChange}
                    aria-label={label}
                />
                <label htmlFor={id} className="checkbox-label">
                    {label}
                </label>
            </div>
        </div>
    );
};

export default Checkbox;