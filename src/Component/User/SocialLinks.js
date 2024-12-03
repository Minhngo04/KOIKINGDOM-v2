import React from 'react';
import './FooterLinks.scss';

const SocialLinks = () => {
    const socialIcons = [
        { src: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/5d7857fc5fe49213ec2404b2bd40d049d03324270c0739c8b7894c59cb6c78b8?apiKey=28ba4404306d44e793d93f465a1a0e87&", alt: "Social media icon 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/3aa208f116ebf54d36797abd57778c0e7716e69dd4ca783c6400b5f937f6c3af?apiKey=28ba4404306d44e793d93f465a1a0e87&", alt: "Social media icon 2" },
        { src: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/10bf176f0c6fa7b377114f95a3c1a2b911c3b83ed015730f147ef683b33cdd73?apiKey=28ba4404306d44e793d93f465a1a0e87&", alt: "Social media icon 3" },
        { src: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/7a25a99d812f50b7c53cb5351488e13e59f113b2b1d92784d84f1fca4b675232?apiKey=28ba4404306d44e793d93f465a1a0e87&", alt: "Social media icon 4" }
    ];

    return (
        <div className="linkGroup">
            <h3 className="linkTitle">Connect with us</h3>
            <div className="socialIcons">
                {socialIcons.map((icon, index) => (
                    <img
                        key={index}
                        loading="lazy"
                        src={icon.src}
                        alt={icon.alt}
                        className="socialIcon"
                    />
                ))}
            </div>
        </div>
    );
};

export default SocialLinks;