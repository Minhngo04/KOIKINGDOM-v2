import React, { useState, useEffect, useRef } from 'react';
import './UserPanel.scss'
import { useNavigate } from 'react-router-dom';

const UserPanel = ({ brand, username }) => {
    const navigate = useNavigate();
    const [showTooltip, setShowTooltip] = useState(false);

    const handleNavigation = (type) => {
        switch (type) {
            case 'register':
                navigate('/register')
                break;
        }
    }

    return (
        <div
            className="userPanel"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <div className="userBrand" onClick={() => handleNavigation('register')}>
                {brand && <span className="icon">{brand}</span>}
            </div>
            {showTooltip && (
                <div className="tooltip">
                    {username || 'Người dùng'}
                </div>
            )}
        </div>
    );
};

export default UserPanel;