import React from 'react';
import './OrderKoi.scss';

const KoiCard = ({ price, name, rating, type, weight, height, age, imageUrl }) => {
    return (
        <div className="koi-card">
            <img loading="lazy" src={imageUrl} alt={`${type} koi fish`} className="koi-image" />
            <div className="card-content">
                <div className="card-header">
                    <div className="price-info">
                        <div className="price">{price}$</div>
                        <div className="koi-name">{name}</div>
                    </div>
                    <div className="badges">
                        <div className="best-seller">Best seller</div>
                        <div className="rating-wrapper">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/b49cdc0b5e8502fbd928ffc2d2870b73e780c866191203503659b884f7c86d15?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="rating-icon" />
                            <div className="rating">{rating}</div>
                        </div>
                    </div>
                </div>
                <div className="type-wrapper">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/370a0e233fbcfee28abf7d5d12550b820bf3c508757de65a255d0a570a04eb34?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="type-icon" />
                    <div className="koi-type">{type}</div>
                </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/417ea2f1955558e086f07db810614b7e39c27b54e3a932e5d9742ce5d299b232?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="divider" />
            <div className="koi-stats">
                <div className="stat-item">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/5c80358eb07da07c7ead58928011805d0dd65eede0b004b985cb6537ed2a3f37?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="stat-icon" />
                    <div className="stat-value">{weight} kg</div>
                </div>
                <div className="stat-item">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/49404dc37435a260b08730194dd6e2d5dcd770e770dff3f64db810abf8020cde?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="stat-icon" />
                    <div className="stat-value">{height} cm</div>
                </div>
                <div className="stat-item">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/2c16ad516412911ab537d8bdf81e7be0b81737001ecf78593f285d7dd17ea076?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="stat-icon" />
                    <div className="stat-value">{age} age</div>
                </div>
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/417ea2f1955558e086f07db810614b7e39c27b54e3a932e5d9742ce5d299b232?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="divider" />
            <div className="cart-actions">
                <div className="quantity-divider" />
                <div className="quantity">0</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/37a15c274bd6a2341fc500b16c5a149796f362c58d8600c8ad995ed2a69fdde9?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="Add quantity" className="quantity-button" />
                <button className="add-to-cart">ADD TO CART</button>
            </div>
        </div>
    );
};

export default KoiCard;