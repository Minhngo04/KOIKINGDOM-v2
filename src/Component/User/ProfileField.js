import React from 'react';
import './profile.scss';

const ProfileField = ({ label, specialLayout }) => {
    return (
        <div className={`profile-field ${specialLayout ? 'profile-field--special' : ''}`}>
            <div className="profile-field__border">
                <span className="profile-field__label">{label}</span>
            </div>
        </div>
    );
};

export default ProfileField;
