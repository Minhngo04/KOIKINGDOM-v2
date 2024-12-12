import React from 'react';
import './btnoptionkoiorder.scss';

const BtnOptionKoiOrder = () => {
    return (
        <>
            <div className="my-booking">My Koi Fish</div>
            <div className="btn">
                <div className="custom-tour-btn">
                    <div className="text">In Progress Kois</div>
                </div>
                <div className="paid-tour-btn">
                    <div className="text">On-Going Kois</div>
                </div>
                <div className="canceled-tour-btn">
                    <div className="text">Completed Kois</div>
                </div>
                <div className="completed-tours-btn">
                    <div className="text">Canceled Kois</div>
                </div>
            </div>

        </>
    )
}

export default BtnOptionKoiOrder;
