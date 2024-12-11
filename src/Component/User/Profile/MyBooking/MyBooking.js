import React from 'react';
import Sidebar from '../ProfileSidebar';
import BtnOption from '../MyBooking/BtnOption'
import TourCustomInfo from '../MyBooking/TourCustomInfo.js'
const MyBooking = () => {
    return (
        <>
            <div className="profile-page">
                <main className="main-content">
                    <div className="content-grid">
                        <Sidebar />
                        <form className="mycard-form">
                            <BtnOption />
                            <TourCustomInfo />

                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
export default MyBooking;