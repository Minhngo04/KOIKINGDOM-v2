import React from 'react';
import Sidebar from './ProfileSidebar';
import MyCardForm from './MyCardForm'
import { useNavigate } from 'react-router-dom';
import './mycardform.scss';

const addToCard = [
    { tourImage: "https://via.placeholder.com/148x133", tourName: "Photography Tour", startDate: "15-11-2024", endDate: "20-11-2024", location: "Đà Lạt", price: 150.00 },
    { tourImage: "https://via.placeholder.com/148x133", tourName: "Cooking Class", startDate: "01-12-2024", endDate: "03-12-2024", location: "Hà Nội", price: 80.50 },
    { tourImage: "https://via.placeholder.com/148x133", tourName: "Adventure Trekking", startDate: "20-12-2024", endDate: "25-12-2024", location: "Sa Pa", price: 120.75 },
    { tourImage: "https://via.placeholder.com/148x133", tourName: "Adventure Trekking", startDate: "20-12-2024", endDate: "25-12-2024", location: "Sa Pa", price: 120.75 }
];

const MyCard = () => {
    return (
        <div className="profile-page">
            <main className="main-content">
                <div className="content-grid">
                    <Sidebar />
                    <form className="mycard-form">

                        {
                            addToCard.map((card, index) => (
                                <MyCardForm key={index} {...card} />
                            ))
                        }
                    </form>
                </div>
            </main>
        </div>
    )
}
export default MyCard;