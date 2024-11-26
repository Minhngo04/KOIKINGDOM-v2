import React from 'react';
import './FooterLinks.scss';

export const FooterLinks = ({ title, links }) => {
    return (
        <nav className="linkGroup">
            <h3 className="linkTitle">{title}</h3>
            {links.map((link, index) => (
                <p key={index} href="#" className="link">
                    {link}
                </p>
            ))}
        </nav>
    );
};
export default FooterLinks;