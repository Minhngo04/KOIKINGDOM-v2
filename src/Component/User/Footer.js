import React from 'react';
import './Footer.scss';
import { FooterLinks } from './FooterLinks.js';
import { SocialLinks } from './SocialLinks.js';

export const Footer = () => {
    let categoryLinks = ["Famous Tours", "Available Tours", "Koi Farms", "Popular Koi Breeds", "Koi Species"];
    let serviceLinks = ["My Profile", "Order history", "Notifications", "Shopping cart", "Chat with us"];
    let informationLinks = ["FAQs", "Articles", "About us", "Contact us"];

    return (
        <footer className="footerContainer">
            <div className="footerContent">
                <section className="contactInfo">
                    <h3 className="linkTitle">Contact us for support</h3>
                    <a href="tel:0931339228" className="phone">0931 339 228</a>
                    <a href="mailto:koikingdomsystem@gmail.com" className="email">
                        koikingdomsystem@gmail.com
                    </a>
                </section>

                <FooterLinks title="Categories" links={categoryLinks} />
                <FooterLinks title="Services" links={serviceLinks} />
                <FooterLinks title="Information" links={informationLinks} />
                <SocialLinks />
            </div>
        </footer >
    );
};

export default Footer;