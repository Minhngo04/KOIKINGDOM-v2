import React from 'react';
import './btnoption.scss';

const BtnOption = () => {
    return (
        <>
            <div className="my-booking">My Booking</div>
            <div className="btn">
                <div className="custom-tour-btn">
                    <div className="text">Custom Tours</div>
                </div>
                <div className="paid-tour-btn">
                    <div className="text">Paid Tours</div>
                </div>
                <div className="canceled-tour-btn">
                    <div className="text">Canceled Tours</div>
                </div>
                <div className="completed-tours-btn">
                    <div className="text">Completed Tours</div>
                </div>
            </div>

        </>
    )
}

export default BtnOption;
