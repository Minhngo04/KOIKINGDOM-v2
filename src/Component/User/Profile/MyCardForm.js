import React from 'react';
import './mycardform.scss';
import { IoAdd, IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

const MyCardForm = ({
    tourImage,
    tourName,
    startDate,
    endDate,
    location,
    price }) => {
    return (
        <>
            <div className="box">
                {/* Khối thông tin và số lượng */}
                <div className="row">
                    {/* Khối thông tin tour */}
                    <div className="tour-info">
                        {/* Hình ảnh */}
                        <img src={tourImage}
                            alt="Tour"
                        />
                        {/* Chi tiết */}
                        <div className="tour-detail">
                            <div className="tour-name">
                                {tourName}
                            </div>
                            <div className="tour-startdate">
                                Start Date: {startDate}
                            </div>
                            <div className="tour-enddate">
                                End Date: {endDate}
                            </div>
                            <div className="tour-location">
                                Departure Location: {location}
                            </div>
                        </div>
                    </div>

                    {/* Khối số lượng */}
                    <div className="count">
                        {/* Nút trừ */}
                        <div className="minus">
                            <FiMinus size={24} />
                        </div>
                        {/* Số hiển thị */}
                        <div className="number">
                            0
                        </div>
                        {/* Nút cộng */}
                        <div className="add">
                            <IoAdd size={24} />
                        </div>
                    </div>

                    {/* Giá tour */}
                    <div
                        className="tour-price"
                        style={{
                            textAlign: 'center',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#22181C',
                            flex: 1, // Chiếm 1 phần không gian
                        }}
                    >
                        $97.69
                    </div>

                    <div className="close">
                        <IoClose size={24} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCardForm;