import React from 'react';
import { NavigationButton } from '../User/NavigationButton';
import './Header.scss';
import koiicon from '../Picture/koi-icon.png';

const navigationItems = ['Home', 'Booking', 'Information', 'Profile'];

export const Header = () => {
    return (
        <header className="headerContainer">
            <nav className="navigationWrapper">
                <div className="navigationContent">
                    {navigationItems.map((item) => (
                        <NavigationButton
                            key={item}
                            label={item}
                            isActive={item === 'Home'}
                        />
                    ))}
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
                    <div className="brandName">KOIKINGDOM</div>
                </div>
            </section>
        </header>
    );
};
export default Header;