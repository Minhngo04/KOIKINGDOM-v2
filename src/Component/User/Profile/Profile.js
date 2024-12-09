import React from 'react';
import Sidebar from '../Profile/ProfileSidebar';
import ProfileForm from './ProfileForm';
import './profile.scss';

const Profile = () => {
    return (
        <div className="profile-page">
            <main className="main-content">
                <div className="content-grid">
                    <Sidebar />
                    <ProfileForm />
                </div>
            </main>
        </div>
    );
};
export default Profile;