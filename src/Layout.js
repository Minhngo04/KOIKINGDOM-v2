import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import BookingPage from './Component/User/Booking/BookingPage.js';
import HomePage from './Component/User/HomePage.js';
import CustomTourPage from './Component/User/Booking/CustomTourPage.js';
import OrderKoiPage from './Component/User/Booking/OrderKoi.js';
import MyProfile from './Component/User/Profile/Profile.js';
import AddToCard from './Component/User/Profile/AddToCard.js';

const NotFound = () => {
    return (
        <div className="container mt-3 alert alert-danger">
            404. Not found data with your current URL
        </div>
    );
};

const Layout = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<HomePage />} />
                <Route path="available-tour" element={<BookingPage />} />
                <Route path="custom-tour" element={<CustomTourPage />} />
                <Route path="koiOrder" element={<OrderKoiPage />} />
                <Route path="myProfile" element={<MyProfile />} />
                <Route path="myCard" element={<AddToCard />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default Layout;
