import React from 'react';
import { KoiCard } from './KoiCard';
import { RangeFilter } from './RangeFilter';
import './OrderKoi.scss';
import { useNavigate } from 'react-router-dom';


const koiData = [
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        type: "Kohaku",
        weight: "1.4",
        height: "28.0",
        age: "3",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/9c3334f1-b128-4609-bdba-e01f582dca9c?apiKey=28ba4404306d44e793d93f465a1a0e87&"
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        type: "Kohaku",
        weight: "1.4",
        height: "28.0",
        age: "3",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/4a267a73-12b6-48ce-86ae-40a809625418?apiKey=28ba4404306d44e793d93f465a1a0e87&"
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        type: "Kohaku",
        weight: "1.4",
        height: "28.0",
        age: "3",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/07aaa35d-9da5-48d6-a9f8-a8e90a4edf43?apiKey=28ba4404306d44e793d93f465a1a0e87&"
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        type: "Kohaku",
        weight: "1.4",
        height: "28.0",
        age: "3",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/137e844a-7aeb-4b95-8451-d2e58d2156b3?apiKey=28ba4404306d44e793d93f465a1a0e87&"
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        type: "Kohaku",
        weight: "1.4",
        height: "28.0",
        age: "3",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/4a267a73-12b6-48ce-86ae-40a809625418?apiKey=28ba4404306d44e793d93f465a1a0e87&"
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        type: "Kohaku",
        weight: "1.4",
        height: "28.0",
        age: "3",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/07aaa35d-9da5-48d6-a9f8-a8e90a4edf43?apiKey=28ba4404306d44e793d93f465a1a0e87&"
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        type: "Kohaku",
        weight: "1.4",
        height: "28.0",
        age: "3",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/137e844a-7aeb-4b95-8451-d2e58d2156b3?apiKey=28ba4404306d44e793d93f465a1a0e87&"
    }
];

const filters = [
    { title: "Price Range", min: "$0", max: "$500" },
    { title: "Weight", min: "$0", max: "$500" },
    { title: "Height", min: "$0", max: "$500" },
    { title: "Age", min: "$0", max: "$500" }
];

export const OrderKoi = () => {

    const navigate = useNavigate();  // Hook to navigate between pages

    const handleNavigation = (type) => {
        switch (type) {
            case 'available':
                navigate('/available-tour');  // Điều hướng đến BookingPage
                break;
            case 'custom':
                navigate('/custom-tour');  // Điều hướng đến CustomTourPage
                break;
            case 'koiOrder':
                navigate('/koiOrder');  // Điều hướng đến trang CustomTourPage
                break;
            default:
                console.error('Unknown navigation type');
        }
    };

    return (
        <div className="container">

            <h1 className="page-title">ORDER KOI FISH</h1>

            <div className="tour-types">
                <button className="tour-type-button" onClick={() => handleNavigation('available')}>Available Tour</button>
                <button className="tour-type-button" onClick={() => handleNavigation('custom')}>
                    Custom Tour
                </button>
                <button className="tour-type-button" onClick={() => handleNavigation('koiOrder')}>Order KOI fish</button>
            </div>

            <main className="main-content">
                <aside className="filters">
                    {filters.map((filter, index) => (
                        <RangeFilter key={index} {...filter} />
                    ))}

                    <div className="type-filter">
                        <div className="type-header">
                            <h3>Koi Type</h3>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/28480c3c453fd93dfd69789cf506133b6f8ef6b0faa83a7c991e6c393edca241?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="type-icon" />
                        </div>
                        {['Type 1', 'Type 2', 'Type 3'].map((type, index) => (
                            <div key={index} className="type-option">
                                <input type="checkbox" id={`type-${index}`} className="checkbox" />
                                <label htmlFor={`type-${index}`}>{type}</label>
                            </div>
                        ))}
                    </div>
                </aside>

                <section className="koi-grid">
                    {koiData.map((koi, index) => (
                        <KoiCard key={index} {...koi} />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default OrderKoi;