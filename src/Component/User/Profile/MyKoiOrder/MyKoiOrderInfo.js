
import React from 'react';
import '../MyKoiOrder/mykoiorder.scss';

const MyKoiOrderInfo = () => {
    return (
        <>
            <div className="koi-order-form">
                {/* Khối thông tin và số lượng */}
                <div className="row">
                    {/* Khối thông tin tour */}
                    <div className="koi-order-info">
                        {/* Hình ảnh */}
                        <img src="https://via.placeholder.com/148x133"
                            alt="Tour"
                        />
                        {/* Chi tiết */}
                        <div className="koi-order-detail">
                            <div className="koi-order-name">
                                Name
                            </div>
                            <div className="koi-order-type">
                                Koi Type
                            </div>
                            <div className="koi-order-price">
                                12345$
                            </div>
                        </div>
                    </div>

                    {/* Giá tour */}
                    <div className="koi-order-box">
                        <div className="koi-order-date">24/11/2023 15:12</div>
                        <div className="showdetail">Show detail</div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default MyKoiOrderInfo;