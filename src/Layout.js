import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import BookingPage from './Component/User/Booking/BookingPage.js';
import HomePage from './Component/User/HomePage.js';
import CustomTourPage from './Component/User/Booking/CustomTourPage.js';
import OrderKoiPage from './Component/User/Booking/OrderKoi.js';
import MyProfile from './Component/User/Profile/MyProfile/Profile.js';
import MyCard from './Component/User/Profile/MyCard.js';
import MyBooking from './Component/User/Profile/MyBooking/MyBooking.js'
import MyKoiOrder from './Component/User/Profile/MyKoiOrder/MyKoiOrder.js'
import Login from './Component/User/auth/login/login.js';

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
                <Route path="myCard" element={<MyCard />} />
                <Route path="myBooking" element={<MyBooking />} />
                <Route path="myKoiOrder" element={<MyKoiOrder />} />

                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="login" element={< Login />} />
        </Routes>
    );
};

export default Layout;
