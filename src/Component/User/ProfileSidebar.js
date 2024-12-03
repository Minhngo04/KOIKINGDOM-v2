import React from 'react';
import './profile.scss';

const navItems = [
    { id: 'profile', label: 'Profile' },
    { id: 'cart', label: 'Add To Cart' },
    { id: 'favorite', label: 'Favorite' },
    { id: 'history', label: 'History Order' }
];

const ProfileSidebar = (props) => {
    return (
        <div className="profile-sidebar__content">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/2e786670-8396-4a30-a3c4-955bacc38f39?apiKey=28ba4404306d44e793d93f465a1a0e87&"
                className="profile-sidebar__image"
                alt="User profile"
            />
            <div className="profile-sidebar__username">Name users</div>
            {navItems.map(item => (
                <div key={item.id} className="profile-sidebar__nav-item">
                    {item.label}
                </div>
            ))}
        </div>
    );
}

export default ProfileSidebar;