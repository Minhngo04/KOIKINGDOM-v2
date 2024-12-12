import React from 'react';
import Sidebar from '../ProfileSidebar';
import BtnOptionKoiOrder from '../MyKoiOrder/BtnOptionKoiOrder.js'
import MyKoiOrderInfo from '../MyKoiOrder/MyKoiOrderInfo.js'

const MyKoiOrder = () => {
    return (
        <>
            <div className="profile-page">
                <main className="main-content">
                    <div className="content-grid">
                        <Sidebar />
                        <form className="mycard-form">
                            <BtnOptionKoiOrder />
                            <MyKoiOrderInfo />
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
export default MyKoiOrder;