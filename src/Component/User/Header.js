import React from 'react';
import NavigationButton from '../User/Booking/NavigationButton';
import UserPanel from '../User/Profile/UserPanel';
import ProfileSidebar from '../User/Profile/ProfileSidebar'
import './Header.scss';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import koiicon from '../Picture/koi-icon.png';

const navigationItems = ['Home', 'Booking', 'Information'];

const Header = () => {
    return (
        <header className="headerContainer">
            <nav className="navigationWrapper">
                <div className="navigationContent">
                    <div className="brandName">KOIKINGDOM</div>
                    <div className="button">
                        {navigationItems.map((item) => (
                            <Link key={item} to={item === 'Booking' ? '/available-tour' : '/'}>
                                <NavigationButton
                                    label={item}
                                    isActive={item === 'Home'}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="userPanelWrapper">
                        <UserPanel
                            brand={<FaRegUserCircle />}
                            username="Minhngo"
                        />

                    </div>
                </div>
            </nav>
            <section className="logoSection">
                <div className="logoContainer">
                    <img
                        loading="lazy"
                        src={koiicon}
                        className="logo"
                        alt="Koi Kingdom Logo"
                    />
                </div>
            </section>
        </header>
    );
};

export default Header;
