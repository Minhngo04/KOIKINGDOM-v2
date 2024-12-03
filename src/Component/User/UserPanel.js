import React, { useState, useEffect, useRef } from 'react';
import './UserPanel.scss'
import { useNavigate } from 'react-router-dom';

const UserPanel = ({ brand, userItem }) => {
    const [isDropDownMenu, setIsDropDownMenu] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleNavigation = (type) => {
        switch (type) {
            case 'profile':
                navigate('/myProfile')
                break;
        }
    }

    const toggleDropDown = () => {
        setIsDropDownMenu((prev) => !prev);
    }

    useEffect(() => {
        // Hàm kiểm tra nếu click ra ngoài dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropDownMenu(false); // Đóng dropdown khi click ngoài
            }
        };

        // Thêm event listener khi component mount
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener khi component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="userPanel">
            <div className="userBrand" onClick={toggleDropDown}>
                {brand && <span className="userBrand">{brand}</span>}
            </div>
            {isDropDownMenu &&
                <ul className="userDropdown" ref={dropdownRef}>
                    {userItem.map((item, index) => (
                        <li key={index} className="userDropdownItem">
                            <button onClick={() => handleNavigation('profile')}>{item}</button>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default UserPanel;
