import React from 'react';
import TourCard from './TourCard';
import FilterSection from './FilterSection';
import CheckboxGroup from './CheckboxGroup';
import './BookingPage.scss';
import { useNavigate } from 'react-router-dom';

const tours = [
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/e898af71-51bb-48a2-924f-88771c46a004?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/eecf6bb7-4bc7-4852-acc8-5e2bff823356?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/84765edc-9a14-43b5-95b4-e8608b5364d4?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/e13c8592-850c-4061-91aa-d724f2a6e70a?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/e13c8592-850c-4061-91aa-d724f2a6e70a?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/e13c8592-850c-4061-91aa-d724f2a6e70a?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/eecf6bb7-4bc7-4852-acc8-5e2bff823356?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/84765edc-9a14-43b5-95b4-e8608b5364d4?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/e13c8592-850c-4061-91aa-d724f2a6e70a?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/e13c8592-850c-4061-91aa-d724f2a6e70a?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    },
    {
        price: 12345,
        name: "Name",
        rating: "4.0",
        duration: "4 days 3 night",
        startDate: "10-10-2024",
        endDate: "10-10-2024",
        image: "https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/e13c8592-850c-4061-91aa-d724f2a6e70a?apiKey=28ba4404306d44e793d93f465a1a0e87&",
        isBestSeller: true
    }
];


const farmOptions = ["name checkbox", "name checkbox", "name checkbox"];
const koiTypeOptions = ["name checkbox", "name checkbox", "name checkbox"];

const BookingPage = () => {
    const navigate = useNavigate();  // Hook to navigate between pages

    const handleNavigation = (type) => {
        switch (type) {
            case 'available':
                navigate('/available-tour');  // Điều hướng đến trang BookingPage
                break;
            case 'custom':
                navigate('/custom-tour');  // Điều hướng đến trang CustomTourPage
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
            <h1 className="page-title">AVAILABLE TOUR</h1>

            <div className="tour-types">
                <button className="tour-type-button" onClick={() => handleNavigation('available')}>Available Tour</button>
                <button className="tour-type-button" onClick={() => handleNavigation('custom')}>
                    Custom Tour
                </button>
                <button className="tour-type-button" onClick={() => handleNavigation('koiOrder')}>Order KOI fish</button>
            </div>

            <main className="main-content">
                <aside className="filters">
                    <div className="price-filter">
                        <h2 className="filter-title">Price Range</h2>
                        <div className="range-slider">
                            <div className="slider-track">
                                <div className="slider-handle" />
                                <div className="slider-rail" />
                                <div className="slider-handle" />
                            </div>
                            <div className="range-fields">
                                <div className="range-value">$0</div>
                                <div className="range-divider" />
                                <div className="range-value">$500</div>
                            </div>
                        </div>
                    </div>

                    <div className="date-filter">
                        <h2 className="filter-title">Date Range</h2>
                        <div className="date-input">
                            <div>From Date</div>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/28ba4404306d44e793d93f465a1a0e87/742e4ab002606cdfbe2e0050496773ca91bd8d24ad66fe1d82cf7da4a345b715?apiKey=28ba4404306d44e793d93f465a1a0e87&" alt="" className="calendar-icon" />
                        </div>
                    </div>

                    <FilterSection title="Farm">
                        <CheckboxGroup options={farmOptions} />
                    </FilterSection>

                    <FilterSection title="Koi Type">
                        <CheckboxGroup options={koiTypeOptions} />
                    </FilterSection>
                </aside>

                <section className="tour-grid">
                    {tours.map((tour, index) => (
                        <TourCard key={index} {...tour} />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default BookingPage;