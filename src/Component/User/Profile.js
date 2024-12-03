import React from 'react';
import ProfileSidebar from './ProfileSidebar.js';
import ProfileField from './ProfileField.js';
import './profile.scss';

const profileFields = [
    { label: 'Last name' },
    { label: 'First name' },
    { label: 'Phone Numbers' },
    { label: 'Gender' },
    { label: 'Address' }
];

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-sidebar">
                <ProfileSidebar />
            </div>
            <div className="profile-main">
                <div className="profile-main__content">
                    <div className="profile-main__form">
                        <h1 className="profile-main__title">My Profile</h1>
                        {profileFields.map((field, index) => (
                            <ProfileField
                                key={index}
                                label={field.label}
                                specialLayout={field.label === 'Phone Numbers' || field.label === 'Gender'}
                            />
                        ))}
                        <button className="profile-main__edit-button">EDIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;